                              // BUSINESS LOGIC
                              // using bigness instead of size to avoid conflicts
                  // OUR CONTRUCTOR:
function Pizza(bigness, toppings) {
  this.bigness = bigness;
  this.toppings = toppings;
}
                  // OUR PROTOTYPE:

// var sizeCost = 0;

Pizza.prototype.cost = (function() {
  var totalCost = 0;

  for(var i=0; i<this.toppings.length; i++) {
    if (this.toppings[i].checked)
      totalCost = totalCost + 1.5;
  }

    if (this.bigness === "Small") {
      totalCost = totalCost +  8;
    } else if (this.bigness  === "Medium") {
      totalCost = totalCost + 10;
    } else if (this.bigness  === "Large") {
      totalCost = totalCost + 12;
    } else if (this.bigness  === "Family") {
      totalCost = totalCost + 14;
    }

    return totalCost;
});


function placeOrder() {
    var bigness = document.getElementById('bigness').value;
    var toppings = document.getElementsByName('toppings[]');

    var myPizza = new Pizza(bigness, toppings);
    var totalCost = myPizza.cost();

    document.getElementById('output').innerHTML = "Total Cost: $" + totalCost;
    //alert(totalCost);
}
                              // UI LOGIC
$(document).ready(function() {
//
event.preventDefault();
});
//   $("form#toppings").submit(function(event) {
//     $("input:checked").each(function(){
//       topps.push($(this).val());
//     });
//   });
//
//   $("form#size").submit(function(event) {
//       var bigness = $("#bigness").val();
//       console.log(bigness);
//       return bigness;
//   });
//
//   var chooseToppings = $("form#topps").val();
//   var newPizza = new Pizza("Large", "Pepperoni");
//   $("ul.sidebar-nav").append("<li>" + chooseToppings + "</li>");
// });
