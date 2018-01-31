/**
 * Created by and on 2018/1/7.
 */
import CommonUtils from '../base/CommonUtils.js'

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight
let count = 0;

export default class TextView {
    constructor(x, y, w, h, z) {
        count++;
        this.id = count
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.z = z
        this.update = true
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