class Fake < ActiveRecord::Base

  def self.bids
    [
      { user_id: 1, min_bid: 13, created_at: 23432432 },
      { user_id: 3, min_bid: 12, created_at: 23432431 },
      { user_id: 2, min_bid: 11,  created_at: 23432452 }
    ]
  end

  def self.available_dobbies
    [
      { user_id: 1 },
      { user_id: 3 },
      { user_id: 2 }
    ]
  end
end
