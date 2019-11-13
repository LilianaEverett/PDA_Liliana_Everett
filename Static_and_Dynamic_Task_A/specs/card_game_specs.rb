require('minitest/autorun')
require('minitest/rg')
require_relative('../card_game')

class TestCard < MiniTest::Test

  def setup
    @card1 = Card.new("Hearts", 1)
    @card2 = Card.new("Diamonds", 6)
    @cards = [@card1, @card2]
  end

  def test_check_for_ace__true
    assert_equal(true, @card1.check_for_ace)
  end

  def test_check_for_ace__false
    assert_equal(false, @card2.check_for_ace)
  end

  def test_highest_card
    result = Card.highest_card(@card1, @card2)
    assert_equal(6, result)
  end

  def test_cards_total
    result = Card.cards_total(@cards)
    assert_equal("You have a total of 7", result)
  end

end
