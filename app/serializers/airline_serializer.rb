# frozen_string_literal: true

# Serilizer used for converting object into JSON api.
class AirlineSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image_url, :slug, :avg_score

  attribute :current_user do |object, params|
    params[:current_user].id
  end

  attribute :checkuser do |object, params|
    !(Review.where(airline_id: object.id).where(user_id: params[:current_user].id).count > 0)
  end

  has_many :reviews
end
