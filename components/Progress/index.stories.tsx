import React from 'react';
import {Progress} from './index';
import {Meta} from '@storybook/react';

export default {
  title: 'Feedback/Progress',
  component: Progress,
} as Meta;

export const Line = () => (
  <>
    <Progress percent={20} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} />
  </>
);

export const SmallLine = () => (
  <>
    <div style={{width: 70}}>
      <Progress percent={30} size="small" />
      <Progress percent={50} size="small" status="active" />
      <Progress percent={70} size="small" status="exception" />
      <Progress percent={100} size="small" />
    </div>
  </>
);

export const Circle = () => (
  <>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} />
  </>
);

export const SmallCircle = () => (
  <>
    <Progress type="circle" percent={30} width={80} />
    <Progress type="circle" percent={70} width={80} status="exception" />
    <Progress type="circle" percent={100} width={80} />
  </>
);

// export const DynamicLine = () => {

// };

// export const DaynamicCircle = () => {

// };

// export const Format = () => (
//   <>
//     <Progress type='circle' percent={75} format={percent => `${percent} Days`} />
//     <Progress type='circle' percent={100} format={() => 'Done'} />
//   </>
// );

// export const Dashbord = () => (
//   <>
//     <Progress type='dashboard' percent={75} />
//     <Progress type='dashboard' percent={75} gapDegree={30} />
//   </>
// );

// export const StrokeLinecap = () => (
//   <>
//     <Progress strokeLinecap='square' percent={75} />
//     <Progress strokeLinecap='square' type='circle' percent={75} />
//     <Progress strokeLinecap='square' type='dashboard' percent={75} />
//   </>
// );

export const Steps = () => (
  <>
    <Progress percent={50} steps={3} />
    <br />
    <Progress percent={30} steps={5} />
    <br />
    <Progress percent={100} steps={5} size="small" strokeColor="#52c41a" />
  </>
);

// export const LinearGradient = () => (
//   <>
//     <Progress
//       strokeColor={{
//         '0%': '#108ee9',
//         '100%': '#87d068',
//       }}
//       percent={99.9}
//     />
//     <Progress
//       strokeColor={{
//         from: '#108ee9',
//         to: '#87d068',
//       }}
//       percent={99.9}
//       status='active'
//     />
//     <Progress
//       type='circle'
//       strokeColor={{
//         '0%': '#108ee9',
//         '100%': '#87d068',
//       }}
//       percent={90}
//     />
//     <Progress
//       type='circle'
//       strokeColor={{
//         '0%': '#108ee9',
//         '100%': '#87d068',
//       }}
//       percent={100}
//     />
//   </>
// );
