"use strict";
var model_1 = require("./model");
var view_web_1 = require("./view-web");
// import {Controller} from './controller';
var game = new model_1.Model();
var view = new view_web_1.View(game);
// let ctrl:Controller = new Controller(game);
console.log("starting game... with changes!");
// ctrl.play();
