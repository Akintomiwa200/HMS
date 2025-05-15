
"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { socket, subscribeToUpdates, emitEvent } from '@/lib/socket';

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
}

export function LiveChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = subscribeToUpdates('chat-message', (message: Message) => {
      setMessages(prev => [...prev, message]);
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const message = {
      id: Date.now().toString(),
      sender: 'User',
      content: newMessage,
      timestamp: new Date()
    };

    emitEvent('send-message', message);
    setNewMessage('');
  };

  return (
    <Card className="w-full max-w-sm fixed bottom-4 right-4 z-50">
      <CardHeader>
        <CardTitle>Live Chat</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] mb-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`mb-2 p-2 rounded ${msg.sender === 'User' ? 'bg-primary/10 ml-auto' : 'bg-muted'}`}>
              <p className="text-sm font-medium">{msg.sender}</p>
              <p className="text-sm">{msg.content}</p>
            </div>
          ))}
        </ScrollArea>
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type a message..."
          />
          <Button onClick={sendMessage}>Send</Button>
        </div>
      </CardContent>
    </Card>
  );
}
