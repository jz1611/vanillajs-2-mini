function addTodo(event) {
    event.preventDefault();
    const listItem = document.createElement("li");
    const todoInput = document.getElementById("item").value;
    listItem.innerText = todoInput;
    listItem.addEventListener("click", completeTodo);

    const itemButton = document.createElement("button");
    itemButton.innerText = 'x';
    itemButton.addEventListener("click", removeTodo);
    listItem.append(itemButton);

    document.querySelector("ul").appendChild(listItem);
}

document.querySelector("form").addEventListener("submit", addTodo);

function removeTodo(event) {
    event.target.parentNode.remove();
}

function completeTodo(event) {
    const ariaChecked = event.target.getAttribute("aria-checked");

    if (ariaChecked !== "true") {
        document.getElementById("completed-message").style.visibility = 'visible';
        
        setTimeout(function(){
            document.getElementById("completed-message").style.visibility = 'hidden';            
        }, 2000);

        event.target.setAttribute("aria-checked", "true");
    } else {
        event.target.setAttribute("aria-checked", "false");
    }
}

