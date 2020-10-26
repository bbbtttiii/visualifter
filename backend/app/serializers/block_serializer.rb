class BlockSerializer < ActiveModel::Serializer
    # include FastJsonapi::ObjectSerializer
    attributes :exercise, :reps, :sets, :weight
    belongs_to :workout
end