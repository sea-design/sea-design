import * as React from 'react';
import styles from './index.module.scss';

interface Props {
  text: string;
}

export const Avatar = ({ text }: Props) => <div className={styles.test}>Example Component: {text}</div>;
