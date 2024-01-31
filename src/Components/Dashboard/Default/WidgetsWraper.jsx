import React from 'react';
import { Col, Row } from 'reactstrap';
import { Widgets2Data, Widgets2Data2, WidgetsData, WidgetsData17, WidgetsData18, WidgetsData2, WidgetsData3, WidgetsData4, WidgetsData5, WidgetsData6, WidgetsData7, WidgetsData8 } from '../../../Data/DefaultDashboard';
import Widgets1 from '../../Common/CommonWidgets/Widgets1';
import Widgets2 from '../../Common/CommonWidgets/Widgets2';
import { useAccount } from 'wagmi'
import { buyPackage } from '../../../api/integrateConfig';

const WidgetsWrapper = () => {
  const { address} = useAccount(); 

  const handleClick = async (total)=>{
    console.log("this is the function where you have to get buy package")
    console.log(`the total is : ${total}`)
    // const {userId , address, transactionHash, packageType } = req.body;
    const num = parseInt(total.replace('$' , ''), 10);
    const transactionHash = "0x6df737816d9d21d8ca8a54139af66fb08d45fe9d235e1c779d2b60c5d8035869"; 
    let data = {
      userId : localStorage.getItem("userID"),   //  in order to get user id from this, user must first go to edit profile section because this is where user ID is set to localsotrage otherwise it might throw error
      address : address,
      transactionHash : transactionHash,
      packageType : num
  }
  try{
    const response = await buyPackage(data);
    console.log(response.message);
  }catch(error){
    console.log(`error in buying package from the , data sent from the frontend : ${error.message}`)
  }
  }

  return (
    <>
      <Col xxl='auto'  className='box-col-6'>
        <Row>
          <Col  onClick={()=>{handleClick(WidgetsData.total)}} >
            <Widgets1 data={WidgetsData} />
          </Col>
          <Col onClick={()=>{handleClick(WidgetsData2.total)}} >
            <Widgets1 data={WidgetsData2} />
          </Col>
          <Col onClick={()=>{handleClick(WidgetsData3.total)}} >
            <Widgets1 data={WidgetsData3} />
          </Col>
          <Col onClick={()=>{handleClick(WidgetsData4.total)}} >
            <Widgets1 data={WidgetsData4} />
          </Col>
        </Row>
      </Col>
      <Col xxl='auto'  className='box-col-6'>
        <Row>
          <Col onClick={()=>{handleClick(WidgetsData5.total)}} >
            <Widgets1 data={WidgetsData5} />
          </Col>
         
          <Col onClick={()=>{handleClick(WidgetsData6.total)}} >
            <Widgets1 data={WidgetsData6} />
          </Col>
          <Col onClick={()=>{handleClick(WidgetsData7.total)}} >
            <Widgets1 data={WidgetsData7} />
          </Col>
          <Col onClick={()=>{handleClick(WidgetsData8.total)}} >
            <Widgets1 data={WidgetsData8} />
          </Col>
        </Row>
      </Col>
      <Col xxl='auto'  className='box-col-6'>
        <Row>
          <Col onClick={()=>{handleClick(WidgetsData17.total)}} >
            <Widgets1 data={WidgetsData17} />
          </Col>
         
          <Col onClick={()=>{handleClick(WidgetsData18.total)}} >
            <Widgets1 data={WidgetsData18} />
          </Col>

        </Row>
      </Col>
      {/* <Col xxl='auto'   className='box-col-6'>
        <Row>
          <Col x xl='6' className='box-col-12'>
            <Widgets2 data={Widgets2Data} />
          </Col>
          <Col x xl='6' className='box-col-12'>
            <Widgets2 chartClass='profit-chart ' data={Widgets2Data2} />
          </Col>
        </Row>
      </Col> */}
    </>
  );
};

export default WidgetsWrapper;
