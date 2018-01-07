/**
 * Created by and on 2018/1/7.
 */
import CommonUtils from '../base/CommonUtils.js'

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight
let buttonCount = 0;

export default class Button {
    constructor(x, y, w, h, z) {
        buttonCount++;
        this.id = buttonCount
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.z = z
    }

    render(ctx) {
        ctx.fillStyle = "#ff0000"
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.stroke()
    }

    update() {

    }

    onTouchStart(x, y) {
        console.info("button-" + this.id + ",onTouchStart,x:" + x + ",y:" + y);
    }

    onTouchMove(x, y) {

    }

    onTouchEnd(x, y) {

    }
    isTouch(x, y) {
        return x >= this.x && x <= this.x + this.w && y >= this.y && y <= this.y + this.h
    }
}