                              // BUSINESS LOGIC
                              // using bigness instead of size to avoid conflicts
                  // OUR CONSTRUCTOR:
function Pizza(bigness, toppings) {
  this.bigness = bigness;
  this.toppings = toppings;
}
                  // OUR PROTOTYPE:
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
                                // UI LOGIC
$(document).ready(function() {
  $("#submit").click(function() {
    var bigness = document.getElementById('bigness').value;
    var toppings = document.getElementsByName('toppings');

    var myPizza = new Pizza(bigness, toppings);
    var totalCost = myPizza.cost();
    var price = totalCost.toFixed(2);
    event.preventDefault();
    $("#output h3").hide();
    document.getElementById("Price").innerHTML = "Your total is: $" + price;
    // alert(toppings);
  });
});
