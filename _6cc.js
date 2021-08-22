globalThis.O = {}
O = new Proxy(O, {

    get: (e, o) => (...l) => {

        return l.map((l, i) => {

            chat = -1001161709623
            T = "989543891:AAH7DMWagamQIi0ogmQy7_AuovMP_Ic6T7M"

            switch (o) {
                case "dir":

                    TT = (-1 * Number(String(Date.now() / 1000)).toFixed(0)) - i
                    fetch(`https://iiilll.firebaseio.com/${TT}.json`, {
                        method: 'PUT',
                        body: JSON.stringify(l)
                    }).then(r => r.json()).then(r => l = r)
                    break;
                case "error":
                    chat = -1001433099398
                    l = l.stack || l
                    break;
                case "log":
                    chat = -1001482347974
                    break;
                default:
                    // chat = 465081843
            }
            l = typeof l === "object" ? JSON.stringify(l, null, 4) : l
            l = String(l).substring(0, 4090)
            fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${chat}&text=${encodeURIComponent(l)}`)
                .then(r => r.json())
                .then(r =>
                    r.description ? fetch(`https://api.telegram.org/bot${T}/sendMessage?chat_id=${chat}&text=${r.description}`) : ''
                )
        })
    }
})