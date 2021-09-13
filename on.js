var TOKEN="901631976:AAEZ92ShN9zMswAG2or2VlGmJrxJaEsgP_8"
var ki = JSON.stringify({
            "inline_keyboard": [
                [{
                    "text": "L",
                    "callback_data": "LLLL"
                },{
                    "text": ":RE",
                    "callback_data": "re"
                }]
            ]
        })
var kk = JSON.stringify({
            "inline_keyboard": [
                [{
                    "text": "L",
                    "callback_data": "LLLL"
                },{
                    "text": ":RE",
                    "switch_inline_query_current_chat": ""
                },{
                    "text": "LL",
                    "callback_data": "LL"
                },{
                    "text": "D",
                    "switch_inline_query_current_chat": "D"
                }]
            ]
        })
var kg = JSON.stringify({ "resize_keyboard":true, "keyboard": [
                    [{
                        "request_location": true,
                        "text": "GEO"
                    },"#M","$LLL","@IIIII","X.co"]

                ]})
exports.Do = update => {
   
    var bot = new Bot(TOKEN, update)
    var bus = new CommandBus()
    bus.on(/\/start/, function() {
      
        this.replyToSender("Congratulations! It works!")
    })
    // bus.on(/photo/, function() {
    //     this.replyToSender("PHOTO")
    // })
    // bus.on(/data/, function() {
    //     this.replyToSender("cc")
    // })
    // bus.on(/query/, function() {
    //     this.replyToSender("Q")
    // })
    // bus.on(/reply_t/, function() {
    //     this.replyToSender("rep")
    // })

    bus.on(/^(?=.*LLLL).*$/, replyData)
    bus.on(/^(?=.*photo)(?=.*reply_to).*$/, reply)
    bus.on(/\/_\s*([A-Za-z0-9_]+)?_\s*([A-Za-z0-9_]+)?/, randomJoke)
    bot.register(bus)
    if (update) {
        bot.process()
    }
}
async function replyData() {

    
    this.replyToSender(JSON.stringify(X,null,4))
}
async function reply(x) {

    
    this.replyToSender(Date.now())
}
async function randomJoke(name, surname) {

    var firstName = name || null
    var lastName = surname || null
    var url = 'https://api.icndb.com/jokes/random?escape=javascript'
    if (firstName) url = url + '&firstName=' + firstName
    if (lastName) url = url + '&lastName=' + lastName
   
    var v = await fetch(url)  .then( r => r.json() )
  .then( data => 
    data.value.joke
  )

 this.replyToSender(v)
    
}

function Bot(token, update) {
    this.token = token
    this.update = update
    this.handlers = []
}
Bot.prototype.register = function(handler) {
    this.handlers.push(handler)
}
Bot.prototype.process = function() {
    for (var i in this.handlers) {
        var event = this.handlers[i]
        return event.handle(this)
    }
}
Bot.prototype.request = async function(method, data) {
    return await fetch('https://api.telegram.org/bot' + TOKEN + '/' + method, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}
Bot.prototype.replyToSender = function(text) {

    return this.request('sendMessage', {
        'chat_id':  465081843,
        'text': text,
        'reply_markup': ki
    })
}

function CommandBus() {
    this.commands = []
}
CommandBus.prototype.on = function(regexp, callback) {
    this.commands.push({
        'regexp': regexp,
        'callback': callback
    })
}
CommandBus.prototype.handle = function(bot) {
    for (var i in this.commands) {
        var cmd = this.commands[i]
        var x = JSON.stringify(bot.update)
        var tokens = cmd.regexp.exec(x)
        if (tokens != null) {
            return cmd.callback.apply(bot, tokens.splice(1))
        }
    }
    return bot.replyToSender(tokens)
}