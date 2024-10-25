import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import Protectedroute from './ProtectedRoute';
import { useEffect, useState } from 'react';
import Profile from './components/Profile';
import Announcement from './components/Announcement';
import Recruitment from './components/Recruitment';
import ResumeBuild from './components/ResumeBuild';
import CompaniesVisited from './components/CompaniesVisited';
import PlacementStats from './components/PlacementStats';


function App() {
  // Check If User is Logged In
  const [auth,setAuth] = useState(false);

  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });

      if(res.status === 200){
       setAuth(true)
      }
      if(res.status === 401){
       setAuth(false)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, [auth]);

  return (
    <>
        <Navbar auth={auth}/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/service" element={<Services/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/login" element={<Login setAuth={setAuth}/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/dashboard" element={<Protectedroute auth={auth}> <Dashboard /> </Protectedroute>} />
          <Route exact path="/logout" element={<Logout setAuth={setAuth}/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/announcement" element={<Announcement/>} />
          <Route exact path="/recruitment" element={<Recruitment/>} />
          <Route exact path="/resumebuild" element={<ResumeBuild/>} />
          <Route exact path="/companiesvisited" element={<CompaniesVisited/>} />
          <Route exact path="/placementstats" element={<PlacementStats/>} />
        </Routes>
        <Footer/>
    </>
  );
}

export default App;


// Now we have to Procted Out Route Like Without Login
// You can not go to Dashboard
// And After login you can not login again
// We need Protected Routes

// We Cant Acces Them If Auth is False

// Now we need to Change Navbar Dynamically