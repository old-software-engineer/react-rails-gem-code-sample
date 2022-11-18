# Flight 

Flight is a straightforward web application that enables user to register and submit flight feedback. A user has the ability to rate flight with stars, edit, and remove reviews.

## Screenshots
- Home

![Screenshot from 2022-11-18 19-12-35](https://user-images.githubusercontent.com/15182066/202721753-c57e4b54-4ea4-467d-983b-355442e9f7a9.png)

- Review Form 
![Screenshot from 2022-11-18 19-13-46](https://user-images.githubusercontent.com/15182066/202722252-5f93790e-6baa-4172-be3d-f01b74b93974.png)

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

