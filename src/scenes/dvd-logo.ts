import * as Phaser from 'phaser';

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
};

export class DVDLogoScene extends Phaser.Scene {
    private sprite?: Phaser.Physics.Arcade.Sprite;
    private speed: number = 10;

    private escKey?: Phaser.Input.Keyboard.Key;

    constructor() {
        super(sceneConfig);
    }

    public preload() {
        this.load.image('dvd-logo', '../assets/64px-dvd-logo.png');
    }

    public create() {
        this.escKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        
        this.sprite = this.physics.add.sprite(50, 50, "dvd-logo");
        this.sprite.setVelocityX(10 + Math.random() * 10);
        this.sprite.setVelocityY(10 + Math.random() * 10);
        this.sprite.setCollideWorldBounds(true, 1, 1);
        (this.sprite.body as any).onWorldBounds = true;

        const collisionCallback = () => {

            if (this.sprite) {
                this.sprite.tint = Math.random() * 0xffffff;
            }

        }

        this.physics.world.on("worldbounds", collisionCallback);
    }

    public update() {
        if (this.escKey?.isDown) {
            this.game.destroy(true);
            window.location.replace('../../../index.html');
        }
    }
}
