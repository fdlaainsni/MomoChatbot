function getBotResponse(input) {
  // Konversi input ke huruf kecil dan hapus spasi di awal/akhir
  input = input.toLowerCase().trim();

  // Respon chatbot
  let responses = {
      "hi": "Hello! How can I help you?",
      "how are you?": "I'm just a bot, but I'm doing great! How about you?",
      "what is your name?": "My name is Momo Chatbot!",
      "i love you momo": "Love you more!",
      "bye": "Goodbye! Have a nice day!",
      "who created you?": "I was created by a programmer like you!",
      "what can you do?": "I can chat with you and respond to some basic questions!"
  };

  // Cek apakah ada jawaban yang sesuai, jika tidak, gunakan default
  return responses[input] || "Sorry, I don't understand. Can you ask something else?";
}

function sendMessage() {
  let userInput = document.getElementById("userInput").value.trim();
  if (userInput === "") return;

  let chatBox = document.getElementById("chatBox");

  // Tambahkan pesan user ke chat
  let userMessage = `<div class="user-message p-2 mt-2">${userInput}</div>`;
  chatBox.innerHTML += userMessage;

  // Dapatkan respon chatbot
  let botResponse = getBotResponse(userInput);
  let botMessage = `<div class="bot-message p-2 mt-2">${botResponse}</div>`;

  setTimeout(() => {
      chatBox.innerHTML += botMessage;
      chatBox.scrollTop = chatBox.scrollHeight; // Scroll otomatis ke bawah
  }, 500);

  document.getElementById("userInput").value = ""; // Kosongkan input setelah mengirim
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
      sendMessage();
  }
}
