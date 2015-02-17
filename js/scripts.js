var setType = function(sideA, sideB, sideC) {
  if ((sideA === sideB) && (sideA === sideC)) {
    return "Equilateral";
  } else if ((sideA !== sideB) && (sideB !== sideC)) {
    return "Scalene";
  } else
    return "Isosceles";
};

var isTriangle = function(sideA, sideB, sideC) {
  if (((sideA + sideB) < sideC) || ((sideB + sideC) < sideA) || ((sideC + sideA) < sideB)){
    return false;
  } else {
    return true;
  }
};

$(document).ready(function() {
  $("#triangleForm").submit(function(event) {

    var sideA = parseInt($("#sideA").val());
    var sideB = parseInt($("#sideB").val());
    var sideC = parseInt($("#sideC").val());

    var newTriangle = null;

    if (isTriangle(sideA, sideB, sideC)) {
      newTriangle = {sideA: sideA, sideB: sideB, sideC: sideC, type: setType(sideA, sideB, sideC)};
      sideA = $("#sideA").val("");
      sideB = $("#sideB").val("");
      sideC = $("#sideC").val("");
    } else {
      alert("That does NOT make a triangle!!");
    }

    if (newTriangle !== null) {
      if (newTriangle.type === "Equilateral") {
        $("ul#listEquilateral").append("<li>" + sideA + ", " + sideB + ", " + sideC + "</li>");
      } else if (newTriangle.type === "Isosceles"){
        $("ul#listIsosceles").append("<li>" + sideA + ", " + sideB + ", " + sideC + "</li>");
      } else if (newTriangle.type === "Scalene"){
        $("ul#listScalene").append("<li>" + sideA + ", " + sideB + ", " + sideC + "</li>");
      }
    }
    event.preventDefault();
  });
});
