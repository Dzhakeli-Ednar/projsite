import { useState } from "react"
import { Navigate, Outlet, Link } from "react-router-dom";

//  let userbase = []
export default function Login(){

   

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



if(name.trim().length<5){
    seterror('Name is short, write more')
    
    return 
}else if(password.trim().length<3){
    setpaserr('Password is short, write more')
}
seterror('')
setpaserr('')


setusers(prev =>
    {let update = [...prev,{name,password}]

console.log(update)
return update
})



// console.log(err)

setvalue('')
setpassword('')
console.log(users)
    }

  
    return(



<div className="login">

<div className='loginForm'>
    <div id='formitem'>Regestration form</div>

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
                <button type='submit'  id="userbutton" >Registration</button>


        </form>

        {/* <Outlet/> */}
<Link to="/reg">Go to Register</Link>
    </div>

</div>
    )
}