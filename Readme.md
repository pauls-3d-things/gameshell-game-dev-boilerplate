# GameShell nwjs typescript phaser BoilerPlate

This is my personal boilerplate to get started with game development on the ClockworkPi GameShell.

## Getting started

Install `node`/`npm` from [https://nodejs.org/en/](https://nodejs.org/en/) (LTS).

Install `nw` from [https://nwjs.io/](https://nwjs.io/) (SDK).

Make sure the commands `npm` and `nw` are available in your CLI.

I use *Visual Studio Code* from [https://code.visualstudio.com/](https://code.visualstudio.com/) as a my IDE.

    npm install
    npm run build
    npm run start

And you should see a small window with a bouncing DVD logo.

## Stuff to read for the GameShell

This is the thread I looked at to find the info on how to run some Javascript based games on the GameShell:

[https://forum.clockworkpi.com/t/gsp-gameshell-phaser/1391/35](https://forum.clockworkpi.com/t/gsp-gameshell-phaser/1391/35)

The GSP Launcher came preinstalled on my GameShell, so there was not much to set up.

This also helped me get started:

[https://github.com/pleft/nwphaserjs_tutorial](https://github.com/pleft/nwphaserjs_tutorial)


This was a helpful reference to write the DVD Demo and understand PhaserJS:

[http://labs.phaser.io/](http://labs.phaser.io/)


## Running this Project on the GameShell

As shown above, build this project with

    npm run build

### Preparing GSP

Connect to the GSP via SSH. I assume you are using a linux like environment as your desktop OS.

On my device, GSP was installed in `/home/cpi/games/GSP/`.
The launcher reads a config file `/home/cpi/games/GSP/GSPGames/menu.json`, so you can add your own project there.

Add the entry:

```json
	{
	    "title": "DVD-Demo",
	    "directory": "dvd-demo/"
	}
```

Then, create the folder:

    mkdir /home/cpi/games/GSP/GSPGames/dvd-demo

### Copy over the files

Then, copy over the files:

    scp -r dist/* cpi@clockworkpi:/home/cpi/games/GSP/GSPGames/dvd-demo/

(Re)Start the GSP Launcher and select DVDDEMO from the menu.

### Getting all 320x240 Pixels

The GSP default config hasn't set the NWJS window to allow full screen.
I changed the file `/home/cpi/games/GSP/package.json` to allow fullscreen, so the contents are as follow:

```json
{
    "name": "GSPLauncher",
    "main": "index.html",
    "window": {
        "width": 320,
        "height": 240,
        "max_width": 320,
        "max_height": 240,
        "resizable": false,
        "fullscreen": true, // change this from false to true
        "frame": false,
        "transparent": true
    }
}
```

In addidtion to this, I had to set `overflow: hidden` on the `body` tag.
Then, you can use the full 320x240 canvas for PhaserJS (after restarting GSP).

## Debugging

Connect to your GameShell with

    ssh -L 9222:localhost:9222 cpi@clockworkpi

Then, open 

[http://localhost:9222](http://localhost:9222)

with the browser chrome. The developer console will open, and you can select the index.html to debug your project running on the gameshell.

## Notes

I used the logo from Wikipedia to create the asset:

[https://commons.wikimedia.org/wiki/File:DVD_logo.svg](https://commons.wikimedia.org/wiki/File:DVD_logo.svg)