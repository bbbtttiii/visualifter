class BlocksController < ApplicationController

    def index
        
    end

    private

    def block_params
        params.require(:block).permit(:exercise, :weight, :reps, :sets)
    end

end