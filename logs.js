const queryString = window.location.search;
const params = queryString.split("=")[1];
const url = "http://localhost:8080/v1/logs/logs";
const url2 = "http://localhost:8080/v1/prescriptions/prescriptions";

const medsBtn = document.getElementById("medsbtn");
const logBtn = document.getElementById("logbtn");
const addPrsc = document.getElementById("addprsc");

logBtn.addEventListener("click", () => {
  logBtn.style.backgroundColor = "orange";
  logBtn.style.color = "White";
  logBtn.textContent = "logs ✔";
  fetch(`${url}/${params}`)
    .then((res) => res.json())
    .then((data) => {
      const logSec = document.getElementById("logs");
      const petDiv = document.createElement("div");
      const description = document.createElement("p");
      const name = document.createElement("p");
      const dob = document.createElement("p");
      const client_email = document.createElement("p");
      const status = document.createElement("p");
      const medication = document.createElement("p");
      data.forEach((element) => {
        //Title
        const title = document.getElementById("records");
        title.textContent = `Health records for: ${element.name.toUpperCase()}`;
        //div
        petDiv.style.width = "40rem";
        petDiv.style.height = "15rem";
        petDiv.style.border = "1px  solid grey";
        petDiv.style.padding = "2rem";
        petDiv.style.paddingBottom = "2rem";
        petDiv.style.borderRadius = "0.5rem";
        petDiv.style.margin = "0 auto";
        petDiv.style.textAlign = "center";
        //Pet info
        name.textContent = `Pet's name: ${element.name.toUpperCase()}`;
        dob.textContent = `Date of Birth: ${element.dob.slice(0, 10)}`;
        client_email.textContent = `Owner's email: ${element.client_email}`;
        status.textContent = `Health Status: ${element.status}`;
        description.textContent = ` Description: ${element.description}`;
        petDiv.append(name, dob, description, status, client_email);
      });
      logSec.append(petDiv);
    });
});

medsBtn.addEventListener("click", () => {
  medsBtn.style.backgroundColor = "orange";
  medsBtn.style.color = "White";
  medsBtn.textContent = "Prescriptions ✔";
  medsBtn.style.width = "10rem";
  fetch(`${url2}/${params}`)
    .then((res) => res.json())
    .then((data) => {
      const logSec = document.getElementById("logs");
      const petDiv = document.createElement("div");
      const comment = document.createElement("p");
      const medicationId = document.createElement("p");
      data.forEach((element) => {
        //Title
        const title = document.getElementById("records");
        title.textContent = `Active prescriptions for: ${element.name.toUpperCase()}`;
        //div
        petDiv.style.width = "25rem";
        petDiv.style.height = "15rem";
        petDiv.style.border = "1px  solid grey";
        petDiv.style.padding = "2rem";
        petDiv.style.borderRadius = "0.5rem";
        petDiv.style.textAlign = "center";
        //Med info
        comment.textContent = ` Medication comment: ${element.comment}`;
        medicationId.textContent = `Medication ID: ${element.medication_id}`;
        petDiv.append(medicationId, comment);
      });
      logSec.append(petDiv);
    });
});

addPrsc.addEventListener("click", () => {
  location.href = "prescriptions.html";
});
