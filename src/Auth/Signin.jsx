import React, { Fragment, useState, useEffect, useContext } from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Btn, H4, P } from "../AbstractElements";
import { EmailAddress, ForgotPassword, Password, RememberPassword, SignIn } from "../Constant";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import man from "../assets/images/dashboard/profile.png";
import { readContract } from '@wagmi/core'
import CustomizerContext from "../_helper/Customizer";
import OtherWay from "./OtherWay";
import { ToastContainer, toast } from "react-toastify";
import { useAccount,useDisconnect } from 'wagmi'
import { createAccount, updateData } from "../api/integrateConfig";
import { getNetwork } from '@wagmi/core'
import { ABI, BUSDABI, BUSDcontractAddress, contractAddress } from "../blockchain";
import { wagmiConfig } from "../walletConfiguration/Config";
import Swal from 'sweetalert2'
import { useContractWrite } from 'wagmi'
const Signin = ({ selected }) => {
  const { address, isConnecting, isDisconnected ,status} = useAccount(); 
  const { chain } = getNetwork();
  const [email, setEmail] = useState("test@gmail.com");
  const [balance,setBalance] = useState(0);
  const [password, setPassword] = useState("test123");
  const [togglePassword, setTogglePassword] = useState(false);
  const history = useNavigate();
  const { layoutURL } = useContext(CustomizerContext);
  const [walletAddress, setWalletAddress] = useState("");   //new line added by me

  const [value, setValue] = useState(localStorage.getItem("profileURL" || man));
  const [name, setName] = useState(localStorage.getItem("Name"));
  const {writeAsync:approve  
  } = useContractWrite({
    abi:BUSDABI,
    address:BUSDcontractAddress,
    functionName:'approve'    
  }) 
  const {writeAsync:invest  
  } = useContractWrite({
    abi:ABI,
    address:contractAddress,
    functionName:'invest'    
  }) 

  const getBalance = async () => {
    if(address){
      
      let decimals = await readContract({
        abi:BUSDABI,
        address: BUSDcontractAddress,
        functionName: 'decimals',
      })
      const result = await readContract({
        abi:BUSDABI,
        address: BUSDcontractAddress,
        functionName: 'balanceOf',
        args: [address],
      })
      setBalance(Number(result)/10**Number(decimals));      
    }
  }

  

  // useEffect(() => {
  //   localStorage.setItem("profileURL", man);
  //   localStorage.setItem("Name", "Emay Walter");
  // }, [value, name]);

  const loginAuth = async (e) => {
    e.preventDefault();
    setValue(man);
    setName("Emay Walter");
    if (email === "test@gmail.com" && password === "test123") {
      localStorage.setItem("login", JSON.stringify(true));
      history(`${process.env.PUBLIC_URL}/dashboard/default/${layoutURL}`);
      toast.success("Successfully logged in!..");
    } else {
      toast.error("You enter wrong password or username!..");
    }
  };

  const signin = async () => {
    if(!address){
      Swal.fire({
        icon:"error",
        text:"Please connect wallet"
      });      
      return;
    }

    if(!walletAddress){
      Swal.fire({
        icon:"error",
        text:"Please enter refferal address"
      })
      return;
    }

    if(Number(balance) <= 11){
      Swal.fire({
        icon:"error",
        text:'Balance should be greater then 11 USDT'
      })
    }

    try{
      const data = {        
        address : address,
        referBy : walletAddress
      }
      const response = await createAccount(data);
      if(response.data){        
        let decimals = await readContract({
          abi:BUSDABI,
          address: BUSDcontractAddress,
          functionName: 'decimals',
        })
  
        let amount = 11 * ((10) ** Number(decimals));
        console.log(amount);
        let approved = await approve({args:[contractAddress,amount],from:address})
        let invested = await invest({args:[response.data.refferAddress,response.data.uplineAddress,amount]});
        
        response = await updateData({address,referBy:walletAddress,transactionHash:invested.hash,uplineAddresses:response.data.uplineAddress,amount:11})
        console.log(response);
        localStorage.setItem("login", JSON.stringify(true));
        history(`${process.env.PUBLIC_URL}/dashboard/default/${layoutURL}`);
      }else{
        localStorage.setItem("login", JSON.stringify(true));
        history(`${process.env.PUBLIC_URL}/dashboard/default/${layoutURL}`);
      }
      
    }catch(err){
      if(err?.response?.data?.error){
        Swal.fire({
          icon:"error",
          text:err?.response?.data?.error
        })
      }else if(err.message){
        Swal.fire({
          icon:"error",
          text:err.message
        })
      }        
    }

  }

  useEffect(()=>{
    const loginFunc = async (address, walletAddress)=>{
      if(address){
        // localStorage.setItem("login", JSON.stringify(true));
        // history(`${process.env.PUBLIC_URL}/dashboard/default/${layoutURL}`);
      try{
      const userAddress = address;
      const data = {
        transactionHash : "0x6df737816d9d21d8ca8a54139af66fb08d45fe9d235e1c779d2b60c5d8035869",
        address : userAddress,
        referBy : walletAddress
      }
      const response = await createAccount(data);
      localStorage.setItem("userID" ,response.userId);
      // return response;
    }catch(error){
      console.log(`error in login auth function : ${error.message}`)
    }
      // localStorage.setItem("address" , address);
  }
    }
    if(address){
      getBalance();
    }
    // loginFunc(address, walletAddress);
  },[address])
  

  return (
    <Fragment>
      <Container fluid={true} className="p-0 login-page">
        <Row>
          <Col xs="12">
            <div className="login-card">
              <div className="login-main login-tab">
                <Form className="theme-form">
                  <H4 >{selected === "simpleLogin" ? "" : "Sign In With Wallet Login"}</H4>
                  <P>{"Enter your email & password to login"}</P>
                  {/* <FormGroup>
                    <Label className="col-form-label">{EmailAddress}</Label>
                    <Input className="form-control" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                  </FormGroup>
                  <FormGroup className="position-relative">
                    <Label className="col-form-label">{Password}</Label>
                    <div className="position-relative">
                      <Input className="form-control" type={togglePassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} value={password} />
                      <div className="show-hide" onClick={() => setTogglePassword(!togglePassword)}>
                        <span className={togglePassword ? "" : "show"}></span>
                      </div>
                    </div>
                  </FormGroup> */}
                  <FormGroup className="position-relative">
                    <Label className="col-form-label m-0 pt-0">
                      Refferal Wallet Address (Trust Wallet, Metamask)
                    </Label>
                    
                    <div className="position-relative">
                      <Input
                        className="form-control"
                        type="text"
                        name="walletAddress"
                        placeholder="Enter your refferal wallet address"
                        required
                        onChange={(event) => setWalletAddress(event.target.value)}
                      />
                    </div>
                    <small className="text-muted">Joining Amount: $11</small>
                  </FormGroup>
                  <div>
                      <p>Wallet : {status ? status == 'disconnected' ? 'Not Connected' : 'Connected' : 'Not Connected'}</p>
                      <p>Network : {chain ? chain.name : 'Not Connected'}</p>
                      <p>Registration : Available</p>
                      <p>Balance : {balance} USDT</p>
                      <p>Approved : {status ? status == 'disconnected' ? 'Not Connected' : 'Connected' : 'Not Connected'}</p>
                    </div>
                  <div className="position-relative form-group mb-0">
                    {/* <div className="checkbox">
                      <Input id="checkbox1" type="checkbox" />
                      <Label className="text-muted" for="checkbox1">
                        {RememberPassword}
                      </Label>
                    </div>

                    <Link className='link' to={`${process.env.PUBLIC_URL}/pages/authentication/forget-pwd`}>
                      {ForgotPassword}
                    </Link> */}
                    <w3m-button  style={{width:'100%'}}/>
                    <p>
                      {""}
                      </p>
                    {/* <FormGroup> */}
                      <button
                      type="button"
                      className="d-block w-100"
                      onClick={signin}
                        style={{                          
                          color: "primary",
                          type: "submit",
                        }}
                      >
                        Create Account
                      </button>
                    {/* </FormGroup>                     */}
                  </div>
                  {/* <OtherWay /> */}
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </Fragment>
  );
};

export default Signin;
