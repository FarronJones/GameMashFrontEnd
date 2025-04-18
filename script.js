        //Play.html
        document.getElementById("sendBtn").addEventListener("click", function() {
          const inputField = document.getElementById("chatInput");
          const chatBox = document.getElementById("chatBox");
          const message = inputField.value.trim();
      
          if (message !== "") {
              const newMessage = document.createElement("div");
              newMessage.classList.add("user-message");
      
              // ✅ Get profile info from localStorage
              const firstName = localStorage.getItem("firstName") || "Guest";
              const avatar = localStorage.getItem("avatar") || "profile-placeholder.png";
      
              newMessage.innerHTML = `
                  <img src="images/${avatar}" alt="${firstName}">
                  <span><strong>${firstName}:</strong> ${message}</span>
              `;
      
              chatBox.appendChild(newMessage);
              chatBox.scrollTop = chatBox.scrollHeight;
              inputField.value = "";
          } else {
              console.log("Empty message, not sending.");
          }
      });

        document.getElementById("chatInput").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                document.getElementById("sendBtn").click();
            }
        });

        const randomMessages = [
            "I love this game!",
            "Let's play again soon!",
            "Can someone explain the rules?",
            "This game is getting intense!",
            "Who's up for a rematch?",
            "I can't believe I won that!",
            "That was a close call!",
            "I'm totally stuck, any tips?",
            "Who's ready for another round?",
            "This game is way more fun than I expected!",
            "Does anyone know how to level up faster?",
            "I think I found a strategy that works!",
            "I can't stop playing this!",
            "What level are you guys on?",
            "Anyone want to team up for the next match?",
            "This is the best game I've played in a while!",
            "Anyone else love this character?",
            "Who's been playing this longer than me?",
            "Is it just me or is this game getting harder?",
            "Let's keep going, I'm on a roll!"
        ];

        function sendRandomPlayerMessage() {
            const chatBox = document.getElementById("chatBox");
            const message = randomMessages[Math.floor(Math.random() * randomMessages.length)]; 
            const playerId = Math.floor(Math.random() * 5) + 1; 
            const playerName = `Player${playerId}`;

            
            const playerProfilePics = [
                "images/avatar1.avif", 
                "images/avatar2.png", 
                "images/avatar3.png", 
                "images/avatar4.png",
                "images/profile-icon.jpg"
            ];

            const newMessage = document.createElement("div");
            newMessage.classList.add("user-message");
            
            newMessage.innerHTML = `
                <img src="${playerProfilePics[playerId - 1]}" alt="${playerName}"> <!-- Set player profile picture -->
                <span><strong>${playerName}:</strong> ${message}</span>
            `;
            
            chatBox.appendChild(newMessage);
            chatBox.scrollTop = chatBox.scrollHeight;
        }


        setInterval(sendRandomPlayerMessage, 5000);


        function deleteMessages() {
            const chatBox = document.getElementById("chatBox");
            chatBox.innerHTML = "";
        }


        setInterval(deleteMessages, 60000);

        //Screen settings for play.html
        const fullscreenBtn = document.getElementById("fullscreenBtn");
        const gameScreen = document.querySelector(".game-screen");

        fullscreenBtn.addEventListener("click", () => {
            // Check if the browser supports fullscreen
            if (gameScreen.requestFullscreen) {
                gameScreen.requestFullscreen();
            } else if (gameScreen.mozRequestFullScreen) { // Firefox
                gameScreen.mozRequestFullScreen();
            } else if (gameScreen.webkitRequestFullscreen) { // Chrome, Safari and Opera
                gameScreen.webkitRequestFullscreen();
            } else if (gameScreen.msRequestFullscreen) { // IE/Edge
                gameScreen.msRequestFullscreen();
            }
        });
            
        //Game tips for play.html
        document.addEventListener('DOMContentLoaded', () => {
            const exclamationBtn = document.querySelector('.exclamation');
            const gameContainer = document.querySelector('.game-container');
            const settingsPanel = document.querySelector('#settingsPanel');
            const settingsBtn = document.querySelector('#settingsBtn');
            const closeSettingsBtn = document.querySelector('#closeSettings');
            const fullscreenBtn = document.querySelector('#fullscreenBtn');
            const resetBtn = document.querySelector('#resetBtn');
            const chatBox = document.getElementById('chatBox');
            const chatInput = document.getElementById('chatInput');
            const sendBtn = document.getElementById('sendBtn');

            let displayTips = false;
            let tipInterval = null;

            // Sample game tips array
            const gameTips = [
                "Tip 1: Remember to save your progress often!",
                "Tip 2: Use the map to navigate more effectively.",
                "Tip 3: Look out for hidden paths.",
                "Tip 4: Use the inventory to manage your items.",
                "Tip 5: Always be ready for surprise challenges.",
                "Tip 6: Complete side quests for bonus rewards.",
                "Tip 7: Speak to NPCs to uncover secrets.",
                "Tip 8: Upgrade your gear to improve your stats.",
                "Tip 9: Keep an eye on the weather in the game.",
                "Tip 10: Stock up on health potions for tough battles.",
                "Tip 11: Some enemies have specific weaknesses.",
                "Tip 12: Pay attention to the storyline for clues.",
                "Tip 13: Try different strategies to defeat bosses.",
                "Tip 14: Collect rare items to unlock achievements.",
                "Tip 15: Always check your quest log for updates.",
                "Tip 16: Explore every nook and cranny of the game world.",
                "Tip 17: You can fast travel once you've unlocked locations.",
                "Tip 18: Learn the enemy patterns to counter their attacks.",
                "Tip 19: Use stealth to avoid unnecessary fights.",
                "Tip 20: Don't be afraid to experiment with different playstyles."
            ];

            // Show or hide the tips based on user input
            const showGameTips = () => {
                if (displayTips) {
                    const tipBox = document.createElement('div');
                    tipBox.style.position = 'absolute';
                    tipBox.style.top = '20px';
                    tipBox.style.left = '20px';
                    tipBox.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                    tipBox.style.color = 'white';
                    tipBox.style.padding = '10px';
                    tipBox.style.borderRadius = '10px';
                    tipBox.style.maxHeight = '80vh';
                    tipBox.style.overflowY = 'scroll';
                    tipBox.style.width = '200px';
                    gameContainer.appendChild(tipBox);

                    // Add a close button (X) to the tip box
                    const closeBtn = document.createElement('button');
                    closeBtn.innerText = 'X';
                    closeBtn.style.position = 'absolute';
                    closeBtn.style.top = '-5px';
                    closeBtn.style.right = '5px';
                    closeBtn.style.background = 'transparent';
                    closeBtn.style.border = 'none';
                    closeBtn.style.color = 'white';
                    closeBtn.style.fontSize = '16px';
                    closeBtn.style.cursor = 'pointer';
                    closeBtn.addEventListener('click', () => {
                        clearInterval(tipInterval);  
                        tipBox.remove();  
                        displayTips = false;
                    });
                    tipBox.appendChild(closeBtn);

                    let currentTipIndex = 0;
                    let currentTipElement = null;

                    // Function to show tips one by one
                    const showNextTip = () => {
                        if (currentTipElement) {
                            currentTipElement.remove(); 
                        }

                        if (currentTipIndex < gameTips.length) {
                            const tipElement = document.createElement('p');
                            tipElement.innerText = gameTips[currentTipIndex];
                            tipBox.appendChild(tipElement);
                            currentTipElement = tipElement;
                            currentTipIndex++;
                        } else {
                            clearInterval(tipInterval);
                        }
                    };

                    
                    tipInterval = setInterval(showNextTip, 5000);

                    
                    showNextTip();
                }
            };

            exclamationBtn.addEventListener('click', () => {
                if (displayTips) return;

                
                const promptContainer = document.createElement('div');
                promptContainer.style.position = 'absolute';
                promptContainer.style.top = '50%';
                promptContainer.style.left = '50%';
                promptContainer.style.transform = 'translate(-50%, -50%)';
                promptContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                promptContainer.style.color = 'white';
                promptContainer.style.padding = '20px';
                promptContainer.style.borderRadius = '10px';
                promptContainer.style.textAlign = 'center';

                const message = document.createElement('p');
                message.innerText = 'Do you want to display game tips while you play?';
                promptContainer.appendChild(message);

                const yesButton = document.createElement('button');
                yesButton.innerText = 'Yes';
                yesButton.style.marginRight = '10px';
                yesButton.addEventListener('click', () => {
                    displayTips = true;
                    document.body.removeChild(promptContainer);
                    showGameTips();
                });

                const noButton = document.createElement('button');
                noButton.innerText = 'No';
                noButton.addEventListener('click', () => {
                    displayTips = false;
                    document.body.removeChild(promptContainer); 
                });

                promptContainer.appendChild(yesButton);
                promptContainer.appendChild(noButton);

                document.body.appendChild(promptContainer);
            });

            // Existing logic for settings button
            settingsBtn.addEventListener('click', () => {
                settingsPanel.style.display = settingsPanel.style.display === 'none' ? 'flex' : 'none';
            });

            closeSettingsBtn.addEventListener('click', () => {
                settingsPanel.style.display = 'none';
            });

            resetBtn.addEventListener('click', () => {
                // Reset logic (if necessary)
            });

            fullscreenBtn.addEventListener('click', () => {
                // Fullscreen logic (if necessary)
            });
        });
        //community 
        document.getElementById("toggle-thoughts").addEventListener("click", function () {
            const container = document.getElementById("thoughts-container");
            const arrow = document.getElementById("toggle-thoughts");
            container.classList.toggle("active");
            arrow.classList.toggle("rotate");
          });
          
          document.getElementById("toggle-discord").addEventListener("click", function () {
            const content = document.getElementById("discord-content");
            const arrow = document.getElementById("toggle-discord");
            content.classList.toggle("active");
            arrow.classList.toggle("rotate");
          });
          
          function postThought() {
            const thoughtInput = document.getElementById("thought-input");
            const container = document.getElementById("thoughts-container");
          
            if (thoughtInput.value.trim() === "") {
              alert("Please enter a thought before posting!");
              return;
            }
          
            const newThought = document.createElement("div");
            newThought.classList.add("thought");
          
            const content = document.createElement("p");
            content.textContent = thoughtInput.value;
          
            const timestamp = document.createElement("small");
            timestamp.textContent = `Posted on: ${new Date().toLocaleString()}`;
          
            const actions = document.createElement("div");
            actions.classList.add("actions");

            const editBtn = createButton("✏️ Edit", () => {
              const newText = prompt("Edit your comment:", content.textContent);
              if (newText) {
                content.textContent = newText;
              }
            });
          
            const deleteBtn = createButton("❌ Delete", () => {
              if (confirm("Delete this comment?")) newThought.remove();
            });
          
            const replyBtn = createButton("💬 Reply", () => toggleReplyBox(newThought));
          
            const reactBtn = document.createElement("button");
            reactBtn.textContent = "😊 React";
            reactBtn.classList.add("react-btn");
          
            const emojiContainer = document.createElement("div");
            emojiContainer.style.display = "none";
            emojiContainer.style.position = "absolute";
            emojiContainer.style.backgroundColor = "white";
            emojiContainer.style.border = "1px solid #ccc";
            emojiContainer.style.borderRadius = "5px";
            emojiContainer.style.padding = "5px";
            emojiContainer.style.zIndex = "10";
          
            const emojis = ["😊", "😢", "😡", "❤️", "😂", "👍", "😮"];
            emojis.forEach(emoji => {
              const emojiButton = document.createElement("button");
              emojiButton.textContent = emoji;
              emojiButton.classList.add("emoji-btn");
              emojiButton.onclick = () => {
                const emojiReact = document.createElement("span");
                emojiReact.textContent = emoji;
                emojiReact.style.marginRight = "5px";
                newThought.insertBefore(emojiReact, actions);
                emojiContainer.style.display = "none";
              };
              emojiContainer.appendChild(emojiButton);
            });
          
            reactBtn.onclick = () => {
              emojiContainer.style.display = emojiContainer.style.display === "none" ? "block" : "none";
            };
          
            actions.appendChild(editBtn);
            actions.appendChild(replyBtn);
            actions.appendChild(deleteBtn);
            actions.appendChild(reactBtn);
            newThought.appendChild(content);
            newThought.appendChild(emojiContainer);
            newThought.appendChild(actions);
            newThought.appendChild(timestamp);
          
            const repliesContainer = document.createElement("div");
            repliesContainer.classList.add("replies");
            newThought.appendChild(repliesContainer);
          
            container.appendChild(newThought);
            thoughtInput.value = "";
          }
          
          function createButton(text, onClickAction) {
            const button = document.createElement("button");
            button.textContent = text;
            button.onclick = onClickAction;
            return button;
          }
          
          function toggleReplyBox(parentThought) {
            let replyBox = parentThought.querySelector(".reply-box");
          
            if (replyBox) {
              replyBox.remove();
            } else {
              replyBox = document.createElement("div");
              replyBox.classList.add("reply-box");
          
              const textarea = document.createElement("textarea");
              textarea.rows = 2;
              textarea.placeholder = "Write a reply...";
          
              const postBtn = document.createElement("button");
              postBtn.textContent = "Post Reply";
              postBtn.onclick = () => {
                if (textarea.value.trim() === "") return;
          
                const reply = document.createElement("div");
                reply.classList.add("reply");
          
                const replyText = document.createElement("p");
                replyText.textContent = textarea.value;
          
                const replyActions = document.createElement("div");
                replyActions.classList.add("actions");
          
                const emojis = ["😊", "😢", "😡", "❤️", "😂", "👍", "😮"];
                emojis.forEach(emoji => {
                  let count = 0;
                  const btn = document.createElement("button");
                  btn.textContent = `${emoji} ${count}`;
                  btn.onclick = () => {
                    count++;
                    btn.textContent = `${emoji} ${count}`;
                  };
                  replyActions.appendChild(btn);
                });
          
                const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "❌ Delete";
                deleteBtn.onclick = () => {
                  if (confirm("Delete this reply?")) reply.remove();
                };
          
                replyActions.appendChild(deleteBtn);
                reply.appendChild(replyText);
                reply.appendChild(replyActions);
                parentThought.querySelector(".replies").appendChild(reply);
                replyBox.remove();
              };
          
              replyBox.appendChild(textarea);
              replyBox.appendChild(postBtn);
              parentThought.appendChild(replyBox);
            }
          }
          emojiButton.onclick = () => {
            const emojiReact = document.createElement("span");
            emojiReact.textContent = emoji;
            emojiReact.classList.add("emoji-reacted"); 
            emojiReact.style.marginRight = "5px";
            newThought.insertBefore(emojiReact, actions);
            emojiContainer.style.display = "none";
          };
          