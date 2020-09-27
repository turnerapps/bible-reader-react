# Bible Reader
A simple React app that allows a user to select version, book, chapter and have the passage displayed. 

## [Demo](https://turnerapps.github.io/bible-reader-react/)

## Motivation
There are so many ways to read the bible. Why create yet another facade? Simply put, to showcase my ability to create an app in about 4-6 hours.

## How to Use
Running this project requires an API key from scripture.api.bible. Create a new API key, then supply it in a .secrets.js file under frontend like so:

### frontend/.secrets.js:
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

## Design Decisions
For this project, I decided against state management using Redux or even React's version (useReducer) because the app is too small to be worth it. Bibles don't change often, so massive state management engine would have been overkill. Instead, I passed data down through props and lifted up state changes using on... functions passed as props. This was to make the components as "dumb" as possible, except the top level App. Also, to the extent possible, I decided to separate concerns, and created a state folder with all the HTTP functions that are then called by the on... functions in the App component.

## Future Improvements
I may at some point go ahead and add a "Previous" and "Next" button to the viewer to view prev and next chapters. It shouldn't take too much work, but I do need to move on to other projects to showcase my ability to write a Node backend as well. ;)