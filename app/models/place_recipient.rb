class PlaceRecipient < ApplicationRecord
  belongs_to :place
  belongs_to :recipient, class_name: "User", foreign_key: "recipient_id"
  validates_uniqueness_of :recipient_id, scope: :place_id
end
