# frozen_string_literal: true

# Serilizer used for converting object into JSON api.
class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :airline_id, :user_id
end
