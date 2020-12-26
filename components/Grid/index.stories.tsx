import {Story, Meta} from '@storybook/react/types-6-0';
import 'twin.macro';

import {Grid, GridProps} from './index';

export default {
  title: 'Basic/Grid',
  component: Grid,
} as Meta;

const containerStyle = {height: '400px', background: '#eee'};

export const Default = (args: GridProps) => (
  <Grid container>
    <Grid item>
      <div tw="bg-blue-500 text-white flex items-center justify-center font-mono rounded w-full h-full">
        default
      </div>
    </Grid>
  </Grid>
);

export const ItemRowCol = (args: GridProps) => (
  <Grid container rows={6} style={containerStyle}>
    <Grid item col={{start: 3, end: 6}} row={{start: 3, end: 5}} {...args}>
      <div tw="bg-blue-500 text-white flex items-center justify-center font-mono rounded w-full h-full">
        col: 3-6 row: 3-5
      </div>
    </Grid>
  </Grid>
);

export const ColSpan4 = (args: GridProps) => (
  <Grid container rows={6} style={containerStyle}>
    <Grid item col={{span: 4}} {...args}>
      <div tw="bg-blue-500 text-white flex items-center justify-center font-mono rounded w-full h-full">
        col-span-4
      </div>
    </Grid>
  </Grid>
);

export const RowSpan4 = (args: GridProps) => (
  <Grid container rows={6} style={containerStyle}>
    <Grid item row={{span: 4}} {...args}>
      <div tw="bg-blue-500 text-white flex items-center justify-center font-mono rounded w-full h-full">
        row-span-4
      </div>
    </Grid>
  </Grid>
);

export const ColStart4 = (args: GridProps) => (
  <Grid container rows={6} style={containerStyle}>
    <Grid item col={{start: 4}} {...args}>
      <div tw="bg-blue-500 text-white flex items-center justify-center font-mono rounded w-full h-full">
        col-start-4
      </div>
    </Grid>
  </Grid>
);

export const RowStart4 = (args: GridProps) => (
  <Grid container rows={6} style={containerStyle}>
    <Grid item row={{start: 4}} {...args}>
      <div tw="bg-blue-500 text-white flex items-center justify-center font-mono rounded w-full h-full">
        row-start-4
      </div>
    </Grid>
  </Grid>
);

export const ColFull = (args: GridProps) => (
  <Grid container rows={6} style={containerStyle}>
    <Grid item col={{span: 'full'}} {...args}>
      <div tw="bg-blue-500 text-white flex items-center justify-center font-mono rounded w-full h-full">
        col-start-4
      </div>
    </Grid>
  </Grid>
);

export const RowFull = (args: GridProps) => (
  <Grid container rows={6} style={containerStyle}>
    <Grid item row={{span: 'full'}} {...args}>
      <div tw="bg-blue-500 text-white flex items-center justify-center font-mono rounded w-full h-full">
        row-start-4
      </div>
    </Grid>
  </Grid>
);

export const MultiItems = () => (
  <Grid container rows={6} style={containerStyle}>
    <Grid item>
      <div tw="bg-blue-500 text-white flex items-center justify-center font-mono rounded w-full h-full">
        1
      </div>
    </Grid>
    <Grid item>
      <div tw="bg-blue-500 text-white flex items-center justify-center font-mono rounded w-full h-full">
        2
      </div>
    </Grid>
    <Grid item>
      <div tw="bg-blue-500 text-white flex items-center justify-center font-mono rounded w-full h-full">
        3
      </div>
    </Grid>
    <Grid item col={{start: 5}}>
      <div tw="bg-blue-500 text-white flex items-center justify-center font-mono rounded w-full h-full">
        5
      </div>
    </Grid>
    <Grid item col={{start: 7, end: 10}}>
      <div tw="bg-blue-500 text-white flex items-center justify-center font-mono rounded w-full h-full">
        7-10
      </div>
    </Grid>
    <Grid item col={{span: 2}}>
      <div tw="bg-blue-500 text-white flex items-center justify-center font-mono rounded w-full h-full">
        span 2
      </div>
    </Grid>
  </Grid>
);

export const Gap = (args: GridProps) => (
  <Grid container rows={6} gap={3} style={containerStyle} {...args}>
    <Grid item>
      <div tw="bg-blue-500 text-white flex items-center justify-center font-mono rounded w-full h-full">
        1
      </div>
    </Grid>
    <Grid item>
      <div tw="bg-blue-500 text-white flex items-center justify-center font-mono rounded w-full h-full">
        2
      </div>
    </Grid>
    <Grid item>
      <div tw="bg-blue-500 text-white flex items-center justify-center font-mono rounded w-full h-full">
        3
      </div>
    </Grid>
  </Grid>
);
