# frozen_string_literal: true

class Airline < ApplicationRecord
  has_many :reviews, dependent: :destroy
  before_create :slugify

  # slugify method take name of airline and use as slug.
  def slugify
    self.slug = name.parameterize
  end

  # Count reviews for airlines
  def avg_score
    return 0 unless reviews.count.positive? # if score is present is nil by any chance then this will make it 0.

    reviews.average(:score).round(2).to_f
  end
end
