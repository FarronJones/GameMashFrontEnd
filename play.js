document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d"); // Get the 2D drawing context
    let playerDiv = document.querySelector("#player"); // You can remove this as it won't be needed

    if (!canvas) {
        console.error("Canvas not found!");
        return;
    }

    const socket = new WebSocket("ws://localhost:8081/game");

    // Handle WebSocket connection
    socket.onopen = () => {
        console.log("Connected to Game!");
    };

    // Handle incoming messages (game state updates)
    socket.onmessage = (event) => {
        try {
            const gameState = JSON.parse(event.data);
            updateGameScreen(gameState);
        } catch (error) {
            console.error("Error parsing game state:", error);
        }
    };

    // Handle player key presses (sending actions to backend)
    document.addEventListener("keydown", (event) => {
        if (["w", "a", "s", "d"].includes(event.key.toLowerCase())) {
            socket.send(event.key); // Send the action to the backend
        }
    });

    // Handle WebSocket closure
    socket.onclose = () => {
        console.log("Disconnected from Game.");
    };

    // Function to update the game screen with the latest player state
    function updateGameScreen(gameState) {
        if (!gameState) return;

        // Clear the canvas before drawing new frame
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // You can render the player, game elements, etc., on the canvas
        // For example, drawing a player as a red circle
        ctx.fillStyle = "red"; // Set player color
        ctx.beginPath();
        ctx.arc(gameState.playerX * 50, gameState.playerY * 50, 15, 0, Math.PI * 2);
        ctx.fill(); // Draw the player

        // Optional: Display the score and other game info as text
        ctx.fillStyle = "black"; // Set text color
        ctx.font = "20px Arial";
        ctx.fillText(`Player: ${gameState.playerId} | Score: ${gameState.score}`, 10, 30);

        // You can add more game elements, like obstacles, backgrounds, etc.
    }
});