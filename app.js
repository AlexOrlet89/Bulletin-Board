// import functions and grab DOM elements
import { renderStickies } from './render-utils.js';
import { getStickies } from './fetch-utils.js'; 

window.addEventListener('load', async () => {
    const stickies = await getStickies();
    console.log(stickies);
    console.log(renderStickies(stickies));
});
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
