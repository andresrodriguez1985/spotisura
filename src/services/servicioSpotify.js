//consumiendo apis con JS

//1. Pa onde vas(Almaceno en una variable la URI del servicio)
let URI="https://api.spotify.com/v1/artists/2eEmsgWmUFMbtU7agJpnjY/top-tracks?market=US"

//2. Que vas a hacer? (metodo HTTP)
let metodo="GET"

//3. Tener permisos? (configurar peticiones)
let token="Bearer BQD11HWjqVfKszbrUgQwYWDDE2byfYUWbsZSf4YTxG_pdnXJDyVrr5ghxHYVQ-Ln8oA5v-caEsl8ehwvxyUy0Mwzz9fdOlzoT4Sd4Uq9L2pXYoURYHU"

let peticion={
    method:metodo,headers:{
        "Autorization":token
    }
}

//4. Vaya pues traigame cositas (Promesa)
