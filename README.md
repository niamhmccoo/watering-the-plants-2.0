# watering-the-plants-2.0

Intro:

This project was built as a way to play around with Javascript, Node.JS, Express and NeDB. As its foundation it uses as an older project that was originally built as a selection of Javascript timers that help remind you when you watered your plants (storing data locally in the browser). This new version has been upgraded to store data in a database.

Prerequisites:

Download & install Node.js:
https://nodejs.org/en/

In the command line, clone this repository by typing:
$ git clone https://github.com/niamhmccoo/watering-the-plants-2.0

Then create a package.json file by typing in the command line again:
$ npm init

Complete the questions that follow by pressing ‘Enter’ until confirmation is requested:
1. Name: a default name is automatically generated for this, so if you want to create your own just type it next to it and press Enter.
2. Version: This will be 1.0.0. Press Enter.
3. Description: You can add a description here by just typing to the right of the word, and press Enter when done (you can also just press Enter without writing a description if you like).
4. Entry point: This will be automatically written as "index.js", but you can change it to "server.js" instead as that’s what will be built later.
5. Test command: Press Enter.
6. Git Repository: This is the link to the Git repository where the project will be stored. If you have a repo that you want to use, paste it here & press Enter.
7. Keywords: If you like, you can add keywords here that will make it easier for people to find the project on GitHub.
8. Author: enter your name.
9. License: Not necessary for this project, so just press Enter.
10. Confirmation: You’ll be asked for confirmation, e.g. “Is this ok? (yes"). Press Enter.

Now you should have a package.json file in your folder.

Then install Express in the command line:
$ npm install express --save

To make sure it installed, check your package.json file for something that looks like this:
“dependencies”: {
	“express”: “^4.14.0”
}

You can also download the database used in this project (NeDB) here:
https://github.com/louischatriot/nedb

Once it's installed, you'll see in the package.json file something that looks like this:
"nedb": "^1.8.0"
underneath where Express was just installed.

Now you should be all set up!