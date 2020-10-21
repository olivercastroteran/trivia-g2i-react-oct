# Olivers's G2i Trivia

## Setup

1. Run `npm install`
2. Run `npm start`
3. Score 100%

## Tech stach

The trivia app uses react.js combined with redux for state management, react-router-dom to handle routing, node-sass for the styling, jest and enzyme for testing

## Project Structure

The Trivia app is organized in a way to be easy and intuitive to navigate. Storing all sherable components inside the components folder in `/src` and handle the pages separadly with their respective compnents and logic inside

```
src/
  |- assets/
    |- icons/
    |- images/
  |- components/
     |- Button/
        |- Button.js
        |- Button.scss
        |- Button.test.js
     |- Card/
     |- Modal/
     |- Settings/
     |- Spinner/
  |- pages/
    |- Error/
    |- Home/
    |- Quiz/
      |- QuizCard/
      |- getQuestions.js
      |- getQuestions.test.js
      |- Quiz.js
      |- Quiz.scss
    |- Results/
  |- Store
    |- Actions/
    |- Reducers/
```

## Other Concerns

There are some areas that where overkilled in the project just to show the usage of libreryes like redux or enzyme
