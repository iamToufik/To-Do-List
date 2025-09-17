const input = document.querySelector('#input')
const output = document.querySelector('#output')
const addBtn = document.querySelector('#addBtn')

const Todo_data = []

function show(Todo_data) {
    output.innerHTML = ''
    for (let i = 0; i < Todo_data.length; i++) {
        output.innerHTML += `
        <div class = " ${Todo_data[i].complete ? 'done' : ''} "><span>${Todo_data[i].Work}</span>
        <button onclick="done('${i}')">Complete</button>
        <button onclick="deltask('${i}')">Delete</button>
        </div>
        `
    }
}

function done(i) {
    console.log(i);
    Todo_data[i].complete = !Todo_data[i].complete;
    show(Todo_data)
    console.log(Todo_data);
}

function deltask(i) {
    console.log(i);
    Todo_data.splice(i, 1)
    show(Todo_data)
}

function check(inputvalue, Todo_data) {
    if (inputvalue === '') {
        return false
    }

    for (let i = 0; i < Todo_data.length; i++) {
        if (Todo_data[i].Work === inputvalue) {
            alert("Already Exist")
            return false
        }
    }

    return true
}

function add() {
    const inputvalue = input.value.trim()
    if (check(inputvalue, Todo_data)) {
        Todo_data.push(
            {
                Work: inputvalue,
                Complete: false
            }
        )
    }

    show(Todo_data)
    input.value = ''
    input.focus()
    console.log(Todo_data);

}

addBtn.addEventListener('click', add)
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        add()
    }
})