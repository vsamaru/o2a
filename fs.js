require('isomorphic-unfetch')
var { Database } = require('firebase-firestore-lite')
const D = new Database({ projectId: 'iiilll' })


// var k = async () => {

function e() {
  
  // this.name = n
  // this.o = o
this.has = async (n) => await D.ref("*/"+n).get().then( r => r ).catch( err => false )
    this.get = async (n) => await D.ref("*/"+(n||"_")).get().catch( err => null )
    this.set = async (n,o) => await D.ref("*/"+n).set(o)
    this.upd = async (n,o) => await D.ref("*/"+n).update(o).catch( async err => await D.ref("*/"+n).set(o) )
    this.list = async () => await D.ref("*").list()
  

}
module.exports = new e()
// var { Database } = require('firebase-firestore-lite')
// const D = new Database({ projectId: 'iiiiil' })


// var r = async (ref) => {
// 	var re = {}
//     try {
//         re = await ref.get()
//     } catch (err) {
//         await ref.set(re)
//     }
//     return re
// }

// exports.fs = async (i,z) => {
// var ref = D.ref("_/"+i)

//     if(z) return await ref.set(z)
//     	return await r(ref)

// }
