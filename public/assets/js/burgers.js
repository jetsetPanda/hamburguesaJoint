
$(function() {
    $(".change-devoured").on("click", function(event) {
        console.log("DEVOURED UTTON CLICKED!!!!!");
        var id = $(this).data("id");
        var newDevoured = $(this).data("devoured");

        var newDevouredStatus = {
            devoured: newDevoured
        };

        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newDevouredStatus
        }).then(
            function() {
                console.log("devoured status changed to: ", newDevoured);
                location.reload();//reloading to update list
            }
        );
    });

    $(".dreamForm").on("submit", function(event) {
        event.preventDefault(); //<<<jQ: always preventDefault on any submit event

        var newDream = {
            burger_name: $("#burgrname").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        $.ajax("/api/burger", {
            type: "POST",
            data: newDream
        }).then(
          function() {
            console.log("You dreamed a dream and that dream was a hamburgesa");
            location.reload();
          }
        );
    });
});