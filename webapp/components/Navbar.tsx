import styles from './Navbar.module.css'

function Navbar({ page }: { page: number }) {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.title}>Krypton</div>

        <div className={styles.topnavRight}>
          <div>
            <a href="/" className={page === 1 ? styles.active : ''}>Home</a>
          </div>
          <div>
            <a href="/prediction" className={page === 2 ? styles.active : ''}>Prediction</a>
          </div>
          <div>
            <a href="/iptracking" className={page === 3 ? styles.active : ''}>IP Tracking</a>
          </div>
          <div>
            <a href="/history" className={page === 4 ? styles.active : ''}>History</a>
          </div>
          <div>
            <a href="/network_analysis" className={page === 5 ? styles.active : ''}>Network Analysis</a>
          </div>
          <div>
            <button className={styles.login}>Login</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
