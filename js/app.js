$( document ).ready(function() {
    $("#todoInput").on("submit", function() {
        var task = $("#task").val();

        // If the input text is at least one character in length,
        // then add the task as an unordered list item to the todo list,
        // and reset the form.
        if (task.length > 0){
            $('#todoList').append('<li>' + task + '</li>');
            $('#todoInput')[0].reset();

            //Upon click of list item, hide task
            $("li").click(function(){
                $(this).hide();
            });
        }
        return false;
    });
});




