class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.integer :uploader_id, null: false
      t.integer :views, null: false
      t.text :description

      t.timestamps
    end
    add_index :videos, :uploader_id
  end
end
