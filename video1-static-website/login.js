document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get input values
    const emailid = document.getElementById('emailid').value;
    const password = document.getElementById('password').value;
  
    // Define the API URL with query parameters
    const apiUrl = `https://96uu5oouui.execute-api.us-east-1.amazonaws.com/test/login?emailid=${encodeURIComponent(emailid)}&password=${encodeURIComponent(password)}`;
  
    // Make the GET request to the API
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.statusCode == 200) {
          // If the API call is successful, navigate to the welcome page
          window.location.href = `dashboard.html?name=${encodeURIComponent(data.record['name'])}`;
        } else {
          // Handle errors here
          alert(`error: ${data.statusCode} \n message: ${data.error}`);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      });
  });