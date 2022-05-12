import {Manager,Item,Navbar} from './components/index';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Manager/>} />
      <Route path="/item" element={<Item/>} />
      </Routes>
    </div>
  )
}

export default App
