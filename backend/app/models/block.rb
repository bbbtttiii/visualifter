class Block < ApplicationRecord
    belongs_to :workout, optional: true
    
    validates :exercise, presence: true
    validates :weight, presence: true
    validates :reps, presence: true
    validates :sets, presence: true
end