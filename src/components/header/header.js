import styles from './header.module.scss'
import { Cars } from '../cars'

const Header = () => {
  return (
    <>
      {Cars.map((car) => {
        return (
          <section
            key={car.id}
            className={styles.section}
            style={{
              background: `url(${car.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className={styles.textsArea}>
              <h3>{car.name}</h3>
              <p>
                {car.descrition}
              </p>
            </div>
            <div className={styles.buttons}>
              <div className={styles.btnMain}>
                <a href="#" className={styles.btn}>
                  custom order
                </a>
                <a href="#" className={styles.btn}>
                  existing inventory
                </a>
              </div>
              <img
                src="/images/down-arrow.svg"
                className={styles.downIcon}
                alt="down icon"
              />
            </div>
          </section>
        )
      })}
    </>
  )
}

export default Header
