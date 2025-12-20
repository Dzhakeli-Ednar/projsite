
export default function Home(){

    return(
<div className="Home" id='Hommy'>
<div className="generalHome">

<div className='loginForm1'>
    <div id='formitem'>Regestration form</div>
        <form id="userform1">

            <div>
                <label for='username' >Name:</label>
                <input type="text" id="username" name="username" placeholder="Your name?" required minLength={5}></input>
            </div>
            <div>
                <label for='userpassword' >Password:</label>
                <input type="password" id="userpassword" name="password" placeholder="Your password?" required ></input>
            </div>
                <button type='submit' id="userbutton" >Registration</button>


        </form>
    </div>



</div>







</div>
)
}