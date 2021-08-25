const Telegraph = require('telegra.ph')
const client = new Telegraph('751b987964dec84b049f815b803aae77e30410d271041bcc827502dbe149')
async function tgph(x) {
var rr = {
        "tag": "p",
        "children": [
              {
        "tag": "p",
        "children": [
          {
            "tag": "a",
            "attrs": {
              "href": x[2],
              "target": "_blank"
            },
            "children": [
              x[0]
            ]
          }
        ]
      },
      {
        "tag": "figure",
        "children": [
          {
            "tag": "img",
            "attrs": {
              "src": x[2]
            }
          },
          {
            "tag": "figcaption",
            "children": [
             x[1]
            ]
          }
        ]
      }

        ]
      }
var o 
await client.getPage("NN-08-23",true).then((pages) => {

    o = pages.content
    //console.log(JSON.stringify(o))
    o.unshift(rr)
})
let re = await client.editPage(  'NN-08-23','NN',o)
 .then(pages => pages.url)
      .then(pages => {
          if (pages){
           
          
              return pages }
          else
             {throw Error('Balance not found');}
      })
      return re
}
      module.exports = tgph





// ph.createAccount('hi', {short_name: 'WhiteWhidow', author_name: 'LB'}).then((result) => {
//  console.log(result)
// })
// // const { TG } = require("./tg")
// // let e = TG('author_name','50.5655435,33.8975464546')
// // return 
// const telegraph = require('telegraph-node')
// const ph = new telegraph()

// function o() {
//     var se = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] //["🅲", "🅳", "🅴", "🅵", "🅶", "🅷", "🅸", "🅹", "🅺", "🅻", "🅼", "🅽", "🆀", "🆁", "🆂", "🆃", "🆄", "🆅", "🆆", "🆇", "🆈", "🆉"]
//     return se[Math.floor(Math.random() * (se.length - 1))] + se[Math.floor(Math.random() * (se.length - 1))] + se[Math.floor(Math.random() * (se.length - 1))];
// }


      
    




// [
// { tag: "a", attrs: { href: 'https://www.google.com/maps?q=50.399712,30.646697'  },children: ["📍 "+ 'https://www.google.com/maps?q=50.399712,30.646697'] },

// { tag: "img", attrs: { src: geourl } },
// { tag: "blockquote", children: ["БОКОВУШКА"] },
// { tag: "img", attrs: { src: 'https://i.ibb.co/rdFrrT5/50-440598-30-610747-iiiiiiii.jpg' } },

// //{ tag: "img", attrs: { src: geourl } },


// ]

//var V = v.map( e => (
     
// {
//         "tag": "figure",
//         "children": [
//           {
//             "tag": "img",
//             "attrs": {
//               "src": e[1]
//             }
//           },
//           {
//             "tag": "figcaption",
//             "children": [
//               e[0]
//             ]
//           },
//                 {
//         "tag": "p",
//         "children": [
//           {
//             "tag": "a",
//             "attrs": {
//               "href": e[1],
//               "target": "_blank"
//             },
//             "children": [
//               e[0]
//             ]
//           }
//         ]
//       }
//         ]
//       }

    //  ))
 // console.log(V)
 // var geourl = "https://www.mapquestapi.com/staticmap/v5/map?locations=50.399712,30.646697|marker-lg-04fd6c&banner=M.%20%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0%3E%3ESKUNK%3C|505050-04fd6c-md-top&zoom=17&size=960,960@2x&key=brX4s7eKqZr24Z1icIAJzRYOBQEWxtVv&type=hyb";
 // var d = dateFormat(new Date(), "-HH-mm-ss")
