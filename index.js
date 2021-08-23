import './6cc/index'
import db from './6cc/db'
import { render } from 'posthtml-render'
import { getAssetFromKV, mapRequestToAsset } from './asset'
addEventListener('fetch', event => {
    O = O || {}
    event.respondWith(handle(event).catch(err => console.error(err)))
})

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
                    await console.DB.put({
                        date: Date.now()
                    }, params.i, 1)
                    return new Response({ status: 200 })
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

  var vv = await db.list()
  var rr = ""
 var w = await vv.map(e => {rr+=`${e.pic}`})
    var v = await vv.map((e,i) =>`<img src="${e.url}" onclick=fetch("/x?i=${e.id}")>`)
    v.push(`<figcaption>${rr}</figcaption>`)
   // v.push(w)
    // v = [...v,...w]
   // console.warn(v)
    const tree = []
    const node = {}
    node.tag = 'article'
    node.attrs = { class: 'article__content' }
    node.content = await v.map((content) => ({ tag: "figure", content }))
    tree.push(node)
    const html = render(tree, {})

var H = (x,v) => `<!DOCTYPE html>
<head>
    <meta property="og:site_name" content="ㅤ">
    <meta property="og:title" content="ㅤ">
    <meta property="og:description" content="${vv.length}">
    <meta property="og:image" content="${vv[0].url}">
 <meta data-rh="true" property="al:android:app_name" content="Medium" />
    <meta property="article:published_time" content="2020-02-03T23:10:04.654Z">
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Yanone+Kaffeesatz" />
    <link rel="icon" type="image/png" href="https://life.godo.com.ua/wp-content/uploads/2020/11/cropped-favicon.png"/>
<style>
* {
      clear: both; 
    text-align: center; 
    margin-left: auto; 
    margin-right: auto;
  background-color: #222;
}
figure {

    box-sizing: border-box; 
    margin-left: 5px;
    margin-right: 5px;

min-height: 100%; 
    width: auto;
    display: flex;
    flex-flow: column;
    margin: auto;
    align: center;
}
img {
     width: 960px;
}
figcaption {
    font-size: 42px;
  max-height: 44px; 
    color: #fff;
    font-family: "Yanone Kaffeesatz";
    text-align: center;
}
</style>
</head>
<body>
    <div class="article">
       
${x}

    </div>
</body>
</html>`


    return new Response(H(html,vv), {
        headers: {
            'Content-Type': 'text/html;charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
            "Cache-Control": "max-age=0"
        }
    })
    // try {
    //     const page = await getAssetFromKV(event, {})
    //     console.warn(page.body, page)
    //     const response = new Response(page.body, page)
    //     return response
    // } catch (e) {
    //     console.error(e)
    //     return new Response({ status: 200 })
    // }
}