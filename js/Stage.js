/**
 * Created by and on 2018/1/7.
 */
import WorldData from './WorldData.js'
import EventManager from './base/EventManager.js'
import CtxManager from './base/CtxManager.js'
import Button from './component/Button.js'
import StartScene from './scene/StartScene.js'
import ClickDemoScene from './scene/ClickDemoScene.js'
import TimeGodDemoScene from './scene/TimeGodDemoScene.js'

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

let worldData = new WorldData();

//var canvas = wx.createCanvas()
let eventManager = new EventManager(canvas);

let ctxt = canvas.getContext('2d')
let ctx = new CtxManager(ctxt,canvas);

export default class Stage{
    constructor() {
        this.restart()
    }
    restart(){
        console.info("stage is restart")
        worldData.startTs = new Date().getTime()
        this.currentScene = new ClickDemoScene()

        this.currentScene.regEvent(eventManager)
        window.requestAnimationFrame(
            this.loop.bind(this),
            canvas
        )
    }
    loop(){
        this.update()
        this.render();
        worldData.lastTs = new Date().getTime();
        window.requestAnimationFrame(
            this.loop.bind(this),
            canvas
        )
    }
    update(){
        this.currentScene.update()
    }
    render(){
        this.currentScene.render(ctx)
    }
}