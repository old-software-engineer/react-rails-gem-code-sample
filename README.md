# Flight

Projects was built using `React` for frontend and `Ruby on Rails` for backend.

Things you may want to cover:

* Ruby version: ruby 2.7.2
* Rails Version: Rails 6.0.6
* Database: sqlite
* React version: 18.2.0
* node version: v16.16.0

## Getting started
To get the Rails server running locally:
- `bundle install` to install all reqired rails dependencies
- `yarn install` to install all reqired react dependencies
- `rake db:migrate` to make all database migrations
- `rails s` to start the local server.

## Screenshots
- Home

![homepage](https://user-images.githubusercontent.com/15182066/200843084-e5f37e8f-579c-4b7f-b6a9-72e6ea37c8a4.png)


- Review Form / Review Edit

![reviewpage](https://user-images.githubusercontent.com/15182066/200843120-858fddfc-1e02-400d-8695-cb4bb9c82806.png)

# About 

Flight is a straightforward online application that uses the rails api to execute basic CRUD operations on airline reviews. It also has a secure login system using devise gem and serializers that transform supplied Rails objects into JSON format.

# Concept

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


## Association

- **has_many Association** :

  A `has_many` association indicates a one-to-many connection with another model. This association indicates that   each instance of the model has zero or more instances of another model.
  
- **belongs_to Association** :

  A `belongs_to` association sets up a connection with another model, such that each instance of the declaring model "belongs to" one instance of the other model.

## Model

- **airline.rb**

```shell

    class Airline < ApplicationRecord
    has_many :reviews, dependent: :destroy
    end  

```

- **review.rb**

```shell
    class Review < ApplicationRecord
    belongs_to :airline
    end
```
- **user.rb**

```shell
    class User < ApplicationRecord
      devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable
    end
```
## Serializers

- **airline_serializer.rb**

```shell
  class AirlineSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name, :image_url, :slug, :avg_score
    has_many :reviews
  end 
```
- **review_serializer.rb**

```shell
  class ReviewSerializer
    include FastJsonapi::ObjectSerializer
    attributes :title, :description, :score, :airline_id
  end
```

## Migrations

```shell
    
    rails g model Airline name image_url slug

    rails g model Review title description score:integer airline:belongs_to
```

## Tools & Gems

```shell
  gem 'devise'

  gem 'react-rails'

  gem 'fast_jsonapi'

  gem 'bootstrap', '~> 5.2'
```

## Formatting

- rubocop

