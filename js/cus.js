  
    document.getElementById('openChat').addEventListener('click', function() {  
        document.getElementById('chatWidget').style.display = 'flex';  
        document.getElementById('chatContent').style.display = 'flex';  
        this.style.display = 'none';  
    });  

    document.getElementById('closeChat').addEventListener('click', function() {  
        document.getElementById('chatWidget').style.display = 'none';  
        document.getElementById('openChat').style.display = 'block';  
    });  

    document.getElementById('sendMessage').addEventListener('click', function() {  
        const input = document.getElementById('chatInput');  
        const message = input.value.trim();  
        if (message) {  
            addMessageToChat("You: " + message);  
            input.value = '';  

            // Auto-response logic  
            setTimeout(() => {  
                autoResponse(message);  
            }, 1000); // Delay 1 second before responding  
        }  
    });  

    document.getElementById('chatInput').addEventListener('keypress', function(e) {  
        if (e.key === 'Enter') {  
            document.getElementById('sendMessage').click();  
        }  
    });  

    function addMessageToChat(message) {  
        const messageContainer = document.createElement('div');  
        messageContainer.textContent = message;  
        document.getElementById('chatMessages').appendChild(messageContainer);  
        document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;  
    }  

    const responses = {  
        "hi": "Hello! How can I help you today?",  
        "hello": "Hello! How can I help you today?",  
        "joki": "We offer a variety of joki services for PUBG Mobile and Mobile Legends.",  
        "harga": "The prices vary depending on the service. Please specify which service you are interested in.",  
        "bantuan": "I'm here to help! Please let me know your questions.",  
        // Tambahkan lebih banyak pertanyaan dan jawaban sesuai kebutuhan  
    };  
    
    function autoResponse(userMessage) {  
        // Default response  
        let response = "I'm sorry, I don't understand that.";   
    
        // Normalize the user message to lowercase for easier matching  
        const normalizedMessage = userMessage.toLowerCase();  
    
        // Check for matching responses  
        for (const [key, value] of Object.entries(responses)) {  
            if (normalizedMessage.includes(key)) {  
                response = value;  
                break; // Stop checking after the first match  
            }  
        }  
    
        addMessageToChat("Support: " + response);  
    }