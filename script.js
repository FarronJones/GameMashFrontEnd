        //Play.html
        //Script.js
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
        function getRandomMessages() {
          const lang = localStorage.getItem("lang") || "en";
          return playtranslations[lang]?.randomMessages || playtranslations['en'].randomMessages;
        }
        
        function getGameTips() {
          const lang = localStorage.getItem("lang") || "en";
          return playtranslations[lang]?.gameTips || playtranslations['en'].gameTips;
        }

        function sendRandomPlayerMessage() {
          const messages = getRandomMessages();
          const message = messages[Math.floor(Math.random() * messages.length)];
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
            if (gameScreen.requestFullscreen) {
                gameScreen.requestFullscreen();
            } else if (gameScreen.mozRequestFullScreen) { // Firefox
                gameScreen.mozRequestFullScreen();
            } else if (gameScreen.webkitRequestFullscreen) { // Safari / Chrome
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
            const resetBtn = document.querySelector('#resetBtn');
            const chatBox = document.getElementById('chatBox');
            const chatInput = document.getElementById('chatInput');
            const sendBtn = document.getElementById('sendBtn');

            let displayTips = false;
            let tipInterval = null;

          

            // Show or hide the tips based on user input
            const showGameTips = () => {
                if (displayTips) {
                  const tipBox = document.createElement('div');
                  tipBox.style.position = 'absolute';
                  tipBox.style.top = '20px';
                  tipBox.style.left = '20px';
                  tipBox.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                  tipBox.style.color = 'white';
                  tipBox.style.padding = '15px';
                  tipBox.style.borderRadius = '12px';
                  tipBox.style.maxHeight = '80vh';
                  tipBox.style.minHeight = '200px';        
                  tipBox.style.overflowY = 'auto';
                  tipBox.style.width = '350px';
                  tipBox.style.maxWidth = '90vw';
                  tipBox.style.fontSize = '1rem';
                  tipBox.style.lineHeight = '1.4';
                  tipBox.style.wordBreak = 'break-word';
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

                        const tips = getGameTips();
                        if (currentTipIndex < tips.length) {
                            const tipElement = document.createElement('p');
                            tipElement.innerText = tips[currentTipIndex];
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

              const lang = localStorage.getItem("lang") || "en";
              const langMap = playtranslations[lang];
            
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
              message.innerText = langMap.gameTipsPrompt;
              promptContainer.appendChild(message);
            
              const yesButton = document.createElement('button');
              yesButton.innerText = langMap.yesButton;
              yesButton.style.marginRight = '10px';
              yesButton.addEventListener('click', () => {
                displayTips = true;
                document.body.removeChild(promptContainer);
                showGameTips();
              });
            
              const noButton = document.createElement('button');
              noButton.innerText = langMap.noButton; // ✅ Not "no-button"
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
            const userLang = localStorage.getItem("lang") || "en";
            const langMap = playtranslations[userLang];
            const thoughtInput = document.getElementById("thought-input");
            const container = document.getElementById("thoughts-container");
          
            if (thoughtInput.value.trim() === "") {
              alert(langMap["emptyThoughtWarning"]);
              return;
            }
          
            const newThought = document.createElement("div");
            newThought.classList.add("thought");

            const content = document.createElement("p");
            content.textContent = thoughtInput.value;

            const timestamp = document.createElement("small");
            timestamp.textContent = `${langMap["postedOn"]} ${new Date().toLocaleString()}`;

            const actions = document.createElement("div");
            actions.classList.add("actions");

            const editBtn = createButton(langMap["editButton"], () => {
              const newText = prompt(langMap["editPrompt"], content.textContent); 
              if (newText) {
                  content.textContent = newText;
              }
          });
          
          const deleteBtn = createButton(langMap["deleteButton"], () => {
            if (confirm(langMap["deleteConfirm"])) newThought.remove();
        });
          
            const replyBtn = createButton(langMap["replyButton"], () => toggleReplyBox(newThought));
          
            const reactBtn = document.createElement("button");
            reactBtn.textContent = langMap["reactButton"];
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
            const userLang = localStorage.getItem("lang") || "en"; 
            const langMap = playtranslations[userLang];
          
            let replyBox = parentThought.querySelector(".reply-box");
          
            if (replyBox) {
              replyBox.remove();
            } else {
              replyBox = document.createElement("div");
              replyBox.classList.add("reply-box");
          
              const textarea = document.createElement("textarea");
              textarea.rows = 2;
              textarea.placeholder = langMap["writeReplyPlaceholder"]; 
          
              const postBtn = document.createElement("button");
              postBtn.textContent = langMap["postReplyButton"];
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
                deleteBtn.textContent = langMap["deleteReplyButton"];
                deleteBtn.onclick = () => {
                  if (confirm(langMap["deleteReplyConfirm"])) reply.remove();
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
          function postThoughtPlay() {
            const userLang = localStorage.getItem("lang") || "en";
            const langMap = playtranslations[userLang];
            const thoughtInput = document.getElementById("thought-input");
            const container = document.getElementById("thoughts-container");
        
            if (thoughtInput.value.trim() === "") {
                alert(langMap["emptyThoughtWarning"]);
                return;
            }
        
            const newThought = document.createElement("div");
            newThought.classList.add("thought");
        
            const postedHeader = document.createElement("div");
            postedHeader.classList.add("thought-header");
        
            const avatar = localStorage.getItem("avatar") || "profile-placeholder.png";
            const firstName = localStorage.getItem("firstName") || "Anonymous";
        
            const avatarImg = document.createElement("img");
            avatarImg.src = `/Images/${avatar}`;
            avatarImg.alt = firstName;
            avatarImg.classList.add("avatar-small");
        
            const posterName = document.createElement("span");
            posterName.classList.add("poster-name");
            posterName.textContent = firstName;
        
            postedHeader.appendChild(avatarImg);
            postedHeader.appendChild(posterName);
        
            const content = document.createElement("p");
            content.textContent = thoughtInput.value;
        
            const timestamp = document.createElement("small");
            timestamp.textContent = `${langMap["postedOn"]} ${new Date().toLocaleString()}`;
        
            const actions = document.createElement("div");
            actions.classList.add("actions");
        
            const editBtn = createButton(langMap["editButton"], () => {
                const newText = prompt(langMap["editPrompt"], content.textContent);
                if (newText) {
                    content.textContent = newText;
                }
            });
        
            const deleteBtn = createButton(langMap["deleteButton"], () => {
                if (confirm(langMap["deleteConfirm"])) newThought.remove();
            });
        
            const replyBtn = createButton(langMap["replyButton"], () => toggleReplyBox(newThought));
        
            const reactBtn = document.createElement("button");
            reactBtn.textContent = langMap["reactButton"];
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
        
            newThought.appendChild(postedHeader);
            newThought.appendChild(content);
            newThought.appendChild(emojiContainer);
            newThought.appendChild(actions);
            newThought.appendChild(timestamp);
        
            const repliesContainer = document.createElement("div");
            repliesContainer.classList.add("replies");
            newThought.appendChild(repliesContainer);
        
            container.prepend(newThought);
        
            // ✅ TRY to send to database silently (no alert if fail)
            postThoughtSilent(thoughtInput.value);
        
            thoughtInput.value = "";
        }