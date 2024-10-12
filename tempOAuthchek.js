const oAuth = "7vcag5f4vb0omgzpx9svrlya0cgkfp";
const user = "maaagin";
const channel = "9impulse";

const socket = new WebSocket('wss://irc-ws.chat.twitch.tv:443');

socket.addEventListener('open', (event) => {
    socket.send(`PASS oauth:${oAuth}`);
    socket.send(`NICK ${user}`);
    socket.send(`JOIN #${channel}`);
});

socket.addEventListener('message', (event) => {
    // document.getElementById("serverOutput").innerText += event.data;
    // if (event.data.includes("Hello World")) socket.send(`PRIVMSG #${channel} :cringe`);
    // if (event.data.includes("PING")) socket.send("PONG");
    // if (event.data.includes("PART")) {
    //     socket.send(`JOIN #${randomChannel}`);
    // }
    console.log(event.data)
});