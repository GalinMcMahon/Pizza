                              // BUSINESS LOGIC
                              // using bigness instead of size to avoid conflicts
                  // OUR CONTRUCTOR:
function Pizza(bigness, toppings) {
  this.bigness = bigness;
  this.toppings = toppings;
}
                  // OUR PROTOTYPE:

var sizeCost = 0;

Pizza.prototype.cost = (function(i) {
  for(var i=0; i<=topps.length; i++) {
    var toppings = i*1.5;
    return toppings;
  }
  var sizeCost = (function() {
    if (bigness === Small) {
      var sizeCost = 8;
    } else if (bigness === Medium) {
      var sizeCost = 10;
    } else if (bigness === Large) {
      var sizeCost = 12;
    } else if (bigness === Family) {
      var sizeCost = 14;
    } return sizeCost;
  });
});

var topps = [];

                              // UI LOGIC
$(document).ready(function() {

  $("form#toppings").submit(function(event) {
    event.preventDefault();
    $("input:checked").each(function(){
      topps.push($(this).val());
    });
  });

  $("form#size").submit(function(event) {
      var bigness = $("#bigness").val();
      console.log(bigness);
      return bigness;
  });

  var chooseToppings = $("form#topps").val();
  var newPizza = new Pizza("Large", "Pepperoni");
  $("ul.sidebar-nav").append("<li>" + chooseToppings + "</li>");
});
