$(document).ready(function () {
    // Objective 1:
    let button = $("<button></button>");
    button.text("Click Me");
    $("body").append(button);

    $(button).click(function () {
        alert("You did it!!  You clicked the button!")
    });

    // Objective 2: 
    $("#displayButton").click(function () {
        alert($("input[type=text]").val())
    });

    // Objective 3:
    $("#hoverSquare").css({
        "width": "100px",
        "height": "100px",
        "background-color": "black"
    });

    $("#hoverSquare").mouseover(function () {
        $("#hoverSquare").css({
            "width": "100px",
            "height": "100px",
            "background-color": "blue"
        });
    });
    $("#hoverSquare").mouseout(function () {
        $("#hoverSquare").css({
            "width": "100px",
            "height": "100px",
            "background-color": "black"
        });
    });

    // Objective 4:
    let p = $("<p></p>")
    p.text("Clicking this text will change it's color.")
    $("body").append(p);

    $(p).click(function () {
        p.css("color", changeColor());
    });

    function changeColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Objective 5:
    let newDiv = $("<div></div>");
    $("body").append(newDiv);

    let nameButton = $("<button></button>");
    nameButton.text("My Name:");
    $(newDiv).append(nameButton);

    $(nameButton).click(function () {
        let newSpan = $("<span></span>");
        newSpan.text("Jesse Cammarano ")
        $(newDiv).append(newSpan);
    });

    // Objective 6:
    let counter = 0;

    $("#friendButton").click(function () {
        const friends = ["Zach", "Ed", "Mike", "Andrew", "Tony", "Tyler", "Maria", "Morgan", "Rachel", "Owen"]
        if (counter == 10) {
            return;
        } else {
            let friend = friends[counter];
            let newItem = $("<li></li>");
            newItem.text(friend);
            $("#friendList").append(newItem);
            counter++;
        };
    });
});