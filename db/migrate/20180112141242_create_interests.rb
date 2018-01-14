class CreateInterests < ActiveRecord::Migration[5.1]
  def change
    create_table :interests do |t|
      t.references :user, foreign_key: true
      t.boolean :band
      t.boolean :jam
      t.boolean :collaboration
      t.boolean :partner

      t.timestamps
    end
  end
end
