import Image from 'next/image'
import logo from '../../../public/images/logo.svg'
import Link from 'next/link'
import styles from './navbar.module.scss'
import { Cars } from '../cars'
import ClearIcon from '@mui/icons-material/Clear'
import { useState } from 'react'

const Navbar = () => {
  const [classs, setClasss] = useState(false)

  const openMenu = () => {
    setClasss(true)
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = '20px'
  }
  const closeMenu = () => {
    setClasss(false)
    document.body.style.overflow = 'auto'
    document.body.style.paddingRight = '0'
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div>
          <Image src={logo} alt="This is Logo" className={styles.logo} />
        </div>
        <ul className={styles.navList}>
          <li className={styles.navLink}>
            <Link href="/">Model S</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/">Model 3</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/">Model X</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/">Model Y</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/">Solar Roof</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/">Solar Panels</Link>
          </li>
        </ul>
        <ul className={styles.navList}>
          <li className={styles.navLink}>
            <Link href="/">Shop</Link>
          </li>
          <li className={styles.navLink}>
            <Link href="/">Account</Link>
          </li>
          <li className={styles.navLink} onClick={openMenu}>
            Menu
          </li>
        </ul>
      </nav>
      <div className={classs ? 'menu active' : 'menu'}>
        <ClearIcon className="iconx" fontSize="large" onClick={closeMenu} />
        <ul className="nav-list">
          {Cars.map((car) => {
            return (
              <li className="nav-link">
                <a href="">{car.name}</a>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={classs ? 'bg activebg' : 'bg'}></div>
    </>
  )
}

export default Navbar
