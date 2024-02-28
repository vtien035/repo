const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	// Validate the form fields
	if (username === '' || password === '') {
		alert('Please fill in all fields');
		return;
	}

	// Check if the username and password match a valid user
	const validUser = {
		username: 'admin',
		password: 'password'
	};

	if (username === validUser.username && password === validUser.password) {
		alert('Login successful');
		// Redirect to a dashboard or homepage
	} else {
		alert('Invalid username or password');
	}
});