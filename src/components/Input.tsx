import { InputHTMLAttributes } from "react";

import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export function Input(props: InputProps) {
  return (
    <input {...props} className={`${props.className} + ${styles.input}`} />
  )
}