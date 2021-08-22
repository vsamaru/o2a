require('isomorphic-unfetch')

require('./index')
let cartes = x => {
let f = (a, b) => [].concat(...a.map(a => b.map(b => (a+ b))));
let cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a).sort()
var br = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]//,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
//if ( parseInt(x) && parseInt(x) <= 17576) 
	return cartesian(br,br,br).sort()//.length//[x-1]

}

const fs = require('fs')


   

var ss = async re => {

  

// return  fs.writeFileSync(`j.json`, JSON.stringify(cartes(),null,4))

//   
//re = await console.exit('isomorphic-unfetch')
return await console.N(re)
}

ss( {
        "update_id": 887558258,
        "message": {
            "message_id": 13638,
            "from": {
                "id": 465081843,
                "is_bot": false,
                "first_name": "Папа",
                "last_name": "Свин",
                "username": "papaswin",
                "language_code": "ru"
            },
            "chat": {
                "id": 465081843,
                "first_name": "Папа",
                "last_name": "Свин",
                "username": "papaswin",
                "type": "private"
            },
            "date": 1628773646,
            "photo": [
                {
                    "file_id": "AgACAgIAAxkBAAI1RmEVHQ72GLTKf9vrheBf0g1k0qPBAAL-tjEbs1uoSEX1oiCbZObjAQADAgADcwADIAQ",
                    "file_unique_id": "AQAD_rYxG7NbqEh4",
                    "file_size": 1233,
                    "width": 67,
                    "height": 90
                },
                {
                    "file_id": "AgACAgIAAxkBAAI1RmEVHQ72GLTKf9vrheBf0g1k0qPBAAL-tjEbs1uoSEX1oiCbZObjAQADAgADbQADIAQ",
                    "file_unique_id": "AQAD_rYxG7NbqEhy",
                    "file_size": 13773,
                    "width": 240,
                    "height": 320
                },
                {
                    "file_id": "AgACAgIAAxkBAAI1RmEVHQ72GLTKf9vrheBf0g1k0qPBAAL-tjEbs1uoSEX1oiCbZObjAQADAgADeAADIAQ",
                    "file_unique_id": "AQAD_rYxG7NbqEh9",
                    "file_size": 33896,
                    "width": 480,
                    "height": 640
                }
            ]
        }}
    ) 