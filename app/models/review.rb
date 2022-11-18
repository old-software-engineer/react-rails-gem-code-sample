# frozen_string_literal: true

class Review < ApplicationRecord
  belongs_to :airline
  belongs_to :user

  validates :score, presence: true
  validates :title, presence: true
  validates :description, presence: true
end
