/**
 * Created by and on 2018/1/7.
 */
import WorldData from './WorldData.js'
import EventManager from './base/EventManager.js'
import Button from './component/Button.js'

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

let worldData = new WorldData();
let eventManager = new EventManager(canvas);

let size_small = 100;
let size_big = 200;
let btn1 = new Button(screenWidth/2-size_small/2,screenHeight/2-size_small/2,size_small,size_small,2);
let btn2 = new Button(screenWidth/2-size_big/2,screenHeight/2-size_big/2,size_big,size_big,1);
let ctx = canvas.getContext('2d')
export default class Stage{
    constructor() {
        this.restart()
    }
    restart(){
        console.info("stage is restart")
        worldData.startTs = new Date().getTime();

        eventManager.regEvent('touchstart',btn1)
        eventManager.regEvent('touchstart',btn2)

        window.requestAnimationFrame(
            this.loop.bind(this),
            canvas
        )
    }
    loop(){
        this.update()
        this.render(ctx);
        worldData.lastTs = new Date().getTime();
        window.requestAnimationFrame(
            this.loop.bind(this),
            canvas
        )
    }
    update(){

    }
    render(ctx){
        btn1.render(ctx)
        btn2.render(ctx)
    }
}