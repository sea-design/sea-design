import * as React from 'react';
import styles from './index.module.css';

interface Props {
  text: string;
}

export const Button = ({ text }: Props) => <div className={styles.test}>Example Component: {text}</div>;
