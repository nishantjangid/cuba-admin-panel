import React from 'react';
import { Col, Row } from 'reactstrap';
import Widgets1 from '../../Common/CommonWidgets/Widgets1';
import Widgets2 from '../../Common/CommonWidgets/Widgets2';
import { WidgetsData10, WidgetsData11, WidgetsData12, WidgetsData13, WidgetsData14, WidgetsData15, WidgetsData16, WidgetsData9 } from '../../../Data/DefaultDashboard';
import { useAccount } from 'wagmi'
import { buySlot } from '../../../api/integrateConfig';



const SlotActivation = () => {
    const { address} = useAccount();  
    

    const handleCLick = async (total)=>{
        const num = parseInt(total.replace('$' , ''), 10);
        // console.log(`handle click si clicked and the amount:s${num}s`)
        
        const transactionHash = "0x6df737816d9d21d8ca8a54139af66fb08d45fe9d235e1c779d2b60c5d8035869"; 

        let data = {
            userId : localStorage.getItem("userID"),   //  in order to get user id from this, user must first go to edit profile section because this is where user ID is set to localsotrage otherwise it might throw error
            address : address,
            transactionHash : transactionHash,
            slotType : num
        }
        try{
        const response = await buySlot(data);
        console.log(`response recieved from the user is ${response.message}`)
        // for (const key in response) {
        //                 if (response.hasOwnProperty(key)) {
        //                       console.log(key + ": ss :  " + response[key]);
        //                     }
        //                 }
                    }catch(error){
                        console.log(` error occurred : ${error.message}`)
                    }
        // const {userId , address, transactionHash, slotType } = req.body;
    }

    return (
        <>
            <Col xxl='auto' className='box-col-6'>
                <Row>
                {/* onClick={handleCLick(WidgetsData9.total)} */}
                    <Col title='one can purchase this slot only when he was package of $20, $30, $80' >
                        <Widgets1 data={WidgetsData9} />
                    </Col>
                    <Col title='one can purchase this slot only when he was package of $160' onClick={()=>{handleCLick(WidgetsData10.total)}}>
                        <Widgets1 data={WidgetsData10} />
                    </Col>
                    <Col title='one can purchase this slot only when he was package of $160' onClick={()=>{handleCLick(WidgetsData11.total)}}>
                        <Widgets1 data={WidgetsData11} />
                    </Col>
                    <Col title='one can purchase this slot only when he was package of $320' onClick={()=>{handleCLick(WidgetsData12.total)}}>
                        <Widgets1 data={WidgetsData12} />
                    </Col>
                </Row>
            </Col>
            <Col xxl='auto' className='box-col-6'>
                <Row>
                    <Col title='one can purchase this slot only when he was package of $320' onClick={()=>{handleCLick(WidgetsData13.total)}}>
                        <Widgets1 data={WidgetsData13} />
                    </Col>

                    <Col title='one can purchase this slot only when he was package of $640' onClick={()=>{handleCLick(WidgetsData14.total)}}>
                        <Widgets1 data={WidgetsData14} />
                    </Col>
                    <Col title='one can purchase this slot only when he was package of $1280' onClick={()=>{handleCLick(WidgetsData15.total)}}>
                        <Widgets1 data={WidgetsData15} />
                    </Col>
                    <Col title='one can purchase this slot only when he was package of $2560' onClick={()=>{handleCLick(WidgetsData16.total)}}>
                        <Widgets1 data={WidgetsData16} />
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

export default SlotActivation;
