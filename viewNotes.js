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
});



async function fetchNotes(){
    let res = await fetch("https://study-notes-app-4a79d-default-rtdb.asia-southeast1.firebasedatabase.app/.json");
    let notes = await res.json();
    return notes;
}

async function displayNotes(){
    let notes = await fetchNotes();
    let container = document.getElementById("container");

    notes.forEach(note => {
        let noteDisplay = document.createElement("div");
        noteDisplay.innerHTML = `
        <h2>Title: ${note.title}</h2>
        <p>Topic: ${note.topic}</p>
        <p>Priority: ${note.priority}</p>
        <p>Discription: ${note.content}</p>
        <img src="${note.img}" alt="${note.title}" class="noteImg">
        `;

        container.appendChild(noteDisplay);
    });
}
fetchNotes();
displayNotes();