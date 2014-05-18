class CreateFakes < ActiveRecord::Migration
  def change
    create_table :fakes do |t|

      t.timestamps
    end
  end
end
