import styles from './Navbar.module.css'
import { useAtom } from 'jotai';
import { userAtom } from '@/atoms/user'

function Navbar({ page }: { page: number }) {
  const [_, setUser] = useAtom(userAtom);

  function handleClick() {
    localStorage.removeItem('user');
    setUser(null);
  }

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.title}>Krypton</div>

        <div className={styles.topnavRight}>
          <div>
            <a href="/" className={page === 1 ? styles.active : styles.inactive}>Home</a>
          </div>
          <div>
            <a href="/keylog" className={page === 2 ? styles.active : styles.inactive}>Keylog</a>
          </div>
          <div>
            <a href="/prediction" className={page === 3 ? styles.active : styles.inactive}>Prediction</a>
          </div>
          <div style={{ color: "black" }}>
            <a href="/iptracking" className={page === 4 ? styles.active : styles.inactive}>IP Tracking</a>
          </div>
          <div>
            <a href="/history" className={page === 5 ? styles.active : styles.inactive}>Transaction History</a>
          </div>
          <div>
            <a href="/network_analysis" className={page === 6 ? styles.active : styles.inactive}>Network Analysis</a>
          </div>
          <div>
            <button className={styles.login} onClick={handleClick}>LogOut</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
