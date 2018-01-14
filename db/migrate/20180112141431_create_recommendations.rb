class CreateRecommendations < ActiveRecord::Migration[5.1]
  def change
    create_table :recommendations do |t|
      t.references :user, foreign_key: true
      t.text :recommended_users

      t.timestamps
    end
  end
end
