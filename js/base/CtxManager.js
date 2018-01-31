/**
 * Created by and on 2018/1/7.
 */
let instance

/**
 * 全局状态管理器
 */
export default class CtxManager {
    constructor(ctx, canvas) {
        this.ctx = ctx
        this.canvas = canvas
        if (instance)
            return instance
        instance = this
    }

    setFillStyle(style) {
        this.ctx.fillStyle = style || "#000000"
    }

    setStrokeStyle(style) {
        this.ctx.strokeStyle = style || "#000000"
    }

    setShadow(offsetX, offsetY, blur, color) {
        //this.ctx.setShadow(offsetX,offsetY,blur,color)
    }

    setLineWitdh(lineWidth) {
        this.ctx.setLineWitdh(lineWidth)
    }

    setLineCap(lineCap) {
        //'butt'、'round'、'square'
        this.ctx.setLineWitdh(lineCap)
    }

    setLineJoin(setLineJoin) {
        //'bevel'、'round'、'miter'
        this.ctx.setLineJoin(setLineJoin)
    }

    /**
     * 设置线条的宽度
     * @param pattern   Array    一组描述交替绘制线段和间距（坐标空间单位）长度的数字
     * @param offset    Number    虚线偏移量
     */
    setLineDash(pattern, offset) {
        this.ctx.setLineDash([10, 20], 5);
    }

    /**
     * 设置最大斜接长度，斜接长度指的是在两条线交汇处内角和外角之间的距离。
     * 当 setLineJoin() 为 miter 时才有效。超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示
     * @param miterLimit    Number    最大斜接长度
     */
    setMiterLimit(miterLimit) {
        ctx.setLineDash([10, 20], 5);
    }


    createLinearGradient() {
        var grd = this.ctx.createLinearGradient(0, 0, 200, 0)
        grd.addColorStop(0, 'red')
        grd.addColorStop(1, 'white')
        return grd
    }

    createCircularGradient() {
        /*var grd = this.ctx.createCircularGradient(0, 0, 200)
         grd.addColorStop(0, 'red')
         grd.addColorStop(1, 'white')
         return grd*/
    }

    createRadialGradient() {
        /*var grd = this.ctx.createRadialGradient(0, 0, 200)
         grd.addColorStop(0, 'red')
         grd.addColorStop(1, 'white')
         return grd*/
    }

    rect(x, y, w, h) {
        this.ctx.rect(x, y, w, h)
    }

    fillRect(x, y, w, h) {
        this.ctx.fillRect(x, y, w, h)
    }

    clearRect(x, y, w, h) {
        this.ctx.clearRect(x, y, w, h)
    }

    beginPath() {
        this.ctx.beginPath()
    }

    closePath() {
        this.ctx.closePath()
    }

    /**
     * 把路径移动到画布中的指定点，不创建线条。
     * Tip: 用 stroke() 方法来画线条
     * @param x Number    目标位置的x坐标
     * @param y Number    目标位置的y坐标
     */
    moveTo(x, y) {
        this.ctx.moveTo(10, 10)
    }

    /**
     * 方法增加一个新点，然后创建一条从上次指定点到目标点的线。
     * Tip: 用 stroke() 方法来画线条
     * @param x Number    目标位置的x坐标
     * @param y Number    目标位置的y坐标
     */
    lineTo(x, y) {
        this.ctx.lineTo(10, 10)
    }

    /**
     * 画一条弧线。
     * Tip: 创建一个圆可以用 arc() 方法指定其实弧度为0，终止弧度为 2 * Math.PI。
     * Tip: 用 stroke() 或者 fill() 方法来在 canvas 中画弧线。
     * @param x Number    圆的x坐标
     * @param y Number    圆的y坐标
     * @param r Number    圆的半径
     * @param sAngle    Number    起始弧度，单位弧度（在3点钟方向）
     * @param eAngle    Number    终止弧度
     * @param counterclockwise  Boolean    可选。指定弧度的方向是逆时针还是顺时针。默认是false，即顺时针。
     */
    arc(x, y, r, sAngle, eAngle, counterclockwise) {
        this.ctx.arc(100, 75, 50, 0, 2 * Math.PI)
    }

    stroke() {
        this.ctx.stroke()
    }

    fill() {
        this.ctx.fill()
    }

    setFontSize(fontSize) {
        //this.ctx.setFontSize(fontSize)
    }

    /**
     * 用于设置文字的对齐
     * @param align String    可选值 'left'、'center'、'right'
     */
    setTextAlign(align) {
        this.ctx.setTextAlign(align)
    }

    /**
     *
     * @param textBaseline  String    可选值 'top'、'bottom'、'middle'、'normal'
     */
    setTextBaseline(textBaseline) {
        this.ctx.setTextBaseline(textBaseline)
    }

    fillText(text, x, y) {
        this.ctx.fillText(text, x, y)
    }

    /**
     * 绘制图像到画布
     *
     drawImage(dx, dy)
     drawImage(dx, dy, dWidth, dHeight)
     drawImage(sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) 从 1.9.0 起支持
     * @param imageResource String    所要绘制的图片资源
     * @param dx    Number    图像的左上角在目标canvas上 X 轴的位置
     * @param dy    Number    图像的左上角在目标canvas上 Y 轴的位置
     * @param dWidth    Number    在目标画布上绘制图像的宽度，允许对绘制的图像进行缩放
     * @param dHeigt    Number    在目标画布上绘制图像的高度，允许对绘制的图像进行缩放
     * @param sx    Number    源图像的矩形选择框的左上角 X 坐标
     * @param sy    Number    源图像的矩形选择框的左上角 Y 坐标
     * @param sWidth    Number    源图像的矩形选择框的高度
     * @param sHeight   Number    源图像的矩形选择框的高度
     */
    drawImage(imageResource, dx, dy, dWidth, dHeigt, sx, sy, sWidth, sHeight) {
        ctx.drawImage(sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    }

    /**
     * 设置全局画笔透明度
     * @param alpha Number    0~1    透明度，0 表示完全透明，1 表示完全不透明
     */
    setGlobalAlpha(alpha) {
        /*this.ctx.setGlobalAlpha(0.2)*/
    }

    drawBtn(c) {
        c.color = this.createLinearGradient();
        c.color = this.createRadialGradient();
        this.setStrokeStyle(c.strokeColor || "red")
        this.rect(c.x, c.y, c.w, c.h);
        this.setFillStyle(c.fillColor || "yellow")
        this.fillRect(c.x, c.y, c.w, c.h);
        this.setShadow(c.x + 10, c.y + 10, 100, "blue");
        this.stroke()
    }

    clearBtn(c) {
        //TODO 计算最少重绘面积
        this.clearRect(c.x, c.y, c.w, c.h)
    }

    drawText(c) {
        this.setGlobalAlpha(0.5)
        this.setFontSize(c.fontSize || '20')
        this.setFillStyle(c.fillColor || "#000000")
        this.fillText('Hello', 20, 20)
    }

    render(c1, c2) {
        this.drawBtn(c1)
        this.drawBtn(c2)
        this.drawText({})
        //this.clearBtn(c1)

    }

}