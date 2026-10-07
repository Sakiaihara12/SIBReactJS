import { Outlet } from 'react-router-dom'
import NavbarComponent from '../Elements/navbar'
import Footer from '../Elements/footer'
import ScrollToTop from '../Elements/ScrollToTop'

// Layout route: navbar & footer dipakai semua halaman, konten halaman muncul di <Outlet />
function MainLayout() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <ScrollToTop />
      <NavbarComponent />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
