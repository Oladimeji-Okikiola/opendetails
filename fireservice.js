import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

const serviceAccount = JSON.parse(Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT, 'base64').toString('utf-8'));


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,  
});


const db = admin.firestore()



// FOR JEWELERIES
const jeweleries = db.collection('JEWELERIES')
const clothing = db.collection('CLOTHING')
const homeDecor = db.collection('HOME')
const kitchenUtensils = db.collection('KITCHEN')
const varieties = db.collection('OTHERS')

// FOR BLOG
const blog = db.collection('BLOG')


export {jeweleries, blog, clothing, homeDecor, kitchenUtensils, varieties}