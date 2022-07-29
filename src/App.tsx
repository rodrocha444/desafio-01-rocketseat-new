import logoTodo from './imgs/logo.svg'
import { FiArchive } from 'react-icons/fi'

import styles from './App.module.css'

import './global.css'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { Task } from './components/Task'
import { useState } from 'react'

interface Task {
  id: number;
  content: string;
  checked: boolean;
}

const initialTasks = [
  { id: 1, content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', checked: false },
  { id: 2, content: 'Duis quis eleifend eget ultrices nec orci. Integer', checked: false },
  { id: 3, content: 'Phasellus et netus et malesuada fames ac ante', checked: false }
]

export function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [textToAdd, setTextToAdd] = useState('')

  function createTask() {
    setTasks((prev) => {
      let maiorID = 0;
      prev.forEach((elem) => {
        maiorID = elem.id > maiorID ? elem.id : maiorID;
      })
      return [
        ...prev,
        { id: maiorID + 1, content: textToAdd, checked: false }
      ]
    })
    setTextToAdd('')
  }

  function checkTask(id: number) {

    setTasks(tasks.map(task => {
      if (task.id === id)
        return {
          ...task,
          checked: !task.checked,
        }
      else
        return task
    }))
  }
  function deleteTask(id: number) {
    setTasks((prev) => prev.filter(task => task.id !== id))
  }
  return (
    <>
      <header className={styles.header}>
        <img src={logoTodo} alt="Logotipo TODO" />
      </header>
      <main className={styles.container}>
        <div className={styles.searchBar}>
          <Input
            type="text"
            placeholder='Adicione uma nova tarefa'
            className={styles.input}
            value={textToAdd}
            onChange={(e) => setTextToAdd(e.target.value)}
          />
          <Button onClick={() => {
            textToAdd !== '' ? createTask() : alert('A tarefa deve ter conteudo')
          }}>
            Criar
          </Button>
        </div>

        <section className={styles.taskSection}>
          <header>
            <div>
              Tarefas Criadas <span>{tasks.length}</span>
            </div>
            <div>
              Concluídas <span>
                {tasks.reduce((prev, curr) => (curr.checked === true ? prev + 1 : prev), 0)}
                {' '} de {tasks.length}
              </span>
            </div>
          </header>
          <div className={styles.taskList}>
            {tasks.length === 0 && <div className={styles.noTaskDiv}>
              <FiArchive className={styles.icon} size={56} strokeWidth={1} color={'var(--gray-400)'}/>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>}

            {tasks.map(task => (
              <Task
                key={task.id}
                onDelete={() => deleteTask(task.id)}
                content={task.content}

                checked={task.checked}
                onCheck={() => checkTask(task.id)}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}