class WorkoutsController < ApplicationController

    def index
        
    end

    def create

    end

    private

    def workout_params
        params.require(:workout).permit(:name)
    end

end