import io from "../../server";

io.on('connection', (socket) => {
    console.log('A client connected.');

    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('A client disconnected.');
    });
});