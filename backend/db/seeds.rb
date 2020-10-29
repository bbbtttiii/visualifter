# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


upper = Workout.create(name: "Upper Body")


lower = Workout.create(name: "Lower Body")


upper.blocks.create(exercise: "bench", reps: 10, sets: 4, weight: 135)
lower.blocks.create(exercise: "squat", reps: 10, sets: 4, weight: 185)