//enemies
class zombie {
    constructor(game, x, y) {
        Object.assign(this,{game, x, y});
        //spritesheet
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/zombies.png");

        // zombie state variable
        this.facing = 0; // 0 = right, 1 == left
        this.state = 0; //0 = idle, 1 = walking, 2 = running, 3= attacking, 4 = die
        this.dead = false;
        //zombie idling
        this.animation = [];
        //idle
        this.animation[0]= new Animator(this.spritesheet, 146, 15, 35, 40 , 5, 0.33, 60, false, true);
        //running
        this.animation[1]= new Animator(this.spritesheet, 146, 71, 35, 40 , 5, 0.1, 60, false, true);
        //hurting
        this.animation[2] = new Animator(this.spritesheet, 146, 296, 35, 40 , 5, 0.33, 60, false, true);


    };

    draw(ctx) {
        //console.log("hello");
        //ctx.drawImage(this.spritesheet, 0, 0);
        this.animation[0].drawFrame(this.game.clockTick, ctx, 0, 0, 2);
        this.animation[1].drawFrame(this.game.clockTick, ctx, 0, 150, 2);
        this.animation[2].drawFrame(this.game.clockTick, ctx, 0, 300, 2);
    };
    
    update() {    
    }

};
