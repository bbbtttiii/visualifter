class Workout < ApplicationRecord
    has_many :blocks, dependent: :destroy
end