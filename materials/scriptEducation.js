// Education
const educations = [
  {
    degree: "Bachelor of Information Technology",
    institution: "RMIT Vietnam",
    duration: "2024 - 2027 (expected)",
    description: "Major in Information Technology. GPA: 3.5/4.0. Have some great achievements in programming contests."
  },
  {
    degree: "High School Diploma",
    institution: "High School of Programming",
    duration: "Jun 2021 - Nov 2024",
    description: "Graduated with a GPA of 8.5/10. Best years of my life."
  }
];

// using ul, li
const deInput = document.getElementById("degree");
const intIns = document.getElementById("institution");
const duInput = document.getElementById("duration");
const desInput = document.getElementById("description");
const edu = document.getElementById("education");
const btns = document.getElementById("submit-button");

function enterEducation(education, index) {
  const li = document.createElement("li");
  li.className = "edu-card";
  li.dataset.index = index;
  li.innerHTML = `<strong>${education.degree}</strong><br>
                  ${education.institution}<br>
                  ${education.duration}
                  <p>${education.description}</p>
                  <button class="remove" title="Remove">🗑️</button>`;
  return li;
}

function renderEdu() {
  edu.innerHTML = "";
  educations.forEach((education, index) => {
    edu.appendChild(enterEducation(education, index));
  });
}

function addSkill() {
  const degree = deInput.value.trim();
  const institution = intIns.value.trim();
  const duration = duInput.value.trim();
  const description = desInput.value.trim();

  if (degree === "" || institution === "" || duration === "" || description === "") {
    return;
  }

  const newEdu = {
    degree,
    institution,
    duration,
    description
  };

  educations.push(newEdu);
  renderEdu();

  deInput.value = "";
  intIns.value = "";
  duInput.value = "";
  desInput.value = "";
}

// remove education
edu.addEventListener("click", e => {
  if (e.target.classList.contains("remove")) {
    const li = e.target.closest("li");
    const index = Number(li.dataset.index);

    educations.splice(index, 1);
    renderEdu();
  }
});

btns.addEventListener("click", addSkill);
[deInput, intIns, duInput, desInput].forEach(input =>
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") addSkill();
  })
);

renderEdu();
