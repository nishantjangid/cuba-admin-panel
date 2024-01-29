import React, { Fragment, useEffect, useState } from "react";
import { Btn, H4 } from "../../../../AbstractElements";
import { useForm } from "react-hook-form";
import './EditProfile.css'
import { Row, Col, CardHeader, CardBody, CardFooter, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { EditProfile, Company, Username, UsersCountryMenu, AboutMe, UpdateProfile, FirstName, LastName, Address, EmailAddress, PostalCode, Country, City } from '../../../../Constant';
import Web3 from 'web3'
import { getUserDetails } from "../../../../api/integrateConfig";


const EditMyProfile = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isEditMode, setIsEditMode] = useState(false);
    const [userId , setUserId] = useState();
    const [email, setEmail] = useState('');
    const [address, setaddress] = useState('');
    const [joininDate, setJoiningDate] = useState('');
    const [photo, setPhoto] = useState('');
    const [ userName, setUserName] = useState('');

    const onEditSubmit = (data) => {
        alert(data)
    }


    const toggleEditMode = () => {
        setIsEditMode(!isEditMode);
    }

    const web3 = new Web3(window.ethereum);

    useEffect(()=>{
        const fetchUserDetails = async()=>{
                await window.ethereum.request({ method : 'eth_requestAccounts'});
                // console.log(`tbh local storage address is :${userAddress}`)
                const userAddress = await web3.eth.getCoinbase();
                const data = {address : userAddress}
                const response = await getUserDetails(data);
                console.log(response)
        }
        fetchUserDetails();
    }, [])

    return (
        <Fragment>
            <Form className="card" onSubmit={handleSubmit(onEditSubmit)}>
                <CardHeader>
                    <H4 attrH4={{ className: "card-title mb-0" }}>{EditProfile}</H4>
                    <div className="card-options">
                        <a className="card-options-collapse" href="#javascript">
                            <i className="fe fe-chevron-up"></i>
                        </a>
                        <a className="card-options-remove" href="#javascript">
                            <i className="fe fe-x"></i>
                        </a>
                    </div>
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col sm="6" md="6">
                            <FormGroup> <Label className="form-label" style={{ color: '#BEBFC2' }}>{Username}</Label>
                                <Input style={{ color: '#BEBFC2' }} className="form-control" type="text" placeholder="Username" {...register("Username", { required: true })} /><span style={{ color: "red" }}>{errors.Username && 'Username is required'} </span>
                            </FormGroup>
                        </Col>


                        <Col sm="6" md="6">
                            <FormGroup><Label className="form-label" style={{ color: '#BEBFC2' }}>
                                {/* {EmailAddress} */}
                                User ID
                            </Label>
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="User ID"
                                    {...register("EmailAddress", { required: true })}
                                />
                                <span style={{ color: "red" }}>{errors.EmailAddress && ' User ID is required'} </span>
                            </FormGroup>
                        </Col>

                        <Col sm="6" md="6">
                            <FormGroup className="mb-3"><Label className="form-label" style={{ color: '#BEBFC2' }}>
                                {/* {Company} */}
                                Photo
                            </Label>
                                <Input className="form-control" type="file" placeholder="Company" {...register("company", { required: true })} /><span style={{ color: "red" }}>{errors.company && 'Photo is required'} </span>
                            </FormGroup>
                        </Col>

                        <Col sm="6" md="6">


                            <FormGroup><Label style={{ color: '#BEBFC2' }} className="form-label">
                                {/* {LastName} */}
                                Sponser ID
                            </Label>
                                <Input className="form-control" type="text" placeholder="Sponser ID" {...register("LastName", { required: true })} /><span style={{ color: "red" }}>{errors.LastName && 'Sponser ID is required'} </span>
                            </FormGroup>
                        </Col>

                        {/* USer name */}
                        {/* <Col sm="6" md="6">


                            <FormGroup><Label style={{ color: '#BEBFC2' }} className="form-label">
                                Sponser Name
                            </Label>
                                <Input className="form-control" type="text" placeholder="Sponser Name" {...register("Address", { required: true })} /><span style={{ color: "red" }}>{errors.Address && 'Sponser Name is required'} </span>
                            </FormGroup>
                        </Col> */}
                        <Col sm="6" md="6">
                            {/*  */}

                            <FormGroup><Label className="form-label" style={{ color: '#BEBFC2' }}>
                                {/* {City} */}
                                Email ID
                            </Label>
                                <Input className="form-control" type="Email ID" placeholder="Email ID" {...register("City", { required: true })} /><span style={{ color: "red" }}>{errors.City && 'Email ID is required'} </span>
                            </FormGroup>
                        </Col>
                        <Col sm="6" md="6">


                            <FormGroup><Label style={{ color: '#BEBFC2' }} className="form-label">
                                {/* {Address} */}
                                Mobile No.
                            </Label>
                                <Input className="form-control" type="text" placeholder="Sponser Name" {...register("Address", { required: true })} /><span style={{ color: "red" }}>{errors.Address && 'Mobile No. is required'} </span>
                            </FormGroup>
                        </Col>
                        <Col sm="6" md="6">


                            <FormGroup><Label style={{ color: '#BEBFC2' }} className="form-label">
                                {/* {Address} */}
                                Address
                            </Label>
                                <Input className="form-control" type="Email" placeholder="Address" {...register("Address", { required: true })} /><span style={{ color: "red" }}>{errors.Address && 'Address is required'} </span>
                            </FormGroup>
                        </Col>

                        <Col sm="6" md="6">
                            <FormGroup><Label style={{ color: '#BEBFC2' }} className="form-label">
                                {/* {FirstName} */}
                                Joining Date
                            </Label>
                                <Input className="form-control" type="text" placeholder="Joining Date" {...register("FirstName", { required: true })} /><span style={{ color: "red" }}>{errors.FirstName && 'Jioning Date is required'} </span>
                            </FormGroup>
                        </Col>

                        {/* <Col sm="6" md="4">
                            <FormGroup><Label className="form-label" style={{color:'#BEBFC2'}}>{City}</Label>
                                <Input className="form-control" type="text" placeholder="City" {...register("City", { required: true })} /><span style={{ color: "red" }}>{errors.City && 'City is required'} </span>
                            </FormGroup>
                        </Col> */}
                        {/* <Col sm="6" md="3">
                            <FormGroup><Label className="form-label">{PostalCode}</Label>
                                <Input className="form-control" type="number" placeholder="ZIP Code" />
                            </FormGroup>
                        </Col>
                        <Col md="5">
                            <FormGroup><Label className="form-label">{Country}</Label>
                                <Input type="select" name="select" className="form-control btn-square">
                                    {UsersCountryMenu.map((items, i) =>
                                        <option key={i}>{items}</option>
                                    )}
                                </Input>
                            </FormGroup>
                        </Col> */}
                        {/* <Col md="12">
                            <div><Label className="form-label" style={{color:'#BEBFC2'}}>{AboutMe}</Label>
                                <Input type="textarea" className="form-control" rows="5" placeholder="Enter About your description" />
                            </div>
                        </Col> */}
                    </Row>
                </CardBody>
                <CardFooter className="text-end" style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                    <div className="Edit-button" onClick={toggleEditMode}>
                        {isEditMode ? 'Cancel' : 'Edit'}
                    </div>
                    <Button attrBtn={{ color: "primary", type: "submit" }}>
                        {/* {UpdateProfile} */}
                        Submit
                    </Button>
                </CardFooter>
            </Form>
        </Fragment>
    )
}
export default EditMyProfile