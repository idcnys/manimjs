class Colors { 
    constructor() {
    this.BLACK = "#000000";
    this.BLUE = "#58C4DD";
    this.BLUE_A = "#C7E9F1";
    this.BLUE_B = "#9CDCEB";
    this.BLUE_C = "#58C4DD";
    this.BLUE_D = "#29ABCA";
    this.BLUE_E = "#236B8E";
    this.DARKER_GRAY = "#222222";
    this.DARKER_GREY = "#222222";
    this.DARK_BLUE = "#236B8E";
    this.DARK_BROWN = "#8B4513";
    this.DARK_GRAY = "#444444";
    this.DARK_GREY = "#444444";
    this.GOLD = "#F0AC5F";
    this.GOLD_A = "#F7C797";
    this.GOLD_B = "#F9B775";
    this.GOLD_C = "#F0AC5F";
    this.GOLD_D = "#E1A158";
    this.GOLD_E = "#C78D46";
    this.GRAY = "#888888";
    this.GRAY_A = "#DDDDDD";
    this.GRAY_B = "#BBBBBB";
    this.GRAY_BROWN = "#736357";
    this.GRAY_C = "#888888";
    this.GRAY_D = "#444444";
    this.GRAY_E = "#222222";
    this.GREEN = "#83C167";
    this.GREEN_A = "#C9E2AE";
    this.GREEN_B = "#A6CF8C";
    this.GREEN_C = "#83C167";
    this.GREEN_D = "#77B05D";
    this.GREEN_E = "#699C52";
    this.GREY = "#888888";
    this.GREY_A = "#DDDDDD";
    this.GREY_B = "#BBBBBB";
    this.GREY_BROWN = "#736357";
    this.GREY_C = "#888888";
    this.GREY_D = "#444444";
    this.GREY_E = "#222222";
    this.LIGHTER_GRAY = "#DDDDDD";
    this.LIGHTER_GREY = "#DDDDDD";
    this.LIGHT_BROWN = "#CD853F";
    this.LIGHT_GRAY = "#BBBBBB";
    this.LIGHT_GREY = "#BBBBBB";
    this.LIGHT_PINK = "#DC75CD";
    this.LOGO_BLACK = "#343434";
    this.LOGO_BLUE = "#525893";
    this.LOGO_GREEN = "#87C2A5";
    this.LOGO_RED = "#E07A5F";
    this.LOGO_WHITE = "#ECE7E2";
    this.MAROON = "#C55F73";
    this.MAROON_A = "#ECABC1";
    this.MAROON_B = "#EC92AB";
    this.MAROON_C = "#C55F73";
    this.MAROON_D = "#A24D61";
    this.MAROON_E = "#94424F";
    this.ORANGE = "#FF862F";
    this.PINK = "#D147BD";
    this.PURE_BLUE = "#0000FF";
    this.PURE_GREEN = "#00FF00";
    this.PURE_RED = "#FF0000";
    this.PURPLE = "#9A72AC";
    this.PURPLE_A = "#CAA3E8";
    this.PURPLE_B = "#B189C6";
    this.PURPLE_C = "#9A72AC";
    this.PURPLE_D = "#715582";
    this.PURPLE_E = "#644172";
    this.RED = "#FC6255";
    this.RED_A = "#F7A1A3";
    this.RED_B = "#FF8080";
    this.RED_C = "#FC6255";
    this.RED_D = "#E65A4C";
    this.RED_E = "#CF5044";
    this.TEAL = "#5CD0B3";
    this.TEAL_A = "#ACEAD7";
    this.TEAL_B = "#76DDC0";
    this.TEAL_C = "#5CD0B3";
    this.TEAL_D = "#55C1A7";
    this.TEAL_E = "#49A88F";
    this.WHITE = "#FFFFFF";
    this.YELLOW = "#FFFF00";
    this.YELLOW_A = "#FFF1B6";
    this.YELLOW_B = "#FFEA94";
    this.YELLOW_C = "#FFFF00";
    this.YELLOW_D = "#F4D345";
    this.YELLOW_E = "#E8C11C";
}    
}

class LinearMotion{
    constructor(obj,direction,distance){
        this.obj = obj;
        this.direction = direction;
        this.distance= distance;
        this.type="linearmotion";
        this.completed=false;
    }
   
}
class Rectangle{
    constructor(x, y, width, height,strokeColor="yellow",lineWidth=1, fill = false, fillColor,label=false,labelText="Rectangle",speed=1) {
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
        this.label=label;
        this.labelText = labelText;
        this.strokeColor=strokeColor;
        this.fill = fill;
        this.fillColor = fillColor;
        this.lineWidth=lineWidth;
        this.dir ="right";
        this._dx=0;
        this._dy=0;
    }
}

