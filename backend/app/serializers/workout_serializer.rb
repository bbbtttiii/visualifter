class WorkoutSerializer < ActiveModel::Serializer
    # include FastJsonapi::ObjectSerializer
    attributes :name, :id
    has_many :blocks
end