document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // You can perform client-side validation here if needed
  
    // Send login request to server
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Invalid username or password');
      }
      return response.json();
    })
    .then(data => {
      // Handle successful login
      document.getElementById('message').textContent = data.message;
      // Redirect to dashboard or perform any other action
    })
    .catch(error => {
      // Handle login error
      document.getElementById('message').textContent = error.message;
    });
  });
  