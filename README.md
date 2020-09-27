# Bible Reader
A simple React app that allows a user to select version, book, chapter and have the passage displayed. It also offers the ability to display a random scripture.

## [Demo](https://turnerapps.github.io/bible-reader-react/)

## Motivation
There are so many ways to read the bible. Why create yet another facade? Simply put, to showcase my ability to create an app in the small amount of time I have available.

## How to Use
Running this project requires an API key from scripture.api.bible. Create a new API key, then supply it in a .secrets.js file under frontend like so:

### frontend/.secrets:
```javascript
const secrets = {
    apikey: 'key-from-scripture.api.bible'
};
export default secrets;
```

Once you have the secrets file in place, make sure you have yarn or npm installed, and then run
    `npm install`
or 
    `yarn`

Next, run 
    `npm start`
or 
    `yarn start`

Your browser should automatically launch the reader.