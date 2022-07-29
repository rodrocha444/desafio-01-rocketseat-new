import { InputHTMLAttributes } from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
}
export function Checkbox(props: CheckboxProps) {
  return (
    <label className={styles.container}>
      <input type="checkbox" className={styles.checkbox} {...props}/>
      <span className={styles.checkmark}></span>
    </label>
  )
}