import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler'
require('0e')
var { api } = require('./api')
/**
 * The DEBUG flag will do two things that help during development:
 * 1. we will skip caching on the edge, which makes it easier to
 *    debug.
 * 2. we will return an error message on exception in your Response rather
 *    than the default 404.html page.
 */
// const DEBUG = false
addEventListener('fetch', event => {
  CTX={}
  X={}
  B={}
  try {
        if (event.request.method === 'POST') return event.respondWith(raw(event.request))
      
    
    event.respondWith(handleEvent(event))
  
  } catch (e) {
  console.error(e)
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500
        })
      )
  
   
  }
})

var date = () => "-" + (new Date()
    .toISOString()
    .replace(/T/, '')
    .replace(/2021-/, '')
    .replace(/\..+/, '')
    .replace(/:|-/g, '')
    )

async function raw(re) {

re = await re.json()
 var type = Object.keys(re)[1]
    re = re[type]
    re.from = re.from || re.chat
    re.chat = re.from.id
    re.from = re.from.username || re.from.title || re.from.first_name
      re.in = []

console.warn(date())
              var o = {}

    var e = {}
          var body = { 
      method: 'sendMessage',
      chat_id: re.chat
 
    
    //  message_id: re.message_id || re.message.message_id
    }
    /*
try {
       e = await fetch( 'https://w-2-b.firebaseio.com/-0999.json').then(r => r.json())
       e = e[String(re.chat)] 
       if(!e) return new Response("ok", { status: 200 })
        F = 'https://w-2-b.firebaseio.com/-0800/'+e+'/.json'
        
    


       e = await fetch( F).then(r => r.json()).catch(err => {})
      console.warn(e) 
    } catch (err) {
        body.text = err.stack
        //console.log(err.stack || err);
    }
*/
if(re.photo){
        re.photo = re.photo[re.photo.length - 1].file_id
    var getfile = await fetch('https://api.telegram.org/bot' + TOKEN + '/getFile?file_id=' + re.photo)
    getfile = await getfile.json()
    var path = 'https://api.telegram.org/file/bot' + TOKEN + '/' + getfile.result.file_path
    path = await fetch('https://api.imgbb.com/1/upload?key=33612f7751537f4f27c5253f56edbf16&name=&image=' + path);
    path = await path.json()
    re.in.push([date(),path.data.id, path.data.url_viewer.replace("https://", ""),path.data.thumb.url,path.data.display_url])
        o[path.data.id]= re
let data = JSON.stringify(o)
    try {
       body.text = await fetch( 'https://w-2-b.firebaseio.com/.json', {
            method: 'PATCH',
          //  headers: myHeaders,
            body: data
        }).then(r => r.json())
    } catch (err) {
        body.text = err.stack
        //console.log(err.stack || err);
    }
  }
  /*  */

    return new Response(JSON.stringify(body,null,4), {
     
      headers: {'Content-Type': 'application/json'}
    })
}
async function handleEvent(event) {
  const url = new URL(event.request.url)
  let options = {}
      if (event.request.method.toUpperCase() === "PUT") {

return new Response(TOKEN, { status: 200 })

      }
            if (event.request.method.toUpperCase() === "POST") {
                   var init = {
      headers: {
        'content-type': 'application/json',
      }
    }
    try{
var a = await api(event)
} catch (err) {
  console.error(err)
}
// console.warn(a)
return new Response(a, init)

      }
  /**
   * You can add custom logic to how we fetch your assets
   * by configuring the function `mapRequestToAsset`
   */
  // options.mapRequestToAsset = handlePrefix(/^\/docs/)

  try {
    // if (DEBUG) {
    //   // customize caching
    //   options.cacheControl = {
    //     bypassCache: true,
    //   }
    // }

    const page = await getAssetFromKV(event, options)

    // allow headers to be altered
    const response = new Response(page.body, page)

    response.headers.set('X-XSS-Protection', '1; mode=block')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('Referrer-Policy', 'unsafe-url')
    response.headers.set('Feature-Policy', 'none')

    return response

  } catch (e) {
     console.error(e)
    // if an error is thrown try to serve the asset at 404.html
    // if (!DEBUG) {
      try {
        let notFoundResponse = await getAssetFromKV(event, {
          mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/404.html`, req),
        })

        return new Response(notFoundResponse.body, { ...notFoundResponse, status: 404 })
      } catch (e) {
        console.error(e)
      }
    }
console.error(e)
    return new Response(e.message || e.toString(), { status: 500 })
  }
// }

/**
 * Here's one example of how to modify a request to
 * remove a specific prefix, in this case `/docs` from
 * the url. This can be useful if you are deploying to a
 * route on a zone, or if you only want your static content
 * to exist at a specific path.
 */
function handlePrefix(prefix) {
  return request => {
    // compute the default (e.g. / -> index.html)
    let defaultAssetKey = mapRequestToAsset(request)
    let url = new URL(defaultAssetKey.url)

    // strip the prefix from the path for lookup
    url.pathname = url.pathname.replace(prefix, '/')

    // inherit all other props from the default request
    return new Request(url.toString(), defaultAssetKey)
  }
}
