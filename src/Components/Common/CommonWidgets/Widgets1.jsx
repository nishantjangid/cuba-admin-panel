import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { H4 } from '../../../AbstractElements';
import SvgIcon from '../Component/SvgIcon';

// const hovertitledata =[
//   {
//     title:'one can purchase this slot only when he was package of $20, $30, $80'
//   }
// ]

const Widgets1 = ({ data }) => {
  return (
    <Card className='widget-1'>
      <CardBody>
        <div className='widget-content' >
          <div className={`widget-round ${data.color}`}>
            <div className='bg-round'>
              <SvgIcon className='svg-fill' iconId={`${data.icon}`} />
              <SvgIcon className='half-circle svg-fill' iconId='halfcircle' />
            </div>
          </div>
          <div style={{display:'flex', flexDirection:'column', alignItems:'center',gap:'3px'}}>
            <H4>{data.total}</H4>
            <span className='f-light'>{data.title}</span>
          </div>
        </div>
        <div className={`font-${data.color} f-w-500`}>
          <i className={`icon-arrow-${data.gros < 50 ? 'down' : 'up'} icon-rotate me-1`} />
          <span>{`${data.gros < 50 ? '-' : '+'}${data.gros}%`}</span>
        </div>
      </CardBody>
    </Card>
  );
};

export default Widgets1;
