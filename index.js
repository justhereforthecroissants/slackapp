const SlackBot = require('slackbots')
const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

const bot = new SlackBot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'bbot'
})

// Start bot
bot.on('start', () => {
    const params = {
        icon_emoji: ':alien:'
    }

    bot.postMessageToChannel(
        'implementations',
        'Let @bbot help you bwell!'

    );
})

// Error handler
bot.on('error', (err) => {
    console.log(err);
})

// Message handler
bot.on('message', (data) => {
    if(data.type !== 'message' || data.subtype === 'bot_message') {
        return;
    }
    messanger(data.text);
})

// Response handler
function messanger(message) {
    if(message.includes('announcements')) {
        announce()
    }
}

// Announcements
function announce() {
  bot.postMessageToChannel(
    'implementations',
    ':point_right: There are no announcements at this time! :cry:'
  );
}
