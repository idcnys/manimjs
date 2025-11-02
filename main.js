import {Colors, Rectangle, LinearMotion, Circle, Text, Line, Dot, CoordinateSystem, TextBox, Parser,Task,ArrowTip,Graph,MainFrame} from "manim2d";

const frame = new MainFrame("canvas", false, "my-animation", "#000");
let r1 = new Rectangle(100,100,300,100);
r1.label=true;
r1.labelText="Hi, I am a rectangle :)";
r1.speed=1;
let c1 = new Circle(400,400,100,"#46ff80ff",true,"#618565ff");
c1.speed = 20;
c1.lineWidth=3;
let c2 = new Circle(500,500,100);
c2.center = true;
c2.speed=20;
let r2 = new Rectangle(600,600,50,50);
r2.strokeColor="cyan";
r2.fill=true;
r2.fillColor="#5e8f96ff"
r2.label=true;
r2.labelText="hello from my side xD";
let d1 = new Dot(100,400,3);
d1.strokeColor="white";
let txt = new Text("Simple but powerful",100,500,"white",30,"Monospace")
let lm1 = new LinearMotion(d1,"right",100);
let lm2 = new LinearMotion(d1,"up",150);
let lm3 = new LinearMotion(d1,"right",200);
let t1 = new Text("Can u see? i moved xD",500,250,"cyan");
let d2 = new Dot(100,400,3);
let t2 = new Text("from here",110,405);
let t3 = new Text("to here",425,250)
let l1 = new LinearMotion(r1,"right",300);
let l2 = new LinearMotion(r1,"up",100);
let l3 = new LinearMotion(r1,"down",130);
let l4 = new LinearMotion(d1,"left",100);
let l5 = new LinearMotion(r1,'down',20);
let ll55 = new LinearMotion(r1, "up",20);
let ll5 =new LinearMotion(r1,"left",500);
let l6 = new LinearMotion(r1,"down",380);
let l66 = new LinearMotion(r1,"up",50);
let ll6 = new LinearMotion(r1,"right",60);
let l666 = new LinearMotion(r1,"left",300);
let l7 = new LinearMotion(r2,"up",50);
let l8 = new LinearMotion(r2,"right",500);
let ori = new CoordinateSystem(600,400);
let g1 = new Graph(x => 100 * Math.sin(x), (new Colors).LOGO_RED, -360, 360, 2, 1);
let tc = new Text("Thanks for watching :)",200,600);
tc.fontsize=50;
frame.add(r1,c1,c2,r2,d1,txt,lm1,lm2,lm3,t1,d2,t2,t3,l1,l2,l3,l4,l5,ll55,ll5,l6,l66,ll6,l666,l7,l8,ori,g1,tc);
frame.play();
