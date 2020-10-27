class Block < ApplicationRecord
    belongs_to :workout, optional: true
end