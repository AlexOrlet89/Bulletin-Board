const SUPABASE_URL = 'https://sjdlsxmnlasfuesvmebz.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqZGxzeG1ubGFzZnVlc3ZtZWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0ODAsImV4cCI6MTk1OTkxNzQ4MH0.SGC6ShwKbSPLUcnWYRO3o7KQbJaV16eTy-AmGphLBh4';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getStickies() {
    const response = await client.from(`Stickies`).select(`*`);
    console.log(response);
    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}