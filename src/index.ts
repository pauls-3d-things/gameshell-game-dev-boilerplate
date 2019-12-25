import * as Phaser from 'phaser';
import { DVDLogoScene } from './scenes/dvd-logo';

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: "Phaser Boilerplate",
    type: Phaser.AUTO,
    width: 320,
    height: 240,
    parent: 'game',
    backgroundColor: '#000000',
    scene: DVDLogoScene,

    physics: {
        default: 'arcade',
        arcade: {
            debug: false, // this can be very useful
        },
    },

}

document.title = gameConfig.title ? gameConfig.title : "Boilerplate Game Title";

var game = new Phaser.Game(gameConfig);