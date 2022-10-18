# frozen_string_literal: true

class Review < ApplicationRecord
  belongs_to :airline

  validates :score, presence: true
  validates :title, presence: true
  validates :description, presence: true
end
