import Task from '../Task'
import { useDraggingTask, useTasks, useTasksActions } from '../../store/store'
import './column.css'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import TaskModal from '../TaskModal/TaskModal'
import classNames from 'classnames'
interface ColumnProps {
  state: string
}

function Column({ state }: ColumnProps) {
  const tasks = useTasks(state)
  const { addTask, setDraggingTask, moveTask } = useTasksActions()
  const draggingTask = useDraggingTask()

  const [open, setOpen] = useState(false)
  const [isCanBeDropped, setIsCanBeDropped] = useState(false)

  const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()

    moveTask({ title: draggingTask!.title, state })
    setIsCanBeDropped(false)
    setDraggingTask(null)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsCanBeDropped(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsCanBeDropped(false)
  }
  return (
    <div
      className={classNames('column', { drop: isCanBeDropped })}
      onDragOver={(e) => {
        handleDragOver(e)
      }}
      onDragLeave={(e) => handleDragLeave(e)}
      onDrop={(e) => handleOnDrop(e)}
    >
      <div className='title_wrapper'>
        <p>{state}</p>
        <button onClick={() => setOpen(true)}>Add</button>
      </div>
      {tasks.map((task) => (
        <Task
          {...task}
          key={task.title}
        />
      ))}
      {open &&
        createPortal(
          <TaskModal
            title=''
            state={state}
            customSubmit={(task) => addTask({ ...task })}
            closeModal={setOpen}
          />,
          document.getElementsByClassName('App')[0]
        )}
    </div>
  )
}

export default Column
