### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame
  # should be class Card

# This class needs a def initialize and attr_reader or accessor before starting any methods


  def checkforAce(card)
    # the name should be check_for_ace.
    # doesn't need argument because this method will be applied to an instance
    if card.value = 1
      # should have 2 == instead of 1 because 1 = means assigning a value to a variable
      # should be "if value == 1"
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
  # it's def, not dif.
  # should be self.highest_card because the method is applied to the all class and not just 1 instance.
  # there should be a comma between the 2 parameters.
  if card1.value > card2.value
    return card
    # should return card1
  else
    return card2
  end
end
end
# this last end doesn't need to exist
# The identation is also wrong

def self.cards_total(cards)
  total
  # total is a variable, so it needs to be assigned a value and this one should be 0
  for card in cards
    total += card.value
    return "You have a total of" + total
    # this return should be after the end because the loop is assigning a value to the variable "total" and return needs that value
  end
end
# This method should belong to the Card Class. Then, this method won't need any arguments

```
