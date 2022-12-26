# Flight 

Flight is a straightforward web application that enables users to register and submit flight feedback. A user has the ability to rate Flight with stars and can also edit, and remove reviews. 

## Screenshots
- Home
![Screenshot from 2022-11-18 19-12-35](https://user-images.githubusercontent.com/15182066/202721753-c57e4b54-4ea4-467d-983b-355442e9f7a9.png)

- Sign In
![sign_in](https://user-images.githubusercontent.com/15182066/203031512-8b9140be-6bd3-4734-86fd-d71fcbf83646.png)
  
- Review Form 
![Screenshot from 2022-11-18 19-32-41](https://user-images.githubusercontent.com/15182066/202722556-f06a44ec-126c-4924-a849-28cf4a7ea396.png)


# About 

The front-end is created using React-rails gem, while the back-end is developed using Ruby on Rails where users can provide feedback on a list of flights.

A review form is also available for users to create new reviews. A user can give a Title, Description, and Star-Rating. Moreover, a user can modify and remove reviews.

# Concept

## React on Rails Gem

- Gem `React-rails` gem allows us to use React in the Rails framework
- Automatically renders React server-side and client-side.
- Lets you use `JSX`and `ES6`.


### Star Rating 

- A simple react component for adding a star rating to the project. 


### Styled-Component
- Styled components let you write actual CSS in your JavaScript. This means you can use all the features of CSS you use including (but by far not limited to) media queries, all pseudo-selectors, nesting, etc.


## Association

- **has_many Association** :

  A `has_many` association indicates a one-to-many connection with another model. This association indicates that each instance of the model has zero or more instances of another model. 
  
- **belongs_to Association** :

  A `belongs_to` association sets up a connection with another model, such that each instance of the declaring model "belongs to" one instance of the other model.

## Serializers
- Serializer converts an object (in memory) into a stream of bytes that can be recreated when needed. Serializers in Ruby on Rails convert a given object into a JSON format. Serializers control the particular attributes rendered when an object or model is converted into a JSON format.


## Tools & Gems

  - Devise
  - React rails 
  - Fast Json Api
  - Bootstrap


## Linting & Formatting

- Super-linter
  - Rubocop
  - ESlint

