import './6cc/index'
import { getAssetFromKV, mapRequestToAsset } from './asset'
addEventListener('fetch', event => {
    O = O || {}
    event.respondWith(handle(event).catch(err => console.error(err)))
})
var rr = {
  "-340930070": {
    "cap": "ПО-СТРЕЛКЕ",
    "date": -340930070,
    "geo": "50.447321,30.637657",
    "id": "104355",
    "is": true,
    "pic": "https://ibb.co/CWync8N",
    "th": "https://i.ibb.co/CWync8N/13.jpg",
    "url": "https://i.ibb.co/LvyCFRb/13.jpg"
  },
  "-340928606": {
    "cap": "В ПЕСКЕ",
    "date": -340928606,
    "geo": "50.447321,30.637657",
    "id": "139377",
    "is": true,
    "pic": "https://ibb.co/hMmsZz9",
    "th": "https://i.ibb.co/hMmsZz9/12.jpg",
    "url": "https://i.ibb.co/pPL2RFw/12.jpg"
  },
  "-340927065": {
    "cap": "ПОД КУСКОМ АСФАЛЬТА",
    "date": -340927065,
    "geo": "50.447321,30.637657",
    "id": "124031",
    "is": true,
    "pic": "https://ibb.co/QFWS0Fw",
    "th": "https://i.ibb.co/QFWS0Fw/11.jpg",
    "url": "https://i.ibb.co/SXkYSXC/11.jpg"
  },
  "-340925438": {
    "cap": "ПОД СОЛОМОЙ",
    "date": -340925438,
    "geo": "50.447321,30.637657",
    "id": "185797",
    "is": true,
    "pic": "https://ibb.co/7k6kSBB",
    "th": "https://i.ibb.co/7k6kSBB/10.jpg",
    "url": "https://i.ibb.co/y4b4NKK/10.jpg"
  },
  "-340923889": {
    "cap": "ПО-СТРЕЛКЕ",
    "date": -340923889,
    "geo": "50.447321,30.637657",
    "id": "163059",
    "is": true,
    "pic": "https://ibb.co/7nF1wBf",
    "th": "https://i.ibb.co/7nF1wBf/9.jpg",
    "url": "https://i.ibb.co/GWj5KG6/9.jpg"
  },
  "-340922254": {
    "cap": "ПО-СТРЕЛКЕ",
    "date": -340922254,
    "geo": "50.447321,30.637657",
    "id": "106690",
    "is": true,
    "pic": "https://ibb.co/1ZL3NRH",
    "th": "https://i.ibb.co/1ZL3NRH/8.jpg",
    "url": "https://i.ibb.co/nrbTyQh/8.jpg"
  },
  "-340920659": {
    "cap": "В ЯМКЕ В САЛФЕТКЕ ПРИСЫПАН",
    "date": -340920659,
    "geo": "50.447321,30.637657",
    "id": "133834",
    "is": true,
    "pic": "https://ibb.co/dJ5b4h7",
    "th": "https://i.ibb.co/dJ5b4h7/7.jpg",
    "url": "https://i.ibb.co/k6S32dM/7.jpg"
  },
  "-340919008": {
    "cap": "ПО-СТРЕЛКЕ",
    "date": -340919008,
    "geo": "50.447321,30.637657",
    "id": "146585",
    "is": true,
    "pic": "https://ibb.co/XkRhwWq",
    "th": "https://i.ibb.co/XkRhwWq/6.jpg",
    "url": "https://i.ibb.co/Dg2xq1Z/6.jpg"
  },
  "-340917212": {
    "cap": "ПО-СТРЕЛКЕ",
    "date": -340917212,
    "geo": "50.447321,30.637657",
    "id": "204893",
    "is": true,
    "pic": "https://ibb.co/Sv98pSC",
    "th": "https://i.ibb.co/Sv98pSC/5.jpg",
    "url": "https://i.ibb.co/88SpVkZ/5.jpg"
  },
  "-340915543": {
    "cap": "ПРИПЫЖОВАН ПОД ЛИСТВОЙ",
    "date": -340915543,
    "geo": "50.447321,30.637657",
    "id": "135163",
    "is": true,
    "pic": "https://ibb.co/XsNXVn5",
    "th": "https://i.ibb.co/XsNXVn5/4.jpg",
    "url": "https://i.ibb.co/Hz17XcP/4.jpg"
  },
  "-340913290": {
    "cap": "ПОД МХОМ",
    "date": -340913290,
    "geo": "50.447321,30.637657",
    "id": "176377",
    "is": true,
    "pic": "https://ibb.co/bBKp0my",
    "th": "https://i.ibb.co/bBKp0my/3.jpg",
    "url": "https://i.ibb.co/tsJyGKN/3.jpg"
  },
  "-340911684": {
    "cap": "МЕЖДУ БОЛТАМИ ПОД СЕНОМ",
    "date": -340911684,
    "geo": "50.447321,30.637657",
    "id": "234830",
    "is": true,
    "pic": "https://ibb.co/9Ygp9yj",
    "th": "https://i.ibb.co/9Ygp9yj/2.jpg",
    "url": "https://i.ibb.co/q1jDMmw/2.jpg"
  },
  "-340909984": {
    "cap": "ПРИСЫПАН",
    "date": -340909984,
    "geo": "50.447321,30.637657",
    "id": "164186",
    "is": true,
    "pic": "https://ibb.co/hCn88gy",
    "th": "https://i.ibb.co/hCn88gy/1.jpg",
    "url": "https://i.ibb.co/cxpTTy1/1.jpg"
  },
  "-338355358": {
    "cap": "ПОД ТРУХОЙ",
    "date": -338355358,
    "geo": "50.448898,30.636607",
    "id": "160460",
    "is": true,
    "pic": "https://ibb.co/SyFGjH7",
    "th": "https://i.ibb.co/SyFGjH7/14.jpg",
    "url": "https://i.ibb.co/QQytghj/14.jpg"
  },
  "-338348715": {
    "cap": "ПРИСЫПАН",
    "date": -338348715,
    "geo": "50.448898,30.636607",
    "id": "153373",
    "is": true,
    "pic": "https://ibb.co/2ZKQqnR",
    "th": "https://i.ibb.co/2ZKQqnR/12.jpg",
    "url": "https://i.ibb.co/hY8js7r/12.jpg"
  },
  "-338342921": {
    "cap": "У СТЕНЫ ПОД БУКВОЙ В ЛИСТВЕ",
    "date": -338342921,
    "geo": "50.448898,30.636607",
    "id": "208491",
    "is": true,
    "pic": "https://ibb.co/hZSMqYx",
    "th": "https://i.ibb.co/hZSMqYx/10.jpg",
    "url": "https://i.ibb.co/5nP97KX/10.jpg"
  },
  "-338341041": {
    "cap": "В СТАКАНЕ",
    "date": -338341041,
    "geo": "50.448898,30.636607",
    "id": "159702",
    "is": true,
    "pic": "https://ibb.co/hLBt15K",
    "th": "https://i.ibb.co/hLBt15K/9.jpg",
    "url": "https://i.ibb.co/Xj7vkBz/9.jpg"
  },
  "-338336785": {
    "cap": "ПОД ДЕРЕВЯХОЙ",
    "date": -338336785,
    "geo": "50.448898,30.636607",
    "id": "221237",
    "is": true,
    "pic": "https://ibb.co/3SFxB4z",
    "th": "https://i.ibb.co/3SFxB4z/8.jpg",
    "url": "https://i.ibb.co/nQ1Xz6C/8.jpg"
  },
  "-338334145": {
    "cap": "ПОД ЛИСТВОЙ В ЧЁРНОЙ ПАЧКЕ",
    "date": -338334145,
    "geo": "50.448898,30.636607",
    "id": "195932",
    "is": true,
    "pic": "https://ibb.co/qjF27vr",
    "th": "https://i.ibb.co/qjF27vr/7.jpg",
    "url": "https://i.ibb.co/r0fXFVw/7.jpg"
  },
  "-338331092": {
    "cap": "В УШКЕ ЛЮКА В ЗЕМЛЕ",
    "date": -338331092,
    "geo": "50.448898,30.636607",
    "id": "162551",
    "is": true,
    "pic": "https://ibb.co/wh4WFdg",
    "th": "https://i.ibb.co/wh4WFdg/6.jpg",
    "url": "https://i.ibb.co/fdHpzXF/6.jpg"
  },
  "-338328678": {
    "cap": "В КАРМАШКЕ КОРЫ",
    "date": -338328678,
    "geo": "50.448898,30.636607",
    "id": "182647",
    "is": true,
    "pic": "https://ibb.co/T1SjQbL",
    "th": "https://i.ibb.co/T1SjQbL/5.jpg",
    "url": "https://i.ibb.co/42GvbYd/5.jpg"
  },
  "-338323798": {
    "cap": "В СТАКАНЕ",
    "date": -338323798,
    "geo": "50.448898,30.636607",
    "id": "140392",
    "is": true,
    "pic": "https://ibb.co/8dk4tJH",
    "th": "https://i.ibb.co/8dk4tJH/4.jpg",
    "url": "https://i.ibb.co/SdS7G2z/4.jpg"
  },
  "-338321207": {
    "cap": "ПОД УПАКОВКОЙ ОТ КОФЕ",
    "date": -338321207,
    "geo": "50.448898,30.636607",
    "id": "174689",
    "is": true,
    "pic": "https://ibb.co/5k4ZRRk",
    "th": "https://i.ibb.co/5k4ZRRk/3.jpg",
    "url": "https://i.ibb.co/XDLHCCD/3.jpg"
  },
  "-338319630": {
    "cap": "ПОД КУСКОМ АСФАЛЬТА",
    "date": -338319630,
    "geo": "50.448898,30.636607",
    "id": "151393",
    "is": true,
    "pic": "https://ibb.co/92R0Tqq",
    "th": "https://i.ibb.co/92R0Tqq/2.jpg",
    "url": "https://i.ibb.co/L64ytCC/2.jpg"
  },
  "-338315716": {
    "cap": "ПО-СТРЕЛКЕ",
    "date": -338315716,
    "geo": "50.448898,30.636607",
    "id": "181665",
    "is": true,
    "pic": "https://ibb.co/sv1j4qL",
    "th": "https://i.ibb.co/sv1j4qL/1.jpg",
    "url": "https://i.ibb.co/HDP7yqm/1.jpg"
  },
  "-328351460": {
    "cap": "ПО-СТРЕЛКЕ",
    "date": -328351460,
    "id": "-174792",
    "is": true,
    "pic": "https://ibb.co/f9ZDpm9",
    "th": "https://i.ibb.co/f9ZDpm9/NaN.jpg",
    "url": "https://i.ibb.co/ZSv28yS/NaN.jpg"
  }
}
async function handle(event) {
    var { request } = event
    var { method, url } = request
    var url = new URL(url)
    var { pathname } = url
    pathname = pathname.replace("/", "")
    const params = {}
    const queryString = url.search.slice(1).split('&')
    queryString.forEach(item => {
        const [key, value] = item.split('=')
        if (key) params[key] = value || true
    })
    switch (method) {
        case 'POST':
            await console.N(await request.json())
            return new Response({ status: 200 })
        case 'GET':
            switch (pathname) {
                case 'l':

                    return new Response(JSON.stringify(await console.DB.list()), {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                case 'x':
                    return await console.DB.put({
                        date: Date.now()
                    }, params.i, 1)
                case '':
                    return handleEvent(event)
                case 'favicon.ico':
                case 'robots.txt':
                    return new Response(null, { status: 204 })
            }
    }
   // return new Response({ status: 200 })
}
async function handleEvent(event) {
    try {
        const page = await getAssetFromKV(event, {})
        console.warn(page.body, page)
        const response = new Response(page.body, page)
        return response
    } catch (e) {
        console.error(e)
        return new Response({ status: 200 })
    }
}