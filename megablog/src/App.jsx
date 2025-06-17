import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login, logout} from './store/authslice'
import { Header, Footer }  from './components'
import { Outlet } from 'react-router-dom'
 
function App() {
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
  const fetchUser = async () => {
    try {
      const userData = await authService.getCurrentUser();
      if (userData) {
        dispatch(login({ userData }));
      } else {
        dispatch(logout());
      }
    } catch (error) {
      console.log("No active session:", error.message);
      dispatch(logout());
    } finally {
      setLoading(false);
    }
  };

  fetchUser();
}, []);


  return !loading ? (
    <div className='min-h-screen flex flex-wrap con content-between br-gray-400 text-xl'>
      <Header  />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null
}

export default App
