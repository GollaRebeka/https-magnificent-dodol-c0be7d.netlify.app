document.getElementById('validationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Error Elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    // Reset Errors
    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    let isValid = true;

    // Name Validation
    if (name.length < 5) {
        nameError.textContent = 'Name must be at least 5 characters long.';
        isValid = false;
    }

    // Email Validation
    if (!email.includes('@')) {
        emailError.textContent = 'Enter a valid email address.';
        isValid = false;
    }

    // Phone Number Validation
    if (!/^\d{10}$/.test(phone) || phone === '1234567890') {
        phoneError.textContent = 'Enter a valid 10-digit phone number.';
        isValid = false;
    }

    // Password Validation
    if (password.length < 8 || password.toLowerCase() === name.toLowerCase() || password.toLowerCase() === 'password') {
        passwordError.textContent = 'Password must be at least 8 characters and not "password" or your name.';
        isValid = false;
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        isValid = false;
    }

    // Success Alert
    if (isValid) {
        alert('Form submitted successfully!');
    }
});