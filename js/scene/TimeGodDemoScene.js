/**
 * Created by and on 2018/1/7.
 */
import Button from '../component/Button.js'
const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

export default class TimeGodDemoScene{
    constructor(){
        let size_small = 100;
        let size_big = 200;
        this.btn1 = new Button(screenWidth/2-size_small/2,screenHeight/2-size_small/2,size_small,size_small,2);
        this.btn2 = new Button(screenWidth/2-size_big/2,screenHeight/2-size_big/2,size_big,size_big,1);
    }
    regEvent(eventManager){
        eventManager.regEvent('touchstart',this.btn1)
        eventManager.regEvent('touchstart',this.btn2)
    }
    render(ctx){
        this.btn1.render(ctx)
        this.btn2.render(ctx)
    }
    update(){

    }
}