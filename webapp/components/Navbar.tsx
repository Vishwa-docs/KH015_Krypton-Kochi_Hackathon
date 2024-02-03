import styles from './Navbar.module.css'

function Navbar({ page }: { page: number }) {
  return (
    <>
      <div className={styles.topnav}>
        <div className={styles.title}>Krypton</div>
        <div className={styles.topnavRight}>
          <a href="/home" className={page === 1 ? styles.active : ''}>Home</a>
          <a href="/prediction" className={page === 2 ? styles.active : ''}>Home</a>
          <a href="/ip-tracking" className={page === 3 ? styles.active : ''}>Home</a>
          <a href="/history" className={page === 4 ? styles.active : ''}>Home</a>
          <a href="/network-analysis" className={page === 5 ? styles.active : ''}>Network Analysis</a>
        </div>
      </div>
    </>
  )
}

export default Navbar;
