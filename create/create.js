import { checkAuth, createSticky } from '../fetch-utils.js';

checkAuth();

const createForm = document.getElementById('create');
const title = document.getElementById('title');
const description = document.getElementById('description');
const contactInfo = document.getElementById('contact');
// const submit = document.getElementById('submit'); using form.
const cancel = document.getElementById('cancel');

createForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(title.value);
    //a function that takes .values 
    await createSticky(title.value, description.value, contactInfo.value);
    title.value = '';
    description.value = '';
    contactInfo.value = '';
    window.alert(`POSTED!`);
    location.replace('../'); 
    // why does this prevent supabase from recieving data from createSticky?
});