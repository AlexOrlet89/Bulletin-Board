// import functions and grab DOM elements
import { renderStickies } from './render-utils.js';
import { getStickies } from './fetch-utils.js'; 

window.addEventListener('load', async () => {
    const stickies = await getStickies();
    console.log(stickies);
    renderStickies(stickies);
});
// 
const logIn = document.getElementById('logIn');
const create = document.getElementById('logIn');
const logOut = document.getElementById('logIn');

logIn.addEventListener('click', () => {
    location.replace('./log-in-page');
});

// Our check Auth should have something like if (user === true) login.textcontent = 'log out', and add if (user === true, log out) in our log-in click listener.

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
