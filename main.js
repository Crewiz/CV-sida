// Fetch the JSON file
fetch('data.json')
  .then(response => response.json()) // Parse the JSON data
  .then(data => {
    // Select the main element where the data will be inserted
    const main = document.querySelector('.cv');

    // Create an element for each section of data
    const education = document.createElement('ul');
    const workExperience = document.createElement('ul');
    const languageSkills = document.createElement('ul');

    // Add a heading to each element
    education.innerHTML = '<h2>Utbildning</h2>';
    workExperience.innerHTML = '<h2>Jobberfarenheter</h2>';
    languageSkills.innerHTML = '<h2>Språkkunskaper</h2>';

    // Add a list item for each item in each section of data and <br> to separate the lines since you messed everything up with divs
    data.education.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = item + '<br>';
      education.appendChild(li);
    });
    data.work_experience.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = item + '<br>';
      workExperience.appendChild(li);
    });
    data.language_skills.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = item + '<br>';
      languageSkills.appendChild(li);
    });

    // Add the sections to the main element
    main.appendChild(education);
    main.appendChild(workExperience);
    main.appendChild(languageSkills);
  })
  .catch(error => {
    // If there is an error fetching the JSON file, log it to the console
    console.error(error);
  });

//Modal popup for rock paper scissors game


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modal-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//modal javascript

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modal-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


