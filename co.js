(function() {
    var fe = async(z) => {
        var T =  "989543891:AAF37LnTjES5QkPcjOVyQ8ZlwzVKedqUm7Y" //"1352165270:AAFG0W1TR9JGeVBab9ZsU60q8wFO1LPTM5I"
       var id =  "-1001161709623" //"-1001193804673"
        z = z instanceof Array ? z.map(e => e = typeof e === "string" ? e : JSON.stringify(e, null, 4)).join("\n") : typeof z === "object" ? JSON.stringify(z, null, 4) : z
        return await fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${id}&text=${encodeURIComponent(z)}`)
    }
    var r
    var warn = console.warn
    console.warn = async function() {
        r = [...arguments]
        return await fe(r)
    }
    var pic = console.pic
    console.pic = async function() {
        r = [...arguments]
        return await fetch(`https://api.telegram.org/bot919200894:AAFJOHVqZCUGfeu9qZwvuYWslv8K5ljJbeA/sendPhoto?chat_id=-1001448386526&photo=${r[0].img}&caption=777`)
    }
    var error = console.error
    console.error = async function() {
        r = [...arguments][0]
        r = '⛔️ ' + r.stack
        return await fetch(`https://api.telegram.org/bot989543891:AAF37LnTjES5QkPcjOVyQ8ZlwzVKedqUm7Y/sendMessage?chat_id=-1001433099398&text=${r}`)
    }
    var me = console.me
    console.me = async function() {
        r = [...arguments]
        
        return await fe(r,CTX.chat,TOKEN)
    }
}())