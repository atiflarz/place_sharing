class CreatePlaceRecipients < ActiveRecord::Migration[6.1]
  def change
    create_table :place_recipients do |t|
      t.references :place, index: true
      t.references :recipient, index: true, foreign_key: {to_table: :users}
      t.timestamps
    end
  end
end
