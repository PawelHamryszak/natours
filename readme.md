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
Enter the card details (Test Mod):
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

## Setting Up Your Local Environment

```
* Clone this repo to your local machine.
* Using the terminal, navigate to the cloned repo.
* Install all the neccessary dependencies, as stipulated in the package.json file.
* If you don't already have one, set up accounts with: MONGODB, MAPBOX, STRIPE, SENDGRID and MAILTRAP. Please ensure to have at least basic knowledge of how these services work.
* In your .env file, set environment variables for the following:
    * DATABASE=your mongodb database url
    * DATABASE_PASSWORD=your mongodb password

    * SECRET=your json web token secret
    * JWT_EXPIRES_IN=90d
    * JWT_COOKIE_EXPIRES_IN=90

    * EMAIL_USERNAME=your mailtrap username
    * EMAIL_PASSWORD=your mailtrap password
    * EMAIL_HOST=smtp.mailtrap.io
    * EMAIL_PORT=2525
    * EMAIL_FROM=your real life email address

    * SENDGRID_USERNAME=apikey
    * SENDGRID_PASSWORD=your sendgrid password

    * STRIPE_SECRET_KEY=your stripe secret key
    * STRIPE_WEBHOOK_SECRET=your stripe web hook secret

* Start the server.
* Your app should be running just fine.
```

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

## Main Features

* [Users](https://github.com/PawelHamryszak/natours/edit/master/readme.md#users)
* [Tours](https://github.com/PawelHamryszak/natours/edit/master/readme.md#tours)
* [Bookings](https://github.com/PawelHamryszak/natours/edit/master/readme.md#bookings)
* [Reviews](https://github.com/PawelHamryszak/natours/edit/master/readme.md#reviews)
* [Favorite Tours](https://github.com/PawelHamryszak/natours/edit/master/readme.md#favorite-tours)
* [Notice](https://github.com/PawelHamryszak/natours/edit/master/readme.md#notice)

### Users

* Users can sign up with the application.
* Users can log into the application.
* Users can log out of the appication.
* Users can update their password.
* Users can reset their password
* Users can update their general information.
* Users can see their profile page.
* A user can be either a regular user or an admin or a lead-guide or a guide.
* When you sign up, you are a regular user by default.

### Tours

* Tours can be created by an admin user or a lead-guide.
* Tours can be seen by every user.
* Tours can be updated by an admin user or a lead-guide.
* Tours can be deleted by an admin user or a lead-guide.

### Bookings

* Only regular users can book tours (make a payment).
* Regular users can not book thesame tour twice.
* Regular users can see all the tours thay have booked.
* An admin user or a lead-guide can see every booking on the app.
* An admin user or a lead-guide can delete any booking.
* An admin user or a lead-guide can create a booking (manually, without payment).
* An admin user or a lead-guide can not create a bookng for thesame user twice.
* An admin user or a lead-guide can edit any booking.

### Reviews

* Only regular users can write reviews for tours which they have booked.
* All users can see the reviews of each tour.
* Regular users can edit and delete their own reviews.
* Regular users can not review thesame tour twice.
* An admin can delete any review.

### Favorite Tours

* A regular user can add any of their booked tours to their list of favorite tours.
* A regular user can remove a tour from their list of favorite tours.
* A regular user can not add a tour to their list of favorite tours, when it is already a favorite.


## Acknowledgement

* This project is part of the online course I've taken at Udemy. Thanks to Jonas Schmedtmann for creating this awesome course! Link to the course: [Node.js, Express, MongoDB & More: The Complete Bootcamp 2019](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/)
