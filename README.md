# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version: ruby 2.7.2
* Rails Version: Rails 6.0.6
* Database: sqlite
* React version: 18.2.0
* node version: v16.16.0
* react-simple-star-rating: 5.1.0

# Getting started
To get the Rails server running locally:
- `bundle install` to install all reqired rails dependencies
- `yarn install` to install all reqired react dependencies
- `rake db:migrate` to make all database migrations
- `rails s` to start the local server.

# Code Overview

## Folders

- `app/javascript` - Contains the react js files for front-end.
- `app/models` - Contains the database models for the application where we can define methods, validations, queries, and relations to other models.
- `app/views` - Render the react element.
- `app/controllers` - Contains the controllers where requests are routed to their actions, where we find and manipulate our models and return them for the views to render.
- `config` - Contains configuration files for our Rails application and for our database, along with an `initializers` folder for scripts that get run on boot.
- `db` - Contains the migrations needed to create our database schema.

## React on Rails

- `React-rails` gem allow us to use React in Rails framework.
- Automatically renders React server-side and client-side.
- Lets you use `JSX`, `ES6`.

```shell
    gem 'react-rails'
```

### Add New Component in React
- To create new Component, Go to `app/javascript/component` add `.js` file.
- Example
```shell
  import React from 'react';

    const ComponentName = () =>{
        return(
            <div>Hello, You have Successfully created Component.</div>
        );  
    }

    export default ComponentName.js  
 ```

### Star Rating 
```shell
    yarn add react-simple-star-rating
```
### Axios
- Axios is a promise based `HTTP` client for the browser and `Node.js`. Axios makes it easy to send asynchronous `HTTP` requests to `REST` endpoints.
```shell
    yarn add axios
```
### Styled-Component
- Styled-components lets you write actual `CSS` in your `JavaScript`. This means you can use all the features of `CSS` you use including (but by far not limited to) media queries, all pseudo-selectors, nesting, etc.
```shell
    yarn add styled-components
```


## Routes
```shell
Prefix                      Verb      URI Pattern                                         Controller#Action

new_user_session            GET      /users/sign_in(.:format)                             devise/sessions#new
user_session                POST     /users/sign_in(.:format)                             devise/sessions#create
destroy_user_session        DELETE   /users/sign_out(.:format)                            devise/sessions#destroy
new_user_password           GET      /users/password/new(.:format)                        devise/passwords#new
edit_user_password          GET      /users/password/edit(.:format)                       devise/passwords#edit
user_password               PATCH    /users/password(.:format)                            devise/passwords#update
                            PUT      /users/password(.:format)                            devise/passwords#update
                            POST     /users/password(.:format)                            devise/passwords#create
cancel_user_registration    GET      /users/cancel(.:format)                              devise/registrations#cancel
new_user_registration       GET      /users/sign_up(.:format)                             devise/registrations#new
edit_user_registration      GET      /users/edit(.:format)                                devise/registrations#edit
user_registration           PATCH    /users(.:format)                                     devise/registrations#update
                            PUT      /users(.:format)                                     devise/registrations#update
                            DELETE   /users(.:format)                                     devise/registrations#destroy
                            POST     /users(.:format)                                     devise/registrations#create
root                        GET      /                                                    pages#home    
api_v1_airlines             GET      /api/v1/airlines(.:format)                           api/v1/airlines#index
                            POST     /api/v1/airlines(.:format)                           api/v1/airlines#create
new_api_v1_airline          GET      /api/v1/airlines/new(.:format)                       api/v1/airlines#new
edit_api_v1_airline         GET      /api/v1/airlines/:slug/edit(.:format)                api/v1/airlines#edit
api_v1_airline              GET      /api/v1/airlines/:slug(.:format)                     api/v1/airlines#show
                            PATCH    /api/v1/airlines/:slug(.:format)                     api/v1/airlines#update
                            PUT      /api/v1/airlines/:slug(.:format)                     api/v1/airlines#update
                            DELETE   /api/v1/airlines/:slug(.:format)                     api/v1/airlines#destroy
api_v1_reviews              POST     /api/v1/reviews(.:format)                            api/v1/reviews#create
edit_api_v1_review          GET      /api/v1/reviews/:id/edit(.:format)                   api/v1/reviews#edit
api_v1_review               PATCH    /api/v1/reviews/:id(.:format)                        api/v1/reviews#update
                            PUT      /api/v1/reviews/:id(.:format)                        api/v1/reviews#update
                            DELETE   /api/v1/reviews/:id(.:format)                        api/v1/reviews#destroy
                            GET      /*path(.:format)                                     pages#home
```


## API

Uses Rest API.
- A `REST API` (also known as RESTful API) is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services.

## Models
- `User Model` - Model contain Email and password.
- `Airline Model` - Model contain Name image and slug.
- `Review Model` - Model contain Title description and score based on star rating.

##  Migration
```shell
    rails g model Airline name image_url slug

    rails g model Review title description score:integer airline:belongs_to
```
```shell
    rails db:migrate
```
## Serializer
- The Serializer converts the objects into a JSON format.
```shell
    gem 'fast_jsonapi'
```
```shell
    rails g serializer Airline name image_url slug
    rails g serializer Review title description score airline_id
```
## Bootstrap
- Bootstrap is used to make page responsive. 

```shell
    gem 'bootstrap', '~> 5.2'
```
## Rubocop
- RuboCop is a Ruby code style checking and code formatting tool.

```shell
    gem 'rubocop-rails', require: false
```



# Configuration

## Authentication
Devise gem is used for login and registration page it only required email and password.To allow additional parameters on sign up we use application_controller to allow additional parameters.

### Add devise gem in Gemfile
```shell
    gem 'devise'
```
```shell
    bundle install
```
### Install Devise
```shell
    rails g devise:install
    rails g devise:views
    rails g devise User
```
### Create devise Controller
```shell
    rails generate devise:controllers users
```

## Null Session
By default Ruby on Rails will throw an exception when a request doesn't contain a valid CSRF token. we tell Rails to use an empty session instead of throwing an exception for requests by specifying `:null_session`.
