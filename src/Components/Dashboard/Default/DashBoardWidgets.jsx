import React from 'react';
import { Col, Row } from 'reactstrap';
import Widgets1 from '../../Common/CommonWidgets/Widgets1';
import Widgets2 from '../../Common/CommonWidgets/Widgets2';
import { WidgetsData10, WidgetsData11, WidgetsData12, WidgetsData13, WidgetsData14, WidgetsData15, WidgetsData16, WidgetsData9 } from '../../../Data/DefaultDashboard';


const SlotActivation = () => {
    return (
        <>
            <Col xxl='auto' className='box-col-6'>
                <Row>
                    <Col title='one can purchase this slot only when he was package of $20, $30, $80'>
                        <Widgets1 data={WidgetsData9} />
                    </Col>
                    <Col title='one can purchase this slot only when he was package of $160'>
                        <Widgets1 data={WidgetsData10} />
                    </Col>
                    <Col title='one can purchase this slot only when he was package of $160'>
                        <Widgets1 data={WidgetsData11} />
                    </Col>
                    <Col title='one can purchase this slot only when he was package of $320'>
                        <Widgets1 data={WidgetsData12} />
                    </Col>
                </Row>
            </Col>
            <Col xxl='auto' className='box-col-6'>
                <Row>
                    <Col title='one can purchase this slot only when he was package of $320'>
                        <Widgets1 data={WidgetsData13} />
                    </Col>

                    <Col title='one can purchase this slot only when he was package of $640'>
                        <Widgets1 data={WidgetsData14} />
                    </Col>
                    <Col title='one can purchase this slot only when he was package of $1280'>
                        <Widgets1 data={WidgetsData15} />
                    </Col>
                    <Col title='one can purchase this slot only when he was package of $2560'>
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
