/*Task 6 : Form Styling and Validation */
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;
    const name = document.getElementById('name');
    const gender = document.getElementById('gender');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const branch = document.getElementById('branch');
    const school = document.getElementById('school');
    const percent12 = document.getElementById('percent12');
    const percent10 = document.getElementById('percent10');
    const nameError = document.getElementById('nameError');
    const genderError = document.getElementById('genderError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const branchError = document.getElementById('branchError');
    const schoolError = document.getElementById('schoolError');
    const percent12Error = document.getElementById('percent12Error');
    const percent10Error = document.getElementById('percent10Error');
    nameError.textContent = '';
    genderError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    branchError.textContent = '';
    schoolError.textContent = '';
    percent12Error.textContent = '';
    percent10Error.textContent = '';
    if (name.value.trim() === '') {
        isValid = false;
        nameError.textContent = 'Name is required.';
        nameError.style.display = 'block';
    }
    if (gender.value === '') {
        isValid = false;
        genderError.textContent = 'Gender is required.';
        genderError.style.display = 'block';
    }
    if (email.value.trim() === '') {
        isValid = false;
        emailError.textContent = 'Email is required.';
        emailError.style.display = 'block';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        isValid = false;
        emailError.textContent = 'Enter a valid email address.';
        emailError.style.display = 'block';
    }

    if (phone.value.trim() === '') {
        isValid = false;
        phoneError.textContent = 'Phone number is required.';
        phoneError.style.display = 'block';
    } else if (!/^\d{10}$/.test(phone.value)) {
        isValid = false;
        phoneError.textContent = 'Enter a valid phone number.';
        phoneError.style.display = 'block';
    }
    if (branch.value === '') {
        isValid = false;
        branchError.textContent = 'Preferred branch is required.';
        branchError.style.display = 'block';
    }
    if (school.value.trim() === '') {
        isValid = false;
        schoolError.textContent = 'School studied is required.';
        schoolError.style.display = 'block';
    }
    if (percent12.value.trim() === '') {
        isValid = false;
        percent12Error.textContent = '12th percentage is required.';
        percent12Error.style.display = 'block';
    } else if (isNaN(percent12.value) || percent12.value < 0 || percent12.value > 100) {
        isValid = false;
        percent12Error.textContent = 'Enter a valid percentage between 0 to 100.';
        percent12Error.style.display = 'block';
    }
    if (percent10.value.trim() === '') {
        isValid = false;
        percent10Error.textContent = '10th percentage is required.';
        percent10Error.style.display = 'block';
    } else if (isNaN(percent10.value) || percent10.value < 0 || percent10.value > 100) {
        isValid = false;
        percent10Error.textContent = 'Enter a valid percentage between 0 to 100.';
        percent10Error.style.display = 'block';
    }

    if (isValid) {
        window.location.href = 'submit.html';
    }
});
