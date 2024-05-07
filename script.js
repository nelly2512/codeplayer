$(document).ready(function() {
  var updateOutput = function() {
    //update ouput section
    $("iframe")
      .contents()
      .find("html")
      .html(
        "<html><head><style type='text/css'>" +
          $("#css-text").val() +
          "</style></head><body>" +
          $("#html-text").val() +
          "</body></html>"
      );//IFRAME UPDATE

    //runs javascript that is in output-text
    document
      .getElementById("output-text")
      .contentWindow.eval($("#javascript-text").val());
  }; //UPDATE FUNCT

  //updates page when it loads
  updateOutput();

  //when any button is clicked
  $("button").click(function() {
    //add or remove active class from the clicked button
    $(this).toggleClass("active");

    //set a variable to button id + "-text"
    var textareaId = $(this).attr("id") + "-text";
    //toggling hidden class when btn is clicked
    $("#" + textareaId).toggleClass("hidden");
    //created a variable that keeps track of how many items are hidden
    var hiddenItems = 4 - $(".hidden").length;
    //making the sections the width of the screen divided evenly
    $(".section").width($(window).width() / hiddenItems - 10);
  }); //BUTTON CLICKED

  $(".section").width($(window).width() / 2 - 10);
  //making the sections the full height of the screen
  $(".section").height($(window).height() - $("#top-bar").height() - 15);

  //when anything is in putted into a textarea
  $("textarea").on("change keyup paste", function() {
    //it updates
    updateOutput();
  }); //TEXTAREA UPDATE
}); //READY FUNC