# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180112141721) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "intents", force: :cascade do |t|
    t.bigint "user_id"
    t.boolean "jam"
    t.boolean "recording"
    t.boolean "live"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_intents_on_user_id"
  end

  create_table "interests", force: :cascade do |t|
    t.bigint "user_id"
    t.boolean "band"
    t.boolean "jam"
    t.boolean "collaboration"
    t.boolean "partner"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_interests_on_user_id"
  end

  create_table "profilers", force: :cascade do |t|
    t.bigint "user_id"
    t.integer "age"
    t.boolean "gender"
    t.decimal "location_lat"
    t.decimal "location_lon"
    t.boolean "pop"
    t.boolean "rock"
    t.boolean "jazz"
    t.boolean "folk"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_profilers_on_user_id"
  end

  create_table "recommendations", force: :cascade do |t|
    t.bigint "user_id"
    t.text "recommended_users"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_recommendations_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "authentication_token"
    t.string "name"
    t.text "description"
    t.text "eperience"
    t.index ["authentication_token"], name: "index_users_on_authentication_token"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "intents", "users"
  add_foreign_key "interests", "users"
  add_foreign_key "profilers", "users"
  add_foreign_key "recommendations", "users"
end
