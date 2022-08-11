//Include the following keys in your project
require('dotenv').config();


//API key https://developers.google.com/custom-search/v1/using_rest
export const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
//Content search engine ID https://cse.google.com/cse/create/new
export const CSE_ID = process.env.REACT_APP_GOOGLE_CSE_ID;