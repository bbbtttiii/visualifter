class Workout < ApplicationRecord
  has_many :blocks, dependent: :destroy
  belongs_to :user

  validates :name, presence: true, uniqueness: true
end