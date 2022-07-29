import { useState } from "react";
import { Checkbox } from "./Checkbox";
import { DeleteButton } from "./DeleteButton";

import styles from './Task.module.css'

interface TaskProps {
  onDelete: () => void;
  onCheck: () => void;
  content: string;
  checked: boolean;
}

export function Task(props: TaskProps) {
  return (
    <div className={styles.task}>
      <Checkbox checked={props.checked} onChange={props.onCheck}/>
      <span className={props.checked ? styles.contentChecked : styles.contentNotChecked}>
        {props.content}
      </span>
      <DeleteButton onClick={props.onDelete}/>
    </div>
  )
}