// Skills
const skills = [
  "HTML5",
  "CSS3",
  "Javascript",
  "ReactJS",
  "NodeJS",
  "UI Design",
  "Python",
  "Java",
  "MongoDB",
  "Responsive Web Design"
];

const input = document.getElementById("item-input");
const btn = document.getElementById("add-btn");
const list = document.getElementById("skills");

// Rendering to screen
function enterSkillItems(skill){
  const newLi = document.createElement("li")
  newLi.className = "pill";
  newLi.innerHTML = `<span>${skill}</span>
    <button class="remove" title="Remove">🗑️</button> 
  `;//adding remove button 
  return newLi;
}


function renderAll(){
  list.innerHTML = ""
  skills.forEach( s => {
    list.appendChild(enterSkillItems(s)); //for each input typed in, append to enterSkillItems();
  });
}

// Add Skills
function addSkill(){
    const text = input.value.trim();
    if(text === ""){
      return;//if input is [] return null,  
    }
    skills.push(text);
    list.appendChild(enterSkillItems(text)); //else input will be added to array and append to enterSkillItems

    input.value="";//clears textbox after input is entered
    input.focus();//focus the cursor to left
}

// Remove SKills
list.addEventListener("click", (e) => {
  if(e.target.classList.contains("remove")){ //the element that was actually clicked then checks if that element has the class "remove", this if runs only when the click came from the 🗑️ button. 
    const li = e.target.closest("li");//climbs up the DOM tree from the clicked button until it finds the nearest <li>
    const skillName = li.querySelector("span").textContent;

    const idx = skills.indexOf(skillName);
    if(idx > -1) skills.splice(idx, 1) // changes the array in place.
      li.remove();
  }
});


btn.addEventListener("click",addSkill);//declare and add button using eventListener
input.addEventListener("keydown", e =>{
  if (e.key === "Enter") addSkill();
});
renderAll();


