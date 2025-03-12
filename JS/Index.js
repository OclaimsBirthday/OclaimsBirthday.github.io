const API_KEY = "testkey";
const backendURL = "https://stable-supposedly-boar.ngrok-free.app"; // Use public URL

const ws = new WebSocket(backendURL.replace("http", "ws"));

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    document.getElementById("counter").innerText = data.number;
};

async function incrementNumber() {
    await fetch(`${backendURL}/number/increment`, {
        method: "POST",
        headers: { "Authorization": `Bearer ${API_KEY}` }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("increment-btn").addEventListener("click", incrementNumber);
});
