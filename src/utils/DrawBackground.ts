import { DrawCircle } from "./DrawCircle"

export class DrawBackground {
    #ctx
    #width
    #height
    #listOfCircles: [DrawCircle]
    cellSize
    currentTime
    totalAmount
    constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
        this.#ctx = ctx;
        this.#width = width;
        this.#height = height;

        this.#listOfCircles = []

        this.cellSize = 30;
        this.currentTime = 0;

        this.totalAmount = 0

        this.#initialize()
    }

    setMouse(x: number, y: number) {
        for(let i = 0; i < this.totalAmount; i++) {
            if(this.#listOfCircles[i]) {
                this.#listOfCircles[i]!.setMouse(x, y)
            }
        }
    }

    #initialize() {
        this.totalAmount = 0;
        for(let y = 0; y < this.#height; y += this.cellSize) {
            for(let x = 0; x < this.#width; x += this.cellSize) {
                this.#listOfCircles.push(new DrawCircle(this.#ctx, x, y))
                this.totalAmount++;
            }
        }
    }

    #draw(timestamp: number) {
        for(let i = 0; i < this.totalAmount; i++) {
            if(this.#listOfCircles[i]) {
                this.#listOfCircles[i]!.draw(timestamp)
            }
        }
    }

    animate(timestamp: number) {
        this.currentTime = timestamp;
        this.#ctx.clearRect(0, 0, this.#width, this.#height);
        this.#draw(timestamp);
        requestAnimationFrame(this.animate.bind(this))
    }
        
}