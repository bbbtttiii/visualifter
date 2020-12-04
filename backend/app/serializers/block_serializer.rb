class BlockSerializer < ActiveModel::Serializer
  attributes :exercise, :reps, :sets, :weight, :workout_id, :id
  belongs_to :workout
end