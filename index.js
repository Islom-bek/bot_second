
const TelegramBot = require('node-telegram-bot-api');

const token = '1751630597:AAHNcd4aGS451k7YNqsyW0m-puCu6VKKFYE';

const bot = new TelegramBot(token, {polling: true});

const webUrl = 'https:ya.ru' 




bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const user = msg.chat.first_name;
  const text = msg.text

  if(text === '/start'){+
    await bot.sendMessage( chatId ,   'hello ' + user   , {
        reply_markup: {
          inline_keyboard: [
            [{text: 'tap to button ordering ' , web_app: {url: webUrl }}]
          ]
        }
    })
     
  }

});

