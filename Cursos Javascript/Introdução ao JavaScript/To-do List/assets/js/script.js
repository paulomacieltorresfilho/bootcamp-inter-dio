let buttonAdd = document.getElementById('add-button');
let inputText = document.getElementById('add-input')
let taskDiv = document.getElementById('tasks');

function addTask() {
    let task = document.createElement('label');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    task.appendChild(checkbox);
    task.appendChild(
        document.createTextNode(
            inputText.value
        )
    );
    taskDiv.appendChild(task);
}


buttonAdd.addEventListener("click", addTask);