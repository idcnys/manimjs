class Rectangle {
    constructor(x, y, width, height, speed = 1, fill = false, fillColor = "cyan") {
        this.x_start = x;
        this.y_start = y;
        this.ww = width;
        this.hh = height;
        this.x_end = x + width;
        this.y_end = y + height;
        this.x = this.x_start;
        this.y = this.y_start;
        this.type = "rect";
        this.completed = false;
        this.started = false;
        this.speed = speed;
        this.labelText = "Rectangle";
        this.fill = fill;
        this.fillColor = fillColor;
    }
}

class Circle {
    constructor(center_x, center_y, radius, center = true, speed = 1, fill = false, fillColor = "cyan") {
        this.cx = center_x;
        this.cy = center_y;
        this.r = radius;
        this.endAngle = 0;
        this.rad = Math.PI / 180;
        this.type = "cir";
        this.completed = false;
        this.speed = speed;
        this.center = center;
        this.fill = fill;
        this.fillColor = fillColor;
    }
}

class Text {
    constructor(text, x, y, color = "white", size = "18px", font = "Arial") {
        this.text = text;
        this.x = x;
        this.y = y;
        this.fillStyle = color;
        this.font = size + " " + font;
        this.type = "text";
        this.completed = false;
    }
}
class Line {
    constructor(x, y, length, dashed = false, arrowtip = false, dbltip = false,label = false, labelText = "", color = "yellow", angle = 0) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.angle = angle * Math.PI / 180; //to rad
        this.endX = this.x + this.length * Math.cos(this.angle);
        this.endY = this.y - this.length * Math.sin(this.angle);
        this.currentX = this.x; // trackin progress
        this.currentY = this.y;
        this.fillStyle = color;
        this.completed = false;
        this.type = "line";
        this.speed = 1;
        this.dashed = dashed;
        this.arrowtip = arrowtip;
        this.dbltip = dbltip;
        this.label = label;
        this.labelText = labelText;
        this.autoDisappear = false;

    }
}
class Dot {
    constructor(x, y, r = 3) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = "red";
        this.type = "dot";
        this.completed = false;
    }
}
class ArrowTip {
    constructor(x, y, angle, size = 15,color="cyan", face = "forwards") {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.type = "arrowtip";
        this.completed = false;
        this.face = face;
        this.angle = angle;
    }
}
class Task {
    constructor(type, obj) {
        this.type = type;
        this.obj = obj;
    }
}
class CoordinateSystem {
    constructor(x, y, labeled = true) {
        this.x = x;
        this.y = y;
        this.labeled = labeled;
        this.type = "graph";
        this.completed = false;
    }
}
class Parser {
    constructor(origin_x, origin_y) {
        this.ox = origin_x;
        this.oy = origin_y;
    }
    tune(x, y) {
        x -= this.ox;
        y -= this.oy;
        return {
            x: x,
            y: y
        };
    }
}
class TextBox {
    constructor(txt, x, y, textcolor = "white", boxcolor = "white", angle = 0) {
        this.text = txt;
        this.x = x;
        this.y = y;
        this.textcolor = textcolor;
        this.boxcolor = boxcolor;
        this.angle = angle;
        this.type = "textbox";
        this.completed = false;
    }
}
class Graph {
    constructor(expr, color = "lime", minX = -360, maxX = 360, step = 1, scale = 1) {
        this.expr = expr; 
        this.color = color;
        this.minX = minX;
        this.maxX = maxX;
        this.step = step;
        this.scale = scale;
        this.type = "graphplot";
        this.completed = false;
        this.points = [];
    }
}
class MainFrame {
    constructor(canvasId, stream = false, filename = "canvas-animation", background_color = "#000") {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.dpr = window.devicePixelRatio || 1; // for sharp rendering
        this.canvas.width = window.innerWidth * this.dpr;
        this.canvas.height = window.innerHeight * this.dpr;
        this.ctx.scale(this.dpr, this.dpr);
        // Draw background
        this.ctx.fillStyle = background_color;
        this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

        this.tasks = []

        this.animationFrame;
        this.recorder;
        this.recordedChunks = [];

        this.filename = filename + ".webm";
        this.shouldistream = stream;
        this.isStreamStarted = false;

        this.originX = 0;
        this.originY = 0;

    }
    setOrigin(x, y) {
        this.originX = x;
        this.originY = y;
    }


