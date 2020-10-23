class WorkoutSerializer < ActiveModel::Serializer
    include FastJsonapi::ObjectSerializer
    attributes :name
    has_many :blocks
end