//***************************************Register********************************************//
let fname = document.querySelector(".fname")
let lname = document.querySelector(".lname")
let email = document.querySelector(".email")
let pass  = document.querySelector(".password")
let registerBtn = document.querySelector(".registerBtn")
let arr = JSON.parse(localStorage.getItem("users") || "[]");
registerBtn.addEventListener('click' , (e)=>{
    e.preventDefault();
    if(fname.value.trim()=="" || lname.value.trim()=="" || email.value.trim()=="" || pass.value==""){
        alert("Please Fill All Data")
    }
    
    else{
        let existUser = arr.some((user)=>user.email==email.value)
        console.log(existUser);
        if(existUser){
            alert("The User Aleardy Exist In Webiste")
        }
        else{
            let user = {
                fname : fname.value.trim(),
                lname : fname.value.trim(),
                email : email.value.trim(),
                password : pass.value
        
            }
            
            arr.push(user)
            localStorage.setItem("users" , JSON.stringify(arr))
            window.location.href = "login.html"
        }
        }
})



