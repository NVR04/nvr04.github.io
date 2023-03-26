const discordIcon = document.getElementById("discordIcon")
const discordIframe = document.getElementById("discordIframe")
const backgroundVideo = document.getElementById("backgroundVideo")
const toolButton = document.getElementById("toolButton")
const root = document.querySelector(':root')

let discordIconToggled = false
let contactButtonToggled = false

const online = [35, 165, 90]
const dnd = [240, 71, 71]
const idle = [240, 178, 50]
const offline = [128, 132, 142]
let color = online


discordIcon.addEventListener("click", () => {
    discordIconToggled = !discordIconToggled
    if (discordIconToggled === true) {
        discordIframe.classList.remove("hidden")
        discordIframe.classList.remove("set-below-iframe")
        discordIframe.classList.add("show")
        discordIframe.classList.add("set-above-iframe")
        discordIcon.classList.add("toggled")
    }
    else{
        discordIframe.classList.add("hidden")
        discordIframe.classList.add("set-below-iframe")
        discordIframe.classList.remove("show")
        discordIframe.classList.remove("set-above-iframe")
        discordIcon.classList.remove("toggled")
    }
}, false)

toolButton.addEventListener("click", () => {
    window.location.href = "webhook.html";
}, false)

async function getColor() {
    await fetch("https://api.lanyard.rest/v1/users/912465721081081896").then(async(res) => {
        await res.json().then((json) => {
            const status = json.data.discord_status
            if (status === "online") {
                color = online
            } else if (status === "dnd") {
                color = dnd
            } else if (status === "idle") {
                color = idle
            } else if (status === "offline") {
                color = offline
            }
        })
    })
    root.style.setProperty('--activity-color', `rgb(${color[0]}, ${color[1]}, ${color[2]})`);
}

getColor()



