import { NavLink } from 'react-router'
import style from './Navbar.module.scss'

interface NavbarProps {
  logoNav: string
  linksNav: Array<{ name: string; path: string }>
}

export function Navbar(props: NavbarProps) {
  const { logoNav, linksNav } = props

  return (
    <nav className={style.navbarStyle}>
      <h3>{logoNav}</h3>
      <ul>
        {linksNav.map((item) => {
          return (
            <li key={item.path}>
              <NavLink to={item.path}>{item.name.toUpperCase()}</NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
