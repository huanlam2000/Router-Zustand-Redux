import { useState } from "react"
import './TaskModal.css'

interface TaskModalProps {
  title: string,
  state: string,
  customSubmit: (task: Omit<TaskModalProps, 'customSubmit' | 'closeModal'>) => void,
  closeModal: (modalState: boolean) => void
}

function TaskModal({ title, state, customSubmit, closeModal }: TaskModalProps) {
  const [taskTitle, setTaskTitle] = useState('')

  const handleSubmit = () => {
    taskTitle && customSubmit({ title: taskTitle, state })
    closeModal(false)
  }
  return (
    <div className="task_modal">
      <div className="modal_content">
        <input type="text" onChange={(e) => setTaskTitle(e.target.value)} value={title || taskTitle} />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default TaskModal
