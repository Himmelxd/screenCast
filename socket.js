const stream = (socket)=>{
    socket.on('subscribe', (data)=>{
        socket.join(data.room);
        socket.join(data.socketId);
    });

    socket.on('cast', (data, date, callback)=>{
        socket.to(data.room).emit('cast', data.img);
        if(callback) {
            callback(data.img)
        }
    });
}

module.exports = stream;
