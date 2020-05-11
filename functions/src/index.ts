import * as functions from 'firebase-functions';

const region = 'europe-west3';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.region(region).https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
