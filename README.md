# Flight 

Flight is a straightforward web application that enables user to register and submit flight feedback. A user has the ability to rate flight with stars, edit, and remove reviews.

## Screenshots
- Sign In
![sign_in](https://user-images.githubusercontent.com/15182066/203031512-8b9140be-6bd3-4734-86fd-d71fcbf83646.png)
  
- Sign Up 
![sign_up](https://user-images.githubusercontent.com/15182066/203031623-f36a8b46-e19c-46da-9286-b6935bc018fe.png)

- Forgot Password
![forgot_password](https://user-images.githubusercontent.com/15182066/203031653-f9b4c7dc-4e9c-43fd-8977-6e40b436acad.png)

- Home
![Screenshot from 2022-11-18 19-12-35](https://user-images.githubusercontent.com/15182066/202721753-c57e4b54-4ea4-467d-983b-355442e9f7a9.png)

- Review Form 
![Screenshot from 2022-11-18 19-32-41](https://user-images.githubusercontent.com/15182066/202722556-f06a44ec-126c-4924-a849-28cf4a7ea396.png)


# About 

The front-end is created using React-rails gem, while the back-end is developed using Ruby on Rails where users can provide feedback on a list of flights.<br/>
A review form is available for users to create new reviews.<br/>
A user can give a Title, Description, and Star-Rating.<br/>
A user can modify and remove reviews.


# Concept

## React on Rails Gem

- `React-rails` gem allow us to use React in Rails framework.
- Automatically renders React server-side and client-side.
- Lets you use `JSX`, `ES6`.


### Star Rating 

- A simple react component for adding a star rating to the project.


### Styled-Component
- Styled-components lets you write actual `CSS` in your `JavaScript`. This means you can use all the features of `CSS` you use including (but by far not limited to) media queries, all pseudo-selectors, nesting, etc.


## Association

- **has_many Association** :

  A `has_many` association indicates a one-to-many connection with another model. This association indicates that   each instance of the model has zero or more instances of another model.
  
- **belongs_to Association** :

  A `belongs_to` association sets up a connection with another model, such that each instance of the declaring model "belongs to" one instance of the other model.

## Serializers
- Serializer converts an object in memory into a stream of bytes that can be recreated when needed. Serializers in Ruby on Rails convert a given object into a JSON format. Serializers control the particular attributes rendered when an object or model is converted into a JSON format.


## Tools & Gems

  - Devise
  - React rails 
  - Fast Json Api
  - Bootstrap


## Formatting

- Super-linter
  - Rubocop
  - ESlint

