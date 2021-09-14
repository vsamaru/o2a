(() => {
    var AR = null;
    const db = require('./db')
    this.imgbb = async image => {
        var details = {
            'name': X.no,
            'image': image.replace(/\s/g, "%20")
        }
        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        return await fetch(`https://api.imgbb.com/1/upload?key=af7cad64d90d19e2a26889f92f6b3ed8`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody
        }).then(r => r.json()).then(r => {
            if (!r.data) console.error(r)
            return r.data
        }).then(r => [r.id, r.display_url, r.url_viewer, r.thumb.url, r.url])
    }
    var x = async re => {
        re.from = re.chat || re.from
        re.chat = re.from.id
        re.from = re.from.username || re.from.title || re.from.first_name
        if (re.sender_chat) re.sender_chat = re.sender_chat.title
        X = await db.get("!/" + re.from)
        B = {
          
            chat_id: re.chat
        }
        // if (re.chat != 465081843) {
        //     console.error(re)c
        //     return new Response({
        //         status: 200
        //     })
        // }
        if (re.entities && re.text) {
            re.entities.forEach((element) => {
                if (element.type === "text_link") {
                    re.url = element.url
                } else {
                    re[element.type] = re.text.substring(element.offset, (element.offset + element.length))
                    if (re.text === re[element.type]) {
                        delete re.text
                    }
                }
            })
            delete re.entities
        }
        if (re.document && re.document.mime_type.startsWith("image")) {
            re.photo = [{
                file_size: re.document.file_size,
                file_id: re.document.file_id
            }]
            delete re.document
        }
                    if (re.photo && !re.via_bot) {

                if (re.caption) {
                    re.caption = re.caption.toUpperCase()
                } else {
                    re.caption = "ПО-СТРЕЛКЕ"
                }

                re.photo = re.photo[re.photo.length - 1].file_id
               B.photo = await fetch(`https://clo.wwv.workers.dev/x?id=${re.photo}&ll=${X.location}&geo=${X.geo}&cap=${re.caption}&ref=${X.ref}&t=${TOKEN}&n=${"c"}&cc=${X.cc}`)
  .then( r => r.json() )

                /*
                re.size = re.photo.file_size
                re.photo = await fetch('https://api.telegram.org/bot' + TOKEN + '/getFile?file_id=' + re.photo.file_id)
                    .then(r => r.json())
                    .then(async r => {
                        re.file = r.result.file_path.split("file_")[1].split(".")[0]
                        X.file = re.file
                        return 'https://api.telegram.org/file/bot' + TOKEN + '/' + r.result.file_path
                    })
                  
                if (re.caption) {
                    re.caption = re.caption.toUpperCase()
                } else {
                    re.caption = "ПО-СТРЕЛКЕ"
                }
                var i = "-" + Date.now()
                re.photo = `https://res.cloudinary.com/o6/image/upload/c_scale,w_1280/b_aquamarine,co_black,l_text:Yanone%20Kaffeesatz_42_bold_center:%20${X.location.replace(/,/g, "%20") + "%20" + X.ref}%20${re.caption.replace(/ /g, "%20")}%20,fl_relative,w_1,y_1.01,g_south/l_i:${re.file},fl_relative,w_1,y_1.01,g_south/${X.geo}`
 
          B.photo = await fetch(`https://api.cloudinary.com/v1_1/o6/image/upload?public_id=o${X.file}&upload_preset=o6oooo&file=${encodeURIComponent(re.photo)}`).then(r => r.json()).then(r => {
                    return "https://res.cloudinary.com/o6/"+r.public_id
                })
console.warn(B.photo)
*/
B.method = "sendMessage"
//B.message_id = X.msg
               B.text = `<a href="${B.photo}">${re.caption}</a>`
               B.parse_mode = "HTML"
               B.reply_markup = {
                    inline_keyboard: [
                        [{
                            "text": "🆔",
                            "callback_data": "+"
                        },  {
                            "text": "DEL",
                            "callback_data": "-"
                        }]
                    ]
                }
                
            }
        // if (!re.photo && !re.via_bot && !re.reply_markup) {
        //     re.photo = re.photo[re.photo.length - 1]
        //     re.size = re.photo.file_size
        //     await fetch('https://api.telegram.org/bot' + TOKEN + '/getFile?file_id=' + re.photo.file_id)
        //         .then(r => r.json())
        //         .then(async r => {
        //             re.file = r.result.file_path.split("file_")[1].split(".")[0]
        //             X.file = re.file
        //             re.photo = 'https://api.telegram.org/file/bot' + TOKEN + '/' + r.result.file_path
        //         })
        //         console.warn(re.photo)
        //     if (re.caption && !re.media_group_id) {
        //         re.caption = re.caption.toUpperCase()
        //     } else {
        //         re.caption = "ПО-СТРЕЛКЕ"
        //     }
        //     B.text = `<a href="${"https://c.8c.workers.dev?v="+Date.now()}">ㅤ${X.no}</a>`
        //     var i = "-" + Date.now()
        //     // var rr = ''
        //     // if(re.reply && re.reply.photo) rr = `/l_q:${re.file},fl_relative,w_1,y_1.01,g_south`
        //     X.no = X.no || 1
        //     re.file = await fetch(`https://api.cloudinary.com/v1_1/il/image/upload?public_id=o${X.file}&upload_preset=iiilll&file=${re.photo}`).then(r => r.json()).then(r =>
        //         r.public_id
        //     )
        //     re.photo = await this.imgbb(`https://res.cloudinary.com/il/image/upload/c_scale,w_1280/b_coral,co_black,l_text:Yanone%20Kaffeesatz_42_bold_center:%20${X.location.replace(/,/g, "%20") + "%20" + X.ref}%20${re.caption.replace(/\s/g, "%20")}%20,fl_relative,w_1,y_1.01,g_south/l_${re.file},fl_relative,w_1,y_1.01,g_south/${X.geo}`) //.then(r => r.json())
        //     // await fetch(`https://api.telegram.org/bot1925673169:AAFHmM0G3lEaL8js_At76cciFk4VRXq62MU/sendPhoto?chat_id=-1001177323812&photo=${re.photo}&parse_mode=markdown&caption=[%D0%90%D0%BA47%F0%9F%8D%8B](https://i.ibb.co/whfQZbG/file-193.jpg)%20%231s%20%23Dar%0A[%D0%94%D0%B0%D1%80%D0%BD%D0%B8%D1%86%D1%8F%F0%9F%9A%87%0A%F0%9F%9A%808,57km%0A%F0%9F%93%8DNVYC+FQ](https://www.google.com/maps?q=50.4825,30.4887)`)
        //     X.no++
        //         B.method = "editMessageText"
        //     B.message_id = X.msg //|| re.message.message_id
        //     //re.message_id = re.message.message_id
        //     //                 X.msg = re.message.message_id
        //     await db.put({
        //         geo: X.location,
        //         cap: re.caption,
        //         id: re.photo[0],
        //         date: Date.now(),
        //         th: re.photo[3],
        //         pic: re.photo[2],
        //         url: re.photo[1],
        //         raw: re.photo[4],
        //         is: 1
        //     })
        //     B.parse_mode = "HTML"
        //     await console.l(B)
        // }
        if (re.type === "chosen_inline_result") {
              if (re.query.startsWith('\\')) await db.del(re.result_id)
            re.x = await db.get('*/' + re.result_id)
            if(re.x){
 if(re.x.is>0){
            await db.put({
                is: 0
            }, re.result_id, 1)
        } else {
                      await db.put({
                is: 1
            }, re.result_id, 1)
        }
    }
        }
        if (re.location && !re.id && !re.result_id) {
            X.location = re.location.latitude + "," + re.location.longitude
            if (!X.ref) B.text = "NO REF"
            X.geo = await fetch(`https://api.cloudinary.com/v1_1/o6/image/upload?tags=g&upload_preset=o6oooo&file=${encodeURIComponent(`https://www.mapquestapi.com/staticmap/v5/map?locations=${X.location}|marker-lg-black-${X.cc}-${X.ab}&zoom=19&size=640,240@2x&key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&type=sat`)}`).then(r => r.json()).then(r => {
                return r.public_id
            })
            B.photo = "https://res.cloudinary.com/o6/" + X.geo
            B.method = "sendPhoto"
             B.caption = `<a href="${encodeURIComponent("https://6.wwv.workers.dev")}">${"https://6.wwv.workers.dev"}</a>`
               B.parse_mode = "HTML"
        
            B.reply_markup = {
                inline_keyboard: [
                    [ {
                        "text": "▶️",
                        "switch_inline_query_current_chat": ""
                    },{
                        "text": "➖",
                        "switch_inline_query_current_chat": "-"
                    }, {
                        "text": "➕",
                        "switch_inline_query_current_chat": "+"
                    }, {
                        "text": "/",
                        "switch_inline_query_current_chat": "\\"
                    }, {
                        "text": "👁‍🗨",
                        "url": "https://6.wwv.workers.dev"
                    }]
                ]
            }
        }
        if (re.text) {
            if (re.text.startsWith(".")) {
                X.no = 1
                X.ref = re.text.replace(".", "").toUpperCase()
            }
            if (re.text.startsWith("-") && re.text.split("-")[2]) {
            
               X.cc = re.text.split("-")[1]
               X.ab = re.text.split("-")[2]
            }
                        if (re.text.startsWith("$") && re.text.split(" ")[1]) {
            
               X.set = re.text.split(" ")[1]
               //X.ab = re.text.split(" ")[2]
            }
        }
        if (re.data && re.data == "-") {
            B.method = "answerCallbackQuery"
            B.callback_query_id = re.id
            B.text = "❌"
            await console.l(B)
            re.message_id = re.message.message_id
        }
        if (re.data && re.data == "+") {
            // delete re.message_id
            B.method = "answerCallbackQuery"
            B.callback_query_id = re.id
            B.text = X.no
            await console.l(B)
            X.no = X.no || 1
            await fetch(`https://api.imgbb.com/1/upload?key=af7cad64d90d19e2a26889f92f6b3ed8&name=${X.no}&image=${encodeURIComponent(re.message.url)}`).then(r => r.json()).then(r => r.data).then(async r => {
                X.no++
                    B.method = "editMessageText"
                B.message_id = X.msg || re.message.message_id
                re.message_id = re.message.message_id
                //                 X.msg = re.message.message_id
                await db.put({
                    geo: X.location,
                    cap: re.message.text,
                    id: r.id,
                    date: Date.now(),
                    th: r.thumb.url,
                    pic: r.url_viewer,
                    url: r.display_url,
                    raw: r.url,
                    set: X.set,
                    is: 1
                })
                B.parse_mode = "HTML"
                return B.text = `<a href="${"https://6.wwv.workers.dev?v="+Date.now()}">ㅤ${X.no}</a>`
            })
        }
        if (re.via_bot) {
            re.via_bot = re.via_bot.username
        }
        if (re.forward_from) re.forward_from = re.forward_from.id
        if (re.text && re.text.startsWith("{")) {
            re.obj = JSON.parse(re.text)
            delete re.text
        }
                if (re.bot_command && re.bot_command == "/help") {
                    B.parse_mode = "HTML"
               B.text = `<a href="${"https://6.wwv.workers.dev?v="+Date.now()}">ㅤ${X.no}</a>`
            B.method = "sendMessage"

            await console.l(B)
          
        }
        if (re.bot_command && re.bot_command == "/start") {

            B.method = "sendMessage"
            X.no = 1
            X.msg = (1 + re.message_id)
            B.text = X.msg
            await console.l(B)
            B.method = "pinchatmessage"
            B.message_id = X.msg
        }
        if (re.bot_command && re.bot_command == "/set") {
            var v = await db.list("-")
            var w = v.map(({
                pic
            }) => (pic))
            v = v.map(({
                url,
                cap
            }) => ({
                type: "photo",
                media: url
            }))
            if (v[0]) {
               
                w.unshift(X.ref.split(" ")[0]+"\n")
                v[0].caption = w.join("\n")
                B.method = 'sendMediaGroup'
                B.media = v
            }
        }
        if (re.type === "inline_query") {
            var A = ''
            var rrr = re.query.split("\n")
            if(rrr[1]){
                A = []
            rrr.map(e=>{
                var o = {}
                o.type = "photo"

                o.title = e.replace("ibb","i.ibb")+"/i.png"
                o.id = e.replace("ibb","i.ibb")+"/i.png"
                o.thumb_url = e.replace("ibb","i.ibb")+"/i.png"
                o.caption = e.replace("ibb","i.ibb")+"/i.png"
                o.photo_url = e.replace("ibb","i.ibb")+"/i.png"
                A.unshift(o)
        })

        }
// console.warn(A)
            B.method = 'answerInlineQuery'
            B.inline_query_id = re.id
            B.is_personal = true
            B.cache_time = 0

            B.results = A || (await db.list(re))
        }
        try {
            if(B.method) await console.l(B)
            
        } catch (err) {
            console.error(err)
        }
        return re
    }
    var upd = async re => {
        var type = Object.keys(re)[1]
        re = re[type]
        re.type = type
        if (re.message) {
            re.message = await x(re.message)
        }
        if (re.reply_to_message) {
            re.reply = await x(re.reply_to_message)
            delete re.reply_to_message
        }
        try{
        re = await x(re)
        await db.put(X, re.from)
} catch (err){
    console.error(err)
}
finally {
            if (re.message_id) {
            await fetch(`https://api.telegram.org/bot${TOKEN}/deleteMessage?chat_id=${re.chat}&message_id=${re.message_id}`)
        }
}
        return re
    }
    var u = async re => {
        return await upd(re)
    }
    const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    function niceBytes(x) {
        let l = 0,
            n = parseInt(x, 10) || 0;
        while (n >= 1024 && ++l) {
            n = n / 1024;
        }
        return (n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
    }
    var A = x => x[0] ? (x[1] ? [...x] : [...x][0]) : ""
    if (typeof fetch === 'undefined') {
        require('isomorphic-unfetch')
    }
    var fe = async (z = "NOTEXT", id = "-1001161709623", T = "989543891:AAH7DMWagamQIi0ogmQy7_AuovMP_Ic6T7M", str = '') => {
        z = z instanceof Array ? z.map(e => e = typeof e === "string" ? e : JSON.stringify(e, null, 4)).join("\n") : typeof z === "object" ? JSON.stringify(z, null, 4) : z
        z = z.substring(0, 4090)
        return await fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${id}&text=${encodeURIComponent(z)}` + str)
            .then(r => r.json())
            .catch(async err => {
                err = err.stack || err
                await fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${id}&text=${err}`)
                return err.stack
            })
            .then(async r => {
                if (r.description) return await fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${id}&text=${r.description}`)
                return r.result.message_id || r
            })
    }
    var SL = console.SL
    console.SL = function() {
        var z = A([...arguments])
        z = z instanceof Array ? z.map(e => e = typeof e === "string" ? e : JSON.stringify(e, null, 4)).join("\n") : typeof z === "object" ? JSON.stringify(z, null, 4) : z
        z = z.substring(0, 3999)
        return fetch('https://hooks.slack.com/services/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', {
                body: JSON.stringify({
                    "blocks": [{
                        "type": "section",
                        "text": {
                            // "type": "mrkdwn",
                            "text": z,
                            "type": "image",
                            "image_url": "https://is5-ssl.mzstatic.com/image/thumb/Purple3/v4/d3/72/5c/d3725c8f-c642-5d69-1904-aa36e4297885/source/256x256bb.jpg"
                        }
                    }, ]
                }),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(r => r.text())
            .catch(err => err.stack)
    }
    var FB = console.FB
    console.FB = async function() {
        //  AR = A([...arguments])
        var no = await fetch("https://iiilll.firebaseio.com/.json?shallow=true").then(r => r.json()).then(r => arr[Object.keys(r).length]) //.then(r => arr[r])
        //return console.log(no)
        var o = {}
        // var no = Date.now()
        o[no] = A([...arguments])
        return await fetch("https://iiilll.firebaseio.com/.json", {
            method: 'PATCH',
            body: JSON.stringify(o)
        }).then(r => r.json()).then(r => no)
    }
    var warn = console.warn
    console.warn = function() {
        AR = A([...arguments])
        return fe(AR)
    }
    var error = console.error
    console.error = function() {
        var er = [...arguments][0]
        return fe((er.stack || er), "-1001433099398")
    }
    var N = console.N
    console.N = function() {
        return u(A([...arguments]))
        //       return await fetch(`https://api.telegram.org/bot919200894:AAHuM5pYRFtxMj-EKKQ4VTo8ZROr4yARpLI/sendPhoto?chat_id=-1001193804673&photo=${AR[0]}&caption=${AR.join("\n")}`).then( r => r.json() )
        // .then( data => {
        //   console.log(data)
        //   return data
        // })
        //await fe(AR,"-1001448386526","919200894:AAHuM5pYRFtxMj-EKKQ4VTo8ZROr4yARpLI")
    }
    var J = console.J
    console.J = function() {
        return fe([...arguments][1], [...arguments][0], TOKEN, `&reply_markup={"inline_keyboard":[[{"text":"EDIT","callback_data":"-"}]]}`)
    }
    var l = console.l
    console.l = async function() {
        var v = [...arguments][0]
       // console.warn(v)
        return await fetch(`https://api.telegram.org/bot${TOKEN}/` + v.method, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(v)
        }).then(r => r.json())
        .then(r => 
                           r.description ? console.error(r.description) : ''             )
    }
    var DB = console.DB
    console.DB = db
})()