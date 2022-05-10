import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListVolunteerComponent from './components /ListVolunteerComponent'
import HeaderComponent from './components /HeaderComponent'
import FooterComponent from './components /FooterComponent'

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListVolunteerComponent />} />
            <Route path="/volunteers" element={<ListVolunteerComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  )
}

export default App