class Circle {
    constructor(center_x, center_y, radius,strokeColor="cyan",fill = false, fillColor = "cyan",lineWidth=1, centerlabel = true, speed = 1, ) {
        this.cx = center_x;
        this.cy = center_y;
        this.r = radius;
        this.endAngle = 0;
        this.rad = Math.PI / 180;
        this.type = "cir";
        this.completed = false;
        this.speed = speed;
        this.centerlabel = centerlabel;
        this.strokeColor = strokeColor;
        this.fill = fill;
        this.fillColor = fillColor;
        this.lineWidth=lineWidth;
    }
}

class Text {
    constructor(text, x, y, strokeColor = "white", size = "18px", font = "Arial") {
        this.text = text;
        this.x = x;
        this.y = y;
        this.strokeColor = strokeColor;
        this.font = size + " " + font;
        this.type = "text";
        this.completed = false;
    }
}

class Line {
    constructor(x, y, length,angle=0,strokeColor="yellow",label = false, labelText = "", dashed = false, arrowtip = false, dbltip = false,speed=1) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.angle = angle * Math.PI / 180; //to rad
        this.endX = this.x + this.length * Math.cos(this.angle);
        this.endY = this.y - this.length * Math.sin(this.angle);
        this.currentX = this.x; // trackin progress
        this.currentY = this.y;
        this.completed = false;
        this.type = "line";
        this.speed = speed;
        this.dashed = dashed;
        this.arrowtip = arrowtip;
        this.dbltip = dbltip;
        this.strokeColor = strokeColor;
        this.label = label;
        this.labelText = labelText;
        this.dashwidth = 10;
        this.dashgaph = 5;

    }
}

class Dot {
    constructor(x, y, r = 3,strokeColor="red") {
        this.x = x;
        this.y = y;
        this.r = r;
        this.strokeColor = strokeColor;
        this.type = "dot";
        this.completed = false;
    }
}

