
document.addEventListener('DOMContentLoaded', function () {

    //Objective 1:
    let button = document.createElement('button');
    button.style.marginLeft = '75px';
    button.style.marginTop = '5px';
    button.style.width = '100px';
    let buttonText = document.createTextNode('Click Me');
    button.appendChild(buttonText);
    document.body.prepend(button);

    button.addEventListener("click", function () {
        alert("You did it!!  You clicked the button!!");
    })

    //Objective 2:
    let displayButton = document.getElementById('displayButton')
    displayButton.addEventListener("click", function () {
        let text = document.getElementById('textbox').value;
        alert(text);
    })

    //Objective 3:
    let hoverSquare = document.getElementById('hoverSquare');
    hoverSquare.style.backgroundColor = 'black';
    hoverSquare.style.height = '100px';
    hoverSquare.style.width = '100px';
    hoverSquare.style.marginLeft = '65px';


    hoverSquare.addEventListener("mouseover", function () {
        hoverSquare.style.backgroundColor = 'blue';
        hoverSquare.addEventListener("mouseout", function () {
            hoverSquare.style.backgroundColor = 'black';
        })
    })

    //Objective 4:
    let p = document.createElement('p');
    let pText = document.createTextNode("Clicking this text will change it's color.");
    p.appendChild(pText);
    document.body.appendChild(p);

    p.addEventListener("click", function () {
        let colors = ["orchid", "skyblue", "olivedrab", "sandybrown", "magenta"];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        p.style.color = randomColor;
    })

    // Objective 5:
    let nameDiv = document.createElement("div");
    nameDiv.id = "nameDiv";
    document.body.appendChild(nameDiv);

    let nameDivButton = document.createElement("button");
    nameDivButton.textContent = "My Name:";
    nameDiv.appendChild(nameDivButton);

    nameDivButton.addEventListener("click", function () {
        let newSpan = document.createElement("span");
        newSpan.textContent = "Jesse Cammarano ";
        nameDiv.appendChild(newSpan);
    });

    //Objective 6:
    let friendButton = document.getElementById("friendButton");
    friendButton.style.marginLeft = '72px';
    friendButton.textContent = "Add Friend:";
    let friendList = document.getElementById("friendList");

    let counter = 0;

    friendButton.addEventListener("click", function () {
        const friends = ["Zach", "Ed", "Mike", "Andrew", "Tony", "Tyler", "Maria", "Morgan", "Rachel", "Owen"];
        if (counter == 10) {
            return;
        } else {
            let friend = friends[counter];
            let listItem = document.createElement("li");
            listItem.textContent = friend;
            friendList.appendChild(listItem);
            counter++;
        };
    });
})


