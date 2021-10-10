const addform = document.getElementById("addform");
addform.addEventListener("submit", (e) => {
  e.preventDefault();
  const medication_id = document.getElementById("medid").value;
  const pet_id = document.getElementById("petid").value;
  const comment = document.getElementById("comment").value;
  const backToLogs = document.getElementById("backlogs");
  fetch("http://localhost:8080/v1/prescriptions/prescriptions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ medication_id, pet_id, comment }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (medication_id && pet_id && comment) {
        alert("New prescription has been added!");
        window.location.href = "index.html";
      } else {
        alert("Invalid data passed! please try again");
        window.location.href = `/prescriptions.html?id=${element.id}`;
      }
    });
});
