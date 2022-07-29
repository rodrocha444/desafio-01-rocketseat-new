import { ButtonHTMLAttributes } from "react";

import styles from './Button.module.css';

import plusImg from '../imgs/plus.svg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export function Button(props: ButtonProps) {
  return (
    <button className={styles.button} {...props}>
      {props.children}
      <img src={plusImg} alt="Plus Image" />
    </button>
  )
}