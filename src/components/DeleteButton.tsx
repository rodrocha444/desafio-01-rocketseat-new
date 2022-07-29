import { HTMLAttributes } from 'react'
import { FiTrash2 } from 'react-icons/fi'

import styles from './DeleteButton.module.css'

interface DeleteButtonProps extends HTMLAttributes<HTMLAnchorElement>{
  onClick: () => void;
}

export function DeleteButton(props: DeleteButtonProps) {
  return (
    <a className={styles.button} href='' onClick={(e) => {
      e.preventDefault()
      props.onClick()
    }}>
      <FiTrash2 className={styles.image} />
    </a>
  )
}