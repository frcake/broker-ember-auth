class CreateIntents < ActiveRecord::Migration[5.1]
  def change
    create_table :intents do |t|
      t.references :user, foreign_key: true
      t.boolean :jam
      t.boolean :recording
      t.boolean :live

      t.timestamps
    end
  end
end
