import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Book from '../pages/Book'
import Team from '../pages/Team'
import TeamDetail from '../pages/TeamDetail'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

function AppRoutes() {
  return (
    <Routes>
      {/* Layout route: navbar & footer dipakai semua halaman */}
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="book" element={<Book />} />

        {/* Route prefix + nested route: /team dan /team/:memberId */}
        <Route path="team">
          <Route index element={<Team />} />
          <Route path=":memberId" element={<TeamDetail />} />
        </Route>

        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
