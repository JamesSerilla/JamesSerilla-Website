/*---------tablinks open tab-------*/
var tablinks = document.getElementsByClassName("tab-links");
	var tabcontents = document.getElementsByClassName("tab-contents");
	function opentab(tabname){
		for (tablink of tablinks){
			tablink.classList.remove("active-link");
		}
		for (tabcontent of tabcontents){
			tabcontent.classList.remove("active-tab");
		}
		event.currentTarget.classList.add("active-link");
		document.getElementById(tabname).classList.add("active-tab");
	}
/*---------Side Menu-------*/
	var sidemenu = document.getElementById("sidemenu");

	function openmenu(){
		sidemenu.style.right = "0";
	}
		function closemenu(){
		sidemenu.style.right = "-200px";
	}

/*---------Contact form google app script-------*/
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyNttOaKMtmnnTWQvFI0r1OYxSD4mv1cwW3QDil9cgRLOoRDxAB5wAuiN3-3YAYVIE73A/exec'
  const form = document.forms['submit-to-google-sheet']
  

form.addEventListener('submit', e => {
  e.preventDefault();

  // Collect form data
  const formData = new FormData(form);
  const dataObject = Object.fromEntries(formData.entries());

  // Function to check for duplicates
  function checkForDuplicates(data) {
    // Example: Assuming 'existingEntries' is an array of already submitted data
    const existingEntries = [
      { email: 'test@example.com', username: 'testuser' },
      // Add other existing entries here
    ];

    // Check if the current data matches any existing entry
    return existingEntries.some(entry =>
      Object.keys(data).every(key => entry[key] === data[key])
    );
  }

  // Check for duplicates before submitting
  if (checkForDuplicates(dataObject)) {
    alert("Duplicate entry detected. Submission aborted.");
    return; // Stop the submission process
  }

  // Proceed with form submission if no duplicates
  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => {
      alert("Message sent successfully!");
      form.reset(); // Reset the form fields
    })
    .catch(error => {
      alert("Apologies, but your entry has already been submitted.");
    });
});





/*-----Dynamic Date-------*/
  const dateElement = document.getElementById('date');
console.log(dateElement);

let currentDate = new Date();
console.log(currentDate);

dateElement.innerHTML = currentDate;
    // dateOptions  <- modification

let dateOptions = { year: "numeric", month: "long", day: "numeric"};
dateElement.innerHTML = currentDate.toLocaleDateString("en-US", dateOptions);
