class Block < ApplicationRecord
    belongs_to :workout, optional: true

    validates :weight, numericality: true
    validates :reps, numericality: true
    validates :sets, numericality: true
end