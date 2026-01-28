import { Outlet } from 'react-router'
import { Navbar } from '../components/Navbar/Navbar'
import style from './MainLayout.module.scss'

export function MainLayout() {
  const links = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'posters', path: '/posters' },
    { name: 'contact', path: '/contact' },
    { name: 'login', path: '/login' },
  ]

  return (
    <section className={style.pageContainer}>
      <Navbar logoNav='WALLYWOOD' linksNav={links} />
      <Outlet />
      <footer>Footer</footer>
    </section>
  )
}
