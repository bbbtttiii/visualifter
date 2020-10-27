class BlockSerializer < ActiveModel::Serializer
    # include FastJsonapi::ObjectSerializer
    attributes :exercise, :reps, :sets, :weight, :workout_id, :id
    belongs_to :workout
end