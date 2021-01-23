//sceneManager
class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this
        this.load();
    };

    load() {
        let Zombie = new zombie(this.game, 22 * 3, 13 * 3);
        this.game.addEntity(Zombie);
    };
};