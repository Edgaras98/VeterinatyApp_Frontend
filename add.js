document.forms[0].addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("petname").value;
  const dob = document.getElementById("dob").value;
  const client_email = document.getElementById("owneremail").value;
  fetch("http://localhost:8080/v1/pets/pets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, dob, client_email }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (name && dob && client_email) {
        alert("New pet has been added!");
        window.location.href = "index.html";
      } else {
        alert("Invalid data passed! please try again");
        window.location.href = "add.html";
      }
    });
});
