import {Server,Socket} from 'socket.io'
import {Server as HttpServer} from 'http'
import { socketAuth } from './middleware';
import { sendMessage } from './chat';

const connectedUsers = new Map<string,string>();

let io:Server|null = null;
export const ioIntializer = (server:HttpServer)=>{

    const io = new Server(server,{cors:{origin:'*'}});
    io.use(socketAuth);
    io.on('connection',(socket:Socket)=>{
        connectedUsers.set(socket.data.user.id,socket.id);

        console.log("New user conected");
        console.log(socket.id);

        socket.on('sendMessage',sendMessage(socket,io,connectedUsers))
    })
}

export const getIo = ()=>{
    try{
        if(!io) throw new Error('Socket.io is not initialized');
        return io
    }
    catch(error){
        console.log(error);
    }
}