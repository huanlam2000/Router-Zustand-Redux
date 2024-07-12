import { Provider } from "react-redux"
import store from './store/store.js'
import Counter from "./components/Counter/Counter.js"
function ReduxApp() {
  return (
    <Provider store={store}>
      <div>This is Redux APP</div>
      <Counter />
    </Provider>
  )
}

export default ReduxApp
