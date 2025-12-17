import React from 'react'
import ReactDOM from 'react-dom/client'
import {elem} from './fitchs/elem.js'
import Home from './components/home.js'
import Login from './components/login.js'
import Chat from './components/chat.js'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function App(){
return(
<>
       


       
        <div className='dom'>
            <div >
                <nav className='topPanel'>
                    <div>
                        <Link to='/home'>Home</Link>
                    </div>
                    <div>
                        <Link to='/chat'>Chat</Link>
                    </div>
                    <div>
                        <Link to='/login'>Login</Link>
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








let root = ReactDOM.createRoot(
    document.getElementById('firstElem')
)
root.render( <BrowserRouter><App /></BrowserRouter>
)




