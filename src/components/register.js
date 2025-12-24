import { useState } from "react"
import { Navigate, Outlet, Link } from "react-router-dom";
import Login from "./login";
import { useNavigate } from "react-router-dom";


export  function Register(){

const navigate = useNavigate();
    let [name,setvalue] = useState('')
    let [password,setpassword] = useState('')
    let [err, seterror] = useState('')
    let [users, setusers] = useState([])
    let [paserr,setpaserr] = useState('')

    function changeval(e){
        setvalue(e.target.value.trim())
        // e.target.value=''
    }

    function setpass(e){
        setpassword(e.target.value.trim())
        // e.target.value=''
    }

  




    function Sabform (e){
e.preventDefault()
let prof = JSON.parse(localStorage.getItem('user'))
console.log(prof)
if (prof.some(u => u.name === name && u.password === password)) {
    console.log('hallpooo')
  navigate("/profile")
} else {
  setpaserr("Wrong login or password")
  return
}
setpaserr('')




// if(name.trim().length<5){
//     seterror('Name is short, write more')
//     return 
// }else if(password.trim().length<3){
//     setpaserr('Password is short, write more')
// }
// seterror('')
// setpaserr('')






setvalue('')
setpassword('')

let userone = JSON.parse(localStorage.getItem('first')) || []
userone= [{name,password}]
localStorage.setItem('first', JSON.stringify(userone))
console.log(localStorage.getItem('first'))


    }

  
    return(



<div className="login">

<div className='loginForm'>
    <div id='formitem'>Login form</div>

        <form id="userform" onSubmit={Sabform}>


            <div>
                <label htmlFor='username' >Name:</label>
                <input type="text" id="username" value={name} autoComplete="off" onChange={changeval} name="username" placeholder="Your name?" required minLength={5}></input>
                <div>{err} </div>
            </div>
            <div>
                <label htmlFor='userpassword' >Password:</label>
                <input type="password" id="userpassword" value={password} autoComplete="new-password" onChange={setpass} name="password" placeholder="Your password?" required ></input>
                  <div>{paserr} </div>
            </div>
                <button type='submit'  id="userbutton" >login to account</button>


        </form>

        {/* <Outlet/> */}
{/* <Link to="/reg">Go to Login</Link> */}
    </div>

</div>
    )
}