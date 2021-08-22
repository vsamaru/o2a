import { getAssetFromKV } from '@cloudflare/kv-asset-handler'
import './handler'
const db = require('./db')
import { render } from 'posthtml-render'
async function handleEvent(event) {
    try {
        const page = await getAssetFromKV(event, {})
        const response = new Response(page.body, page)
        response.headers.set("Cache-Control", "max-age=1500")
        response.headers.set('Access-Control-Allow-Origin', '*')
        return response
    } catch (e) {
        console.error(e)
        return new Response({ status: 200 })
    }
}
const Router = (o = {}) =>
    new Proxy(o, {
        get: (t, k, c) => k === 'handle' ?
            async (r, ...a) => {
                r = r.request
                for (let [p, hs] of t.r.filter(i => i[2] === r.method || i[2] === 'ALL')) {
                    let m, s, u
                    if (m = (u = new URL(r.url)).pathname.match(p)) {
                        r.params = m.groups
                        r.query = r.query || Object.fromEntries(u.searchParams.entries())
                        for (let h of hs) {
                            if ((s = await h(r.proxy || r, ...a)) !== undefined) return s
                        }
                    }
                }
            } :
            (p, ...hs) =>
            (t.r = t.r || []).push([
                `^${((t.base || '') + p)
              .replace(/(\/?)\*/g, '($1.*)?')
              .replace(/\/$/, '')
              .replace(/:(\w+)(\?)?(\.)?/g, '$2(?<$1>[^/$3]+)$2$3')
              .replace(/\.\(/g, '\\.(')
            }\/*$`,
                hs,
                k.toUpperCase(),
            ]) && c
    })
// now let's create a router (note the lack of "new")
const router = Router()
// GET collection index
router.get('/i/:id', async ({ params }) => {
    const image = await fetch(`https://api.telegram.org/file/bot${TOKEN}/photos/file_${params.id}.jpg`)
    const {
        readable,
        writable
    } = new TransformStream()
    image.body.pipeTo(writable)
    const r = new Response(readable, image)
    r.headers.set('Cache-Control', 'max-age=1500')
    return r
})
router.put('/', async re => {
    // console.warn(request)
    return await E.upd(await re.json()).then(r => new Response({ status: 200 }))
})
router.post('/', async re => {
    try {
         await E.upd(await re.json())
    } catch (error) {
        console.error(error)
    }
    return new Response({
        status: 200
    })
    //  return new Response(
    //  JSON.stringify(B, null, 4), {
    //     headers: {
    //         'Content-Type': 'application/json;charset=UTF-8'
    //     }
    // }
    // )
})


router.get('/', async ({ params }) =>  {

  var vv = await db.list()
 
    var v = await vv.map(e => `<img src="${e.url}"><figcaption>${e.id}</figcaption>`)
    const tree = []
    const node = {}
    node.tag = 'article'
    node.attrs = { class: 'article__content' }
    node.content = await v.map((content) => ({ tag: "figure", content }))
    tree.push(node)
    const html = render(tree, {})

var H = (x,v) => `<!DOCTYPE html>
<head>
    <meta property="og:site_name" content="Si">
    <meta property="og:title" content="${v[0].id}">
    <meta property="og:description" content="${v.length}">
    <meta property="og:image" content="${v[0].url}">
 <meta data-rh="true" property="al:android:app_name" content="Medium" />
    <meta property="article:published_time" content="2020-02-03T23:10:04.654Z">
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Yanone+Kaffeesatz" />
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
    margin-bottom: 10px;
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
  max-height: 48px; 
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
})
// attach the router "handle" to the event handler
addEventListener('fetch', event => {
    // var { pathname } = new URL(event.request.url)
    // pathname = pathname.replace("/", "")
    event.respondWith(router.handle(event).catch(err => console.error(err)))
})