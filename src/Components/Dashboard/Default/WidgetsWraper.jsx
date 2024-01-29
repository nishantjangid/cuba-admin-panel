import React from 'react';
import { Col, Row } from 'reactstrap';
import { Widgets2Data, Widgets2Data2, WidgetsData, WidgetsData17, WidgetsData18, WidgetsData2, WidgetsData3, WidgetsData4, WidgetsData5, WidgetsData6, WidgetsData7, WidgetsData8 } from '../../../Data/DefaultDashboard';
import Widgets1 from '../../Common/CommonWidgets/Widgets1';
import Widgets2 from '../../Common/CommonWidgets/Widgets2';

const WidgetsWrapper = () => {
  return (
    <>
      <Col xxl='auto'  className='box-col-6'>
        <Row>
          <Col  >
            <Widgets1 data={WidgetsData} />
          </Col>
          <Col >
            <Widgets1 data={WidgetsData2} />
          </Col>
          <Col >
            <Widgets1 data={WidgetsData3} />
          </Col>
          <Col >
            <Widgets1 data={WidgetsData4} />
          </Col>
        </Row>
      </Col>
      <Col xxl='auto'  className='box-col-6'>
        <Row>
          <Col >
            <Widgets1 data={WidgetsData5} />
          </Col>
         
          <Col >
            <Widgets1 data={WidgetsData6} />
          </Col>
          <Col >
            <Widgets1 data={WidgetsData7} />
          </Col>
          <Col >
            <Widgets1 data={WidgetsData8} />
          </Col>
        </Row>
      </Col>
      <Col xxl='auto'  className='box-col-6'>
        <Row>
          <Col >
            <Widgets1 data={WidgetsData17} />
          </Col>
         
          <Col >
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
