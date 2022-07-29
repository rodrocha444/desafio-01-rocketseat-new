import logoTodo from './imgs/logo.svg'

import styles from './App.module.css'

import './global.css'
import { Input } from './components/Input'
import { Button } from './components/Button'

export function App() {
  return (
    <>
      <header className={styles.header}>
        <img src={logoTodo} alt="Logotipo TODO" />
      </header>
      <main>
        <Input type='text' placeholder='Adicione uma nova tarefa'/>
        <Button>
          Criar
        </Button>
      </main>
    </>
  )
}