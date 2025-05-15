
import { Server } from 'socket.io';
import { NextApiRequest } from 'next';
import { NextApiResponseServerIO } from '@/lib/types';

const ioHandler = (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server, {
      path: '/api/socketio',
    });

    io.on('connection', (socket) => {
      socket.on('save-note', (note) => {
        // Save note logic here
        io.emit('notes-update', note);
      });
      
      socket.on('update-appointment', (appointment) => {
        // Update appointment logic here
        io.emit('appointment-update', appointment);
      });
    });

    res.socket.server.io = io;
  }
  res.end();
};

export const GET = ioHandler;
export const POST = ioHandler;
