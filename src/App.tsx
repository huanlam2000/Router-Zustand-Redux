import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import UserDetail from './components/UserDetail/UserDetail'
import LayoutElement from './components/LayoutElement/LayoutElement'
import Other from './components/Other/Other'
import ReduxApp from './components/ReduxApp/ReduxApp'
import ZustandApp from './components/ZustandApp'
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LayoutElement />}>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/Home'
            element={<Home />}
          />
          <Route
            path='/About'
            element={<About />}
          >
            <Route
              path=':name'
              element={<UserDetail />}
            />
          </Route>
          <Route
            path='/redux'
            element={<ReduxApp />}
          />
          <Route
            path='/zustand'
            element={<ZustandApp />}
          />
        </Route>
        <Route
          path='/Other'
          element={<Other />}
        />
        <Route
          path='*'
          element={<h2>Not Found</h2>}
        />
      </Routes>
    </Router>
  )
}

export default App
