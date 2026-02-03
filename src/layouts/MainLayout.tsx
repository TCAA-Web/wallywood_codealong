import { Outlet } from 'react-router'
import { Navbar } from '../components/Navbar/Navbar'
import style from './MainLayout.module.scss'
import { Footer } from '../components/Footer/Footer'
import { createRef, useEffect, useState } from 'react'
import { ScrollBar } from '../components/ScrollBar/ScrollBar'

export function MainLayout() {
  // Opret en reference til et DOM element (bindes til et element nede i HTML'en)
  const containerRef = createRef<HTMLElement>()

  // State til at gemme scroll percent
  const [scrollPercent, setScrollPercent] = useState<number>(0)

  useEffect(() => {
    // Funktion der udrenger procent scrollet
    function scrollListener() {
      const scrollY = window.scrollY

      if (!containerRef.current) return
      else {
        const maxHeight = containerRef.current.getBoundingClientRect().height - window.innerHeight

        const percent = Math.round((scrollY / maxHeight) * 100)

        setScrollPercent(percent)
      }
    }

    // Bind en "scroll" eventListener til browserens vindue
    window.addEventListener('scroll', scrollListener)

    // Fjern event listener når vi "un-mounter"
    return () => window.removeEventListener('scroll', scrollListener)
  }, [containerRef])

  const links = [
    { name: 'home', path: '/' },
    { name: 'plakater', path: '/posters' },
    { name: 'om os', path: '/about' },
    { name: 'kontakt', path: '/contact' },
    { name: 'login', path: '/login' },
  ]

  return (
    <>
      {/* Her sættes ref på vores yderste container (da vi skal bruge højden af siden)*/}
      <section ref={containerRef} className={style.pageContainer}>
        <ScrollBar scrollPercent={scrollPercent} />
        <Navbar logoNav='WALLYWOOD' linksNav={links} />
        <Outlet />
        <Footer />
      </section>
    </>
  )
}
