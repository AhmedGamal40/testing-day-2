var User = require("../../task2");

describe('Here Testing User', function() {
  let user;

  beforeEach(function() {
    user = new User('Ahmed', 1234);
  });

  describe('Test The Function addToCart', function() {
    it('should add a product to the cart array', function() {
      const product = {
        name: 'samsung',
        price: 1000,
      };
      user.addToCart(product);
      expect(user.cart).toContain(product);
    });
  });

  describe('Test The Function calculateTotalCartPrice', function() {
    it('should return the cart array total price', function() {
      const productOne = {
        name: 'LG',
        price: 1000,
      };
      const productTwo = {
        name: 'iphone',
        price: 500,
      };
      user.addToCart(productOne);
      user.addToCart(productTwo);
      expect(user.calculateTotalCartPrice()).toBe(1500);
    });
  });

  describe('testing checkout', function() {
    let paymentModel;

    beforeEach(function() {
      paymentModel = {
        goToVerifyPage: jasmine.createSpy('goToVerifyPage'),
        returnBack: jasmine.createSpy('returnBack'),
        isVerify: jasmine.createSpy('isVerify'),
      };
    });

    it('should call paymentModel methods', function() {
      user.y(paymentModel);
      expect(paymentModel.goToVerifyPage).toHaveBeenCalled();
      expect(paymentModel.returnBack).toHaveBeenCalled();
    });

    it('should return true if payment is verified', function() {
      paymentModel.isVerify.and.returnValue(true);
    expect(user.y(paymentModel)).toBeTrue();
    });

    it('should return false if payment is not verified', function() {
      paymentModel.isVerify.and.returnValue(false);
        expect(user.y(paymentModel)).toBeFalse();
    });
  });
});