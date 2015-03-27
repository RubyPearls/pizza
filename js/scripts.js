var Pizza = {
  inches: 0,
  toppings: "Pepperoni",
  slices: function() {
    var division;
    if (this.toppings === "Pepperoni") {
      division = .5;
    } else {
      division = .4;
    }
    var sliceCounter = Math.round(this.inches * division);
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
    newPizza.toppingChoice = inputtedTopping;

    $(".response").hide();
    $(".slices").text(newPizza.slices());
    $("#new-order").show();
  });
});