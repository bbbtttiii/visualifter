class Block < ApplicationRecord
    belongs_to :workout, optional: true
    
    validates :exercise, presence: true
    validates :weight, presence: true, numericality: true
    validates :reps, presence: true, numericality: true
    validates :sets, presence: true, numericality: true
end