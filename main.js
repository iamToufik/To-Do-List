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
        const Div = document.createElement('div');
       Div.setAttribute("class", Todo[i].Complete ? 'done' : '')

        const Text = document.createElement('div')
        Text.textContent = Todo[i].Name
        Div.appendChild(Text)

        const compBtn = document.createElement('button')
        compBtn.textContent = 'Complete'
        compBtn.setAttribute("onclick",`done(${i})`)
        Div.appendChild(compBtn)

        const delBtn = document.createElement('button')
        delBtn.textContent = 'Delete'
        delBtn.setAttribute("onclick",`deltask(${i})`)
        Div.appendChild(delBtn)

        output.appendChild(Div)
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