var Pizza = {
  inches: 0,
  toppings: "Pepperoni",
  slices: function() {
    var cut;
    if (this.toppings === "Pepperoni") {
      cut = .5;
    } else {
      cut = .4;
    }
    var sliceCounter = Math.round(this.inches * cut);
    return sliceCounter;
  }
};


$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedTopping = $('select#toppings').val();
    var inputtedInches = parseInt($('input#inches').val());

    var newPizza = Object.create(Pizza);
    newPizza.inches = inputtedInches;
    newPizza.toppings = inputtedTopping;

    $(".response").hide();
    $(".slices").text(newPizza.slices());
    $("#new-order").show();
  });
});