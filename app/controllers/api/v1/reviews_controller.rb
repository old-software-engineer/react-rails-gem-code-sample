# frozen_string_literal: true

# REVIEW: Controller
module Api
  module V1
    class ReviewsController < ApplicationController
      # hide the authenticity token.
      protect_from_forgery with: :null_session

      #  Review created
      def create
        review = airline.reviews.new(review_params)

        if review.save
          render json: ReviewSerializer.new(review).serialized_json
        else
          render json: {error: review.error.messages}, status: :unprocessable_entity
        end
      end

      def update
        review = Review.find(params[:id])
        if review.update(review_params)
          render json: ReviewSerializer.new(review).serialized_json
        else
          render json: {error: review.error.messages}, status: :unprocessable_entity
        end
      end

      def destroy
        review = Review.find(params[:id])

        if review.destroy
          head :no_content
        else
          render json: {error: review.error.messages}, status: :unprocessable_entity
        end
      end

      private

      def airline
        @airline ||= Airline.find(params[:airline_id])
      end

      def review_params
        params.require(:review).permit(:title, :description, :score, :airline_id)
      end
    end
  end
end
