function authenticate (login, password) {
	if (login === 'login' && password === 'password') {
		return 'you were logged in';
	} else {
		return 'Login is incorrect';
	}
}
