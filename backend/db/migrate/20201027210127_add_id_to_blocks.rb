class AddIdToBlocks < ActiveRecord::Migration[6.0]
  def change
    add_column :blocks, :workout_id, :integer
  end
end
