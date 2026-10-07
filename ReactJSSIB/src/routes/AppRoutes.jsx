import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Team from '../pages/Team'
import TeamDetail from '../pages/TeamDetail'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

function AppRoutes() {
  return (
    <Routes>
      {/* Layout route: tanpa path, hanya membungkus halaman di dalamnya */}
      <Route element={<MainLayout />}>
        {/* Index route: tampil di "/" */}
        <Route index element={<Home />} />

        {/* Route prefix + nested route: /team dan /team/:memberId */}
        <Route path="team">
          <Route index element={<Team />} />
          <Route path=":memberId" element={<TeamDetail />} />
        </Route>

        <Route path="contact" element={<Contact />} />

        {/* Catch-all: halaman tidak ditemukan */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
