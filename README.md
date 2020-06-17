# cookbook.js
#### Description: ####
React app that utilizes the Edamam Recipe Search API and presents it in a clean, readable format.  The API will retrieve the top 10 recipes associated with the search keyword, and show the title, calorie information, and ingredients.
#### Sample Use: ####
[![Image from Gyazo](https://i.gyazo.com/a54f83764de07100d81fc81b556e04b4.gif)](https://gyazo.com/a54f83764de07100d81fc81b556e04b4)
#### In Depth and Requirements: ####
This is a project built with create-react-app, Python, and PostgreSQL. On the Python side, we're using BeautifulSoup4 and LXML to parse out recipe sites and import them into cookbook.js.  This is still currently in development.  On the Javascript side, we're using basic React components and some custom CSS so that the app is modular and easy to change.  The Edamam API key in use is currently just a developer key so the use rate is limited, and at this time I am not hosting the app online to minimize risk of my key being disabled.  The PostgreSQL database is not currently hosted in this repo to avoid issues with user data, but the database will hold information for each user and provide a caching system for users recipes that they want to save and view later. 
