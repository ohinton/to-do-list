//business logic
// function todoItem(item) {
//   this.item = item;
// }

// user interface logic
$(document).ready(function() {
  $("form#toDo").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#new-todo").val();

    $("ul#things-to-do").append("<li>" + userInput + "</li>");

    $("#things-to-do").show();

    //$("ul#things-to-do").children("li").click(function() {
      // $(this).remove();
      $("ul#things-to-do").children("li").click(function() {
          $(this).appendTo("ul#finished-items");
      });
    });
  });
  //});
