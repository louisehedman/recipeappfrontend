# Random Recipe App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.

## About

This project is a school assignment to learn Angular and how to work with API:s, as a recipe app. This is the frontend part of the application, a backend part is made with Laravel. The API used for this project is the Spoonacular API, and also a RESTful API created in Laravel which handle users and their recipe lists. 

In this application a not signed in user can browse recipes rendered as random recipes, and filter the result for meal type as starters, main courses and desserts, and diet preferences as vegan, dairy free and gluten free. Logged in users can save their favourite recipes in lists. 

## How to get started

To open the project in your code editor clone it and then run `npm install` to install dependencies.

You also need to get your own API key for the Spoonacular API at [https://spoonacular.com/food-api](https://spoonacular.com/food-api) and add it as api_key in environment.ts. 

In the app section in src folder you find the components, models and services. 

To open the application in your browser and get it running on localhost type `npm start` in terminal. 

The site is live at [https://randomrecipeapp.netlify.app](https://randomrecipeapp.netlify.app).

You find the backend repository here: [https://github.com/louisehedman/recipeappbackend](https://github.com/louisehedman/recipeappbackend)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
