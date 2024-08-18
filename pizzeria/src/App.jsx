import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbars from './components/Navbar'
import Home from './components/Home';
import Footer from './components/Footer';
import RegisterPage from './components/registrePage';
import LoginPage from './components/loginPage';

function App() {


  return (
    <>
      <Navbars/>
      {/* <Home/> */}
{/*       <RegisterPage/> */}
      <LoginPage/>
      <Footer/>
    </>
  )
}

export default App