    add(obj) {

        let new_task = new Task(obj.type, obj);

        this.tasks.push(new_task);
        if (obj.type == "cir" && obj.center) {
            // adding center dot for a circle
            let centerdot = new Dot(obj.cx, obj.cy);
            let nt = new Task(centerdot.type, centerdot);
            this.tasks.push(nt);
            // adding label to the center
            let txt = "(" + String(obj.cx) + "," + String(obj.cy) + ")";
            let centerlabel = new Text(txt, (obj.cx) - 30, (obj.cy) - 15);
            let nt2 = new Task(centerlabel.type, centerlabel);
            this.tasks.push(nt2);
            //adding dashed line from center 
            let dline = new Line(obj.cx, obj.cy, obj.r, true);
            let nt3 = new Task(dline.type, dline);
            this.tasks.push(nt3);

        } else if (obj.type == "line" && obj.arrowtip) {
            //adding arrowtip on line edge;
            let at = new ArrowTip((obj.endX + 1), (obj.endY), -obj.angle);
            at.color=obj.fillStyle;
            let nt4 = new Task(at.type, at);
            this.tasks.push(nt4);

            if (obj.dbltip) {
                let at = new ArrowTip((obj.x) - 1, (obj.y), -obj.angle);
                at.color=obj.fillStyle;
                at.face = "backwards";
                let nt4 = new Task(at.type, at);
                this.tasks.push(nt4);
            }

            if (obj.label) {
                let txt = obj.labelText;
                let centerlabel = new Text(txt, (obj.x), (obj.y) - 15);
                let nt2 = new Task(centerlabel.type, centerlabel);
                this.tasks.push(nt2);
            }


        } else if (obj.type == "rect") {

            let txt = obj.labelText;
            let centerlabel = new Text(txt, (obj.x_start + obj.ww), (obj.y_start) - 15);
            let nt2 = new Task(centerlabel.type, centerlabel);
            this.tasks.push(nt2);
        } else if (obj.type == "textbox") {

            this.ctx.font = "18px Arial"; // default or you can pass as parameter
            const textWidth = this.ctx.measureText(obj.text).width;
            const textHeight = 20; // approximated

            //rect around txt
            let bbox = new Rectangle(obj.x - 15, obj.y - 20, 12 * (obj.text.length) - 5, 30, 3);

           //txt
            let centertext = new Text(obj.text, obj.x, obj.y, obj.textcolor, "18px", "Arial");

            // Wrapping both as tasks
            let nt = new Task(centertext.type, centertext);
            let nt2 = new Task(bbox.type, bbox);

            this.tasks.push(nt2);
            this.tasks.push(nt);

        }        
        else if (obj.type == "graph") {
            this.setOrigin(obj.x, obj.y);

            const spacing = 10;
            const axisColor = "white";
            const tickColor = "rgba(255,255,255,0.7)";
            const font = "12px Courier";

            const width = this.canvas.width / this.dpr;
            const height = this.canvas.height / this.dpr;
            const originX = obj.x;
            const originY = obj.y;

            //x&y axis
            let xAxis = new Line(0, originY, width, false, true, true, false, "", axisColor, 0);
            let yAxis = new Line(originX, height, height, false, true, true, false, "", axisColor, 90);
            xAxis.speed = 100;
            yAxis.speed = 100;

            this.tasks.push(new Task(yAxis.type, yAxis));
            this.tasks.push(new Task(xAxis.type, xAxis));

            // oringin(0,0)
            let odot = new Dot(originX, originY);
            this.tasks.push(new Task(odot.type, odot));

            //origin tiks
            const drawGrid = () => {
                const ctx = this.ctx;
                ctx.save();
                ctx.font = font;
                ctx.fillStyle = "white";
                ctx.strokeStyle = "white";
                ctx.lineWidth = 1;

                //minor & major ticks ----
                for (let i = -Math.floor(originX / spacing); i <= Math.floor((width - originX) / spacing); i++) {

                    if (i === 0) continue;
                    const x = originX + i * spacing;
                    const isMajor = (i % 5 === 0); //true or false

                    // Tick line
                    ctx.beginPath();
                    ctx.moveTo(x, originY - (isMajor ? 4 : 2));
                    ctx.lineTo(x, originY + (isMajor ? 4 : 2));
                    ctx.stroke();

                    // Label (only every 5)
                    if (isMajor && obj.labeled) {
                        ctx.fillText(i.toString(), x - 3, originY + 15);
                    }
                }

                for (let j = -Math.floor(originY / spacing); j <= Math.floor((height - originY) / spacing); j++) {
                    if (j === 0) continue;
                    const y = originY + j * spacing;
                    const isMajor = j % 5 === 0;

                    // Tick line
                    ctx.beginPath();
                    ctx.moveTo(originX - (isMajor ? 4 : 2), y);
                    ctx.lineTo(originX + (isMajor ? 4 : 2), y);
                    ctx.stroke();

                    // Label (only every 5)
                    if (isMajor && obj.labeled) {
                        ctx.fillText((-j).toString(), originX + 10, y + 4);
                    }
                }

                //
                ctx.fillText("(0,0)", originX + 8, originY - 8);
                ctx.restore();
            };

            // Adding static grid-drawing function
            this.tasks.push(new Task("staticgrid", {
                draw: drawGrid
            }));
        }
        else if (obj.type == "graphplot") {
    let nt = new Task(obj.type, obj);
    this.tasks.push(nt);
}



    }

