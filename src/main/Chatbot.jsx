import { useState } from "react";
import axios from "axios";

function Chatbot() {
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  const sendMessage = async () => {
    if (userMessage.trim() === "") return;
    
    // Add the user's message to the conversation
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: userMessage, role: "user" },
    ]);
    setUserMessage("");
    setLoading(true);

    try {
      // Send the message to Gemini API
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCc-UF87udFLXn5mRqrI3wwk_Wy7nPrxac`,
        {
          contents: [
            {
              parts: [{ text: userMessage }],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const botReply = response.data.candidates[0].content.parts[0].text;

      // Add bot's response to the conversation
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botReply, role: "bot" },
      ]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              textAlign: message.role === "bot" ? "left" : "right",
              margin: "10px",
              padding: "10px",
              backgroundColor: message.role === "bot" ? "#f0f0f0" : "#d0f0d0",
              borderRadius: "10px",
            }}
          >
            <p>{message.text}</p>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", marginTop: "10px" }}>
        <input
          type="text"
          value={userMessage}
          onChange={handleMessageChange}
          placeholder="Ask me anything!"
          style={{
            padding: "10px",
            flex: 1,
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          style={{
            padding: "10px",
            marginLeft: "10px",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
          }}
        >
          {loading ? "Thinking..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
