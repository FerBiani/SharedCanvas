const socket = io.connect('http://localhost:3000')

function setup(){
    createCanvas(window.innerWidth, window.innerHeight)
    background(51)

    socket.on('paths', reDraw)
    strokeWeight(3)
}

function reDraw(data){
    stroke(255,0,50)
    line(data.x, data.y, data.px, data.py)
}

function mouseDragged(){
    stroke(255)
    console.log(mouseX, mouseY)
    socket.emit('paths',{
        x: mouseX,
        y: mouseY,
        px: pmouseX,
        py: pmouseY
    })
    line(mouseX, mouseY, pmouseX, pmouseY)
}