let h1 = document.querySelector("h1");

let pass = document.getElementById("password");
let passConfirm = document.getElementById("confirm-password");

passConfirm.addEventListener("input", ()=>{
    if(pass.value !== passConfirm.value && passConfirm.value != "")
        passConfirm.setCustomValidity("Passwords do not match.");
    else 
        passConfirm.setCustomValidity("");
});
let inputs = document.querySelectorAll("input");

let submit = document.querySelector("#submit");

submit.addEventListener("click", () =>{
    console.log("do something");
    inputs.forEach((input) =>{
        if(input.validity.valid != true)
         input.classList.toggle("valid-check", true);
    });
});

