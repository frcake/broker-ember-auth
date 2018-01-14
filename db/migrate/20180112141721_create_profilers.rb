class CreateProfilers < ActiveRecord::Migration[5.1]
  def change
    create_table :profilers do |t|
      t.references :user, foreign_key: true
      t.integer :age
      t.boolean :gender
      t.decimal :location_lat
      t.decimal :location_lon
      t.boolean :pop
      t.boolean :rock
      t.boolean :jazz
      t.boolean :folk

      t.timestamps
    end
  end
end
