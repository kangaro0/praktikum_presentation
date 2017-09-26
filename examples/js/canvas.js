
function createCanvas(){
    let canvas = document.createElement('canvas');

    canvas.id = 'picture';
    canvas.clientHeight = 480;
    canvas.clientWidth = 640;

    return canvas;
}