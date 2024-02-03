import styles from './page.module.css'
import Navbar from '@/components/Navbar';

function History() {
  return (
    <div>
      <Navbar page={4} />
      <div className="content">
        <h1>History</h1>
        <p>History page content</p>
      </div>
    </div>
  )
}

export default History;
