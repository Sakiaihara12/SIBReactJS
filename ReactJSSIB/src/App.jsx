import { Routes, Route } from 'react-router-dom'
import NavbarComponent from './Elements/navbar'
import Footer from './Elements/footer'
import Home from './pages/Home'
import Team from './pages/Team'
import Contact from './pages/Contact'
import ScrollToTop from './Elements/ScrollToTop'

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <ScrollToTop />
      <NavbarComponent />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
