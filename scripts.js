document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;

    fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `email=${email}`
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => console.error('Error:', error));
});
