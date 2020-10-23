class CreateBlocks < ActiveRecord::Migration[6.0]
  def change
    create_table :blocks do |t|
      t.string :exercise
      t.integer :reps
      t.integer :sets
      t.integer :weight

    end
  end
end
