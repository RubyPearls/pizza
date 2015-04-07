describe("Pizza", function(){
	describe("cost", function() {
		it("returns the cost pepperoni", function() {
			var newPizza = Object.create(Pizza);
			newPizza.toppings = "Pepperoni";
			expect(newPizza.cost()).to.equal(12);
		});

	  it("will return the cost if user chooses cheese", function() {
	     var newPizza = Object.create(Pizza);
	     newPizza.toppings = "Mozzarella Cheese";
	     expect(newPizza.cost()).to.equal(10);
	  });
  });
});
