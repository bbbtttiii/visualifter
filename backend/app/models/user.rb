class User < ApplicationRecord
  has_many :workouts
  has_many :blocks through: :workouts
end