    drawRect(rectObj, stroke_color = "yellow", line_width = 2) {
        this.ctx.beginPath();
        this.ctx.moveTo(rectObj.x_start, rectObj.y_start);
        this._drawStep(rectObj, stroke_color, line_width, rectObj.speed);
        console.log("Draw rect func");

        if(rectObj.fill) {
        this.ctx.fillStyle = rectObj.fillColor;
        this.ctx.fillRect(rectObj.x_start, rectObj.y_start, rectObj.ww, rectObj.hh);
    }

    }

    _drawStep(r, stroke_color, line_width, amountperstep) {
        this.ctx.lineTo(r.x, r.y);
        this.ctx.strokeStyle = stroke_color;
        this.ctx.lineWidth = line_width;
        this.ctx.stroke();

        if (r.y === r.y_start && r.x < r.x_end) {
            r.x += amountperstep;
            if (r.x > r.x_end) r.x = r.x_end;
            r.started = true;
        } else if (r.x === r.x_end && r.y < r.y_end) {
            r.y += amountperstep;
            if (r.y > r.y_end) r.y = r.y_end;
        } else if (r.y === r.y_end && r.x > r.x_start) {
            r.x -= amountperstep;
            if (r.x < r.x_start) r.x = r.x_start;
        } else if (r.x === r.x_start && r.y > r.y_start) {
            r.y -= amountperstep;
            if (r.y < r.y_start) r.y = r.y_start;
        }

        // finish
        if (r.started && r.x === r.x_start && r.y === r.y_start) {
            r.completed = true;
            return;
        }

        requestAnimationFrame(() => this._drawStep(r, stroke_color, line_width, amountperstep));
    }



    drawCircle(cirObj, stroke_color = "cyan", line_width = 2) {
        this._drawArc(cirObj, stroke_color, line_width*this.dpr, cirObj.speed);
    }

