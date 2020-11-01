# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


upper = Workout.create(name: "Upper Body")
lower = Workout.create(name: "Lower Body")
dl = Workout.create(name: "Deadlift RPT")

upper.blocks.create(exercise: "Bench Press", reps: 10, sets: 4, weight: 135)
upper.blocks.create(exercise: "Overhead Press", reps: 10, sets: 3, weight: 75)
upper.blocks.create(exercise: "Tricep Extension", reps: 12, sets: 4, weight: 30)
upper.blocks.create(exercise: "Curl", reps: 10, sets: 3, weight: 40)

lower.blocks.create(exercise: "Squat", reps: 10, sets: 4, weight: 185)
lower.blocks.create(exercise: "RDL", reps: 8, sets: 3, weight: 135)
lower.blocks.create(exercise: "Leg Curl", reps: 10, sets: 4, weight: 80)
lower.blocks.create(exercise: "Weighted Lunge", reps: 10, sets: 3, weight: 40)

dl.blocks.create(exercise: "Deadlift", reps: 8, sets: 1, weight: 225)
dl.blocks.create(exercise: "Deadlift", reps: 10, sets: 1, weight: 202.5)
dl.blocks.create(exercise: "Deadlift", reps: 12, sets: 1, weight: 180)