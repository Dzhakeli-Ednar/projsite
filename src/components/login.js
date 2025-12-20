import { useState } from "react"
 let userbase = []
export default function Login(){

   

    let [name,setvalue] = useState('')
    let [password,setpassword] = useState('')
    function changeval(e){
        setvalue(e.target.value)
        // e.target.value=''
    }

    function setpass(e){
        setpassword(e.target.value)
        // e.target.value=''
    }

    function butclick (){
        userbase.push({
            name:name,
            password: password
        })
   
     setvalue('')
setpassword('')
        console.log(userbase)
    }


    function Sabform (e){
e.preventDefault()

    }




    return(



<div className="login">

<div className='loginForm'>
    <div id='formitem'>Regestration form</div>

        <form id="userform" onSubmit={Sabform}>


            <div>
                <label for='username' >Name:</label>
                <input type="text" id="username" value={name} onChange={changeval} name="username" placeholder="Your name?" required minLength={5}></input>
            </div>
            <div>
                <label for='userpassword' >Password:</label>
                <input type="password" id="userpassword" value={password} onChange={setpass} name="password" placeholder="Your password?" required ></input>
            </div>
                <button type='submit' onClick={butclick} id="userbutton" >Registration</button>


        </form>



    </div>

</div>
    )
}