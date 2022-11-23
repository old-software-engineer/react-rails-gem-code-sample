# frozen_string_literal: true

# Serilizer used for converting object into JSON api.
class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :email
end
