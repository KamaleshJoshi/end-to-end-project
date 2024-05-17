document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get form values
    const name = document.getElementById('name').value;
    const emailid = document.getElementById('emailid').value;
    const password = document.getElementById('password').value;
  
    // Construct the API URL with query parameters
    const apiUrl = `https://hul4brlzpi.execute-api.us-east-1.amazonaws.com/test/signup?name=${encodeURIComponent(name)}&emailid=${encodeURIComponent(emailid)}&password=${encodeURIComponent(password)}`;
  
    // Make the API call with POST method
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.statusCode == 200) {
          // If the API call is successful, navigate to the welcome page
          //window.location.href = `dashboard.html?name=${encodeURIComponent(name)}`;
          alert(data.message);
        } else {
          // Handle errors here
          alert(`Error: ${data.error}\n\nMessage: ${data.message}`);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      });
  });


  // Handle click event for Login button
document.getElementById('login-btn').addEventListener('click', function() {
    // Redirect to index.html
    window.location.href = 'index.html';
  });