import React from 'react'
import ReactDOM from 'react-dom/client'
import {elem, changeTop,changeTopHome,changeTopChat} from './fitchs/elem.js'
import Home from './components/home.js'
import Login from './components/login.js'
import Chat from './components/chat.js'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom"

 

function App(){
const { pathname } = useLocation()

  let topClass = "topPanel"

  if (pathname === "/login") {
    topClass = "loginTop"
  } else if (pathname === "/chat") {
    topClass = "chatForm"
  }else if(pathname === '/home'){
    topClass = 'topPanel'
  }

return(
    
    
<>
       


       
        <div className='dom'>
            <div >
                <nav className={topClass} id='topForm'>
                    <div id='home' >
                        <Link to='/home' onClick={changeTopHome}>Home</Link>
                    </div>
                    <div id='chat'>
                        <Link to='/chat' onClick={changeTopChat}>Chat</Link>
                    </div>
                    <div id='login'>
                        <Link to='/login' onClick={changeTop}>Login</Link>
                    </div>

                </nav>
            </div>
            <div>
              



            </div>
        </div>
        
        <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/chat' element={<Chat />} />
        </Routes>
        
</>
)
}

function Differs(){

    return
}
Differs()







let root = ReactDOM.createRoot(
    document.getElementById('firstElem')
)
root.render( <BrowserRouter><App /></BrowserRouter>
)




