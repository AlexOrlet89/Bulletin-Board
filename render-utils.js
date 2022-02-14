import { getStickies } from './fetch-utils.js';
//renderSticky will create a div to attach to 'corkboard', the div will have a h3 title, a p description and a label contact. 
export function renderStickies(stickies) {
    for (let sticky of stickies) {
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const label = document.createElement('label');

        h3.textContent(stickies.Title);
        p.textContent(stickies.Description);
        label.textContent(stickies.Contact);

        div.append(h3, p, label);
        return div;
    }

}