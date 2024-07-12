import { useSelector } from "react-redux"
import { countSelector, incremented, decremented } from "../../store/slices/counterSlice"
import { useAppDispatch } from "../../store/hook"
import { useCallback } from "react"

function Counter() {
  const count = useSelector(countSelector)
  const dispatch = useAppDispatch()

  const increment = useCallback(() => dispatch(incremented()), [dispatch])
  const decrement = useCallback(() => dispatch(decremented()), [dispatch])
  return (
    <>
      <div>Counter: {count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default Counter
