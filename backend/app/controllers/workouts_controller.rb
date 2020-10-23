class WorkoutsController < ApplicationController

    def index
        workouts = Workout.all
        render json: workouts
    end

    def create
        workout = Workout.create(workout_params)
        render json: workout
    end

    def show
        workout = Workout.find(params[:id])
        render json: workout, include: ['blocks']
    end

    def blocks
        block = Block.find(params[:id])
        render json: workout.blocks
    end

    def update 
        workout = Workout.find(params[:id])
        workout.update(workout_params)
        if workout.save
            render json: workout
        else
            #render error
        end
    end

    def destroy
        workout = Workout.find(params[:id])
        workout.destroy
    end

    private

    def workout_params
        params.require(:workout).permit(:name, :blocks)
    end

end