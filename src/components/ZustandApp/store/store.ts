import { create } from 'zustand'
import { useShallow } from 'zustand/react/shallow'
import { devtools } from 'zustand/middleware'

export type Task = {
  title: string
  state: string
}

export type DraggingTask = Omit<Task, 'state'>

interface TaskStore {
  tasks: Task[]
  draggingTask: DraggingTask | null
  actions: {
    addTask: (task: Task) => void
    updateTask?: (task: Task) => void
    deleteTask: (title: string) => void
    setDraggingTask: (task: DraggingTask | null) => void
    moveTask: (task: Task) => void
  }
}

const useTasksStore = create<TaskStore, [['zustand/devtools', never]]>(
  devtools(
    (set) => ({
      tasks: [{ title: 'Test Task', state: 'PLANNED' }],
      draggingTask: null,
      actions: {
        addTask: (task: Task) => set((state) => ({ tasks: [...state.tasks, task] }), false, 'addTask'),
        deleteTask: (title: string) =>
          set((state) => ({ tasks: state.tasks.filter((task) => task.title !== title) }), false, 'deleteTask'),
        setDraggingTask: (task: DraggingTask | null) => set(() => ({ draggingTask: task }), false, 'setDraggingTask'),
        moveTask: (task: Task) =>
          set(
            (state) => ({
              tasks: state.tasks.map((t) => (t.title === task.title ? { title: task.title, state: task.state } : t)),
            }),
            false,
            'moveTask'
          ),
      },
    }),
    { name: 'KanbanStore', trace: true }
  )
)

export const useTasks = (taskStatus: string) =>
  useTasksStore(useShallow((state) => state.tasks.filter((t) => t.state === taskStatus)))

export const useDraggingTask = () => useTasksStore((state) => state.draggingTask)

export const useTasksActions = () => useTasksStore((state) => state.actions)
