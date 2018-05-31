// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {

      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");

      if (newDevoured) {
        var newDevouredState = {
          devoured: newDevoured
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevouredState
        }).then(
          function() {
            console.log("changed devoured to", newDevoured);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      } else {
        return;
      }
  
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      var state = $("#burgergif").attr("data-state");
      var newBurger = {
        name: $("#ca").val().trim(),
        devoured: false
      };

      // if (state === "still") {
      //   $("#burgergif").attr("src", $("#burgergif").attr("data-animate"));
      //   $("#burgergif").attr("data-state", "animate")
      // } else {
      //   $("#burgergif").attr("src", $("#burgergif").attr("data-still"));
      //   $("#burgergif").attr("data-state", "still")
      // }
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  