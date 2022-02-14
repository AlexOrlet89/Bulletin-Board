import { getStickies } from './fetch-utils.js';
//renderSticky will create a div to attach to 'corkboard', the div will have a h3 title, a p description and a label contact. 
export function renderStickies(stickies) {
    const div = document.createElement('div');

    for (let sticky of stickies) {
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const label = document.createElement('label');

        h3.textContent = sticky.Title;
        p.textContent = sticky.Description;
        label.textContent = sticky.Contact;

        div.append(h3, p, label);
    }
    return div;

}