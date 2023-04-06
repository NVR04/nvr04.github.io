const helloLabel = document.getElementById("helloLabel")
const helloBox = document.getElementById("helloBox")

const loading = document.getElementById("loading")
const body = document.getElementById("body")

const discordServers = document.getElementById("discordServers")
const serversDiv = document.getElementById("serversDiv")

const webhookButton = document.getElementById("webhookButton")
const base64Button = document.getElementById("base64Button")

const languages = document.getElementsByClassName("known-language")
const languagesArray = Array.from(languages);

setTimeout(function() {
    loading.classList.add("hide")
    setTimeout(function() {
        loading.classList.remove("loading")
    }, 200)
}, 2000);



languagesArray.forEach(function(language) {
    language.addEventListener("click", () => {
        window.open(`https://www.google.com/search?q=` + language.textContent.trimStart().normalize().replace("💻", "").replace("🐍", "").replace("🔪", ""), '_blank');
    }, false)
  });


discordServers.addEventListener("mouseover", () => {
    serversDiv.classList.add("hide")
}, false)
discordServers.addEventListener("mouseleave", () => {
    serversDiv.classList.remove("hide")
}, false)


webhookButton.addEventListener("click", () => {
    window.open("/webhook.html", "_self")
})
base64Button.addEventListener("click", () => {
    window.open("/base64.html", "_self")
})