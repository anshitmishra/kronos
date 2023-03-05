import Header from '../header'
import { Inter } from 'next/font/google'
import styles from './register.module.css'


const inter = Inter({ subsets: ['latin'] })

const Register = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <div style={{ height: "80px", background: "black" }}></div>
        <div className={styles.mainHolder}>
          <h1>Event Registration</h1>

          <div className={styles.mainHolderInput}>
            <label htmlFor="name">First Name</label>
            <input type="text" name="name" id="name" placeholder='First Name' />
          </div>
          <div className={styles.mainHolderInput}>
            <label htmlFor="name">Last Name</label>
            <input type="text" name="name" id="name" placeholder='Last Name' />
          </div>
          <div className={styles.mainHolderInput}>
            <label htmlFor="name">College Name</label>
            <input type="text" name="name" id="name" placeholder='College Name' />
          </div>
          <div className={styles.mainHolderInput}>
            <label htmlFor="name">Branch</label>
            <input type="text" name="name" id="name" placeholder='Branch' />
          </div>
          <div className={styles.mainHolderInput}>
            <label htmlFor="name">Year</label>
            <select name="name" id="name" placeholder='Year' >
              <option value="1">1st year</option>
              <option value="2">2nd year</option>
              <option value="3">3rd year</option>
              <option value="4">4th year</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register;