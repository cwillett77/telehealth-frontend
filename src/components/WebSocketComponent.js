import React, { useEffect, useState } from 'react';

const WebSocketComponent = () => {
    const [messages, setMessages] = useState([]);
    const [websocket, setWebsocket] = useState(null);

    useEffect(() => {
        // Connect to WebSocket
        const ws = new WebSocket('ws://localhost:8000/ws/chat/'); // Adjust the URL to match your Django server
        setWebsocket(ws);

        ws.onopen = () => {
            console.log('Connected to WebSocket');
        };

        ws.onmessage = (e) => {
            const data = JSON.parse(e.data);
            setMessages(prevMessages => [...prevMessages, data.message]);
        };

        ws.onclose = () => {
            console.log('Disconnected from WebSocket');
        };

        // Clean up function
        return () => {
            ws.close();
        };
    }, []);

    const sendMessage = (message) => {
        if (websocket && websocket.readyState === WebSocket.OPEN) {
            websocket.send(JSON.stringify({ message }));
        } else {
            console.log('WebSocket is not open. Current State:', websocket ? websocket.readyState : 'No WebSocket');
        }
    };


    return (
        <div>
            <h2>Messages</h2>
            {messages.map((message, index) => (
                <p key={index}>{message}</p>
            ))}
            <button onClick={() => sendMessage("Hello from React")}>Send Message</button>
        </div>
    );
};

export default WebSocketComponent;
