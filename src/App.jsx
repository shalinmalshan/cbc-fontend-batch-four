import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminPage from './pages/adminPage'
import LoginPage from './pages/loginPage'
import Testing from './pages/testing'
import { Toaster } from 'react-hot-toast'
import RegisterPage from './pages/client/registerPage'

function App() {

  return (
    <BrowserRouter>
    <Toaster position='top-right'/>
    <Routes path="">
      
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/admin/*' element={<AdminPage/>}/>
      <Route path='/testing' element={<Testing/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/' element={<h1>Home</h1>}/>
      <Route path='/*' element={<h1>ERROR 404 NOT FOUNDED </h1>}/>
    </Routes>

    </BrowserRouter>
     
  )
}

export default App
