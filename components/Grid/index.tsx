import {BaseProps} from '../_base/type';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import {FC} from 'react';

interface Col {
  span?: number | 'full';
  start?: number | 'auto';
  end?: number | 'auto';
}

interface Row {
  span?: number | 'full';
  start?: number | 'auto';
  end?: number | 'auto';
}

export interface GridProps extends BaseProps {
  container?: boolean;
  item?: boolean;
  rows?: number;
  cols?: number;
  row?: Row;
  col?: Col;
  gap?: number;
}

const ROWS = [
  tw`grid-rows-1`,
  tw`grid-rows-2`,
  tw`grid-rows-3`,
  tw`grid-rows-4`,
  tw`grid-rows-5`,
  tw`grid-rows-6`,
];

const COLS = [
  tw`grid-cols-1`,
  tw`grid-cols-2`,
  tw`grid-cols-3`,
  tw`grid-cols-4`,
  tw`grid-cols-5`,
  tw`grid-cols-6`,
  tw`grid-cols-7`,
  tw`grid-cols-8`,
  tw`grid-cols-9`,
  tw`grid-cols-10`,
  tw`grid-cols-11`,
  tw`grid-cols-12`,
];

const ROW_START = [
  tw`row-start-1`,
  tw`row-start-2`,
  tw`row-start-3`,
  tw`row-start-4`,
  tw`row-start-5`,
  tw`row-start-6`,
  tw`row-start-7`,
];
const ROW_END = [
  tw`row-end-1`,
  tw`row-end-2`,
  tw`row-end-3`,
  tw`row-end-4`,
  tw`row-end-5`,
  tw`row-end-6`,
  tw`row-end-7`,
];
const ROW_SPAN = [
  tw`row-span-1`,
  tw`row-span-2`,
  tw`row-span-3`,
  tw`row-span-4`,
  tw`row-span-5`,
  tw`row-span-6`,
];

const COL_START = [
  tw`col-start-1`,
  tw`col-start-2`,
  tw`col-start-3`,
  tw`col-start-4`,
  tw`col-start-5`,
  tw`col-start-6`,
  tw`col-start-7`,
  tw`col-start-8`,
  tw`col-start-9`,
  tw`col-start-10`,
  tw`col-start-11`,
  tw`col-start-12`,
  tw`col-start-13`,
];

const COL_END = [
  tw`col-end-1`,
  tw`col-end-2`,
  tw`col-end-3`,
  tw`col-end-4`,
  tw`col-end-5`,
  tw`col-end-6`,
  tw`col-end-7`,
  tw`col-end-8`,
  tw`col-end-9`,
  tw`col-end-10`,
  tw`col-end-11`,
  tw`col-end-12`,
  tw`col-end-13`,
];

const COL_SPAN = [
  tw`col-span-1`,
  tw`col-span-2`,
  tw`col-span-3`,
  tw`col-span-4`,
  tw`col-span-5`,
  tw`col-span-6`,
  tw`col-span-7`,
  tw`col-span-8`,
  tw`col-span-9`,
  tw`col-span-10`,
  tw`col-span-11`,
  tw`col-span-12`,
];

const GAP = [
  tw`gap-0`,
  tw`gap-1`,
  tw`gap-2`,
  tw`gap-3`,
  tw`gap-4`,
  tw`gap-5`,
  tw`gap-6`,
  tw`gap-7`,
  tw`gap-8`,
  tw`gap-9`,
  tw`gap-10`,
  tw`gap-11`,
  tw`gap-12`,
];

const styledRow = (row: Row) => {
  const styles = [];
  if (row.start) {
    switch (row.start) {
      case 'auto':
        styles.push(tw`row-start-auto`);
        break;
      default:
        styles.push(ROW_START[row.start - 1]);
    }
  }
  if (row.end) {
    switch (row.end) {
      case 'auto':
        styles.push(tw`row-end-auto`);
        break;
      default:
        styles.push(ROW_END[row.end - 1]);
    }
  }
  if (row.span) {
    switch (row.span) {
      case 'full':
        styles.push(tw`row-span-full`);
        break;
      default:
        styles.push(ROW_SPAN[row.span - 1]);
    }
  }
  return styles;
};

const styledCol = (col: Col) => {
  const styles = [];
  if (col.start) {
    switch (col.start) {
      case 'auto':
        styles.push(tw`col-start-auto`);
        break;
      default:
        styles.push(COL_START[col.start - 1]);
    }
  }
  if (col.end) {
    switch (col.end) {
      case 'auto':
        styles.push(tw`col-end-auto`);
        break;
      default:
        styles.push(COL_END[col.end - 1]);
    }
  }
  if (col.span) {
    switch (col.span) {
      case 'full':
        styles.push(tw`col-span-full`);
        break;
      default:
        styles.push(COL_SPAN[col.span - 1]);
    }
  }
  return styles;
};

export const Grid: FC<GridProps> = styled.div(
  ({rows = 1, cols = 12, container = false, row, col, gap = 0}: GridProps) => [
    container && tw`grid`,
    ROWS[rows - 1],
    COLS[cols - 1],
    GAP[gap],
    row && styledRow(row),
    col && styledCol(col),
  ]
);
