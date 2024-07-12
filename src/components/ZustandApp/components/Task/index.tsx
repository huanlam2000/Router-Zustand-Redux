import classNames from 'classnames'
import './task.css'

import { Task as TaskProp, useTasksActions } from '../../store/store'

// interface TaskProp {
//   title: string
// }

function Task({ title, state }: TaskProp) {
  const { deleteTask, setDraggingTask } = useTasksActions()
  return (
    <div className="task" draggable onDragStart={() => setDraggingTask({ title })}>
      <p>{title}</p>
      <div className='bottom_wrapper'>
        <div className='delete_btn' onClick={() => deleteTask(title)}>Delete</div>
        <div className={classNames('status', state)}>{state}</div>
      </div>
    </div>
  )
}

export default Task
