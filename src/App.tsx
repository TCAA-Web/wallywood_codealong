import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from './pages/home/home'
import { MainLayout } from './layouts/MainLayout'
import { Posters } from './pages/posters/posters'
import { Login } from './pages/login/Login'
import { Details } from './pages/details/Details'

function App() {
  // Details siden har fået et query param på. Dette gøres med /:slug på enden af en url.
  // Navigerer vi til /details/123 vil vores slug blive sat til 123.
  // Derfor kan vi nu sætte en slug i vores NavLinks path (eks. /details/masterminds).
  // og bruge useParams hooket til at trække slug (masterminds) ud inde i detalje siden
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<div>About</div>} />
            <Route path='/posters' element={<Posters />} />
            <Route path='/details/:slug' element={<Details />} />
            <Route path='/contact' element={<div>Contact</div>} />
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
