import './index.css';

let chats = {
    'Дженнифер': [
        {
            "name": "Дженнифер",
            "time": "10:40",
            "content": "Я тут кое-что нарисовала. Напиши, как освободишься."
        },
        {
            "name": "Мое имя",
            "time": "10:50",
            "content": "Хорошо. Освобожусь где-то через час."
        },
        {
            "name": "Дженнифер",
            "time": "10:55",
            "content": "Жду!"
        },
    ],
    'Сара': [
        {
            "name": "Сара",
            "time": "10:39",
            "content": "Привет. Можешь мне немного помочь?"
        },
        {
            "name": "Мое имя",
            "time": "10:40",
            "content": "Да, конечно. Что такое?"
        },
        {
            "name": "Сара",
            "time": "10:45",
            "content": "Рассказываю"
        },
    ]
}

main()

function main() {
    let pathname = document.location.pathname
    let userName = "Сара"
    if (pathname === '/chat_list.html') {
        const dialogue_list = document.querySelector(".messages")
        restoreDialogues(dialogue_list)
        dialogue_list.addEventListener('click', (event) => {
            const isDialogue = event.target.getAttribute("class") === "dialogue-text"
            if (!isDialogue)
                return
            userName = event.target.querySelector(".dialogue-name").textContent
        })
    } else if (pathname === '/index.html') {
        chat_page(userName)
    }
}


function chat_page(name) {
    console.log(name)
    // document.location.pathname = '/index.html'
    let chatName = document.querySelector('.name')
    chatName.textContent = name
    const myName = "Мое имя"
    const form = document.querySelector('form')
    const input = document.querySelector('.form-input')
    const message_list = document.querySelector('.message-list')

    if (!localStorage.getItem("chats")) {
        localStorage.setItem("chats", JSON.stringify(chats))
    }

    const chatHistory = JSON.parse(localStorage.getItem("chats"))
    let messages = chatHistory[name]

    restoreHistory(messages, message_list, myName)

    form.addEventListener('submit', handleSubmit)
    form.addEventListener('keypress', handleKeyPress)

    function handleSubmit(event) {
        event.preventDefault();
        if (input.value === "")
            return

        const message = {
            name: myName,
            time: new Date().toLocaleTimeString().slice(0, -3),
            content: input.value,
        }
        chatHistory[name].push(message)
        document.querySelector('.form-input').value = ""

        localStorage.setItem("chats", JSON.stringify(chatHistory))
        let localData = JSON.parse(localStorage.getItem("chats"))[name]
        let last = localData.length - 1
        const templateDiv =
            "<div class='message-bubble my-message'>" + "<div class='message'>" +
            "<p>" + localData[last].content + "</p>" + "<time>" +
            localData[last].time + "</time>" + "</div>" + "</div>"
        message_list.innerHTML += templateDiv
        message_list.scrollTop = message_list.scrollHeight
    }

    function handleKeyPress(event) {
        if (event.keyCode === 13) {
            form.dispatchEvent(new Event('submit'));
        }
    }
}

function restoreHistory(messages, message_list, myName) {
    messages.forEach(function (message) {
        let class_name = message.name === myName ? "my-message" : ""
        const templateDiv =
            "<div class='message-bubble " + class_name + "'>" + "<div class='message'>" +
            "<p>" + message.content + "</p>" + "<time>" +
            message.time + "</time>" + "</div>" + "</div>"
        message_list.innerHTML += templateDiv
    })
}


function restoreDialogues(dialogue_list) {
    if (!localStorage.getItem("chats")) {
        localStorage.setItem("chats", JSON.stringify(chats))
    }

    const chatHistory = JSON.parse(localStorage.getItem("chats"))

    for (let key in chatHistory) {
        const templateDiv = `
                <a href="index.html" class="dialogue">
                    <i class="material-icons">account_circle</i>
                    <div class="dialogue-text">
                        <div class="dialogue-user-text">
                            <p class="dialogue-name">${key}</p>
                            <p class="dialogue-message">${chatHistory[key].slice(-1)[0]["content"]}</p>
                        </div>
                        <div class="dialogue-nums">
                            <p class="dialogue-time">${chatHistory[key].slice(-1)[0]["time"]}</p>
                            <i class="material-icons">done_all</i>
                            <!--                        <p class="dialogue-counter">99</p>-->
                        </div>
                    </div>
                </a> `
        dialogue_list.innerHTML += templateDiv
    }
}
