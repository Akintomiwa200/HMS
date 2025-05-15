
import { io } from 'socket.io-client';

export const socket = io('0.0.0.0:3000', {
  path: '/api/socketio',
});

export const subscribeToUpdates = (event: string, callback: (data: any) => void) => {
  socket.on(event, callback);
  return () => socket.off(event, callback);
};

export const emitEvent = (event: string, data: any) => {
  socket.emit(event, data);
};
