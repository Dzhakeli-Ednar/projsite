import { useEffect, useState } from "react"
import { Navigate, Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//  let userbase = []





export function Profile(){
let navigate = useNavigate()
let isAuth = Boolean(localStorage.getItem('first'))

 useEffect(() => {
    if (!isAuth) {
      navigate("/home")
    }
  }, [isAuth, navigate])

    return(
<>
<div className="profilepage">
    <div className="nextprof">





        <button onClick={()=>{localStorage.removeItem('first')
            window.location.reload()
        }} >Logout</button>
    </div>
</div>
</>
    )
}