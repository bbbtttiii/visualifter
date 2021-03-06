class Workout < ApplicationRecord
  has_many :blocks, dependent: :destroy

  validates :name, presence: true, uniqueness: true
end