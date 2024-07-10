import { Route, Routes } from 'react-router';
import './App.css';
import styles from './css/style.module.css';
import SignUp from './components/SignUp';
import { Link } from 'react-router-dom';
import Login from './components/Login';

function App() {

  return (
    <>
    <Routes>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>

    {localStorage.getItem("id")? 
    
    <div className={styles.wraper}>
      <h1>Dashboard</h1>
    </div>
    
    :
    <div className={styles.wraper}>
      <div className={styles.mainbox}>
        <div className={styles.headbox}>
        <h1>Well Come</h1>
        <div className={styles.loginBox}>
            <Link to="/login">
                <button>Log In</button>
            </Link>
            <Link to="/signup">
                <button>Sign Up</button>
            </Link>
        </div>
        </div>
      </div>
    </div>
    
  }

    

    </>
  );
}

export default App;
