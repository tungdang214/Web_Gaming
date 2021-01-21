//enemies
class zoombie {
    constructor(game, x, y) {
        Object.assign(this,{game, x, y});
        //spritesheet
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/zombies.png");

        // zombie state variable
        this.facing = 0; // 0 = right, 1 == left
        this.state = 0; //0 = idle, 1 = walking, 2 = running, 3= attacking, 4 = die
        this.dead = false;
        //zombie idling
        this.animation = new aninmator(this.spritesheet, 170, 18, 16, 32, 1, 0.33, 64, false, true);

    }

    draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE)
    }
}

class skeleton {
    constructor(game, x, y)
}