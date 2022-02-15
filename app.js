// import functions and grab DOM elements
import { renderStickies } from './render-utils.js';
import { getStickies, getUser, logout } from './fetch-utils.js'; 
const logIn = document.getElementById('logIn');
const create = document.getElementById('create');
// const logOut = document.getElementById('logIn'); no longer needed

window.addEventListener('load', async () => {
    const stickies = await getStickies();
    console.log(stickies);
    renderStickies(stickies);
    if (getUser()) {
        logIn.textContent = `Log Out`;
    }
});
// 

logIn.addEventListener('click', () => {
    if (getUser()) {
        logout();
        location.replace('.');
    } else {
        location.replace('./log-in-page');
    }
});

create.addEventListener('click', () =>{
    console.log('clicked');
    if (getUser()) {
        location.replace('./create');
    } else {
        location.replace('./log-in-page');
    }
});

// Our check Auth should have something like if (user === true) login.textcontent = 'log out', and add if (user === true, log out) in our log-in click listener.

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
