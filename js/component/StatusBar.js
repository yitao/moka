/**
 * Created by and on 2018/1/7.
 */
import DateUtils from '/js/base/DateUtils.js'

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

export default class StatusBar {
    constructor(x, y, w, h, z) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.z = z;
    }

    render(ctx) {
        ctx.fillStyle = "#ffffff"
        ctx.font = "20px Arial"

        ctx.fillText(
            '得分: ' + score,
            screenWidth / 2 - 40,
            screenHeight / 2 - 100 + 130
        )

    }

    update() {

    }

    onTouchStart(x, y) {

    }

    onTouchMove(x, y) {

    }

    onTouchEnd(x, y) {

    }
}