const input = document.querySelector('#input')
const output = document.querySelector('#output')
const addBtn = document.querySelector('#addBtn')

const Todo = []

function check(inputData, Todo) {
    if (inputData === '') {
        return false
    }

    for (let i = 0; i < Todo.length; i++) {
        if (Todo[i].Name === inputData) {
            alert("Already Exist")
            return false
        }
    }

    return true
}

function show(Todo) {
    output.innerHTML = ''
    for (let i = 0; i < Todo.length; i++) {
        output.innerHTML += `
        <div class="${Todo[i].Complete ? 'done' : ''}"><span>${Todo[i].Name}</span>
        <button onclick="done('${i}')">Complete</button>
        <button onclick="deltask('${i}')">Delete</button>
        </div>
        `
    }
}

function done(i) {
    Todo[i].Complete = !Todo[i].Complete
    show(Todo)
}

function deltask(i) {
    console.log(i);
    Todo.splice(i, 1)
    show(Todo)
}

function add() {
    const inputData = input.value.trim()
    if (check(inputData, Todo)) {
        Todo.push({
            Name: inputData,
            Complete: false
        }
        )
    }
    show(Todo)
    console.log(Todo);
    input.value = ''
    input.focus()
}

addBtn.addEventListener('click', add)
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        add()
    }
}) 