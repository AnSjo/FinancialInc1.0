import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  TextField,
  IconButton,
  Paper,
  Typography,
  Divider,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessages = [
      ...messages,
      { text: input, sender: "user" },
      {
        text: `Echo: ${input}`, // Simulated bot response
        sender: "bot",
      },
    ];
    setMessages(newMessages);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 600,
        margin: "auto",
        mt: 4,
        display: "flex",
        flexDirection: "column",
        height: "80vh",
        bgcolor: "#f4f4f4",
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          p: 2,
          bgcolor: "#1976d2",
          color: "#fff",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      >
        <Typography variant="h6">Financial Assistant</Typography>
      </Box>

      <Divider />

      {/* Chat Messages */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {messages.map((msg, i) => (
          <Box
            key={i}
            alignSelf={msg.sender === "user" ? "flex-end" : "flex-start"}
            sx={{
              bgcolor: msg.sender === "user" ? "#1976d2" : "#e0e0e0",
              color: msg.sender === "user" ? "#fff" : "#000",
              px: 2,
              py: 1,
              borderRadius: 2,
              maxWidth: "80%",
            }}
          >
            <Typography variant="body2">{msg.text}</Typography>
          </Box>
        ))}
        <div ref={messagesEndRef} />
      </Box>

      {/* Input Box */}
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          px: 2,
          py: 1,
          borderTop: "1px solid #ccc",
        }}
      >
        <TextField
          variant="outlined"
          size="small"
          placeholder="Type a message..."
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <IconButton color="primary" onClick={handleSend}>
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
}
