const SlackBot = require('slackbots')
const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

const bot = new SlackBot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'bbot'
})

bot.on('start', () => {
    const params = {
        icon_emoji: ':alien:'
    }

    bot.postMessageToChannel(
        'implementations',
        'Let @bbot help you bwell!'

    );
})

bot.on('error', (err) => {
    console.log(err);
})