class ArrowTip {
    constructor(x, y, angle, size = 15,strokeColor="cyan", face = "forwards") {
        this.x = x;
        this.y = y;
        this.size = size;
        this.strokeColor = strokeColor;
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
    constructor(x, y, labeled = true,spacing=10,axisColor="white",tickColor="rgba(255,255,255,0.7)",fontsize=12,font="Courier") {
        this.x = x;
        this.y = y;
        this.labeled = labeled;
        this.type = "graph";
        this.completed = false;
        this.spacing = spacing;
        this.axisColor = axisColor;
        this.tickColor = tickColor;
        this.font = String(fontsize)+"px "+font;
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
    constructor(expr, strokeColor = "lime", minX = -360, maxX = 360, step = 1, scale = 1) {
        this.expr = expr; 
        this.strokeColor = strokeColor;
        this.minX = minX;
        this.maxX = maxX;
        this.step = step;
        this.scale = scale;
        this.type = "graphplot";
        this.completed = false;
        this.points = [];
        this.lineWidth=1;
    }
}

class MainFrame{
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
    add(...objs) {
    objs.forEach(obj => this._add(obj));
}


_performLM(aniObj) {
    let element = aniObj.obj;
    let dir = aniObj.direction;
    let distance = aniObj.distance || 200;
    let speed = aniObj.speed || 2;

    aniObj.totalDistance = distance;
    aniObj.moved = 0;
    aniObj.completed = false;

    // direction setup
    if (dir === "right") {
        aniObj.dx = speed;
        aniObj.dy = 0;
    } else if (dir === "left") {
        aniObj.dx = -speed;
        aniObj.dy = 0;
    } else if (dir === "up") {
        aniObj.dx = 0;
        aniObj.dy = -speed;
    } else if (dir === "down") {
        aniObj.dx = 0;
        aniObj.dy = speed;
    } else {
        console.warn("Invalid direction for _performLM()");
        return;
    }

    this._performLM_step(aniObj);
}

_performLM_step(aniObj) {
    if (aniObj.completed) return;

    // erase old object (draw bg color)
    this._drawLMF(aniObj, true);

    // update position
    this._updateLMF(aniObj);

    //new obj
    this._drawLMF(aniObj, false);

    aniObj.moved += Math.abs(aniObj.dx) + Math.abs(aniObj.dy);

    if (aniObj.moved >= aniObj.totalDistance) {
        aniObj.completed = true;
        return;
    }

    requestAnimationFrame(() => this._performLM_step(aniObj));
}

_updateLMF(aniObj) {
    const obj = aniObj.obj;

    if (obj.type === "rect") {
        obj.x_start += aniObj.dx;
        obj.y_start += aniObj.dy;
        obj.x_end += aniObj.dx;
        obj.y_end += aniObj.dy;
        obj.x = obj.x_start;
        obj.y = obj.y_start;
    }
    else if (obj.type === "cir") {
        obj.cx += aniObj.dx;
        obj.cy += aniObj.dy;
    }
    else if (obj.type === "line") {
        obj.x += aniObj.dx;
        obj.y += aniObj.dy;
    }
    else if (obj.type === "text") {
        obj.x += aniObj.dx;
        obj.y += aniObj.dy;
    }else if(obj.type==="dot"){
        obj.x += aniObj.dx;
        obj.y += aniObj.dy;
    }
}

_drawLMF(aniObj, erase = false) {
    const obj = aniObj.obj;
    const ctx = this.ctx;
    const pad = obj.lineWidth + 2; 

    if (erase) {
        ctx.save();
        ctx.fillStyle = this.bgColor || "#000";
        if (obj.type === "rect") {
            ctx.fillRect(
                obj.x_start - pad,
                obj.y_start - pad,
                obj.ww + pad * 2,
                obj.hh + pad * 2
            );
        } else if (obj.type === "cir") {
            ctx.beginPath();
            ctx.arc(obj.cx, obj.cy, obj.r + pad, 0, Math.PI * 2);
            ctx.fill();
        }else if(obj.type=="line"){
            this.ctx.beginPath();
            this.ctx.moveTo(obj.x, obj.y);
            // this.ctx.lineTo(obj.x+obj.length, obj.y);
            this.ctx.lineTo(obj.x+obj.length, obj.y-(Math.sin(obj.angle)*obj.length));
        
            this.ctx.strokeStyle = this.bgColor || "#000";
            this.ctx.stroke();
            this.ctx.stroke();
            this.ctx.stroke();
            this.ctx.stroke();
            this.ctx.stroke();
        }else if(obj.type =="dot"){
            this.ctx.beginPath();
            this.ctx.arc(obj.x, obj.y, obj.r, 0, Math.PI * 2); // Full circle
            this.ctx.fillStyle = this.bgColor || "#000";
            this.ctx.fill();
            this.ctx.fill();
            this.ctx.fill();
            this.ctx.fill();
            this.ctx.fill();
            
        }
        ctx.restore();
        return;
    }

    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = obj.lineWidth;
    ctx.strokeStyle = obj.strokeColor;

    if (obj.type === "rect") {
        if (obj.fill) {
            ctx.fillStyle = obj.fillColor;
            ctx.fillRect(obj.x_start, obj.y_start, obj.ww, obj.hh);
        } else {
            ctx.strokeRect(obj.x_start, obj.y_start, obj.ww, obj.hh);
            ctx.strokeRect(obj.x_start, obj.y_start, obj.ww, obj.hh);
            ctx.strokeRect(obj.x_start, obj.y_start, obj.ww, obj.hh);
        }
    } else if (obj.type === "cir") {
        ctx.beginPath();
        ctx.arc(obj.cx, obj.cy, obj.r, 0, Math.PI * 2);
        ctx.arc(obj.cx, obj.cy, obj.r, 0, Math.PI * 2);
        ctx.arc(obj.cx, obj.cy, obj.r, 0, Math.PI * 2);
        
        if (obj.fill) ctx.fillStyle = obj.fillColor;
        obj.fill ? ctx.fill() : ctx.stroke();
    }else if(obj.type==="line"){
        this.ctx.beginPath();
        this.ctx.moveTo(obj.x, obj.y);

        this.ctx.lineTo(obj.x+obj.length, obj.y-(Math.sin(obj.angle)*obj.length));
        this.ctx.strokeStyle = obj.strokeColor;
        this.ctx.stroke();
        this.ctx.stroke();
        this.ctx.stroke();
        this.ctx.stroke();
        this.ctx.stroke();
    }else if(obj.type =="dot"){
            this.ctx.beginPath();
            this.ctx.arc(obj.x, obj.y, obj.r, 0, Math.PI * 2); // Full circle
            this.ctx.fillStyle = obj.strokeColor;
            this.ctx.fill();
    }
    ctx.restore();
}

remove(obj) {
    let nt = new Task("remove",obj);
    this.tasks.push(nt);

    }
    
   
     _eraseObject(obj) {
        const tempAniObj = {
            obj: obj,
            lineWidth: obj.lineWidth || 1 
        };
        this._drawLMF(tempAniObj, true);
        
    }




    _add(obj) {

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
            let dline = new Line(obj.cx, obj.cy, obj.r);
            dline.dashed=true;
            let nt3 = new Task(dline.type, dline);
            this.tasks.push(nt3);

        } else if (obj.type == "line" && obj.arrowtip) {
            //adding arrowtip on line edge;
            let at = new ArrowTip((obj.endX + 1), (obj.endY), -obj.angle);
            at.strokeColor=obj.strokeColor;
            let nt4 = new Task(at.type, at);
            this.tasks.push(nt4);

        }
        else if (obj.type == "line" && obj.dbltip) {
                let at = new ArrowTip((obj.x) - 1, (obj.y), -obj.angle);
                at.strokeColor=obj.strokeColor;
                at.face = "backwards";
                let nt4 = new Task(at.type, at);
                this.tasks.push(nt4);
        }
        else if(obj.type == "line" && obj.label){
            let txt = obj.labelText;
            let centerlabel = new Text(txt, (obj.x), (obj.y) - 15);
            let nt2 = new Task(centerlabel.type, centerlabel);
            this.tasks.push(nt2);
            
        }
        
        else if (obj.type == "rect" && obj.label) {

            let txt = obj.labelText;
            let centerlabel = new Text(txt, (obj.x_start + obj.ww), (obj.y_start) - 15);
            let nt2 = new Task(centerlabel.type, centerlabel);
            this.tasks.push(nt2);
        } else if (obj.type == "textbox") {

            this.ctx.font = "18px Arial"; // default or you can pass as parameter
            const textWidth = this.ctx.measureText(obj.text).width;
            const textHeight = 20; // approximated

            //rect around txt
            let bbox = new Rectangle(obj.x - 15, obj.y - 20, 12 * (obj.text.length) - 5, 30);
            bbox.speed=3;

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

            const spacing = obj.spacing;
            const axisColor = obj.axisColor;
            const tickColor = obj.tickColor;
            const font = obj.font;

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
                ctx.fillStyle = obj.tickColor;
                ctx.strokeStyle = obj.tickColor;
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

    drawRect(rectObj) {
        this.ctx.beginPath();
        this.ctx.moveTo(rectObj.x_start, rectObj.y_start);
        this._drawStep(rectObj, rectObj.strokeColor, rectObj.lineWidth, rectObj.speed);
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

        if(!r.completed){
            if(r.dir=="right"){
                r.started=true;
                r.x += amountperstep;
                if(r.x>r.x_end){
                    r.dir="down";
                    r.y += r.x_end-r.x;
                    r.x = r.x_end;
                }
            }else if(r.dir=="down"){
                r.y += amountperstep;
                if (r.y > r.y_end) {
                    r.dir="left";
                    r.x -= r.y_end-r.y;
                    r.y = r.y_end
                };
            }else if(r.dir=="left"){
                r.x -= amountperstep;
                 if (r.x < r.x_start) {
                    r.dir="up";

                    r.x = r.x_start};
            }else if(r.dir=="up"){
                r.y -= amountperstep;
                if (r.y < r.y_start) {
                    r.y = r.y_start;
                }
            }
        }


        // // finish
        if (r.started && r.x === r.x_start && r.y === r.y_start) {
            r.completed = true;
            return;
        }

        requestAnimationFrame(() => this._drawStep(r, stroke_color, line_width, amountperstep));
    }

    drawCircle(cirObj) {
        this._drawArc(cirObj, cirObj.strokeColor, cirObj.lineWidth*this.dpr, cirObj.speed);
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
        this.ctx.fillStyle = obj.strokeColor;
        this.ctx.fillText(txt, x, y);
        await this.__sleep__(1000);
        obj.completed = true;
        return;
    }

     drawLine(lineObj) {
        this.ctx.beginPath();
        this.ctx.moveTo(lineObj.x, lineObj.y);
        this.ctx.strokeStyle = lineObj.strokeColor;
        if (lineObj.dashed) {
            this.ctx.setLineDash([lineObj.dashwidth, lineObj.dashgaph]);
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
        const color = arrowObj.strokeColor;


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
        this.ctx.fillStyle = obj.strokeColor;
        this.ctx.fill();
        obj.completed = true;
        await this.__sleep__(1000);

        return;
    }

       drawGraph(graphObj) {

    this.ctx.beginPath();
    this.ctx.strokeStyle = graphObj.strokeColor;
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

    this.ctx.strokeStyle = graphObj.strokeColor;
    this.ctx.lineWidth = graphObj.lineWidth;
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
            else if (tp == "linearmotion") {
                this._performLM(obj);
                await this._waitUntilFinish(obj);
            }else if(tp == "remove"){
                this._eraseObject(obj);
                await this._waitUntilFinish(obj);
            }

            // this.tasks.shift();

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


export {Colors, Rectangle, LinearMotion, Circle, Text, Line, Dot, CoordinateSystem, TextBox, Parser,Task,ArrowTip,Graph,MainFrame};