    _drawArc(c, stroke_color, line_width, amountperstep) {
        this.ctx.beginPath();
        this.ctx.arc(c.cx, c.cy, c.r, 0, c.endAngle);
        this.ctx.strokeStyle = stroke_color;
        this.ctx.lineWidth = line_width;
        this.ctx.stroke();

         if(c.fill) {
        this.ctx.fillStyle = c.fillColor;
        this.ctx.fill();
    }

        c.endAngle += (amountperstep * c.rad);

        if (c.endAngle < Math.PI * 2) {

            requestAnimationFrame(() => this._drawArc(c, stroke_color, line_width, amountperstep));
        } else {
            c.completed = true;
            return;
        }
    }
    __sleep__(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    __reset_dashed__() {
        this.ctx.setLineDash([]);
    }

    drawText(textObj) {
        this._drawChar(textObj);
    }


    async _drawChar(obj) {
        let len = obj.text.length;
        let txt = obj.text;
        let x = obj.x;
        let y = obj.y;

        this.ctx.font = obj.font;
        this.ctx.fillStyle = obj.fillStyle;
        this.ctx.fillText(txt, x, y);
        await this.__sleep__(1000);
        obj.completed = true;
        return;

    }


    drawLine(lineObj) {
        this.ctx.beginPath();
        this.ctx.moveTo(lineObj.x, lineObj.y);
        this.ctx.strokeStyle = lineObj.fillStyle;
        if (lineObj.dashed) {
            this.ctx.setLineDash([10, 5]);
        }
        this._drawLine(lineObj);
    }

    _drawLine(obj) {
        this.ctx.lineTo(obj.currentX, obj.currentY);
        this.ctx.stroke();

        const dx = obj.speed * Math.cos(obj.angle);
        const dy = -obj.speed * Math.sin(obj.angle);

        obj.currentX += dx;
        obj.currentY += dy;

        const distDrawn = Math.hypot(obj.currentX - obj.x, obj.currentY - obj.y);
        if (distDrawn >= obj.length) {
            if (obj.dashed) this.__reset_dashed__();
            obj.completed = true;
            return;
        }

        requestAnimationFrame(() => this._drawLine(obj));
    }

    async _drawArrowTip(arrowObj) {
        const x = arrowObj.x;
        const y = arrowObj.y;
        const size = arrowObj.size;
        const color = arrowObj.color;


        let tipAngle = arrowObj.angle;
        if (arrowObj.face === "backwards") {
            tipAngle += Math.PI; // flipping 180 degrees
        }

        this.ctx.beginPath();
        this.ctx.moveTo(x, y); // tip of the arrow
        this.ctx.lineTo(x - size * Math.cos(tipAngle - Math.PI / 6), y - size * Math.sin(tipAngle - Math.PI / 6));
        this.ctx.lineTo(x - size * Math.cos(tipAngle + Math.PI / 6), y - size * Math.sin(tipAngle + Math.PI / 6));
        this.ctx.closePath();
        this.ctx.fillStyle = color;
        this.ctx.fill();

        await this.__sleep__(1000);
        arrowObj.completed = true;
        return;
    }

    async dot(obj) {

        this.ctx.beginPath();
        this.ctx.arc(obj.x, obj.y, obj.r, 0, Math.PI * 2); // Full circle
        this.ctx.fillStyle = obj.color;
        this.ctx.fill();
        obj.completed = true;
        await this.__sleep__(1000);

        return;
    }

    drawGraph(graphObj) {

    this.ctx.beginPath();
    this.ctx.strokeStyle = graphObj.color;
    this.ctx.lineWidth = 2*this.dpr;
    this._drawGraphStep(graphObj, graphObj.minX);
}

_drawGraphStep(graphObj, x) {
    const scale = graphObj.scale;
    const step = graphObj.step;
    const minX = graphObj.minX;
    const maxX = graphObj.maxX;

    const toCanvas = (xx, yy) => ({
        x: this.originX + xx,
        y: this.originY - yy
    });

    //y = f(x)
    let y;
    try {
        y = graphObj.expr(x * Math.PI / 180) * scale;
    } catch (e) {
        console.warn("Graph eval error:", e);
        graphObj.completed = true;
        return;
    }

    const pt = toCanvas(x, y);

    //outside the visible canvas
    if (pt.x < 0 || pt.x > this.canvas.width) {
        graphObj.completed = true;
        return;
    }

    if (graphObj.points.length === 0) this.ctx.moveTo(pt.x, pt.y);
    else this.ctx.lineTo(pt.x, pt.y);

    this.ctx.strokeStyle = graphObj.color;
    this.ctx.lineWidth = 1;
    this.ctx.stroke();

    graphObj.points.push(pt);

    
    if (x + step <= maxX && pt.x <= this.canvas.width) {
        requestAnimationFrame(() => this._drawGraphStep(graphObj, x + step));
    } else {
        graphObj.completed = true;
        return;
    }
}





    _waitUntilFinish(obj) {
        return new Promise((resolve) => {
            const check = () => {
                if (!obj.completed) requestAnimationFrame(check);
                else resolve();
            };
            check();
        });
    }

    async __free() {


        for (var i = 0; i < this.tasks.length; i++) {
            var tp = (this.tasks[i].type);
            var obj = this.tasks[i].obj;
            console.log(tp);
            if (tp == "rect") {
                this.drawRect(obj);
                await this._waitUntilFinish(obj);
            } else if (tp == "cir") {
                this.drawCircle(obj);
                await this._waitUntilFinish(obj);
            } else if (tp == "text") {
                this.drawText(obj);
                await this._waitUntilFinish(obj);
            } else if (tp == "line") {
                this.drawLine(obj);
                await this._waitUntilFinish(obj);
            } else if (tp == "dot") {
                this.dot(obj);
                await this._waitUntilFinish(obj);
            } else if (tp == "arrowtip") {
                this._drawArrowTip(obj);
                await this._waitUntilFinish(obj);
            } else if (tp == "staticgrid") {
                if (typeof obj.draw === "function") {
                    obj.draw.call(this);
                }
                obj.completed = true;
                await this.__sleep__(1000);
            }else if (tp == "graphplot") {
                this.drawGraph(obj);
                await this._waitUntilFinish(obj);
}



           
            if (i + 1 == this.tasks.length && this.isStreamStarted) {
                this.recorder.stop();
            }
        }


    }

    __start_stream() {
        this.recordedChunks = [];

        const stream = this.canvas.captureStream(60); // 60 FPS
        this.recorder = new MediaRecorder(stream, {
            mimeType: "video/webm"
        });

        this.recorder.ondataavailable = e => {
            if (e.data.size > 0) this.recordedChunks.push(e.data);
        }
        this.recorder.onstop = () => {
            const blob = new Blob(this.recordedChunks, {
                type: "video/webm"
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = this.filename;
            a.click();
        };

        this.recorder.start();

    }


    play() {
        if (this.shouldistream) {
            this.__start_stream();
            this.isStreamStarted = true;
        }
        this.__free();
    }
}




//USAGE 
const frame = new MainFrame("canvas",true);
let rect = new Rectangle(400,400,100,100);
rect.labelText = "Manim is great";
let cir = new Circle(200,200,100,true);
cir.speed=15;
let line = new Line(500,300,100);
line.speed=100;
let dline = new Line(300,300,170,true,true);

let aline = new Line(600,650,500,true);
aline.angle=45;
aline.speed=50;

let r1 = new Rectangle(100,700,100,60);

let tb = new TextBox("I am a toy manim",100,500);
let txt = new Text("isn't it great?",800,100);
let dot = new Dot(400,400,5);
dot.color="white";

let dline2 = new Line(780,110,100,true,true);
dline2.fillStyle="red";
dline2.speed=2;
dline2.dbltip=true;

let org = new CoordinateSystem(700,600,true);
let rect11 = new Rectangle(300, 400, 100, 100, 1, true, "rgba(254, 254, 93, 0.5)"); 
let cir11 = new Circle(600, 200, 100, true, 15, true, "rgba(45, 69, 69, 0.5)"); 

let lastText = new Text("You can contribute to this  project :)",300,900);
lastText.font= "20px Arial";
lastText.fillStyle="cyan";
let g1 = new Graph(x => 100 * Math.sin(x), "cyan", -360, 360, 2, 1);
let g2 = new Graph(x => 100 * Math.cos(x), "rgba(254, 254, 93, 0.5)", -360, 360, 2, 1);

 
frame.add(rect);
frame.add(cir);
frame.add(line);
frame.add(dline);
frame.add(aline);
frame.add(r1);
frame.add(org);
frame.add(tb);
frame.add(txt);
frame.add(dline2);
frame.add(dot);
frame.add(rect11);
frame.add(cir11);
// frame.add(g1);
frame.add(g2);
frame.add(lastText);

frame.play();