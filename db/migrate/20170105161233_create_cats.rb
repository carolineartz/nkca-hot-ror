class CreateCats < ActiveRecord::Migration[5.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :favorite_thing
      t.string :color

      t.timestamps
    end
  end
end
