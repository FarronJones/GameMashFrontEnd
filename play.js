document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    if (!canvas || !ctx) {
        console.error("Canvas not found!");
        return;
    }

    const socket = new WebSocket("ws://localhost:8081/game"); // adjust port if needed

    let gameState = null;

    socket.onopen = () => {
        console.log("✅ Connected to game server.");
        socket.send(JSON.stringify({ action: "startGame" }));
    };

    socket.onmessage = (event) => {
        try {
            const data = JSON.parse(event.data);
            gameState = data;
            drawGame(data);
        } catch (err) {
            console.error("❌ Error parsing message:", err);
        }
    };

    socket.onclose = () => {
        console.log("🔌 Disconnected from game server.");
    };

    document.addEventListener("keydown", (e) => {
        const key = e.key.toLowerCase();

        switch (key) {
            case "a":
                socket.send(JSON.stringify({ action: "moveLeft" }));
                break;
            case "d":
                socket.send(JSON.stringify({ action: "moveRight" }));
                break;
            case "w":
            case " ":
                socket.send(JSON.stringify({ action: "jump" }));
                break;
            case "p":
                socket.send(JSON.stringify({ action: "pause" }));
                break;
            case "u":
                socket.send(JSON.stringify({ action: "unpause" }));
                break;
            case "r":
                socket.send(JSON.stringify({ action: "resetGame" }));
                break;
            case "m":
                socket.send(JSON.stringify({ action: "toggleMusic" }));
                break;
            case "s":
                socket.send(JSON.stringify({ action: "toggleSfx" }));
                break;
        }
    });

    document.addEventListener("keyup", () => {
        socket.send(JSON.stringify({ action: "stop" }));
    });

    function drawGame(state) {
        if (!state || !state.player) return;

        const { player, gamestate, paused, gameOver } = state;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw player as a red square
        ctx.fillStyle = "red";
        ctx.fillRect(player.x, player.y, player.width, player.height);

        // Draw status text
        ctx.fillStyle = "black";
        ctx.font = "18px monospace";
        ctx.fillText(`State: ${gamestate}`, 10, 25);
        if (paused) ctx.fillText("⏸️ Paused", 10, 50);
        if (gameOver) ctx.fillText("💀 Game Over", 10, 75);
    }
});
