console.log("Hello world!");

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var interests = document.querySelectorAll('input[name="interests"]:checked');

    var errorMessage = "";

    if (name === "") {
      errorMessage += "Name is required.\n";
    }

    if (email === "") {
      errorMessage += "Email is required.\n";
    }

    if (!gender) {
      errorMessage += "Gender is required.\n";
    }

    if (interests.length === 0) {
      errorMessage += "At least one interest is required.\n";
    }

    if (errorMessage !== "") {
      alert(errorMessage);
      return false;
    }

    // Form is valid, you can proceed with form submission
    return true;
  }