import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { use, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './redux/slices/auth.slice'
import { getCurrentUserApi } from './services/api'
import Loading from './componets/Loading'

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const data = await getCurrentUserApi(); 
        if (data) {
          dispatch(login(data));
        }

      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
    };
    getCurrentUser();
  }, []);

  if(loading){
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
