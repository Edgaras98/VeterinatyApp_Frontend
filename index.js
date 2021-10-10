const pets = document.getElementById("pets");
fetch("http://localhost:8080/v1/pets/pets/")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      const pets = document.getElementById("pets");
      const petDiv = document.createElement("div");
      const petName = document.createElement("p");
      const dobPet = document.createElement("p");
      const ownerEmail = document.createElement("p");
      const btnDiv = document.createElement("div");
      const delBtn = document.createElement("button");
      const logBtn = document.createElement("button");
      //Div
      petDiv.style.width = "20rem";
      petDiv.style.height = "15rem";
      petDiv.style.border = "1px  solid grey";
      petDiv.style.padding = "2rem";
      petDiv.style.textAlign = "Center";
      petDiv.style.borderRadius = "0.5rem";
      petDiv.style.margin = "2rem";
      //pet
      petName.textContent = element.name.toUpperCase();
      petName.style.fontSize = "large";
      //DOB pet
      dobPet.textContent = element.dob.slice(0, 10);
      //owner email
      ownerEmail.textContent = element.client_email;
      // Delete Button
      delBtn.textContent = "DELETE";
      delBtn.style.padding = " 1rem";
      delBtn.style.marginLeft = "1rem";
      delBtn.style.color = "orange";
      delBtn.style.border = "1px solid orange";
      delBtn.style.cursor = "pointer";
      //Log button
      logBtn.textContent = "VIEW LOG";
      logBtn.style.padding = " 1rem";
      logBtn.style.marginRight = "1rem";
      logBtn.style.color = "white";
      logBtn.style.border = "none";
      logBtn.style.background = "orange";
      logBtn.style.cursor = "pointer";
      petDiv.append(petName, dobPet, ownerEmail, logBtn, delBtn);
      pets.append(petDiv);
      //Log btn
      logBtn.addEventListener("click", () => {
        location.href = `/logs.html?id=${element.id}`;
      });
      //DELETE BUTTON
      delBtn.addEventListener("click", (e) => {
        fetch(" http://localhost:8080/v1/pets/pets/" + element.id, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            alert(`You have deleted ${element.name} !`);
            window.location.reload();
          });
      });
    });
  });
