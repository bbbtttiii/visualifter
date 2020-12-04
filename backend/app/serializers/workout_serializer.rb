class WorkoutSerializer < ActiveModel::Serializer
  attributes :name, :id
  has_many :blocks
end