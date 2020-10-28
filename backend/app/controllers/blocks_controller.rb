class BlocksController < ApplicationController

    def index
        blocks = Block.all
        render json: blocks
    end

    def create
        block = Block.new(block_params)
        if block.save
            render json: block
        else
            #error
        end
    end

    def update
        # binding.pry
        block = Block.find(params[:id]) 
        if block.save
            render json: block
        else
            #error
        end
    end

    def destroy
        block = Block.find(params[:id])
        block.destroy
    end

    private

    def block_params
        params.require(:block).permit(:exercise, :weight, :reps, :sets, :workout_id)
    end

end         