# Natours Application

This full stack web application is specially designed for persons who love travelling and going on tour vacations.

This app can be found at https://natours-travel.onrender.com/. The documentation of the API for this app can be found at https://documenter.getpostman.com/view/25439551/2s935oL4Nj The API and the app itself are hosted on the same server.

## Overview
This web application allows it's users to book tour vacations.

A tour refers to a series of locations, specially picked to excite the adventurous spirit of the individual who books it.

A visiting user who has not yet created an account on the app can simply see all the current tours as well as detailed information about each tour.

Once signed up or logged in, they can then book any tour of their choice.

Users can write only one review for any tour they book.

## Purpose
This app is a pet project, built for the express purpose of honing my skills in full stack web development.

## Demonstration

### Home Page:
![Home](https://user-images.githubusercontent.com/105717616/221445408-f04322ec-69c4-409e-9292-4467258e7403.png)

### Tour Details:
https://user-images.githubusercontent.com/105717616/221445469-588afb8a-a8a0-43d8-819e-d807cc351299.mp4

### Payment Process:
![Payment](https://user-images.githubusercontent.com/105717616/221445502-a1b422e3-0245-446f-9064-ed5504c03110.png)

### Login Page:
![Login](https://user-images.githubusercontent.com/105717616/221445519-66aca98d-dc67-4751-adac-3c06dfafb381.png)

### User Profile:
![Admin](https://user-images.githubusercontent.com/105717616/221445533-047ffa13-d91b-4db5-a364-f5b9c0ec7260.png)

## How To Use

### Book a tour

* Login to the site. Email adress you can find in this [file](https://github.com/PawelHamryszak/natours/blob/master/dev-data/data/users.json). Password for all users is: test1234
* Search for tours that you want to book
* Book a tour
* Proceed to the payment checkout page

```
Enter the card details (Test Mood):
- Card No. : 4242 4242 4242 4242
- Expiry date: 02 / 22
- CVV: 222
```
* Finished!

### Manage your booking
* Check the tour you have booked in "Manage Booking" page in your user settings. You'll be automatically redirected to this page after you have completed the booking.

### Update your profile
* You can update your own username, profile photo, email and password.

## API Usage
```
- {{URL}} with your hostname as value (Eg. http://127.0.0.1:3000 or http://www.example.com)
- {{password}} with your user password as value.
```

## Build With
* NodeJS - JS runtime environment
* Express - The web framework used
* Mongoose - Object Data Modelling (ODM) library
* MongoDB Atlas - Cloud database service
* Pug - High performance template engine
* JSON Web Token - Security token
* ParcelJS - Blazing fast, zero configuration web application bundler
* Stripe - Online payment API
* Postman - API testing
* Mailtrap & Sendgrid - Email delivery platform
* Render - Cloud platform

## Installation

```
$ npm i
set your env variables
$ npm run watch:js
$ npm run build:js
$ npm run dev (for development)
$ npm run start:prod (for production)
$ npm run debug (for debug)
$ npm run start
Setting up ESLint and Prettier in VS Code 👇
$ npm i eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-config-airbnb eslint-plugin-node
eslint-plugin-import eslint-plugin-jsx-a11y  eslint-plugin-react --save-dev
```

## Acknowledgement

* This project is part of the online course I've taken at Udemy. Thanks to Jonas Schmedtmann for creating this awesome course! Link to the course: [Node.js, Express, MongoDB & More: The Complete Bootcamp 2019](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/)














