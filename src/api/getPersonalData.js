// src/api/getPersonalData.js

import { kv } from '@vercel/kv';

export async function GET(request) {
    try {
        console.log ("hello world");
        // Fetch the JSON data from the Vercel KV database
        const personalData = await kv.json.get('personal-data');
        console.log(personalData);
        // Return the data as a JSON response
        return new Response(JSON.stringify(personalData), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error fetching personal data:', error);
        return new Response('Error fetching personal data', { status: 500 });
    }
}