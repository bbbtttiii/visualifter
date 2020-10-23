class WorkoutSerializer
    include FastJsonapi::ObjectSerializer
    attributes :name
    has_many :blocks
end