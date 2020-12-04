class WorkoutsController < ApplicationController

  def index
    workouts = Workout.all
    render json: workouts
  end

  def create
    workout = Workout.new(workout_params)
    if workout.save
      render json: workout
    end
  end

  private

  def workout_params
    params.require(:workout).permit(:name, :blocks)
  end

end