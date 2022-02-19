import { signupUser, redirectIfLoggedIn, signInUser } from '../fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const email = document.getElementById('Email');
const password = document.getElementById('Password');

const signUpForm = document.getElementById('sign-up');
const newEmail = document.getElementById('newEmail');
const newPassword = document.getElementById('newPassword');

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    await signInUser(email.value, password.value);
    redirectIfLoggedIn();

});


signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(newEmail.value, newPassword.value);
    const resp = await signupUser(newEmail.value, newPassword.value);
    console.log(resp);

    //call a function that redirects if a user is logged in

    redirectIfLoggedIn();
});

