let modeBtn = document.getElementById("modebtn");
let body = document.body;

if(localStorage.getItem("darkMode") === 'enabled'){
    body.classList.add("dark-mode");
}

modeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if(body.classList.contains("dark-mode")){
        localStorage.setItem("darkMode" , "enabled");
    }else{
        localStorage.removeItem("darkMode");
    }
})