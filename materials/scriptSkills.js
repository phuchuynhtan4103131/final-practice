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
const list = document.getElementById("skills")

// Rendering to screen
function enterSkillItems(skill){
  const newLi = document.createElement("li")
  newLi.className = "pill";
  newLi.innerHTML = `<span>${skill}</span>
    <button class="remove" title="Remove">🗑️</button>
  `;
  return newLi;
}


function renderAll(){
  list.innerHTML = ""
  skills.forEach( s => {
    list.appendChild(enterSkillItems(s));
  });
}

// Add Skills
function addSkill(){
    const text = input.value.trim();
    if(text === ""){
      return;
    }
    skills.push(text);
    list.appendChild(enterSkillItems(text));

    input.value="";
    input.focus();
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


btn.addEventListener("click",addSkill);
input.addEventListener("keydown", e =>{
  if (e.key === "Enter") addSkill();
});
renderAll();


