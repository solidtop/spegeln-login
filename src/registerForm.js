const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
});

document.querySelector('#password').addEventListener('input', e => {
    checkPasswordStrength(e.target.value);
});

function validateEmail(email) {
    const pattern = /^\S+@\S+\.\S+$/;
    return pattern.test(email);
}

function checkPasswordStrength(password) {
    const indicator = document.querySelector('#password-strength');
    console.log(password.length)
    if (password.length < 1) {
        indicator.textContent = '';
        return;
    }

    const regMedium = /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/;
    const regStrong = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

    if (regStrong.test(password)) {
        indicator.textContent = 'stark';
    } else if (regMedium.test(password)) {
        indicator.textContent = 'medel';
    } else {
        indicator.textContent = 'svag';
    }
}