## Simple Book store app

#### Author: Daniel Carlson

### Description
Using React create three views to list, edit and create books for the minimal bookstore app. As
your graphql server download and run the server that can be found at this repository:
https://github.com/alacrity-law/apollo-test-app check the README for installation and execution
instructions. The GraphQL server uses Apollo, feel free to use it on your application.
The List View
● The list view should display all books with all the available properties, id, title, authors
and price.
● Each record should have an edit icon that leads to the Edit View.
● Each record should have a checkbox which when selected provides a real-time display
of how many books are selected and their total price.
● Have a “Create New” button that will drive the user to the Create View.
The Edit View
● Should be a simple form to allow editing of all the book’s properties: Title, Author and
Price.
● Should provide an Edit and Cancel button to either submit the edits or go back to the List
View respectively.
The Create View
● Should be a simple form to allow the creation of a book. The required fields are Title,
Author and Price.
● Should provide a Create and Cancel button to either submit the the new book or go back
to the List View respectively.

### Features
* See all books
* Selecting a book shows number of books selected and the total sum of all the books selected.
* Edit an existing book
* Create a new book

### Demo
[Here](https://www.loom.com/share/b43a2567b9a64aab8caa70b9c2d4e6a4) is a simple walkthrough of the application

## Running the Application

#### Locally
*NB*: Make sure to have the server up and running.
* Server can be found [here](https://github.com/alacrity-law/apollo-test-app) along with setup instructions.

#### Running the Client

* Clone the repository: `git clone https://github.com/DanCarl857/bookstore-app`
* Change into the directory: `cd bookstore-app`
* Install all dependencies: `npm run install`
* Run application: `npm run start`
* Navigate to `localhost:3000` in the browser

#### Using Docker
NB: You should already have docker installed
* Build and tag Docker image: `docker build -t bookstore-app:dev .`
* Spin up container: `docker run -v ${PWD}:/app -v /app/node_modules -p 3000:3000 --rm bookstore-app:dev`
* Navigate to `localhost:3000` in the browser

#### Running Tests
To run the tests
* Change into the root directory
* Run: `yarn test` or `npm run test`

## Tech Stack
* [ReactJS]()
* [React Hook]()
* [GraphQL]()
* [Apollo Client]()
* [Bootstrap 4]()
* [React Router DOM]()
* [Jest]()
* [Enzyme]()

## Future Work
* Write better unit tests
* Improve responsiveness for  `ALL` screens
