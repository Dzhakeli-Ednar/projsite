
// import { useLocation } from "react-router-dom"




export function elem(){let div = document.createElement('div')
document.body.append(div)

div.textContent = 'Hallo world'
div.classList.add('firstEl')
div.setAttribute('id', 'firstElem')}

elem()


export function changeTop(){

// let {pathname} = useLocation


    let topForm = document.getElementById('topForm')

// if(pathname === '/login'){
// topForm.classList.remove('topPanel')
//         topForm.classList.add('loginTop')
// }


//    console.log(pathname)
     
     if(topForm.classList.contains('chatForm')){
            topForm.classList.remove('chatForm')
        topForm.classList.add('loginTop')
    }else if(topForm.classList.contains('topPanel')){
        topForm.classList.remove('topPanel')
         topForm.classList.add('loginTop')
    }
}



export function changeTopHome(){

// let {pathname} = useLocation


    let topForm = document.getElementById('topForm')

// if(pathname === '/login'){
// topForm.classList.remove('topPanel')
//         topForm.classList.add('loginTop')
// }


  if(topForm.classList.contains('chatForm')){
            topForm.classList.remove('chatForm')
        topForm.classList.add('topPanel')
    }else if(topForm.classList.contains('loginTop')){
        topForm.classList.remove('loginTop')
         topForm.classList.add('topPanel')
    }


}

export function changeTopChat(){

// let {pathname} = useLocation


    let topForm = document.getElementById('topForm')

// if(pathname === '/login'){
// topForm.classList.remove('topPanel')
//         topForm.classList.add('loginTop')
// }


   
        if(topForm.classList.contains('topPanel')){
            topForm.classList.remove('topPanel')
        topForm.classList.add('chatForm')
    }else if(topForm.classList.contains('loginTop')){
        topForm.classList.remove('loginTop')
         topForm.classList.add('chatForm')
    }
    
}


export function Regestration(){
     
    return(
        <>
        <div>{}</div>
        <div>{}</div>
        
        </>
    )
}

Regestration()




