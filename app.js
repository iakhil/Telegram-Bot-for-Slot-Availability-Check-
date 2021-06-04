require('dotenv')

const express = require("express");

const app = express();
const TelegramBot = require('telegram-bot-api')
const https = require("https")
const token = "1894902576:AAEJ17j6Brp_Fbw0Gnhi7zw0Zpx-Po6l_uA";

const {Telegraf} = require('telegraf');

const bot = new Telegraf(token)
bot.start((ctx) => ctx.reply('Welcome'))
// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))



bot.hears('How are you?', (ctx) => ctx.reply(1 + 1))
app.get("/", function(req, res){

// //bot.telegram.sendMessage("I messaged first.")
// bot.on('message', function (ctx, next) {
//     ctx.telegram.sendMessage(ctx.message.chat.id,
//      "Messaging first."
//     )
// });


var date = new Date();
var day = date.getDay();
console.log("The day number is: " + day)
var chatId = "@Vaccine_SlotBot";
var i = 20;

var mins = date.getMinutes();
// setInterval(function() {
var date = new Date();
var mins = date.getMinutes();
// if(mins % 2 == 0)
// {

// bot.telegram.sendMessage("765691937", "The number of minutes is even atm.")

// }	
// }, 60000)

const url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=110022&date=6-06-2021";

  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
    const weatherData = JSON.parse(data)
 console.log(weatherData.centers[3].sessions[3]);

bot.start((ctx) => ctx.reply('Welcome!'))

var capacity = [];
var age = [45];
var centers = [];
var slots = []
var vaccine = []
for(var i = 0; i < 4; i++){

	n = weatherData.centers[i].sessions[i].available_capacity;
	age_avail = weatherData.centers[i].sessions[i].min_age_limit;
	c = weatherData.centers[i].name;
	s = weatherData.centers[i].sessions[i].slots;
	v = weatherData.centers[i].sessions[i].vaccine;
	capacity.push(n);
	age.push(age_avail);
	centers.push(weatherData.centers[i].name);
	slots.push(s);
	vaccine.push(v);

	var date = new Date();
	var mins = date.getMinutes();


}
bot.hears('What can you do?', (ctx) => ctx.reply("I can inform you about centers, slots, age groups, and vaccine names."))
bot.hears('Age group?', (ctx) => ctx.reply(age.toString()))
bot.hears('Centers?', (ctx) => ctx.reply(centers.toString()))
bot.hears('Capacity?', (ctx) => ctx.reply(capacity.toString()))
bot.hears('Slots?', (ctx) => ctx.reply(slots[0].toString()))
bot.hears('Vaccine?', (ctx) => ctx.reply(vaccine.toString()))
const name = 2;
if(name == 2)
{
	bot.on('text', (ctx) => {ctx.telegram.sendMessage(ctx.message.chat.id, "Sorry, I didn't catch that.")} )
}
// bot.hears('All centers', (ctx) => ctx.reply(names.toString));

// bot.hears('Age group?', (ctx) => ctx.reply(age.toString));
    })
})
})

bot.launch()


app.listen(3000, function(){
	console.log("Server is running on port 3000.")
})
// Enable graceful stop
// process.once('SIGINT', () => bot.stop('SIGINT'))
// process.once('SIGTERM', () => bot.stop('SIGTERM'))

// //const token = "1894902576:AAEJ17j6Brp_Fbw0Gnhi7zw0Zpx-Po6l_uA"
// const bot = new TelegramBot({
// 	token: "1894902576:AAEJ17j6Brp_Fbw0Gnhi7zw0Zpx-Po6l_uA"
	
// })
// bot.on(/\/Hello (.+)/, (msg, match) => {

// 	const chatId = msg.chat.id;
// 	const resp = match[1];

// 	bot.sendMessage(
// 		chatId, 'Hello!'
// 		)

// })



// bot.getMe()
// .then(console.log)
// .catch(console.err)
















// var token  = "1894902576:AAEJ17j6Brp_Fbw0Gnhi7zw0Zpx-Po6l_uA";


// var TelegramBot = require('telegram-bot-api');

// var bot = new TelegramBot(token, {polling: true});

// bot.onText(/\/echo (.+)/, function(msg, match){

// 	var chatId = msg.chat.id; 
// 	var echo = match[1];
// 	bot.sendMessage(chatId, echo)
// })






























// const express = require("express");

// const app = express();

// const bodyParser = require("body-parser");

// //const TelegramBot = 1894902576:AAEJ17j6Brp_Fbw0Gnhi7zw0Zpx-Po6l_uA

// const token = "1894902576:AAEJ17j6Brp_Fbw0Gnhi7zw0Zpx-Po6l_uA"

// const TG = require('telegram-bot-api')


// // const api = new TG({
// // 	token: "1894902576:AAEJ17j6Brp_Fbw0Gnhi7zw0Zpx-Po6l_uA"
// // })

// var bot = new TG(token, {polling: true});


// bot.onText(/\/echo (. + )/, function(msg, match){

// 	var chatId = msg.chat.id; 
// 	var echo = match[1];
// 	bot.sendMessage(chatId, echo);


// 	});


// bot.getMe()
// .then(console.log)
// .catch(console.err)

// const chatId = "@vaccine_SlotBot";
// const url = 'https://telegram.org/img/t_logo.png';
// api.sendPhoto(chatId, url);


// api.sendPhoto({
// 	chat_id: "@vaccine_SlotBot",
// 	caption: "Test image",
// 	photo: fs.createReadStream('mpc_lab2.png')

// })
// const bot = new TelegramBot(token, {polling : false});

// app.use(bodyParser.urlencoded({extended: true}));

// const https = require("https");

// app.get("/", function(req, res){

// })