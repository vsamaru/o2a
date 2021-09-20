require('isomorphic-unfetch')
var { Database } = require('firebase-firestore-lite')
const D = new Database({ projectId: 'iiilll' })
var all = D.ref("L/L")

var date = () => "-" + (new Date()
    .toISOString()
    .replace(/T/, '')
    .replace(/2021-/, '')
    .replace(/\..+/, '')
    .replace(/:|-/g, '')
    )


var test = async (z) => { 
return console.log(date())

	z = await all.get()
	z = Object.values(z)
	z.forEach( async el => {
		var A = D.ref("A/"+el.imgid)
		await A.set(el)
	})
return console.log(z)
}

test()