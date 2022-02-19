const SUPABASE_URL = 'https://sjdlsxmnlasfuesvmebz.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqZGxzeG1ubGFzZnVlc3ZtZWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0ODAsImV4cCI6MTk1OTkxNzQ4MH0.SGC6ShwKbSPLUcnWYRO3o7KQbJaV16eTy-AmGphLBh4';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createSticky(title, description, contact) {
    const response = await client.from('Stickies').insert([
        { Title: `${title}`,
            Description : `${description}`,
            Contact: `${contact}` }
    ]);
    console.log('createSticky', title, description, contact);
    return checkError(response);
}


export async function getStickies() {
    const response = await client.from(`Stickies`).select(`*`);
    console.log(checkError(response));
    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    console.log(response, 'working!');
    return response.user;
}

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function redirectIfLoggedIn() {
    console.log('redirect called');
    if (getUser()) {
        location.replace('../');
    } else alert('Redirect ERROR');
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });
    return response.user;
}

export async function logout() {
    await client.auth.signOut();
}

export async function checkAuth() {
    const user = getUser();
    if (!user) location.replace('../');
}
