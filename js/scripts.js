var Pizza = {
  toppings: "Pepperoni",
  
  cost: function() {

    var price;

    if (this.toppings === "Pepperoni") {
      price = 12;
    } else {

     price = 10;
    }
    return price;
  }
};


$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedTopping = $('select#toppings').val();

    var newPizza = Object.create(Pizza);
    newPizza.toppings = inputtedTopping;

    $(".response").hide();
    $(".cost").text(newPizza.cost().toString());
    $("#new-order").show();
  });
});