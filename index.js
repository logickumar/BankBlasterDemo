

const TelegramBot = require('node-telegram-bot-api');
const token = '667433247:AAEQz4UifkxgnYPLA9VgghEZvuCjjHzzXq4';
const bot=new TelegramBot(token,{polling: true});
const gameName='DemoBankBlaster';
const path=require('path');
let url='http://bankblaster.bitballoon.com/';


bot.on('message',(msg)=>{
	var Hi="hi";
	if(msg.text.toString().toLowerCase().indexOf(Hi)===0){
		bot.sendMessage(msg.chat.id,"Hello dear user");
	}
	
	var Bye="bye";
	if(msg.text.toString().toLowerCase().includes(Bye)){
		bot.sendMessage(msg.chat.id,"Hope to see you around again, Bye");
	}
});

// bot.onText(/\/start/,(msg)=>{
// 	// bot.sendMessage(msg.chat.id,"Welcome");
// // 	bot.sendPhoto(msg.chat.id,"https://firstseed.in/wp-content/uploads/2017/12/ss_1.png" );
// });

bot.onText(/\/start/,function onPhotoText(msg){
	bot.sendGame(msg.chat.id,gameName);
});

bot.on('callback_query',function onCallbackQuery(callbackQuery){
	bot.answerCallbackQuery(callbackQuery.id,{url});
});


