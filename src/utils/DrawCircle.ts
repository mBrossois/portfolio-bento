export class DrawCircle {
    #ctx
    #mouseX
    #mouseY
    #originalX
    #originalY
    #currentX
    #currentY
    #color
    radius
    startAngle
    endAngle
    velocityX
    velocityY
    constructor(ctx: CanvasRenderingContext2D, originalX: number, originalY: number) {
        this.#ctx = ctx;
        this.#mouseX = -100;
        this.#mouseY = -100;
        this.#originalX = originalX
        this.#originalY = originalY
        this.#currentX = originalX
        this.#currentY = originalY

        this.radius = 1
        this.startAngle = 0
        this.endAngle = 360
        this.velocityX = 0
        this.velocityY = 0 
        
        this.#color = '#ffffff'
    }

    setMode(isDarkMode: boolean) {
        this.#color = isDarkMode ? '#ffffff' : '#000000'
    }

    setMouse(mouseX: number, mouseY: number) {
        this.#mouseX = mouseX
        this.#mouseY = mouseY
    }

    getDistanceAbsolute() {
        const distanceX = this.#mouseX - this.#originalX;
        const distanceY = this.#mouseY - this.#originalY;

        const distanceXAbsolute = Math.abs(distanceX)
        const distanceYAbsolute = Math.abs(distanceY)

        return {distanceXAbsolute, distanceYAbsolute, distanceX, distanceY}
    }

    moveToMouse(isPositive: boolean, distance: number) {
        if(distance > 20) {
            return isPositive ? 4 : -4
        } else {
            return 0
        }
    }

    moveToOriginal(isPositive: boolean, distance: number) {
        if(distance > 0) {
            return isPositive ? 2 : -2
        } else {
            return 0
        }
    }

    #calculateVelocity(moveToMouse: boolean) {
        const currXDistance = this.#mouseX - this.#currentX
        const currYDistance = this.#mouseY - this.#currentY

        const currXDistanceFromOg = this.#originalX - this.#currentX
        const currYDistanceFromOg = this.#originalY - this.#currentY

        if(moveToMouse) {
            this.velocityX = this.moveToMouse(currXDistance >= 0, Math.abs(currXDistance))
            this.velocityY = this.moveToMouse(currYDistance >= 0, Math.abs(currYDistance))
        } else if(!moveToMouse && (this.#currentX != this.#originalX || this.#currentY != this.#originalY)) {
            this.velocityX = this.moveToOriginal(currXDistanceFromOg >= 0, Math.abs(currXDistanceFromOg))
            this.velocityY = this.moveToOriginal(currYDistanceFromOg >= 0, Math.abs(currYDistanceFromOg))
        } else {
            this.velocityX = 0
            this.velocityY = 0
        }
    }

    #calculateColor(opacity: string) {
        this.#ctx.fillStyle = `${this.#color}${opacity}`;
    }

    #draw(timestamp: number, moveToMouse: boolean) {
        this.#calculateVelocity(moveToMouse)
        this.#currentX = this.#currentX += this.velocityX
        this.#currentY = this.#currentY += this.velocityY
        this.#ctx.beginPath();
        this.#ctx.arc(this.#currentX, this.#currentY, this.radius, this.startAngle, this.endAngle);
        this.#ctx.fill();
    }

    draw(timestamp: number) {
        const {distanceXAbsolute, distanceYAbsolute} = this.getDistanceAbsolute()
        const moveToMouse = distanceXAbsolute <= 50 && distanceYAbsolute <= 50
        let opacity = 50;
        if(moveToMouse) {
            opacity = 100 - Math.round(( (distanceXAbsolute + distanceYAbsolute) / 100 ) * 50)
        }
        this.#calculateColor(opacity.toString())
        this.#draw(timestamp, moveToMouse);
    }
        
}