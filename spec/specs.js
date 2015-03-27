describe("Pizza", function(){
	describe("slices", function() {
		it("returns the number of slices if the user chooses pepperoni", function() {
			var newPizza = Object.create(Pizza);
			newPizza.inches = 12;
			newPizza.toppings = "Pepperoni";
			expect(newPizza.slices()).to.equal(6);
		});

	  it("will return the number of slices if user chooses cheese", function() {
	     var newPizza = Object.create(Pizza);
	     newPizza.inches = 12;
	     newPizza.toppings = "Mozzarella Cheese";
	     expect(newPizza.slices()).to.equal(8);
	  });

    it("will prompt for a number if user enters alphabets", function() {
      var newPizza = Object.create(Pizza);
      newPizza.inches = "abc";
      newPizza.toppings = "Pepperoni";
      expect(newPizza.slices()).to.eql(NaN);
    });
  });
});
