export const API_URL = (process.env.NODE_ENV === 'production') ? '/api' : 'http://localhost:8000/api';


// function initConfig(){

//     let PROTOCOL = 'default gdy jest dev'

//     if(process.env.NODE_ENV === 'production'){
//         PROTOCOL = 'bazowe do api'
//     }

//     return {
//         PROTOCOL, HOST, PORT, ROOT_ENDPOINT, API_URL
//     }
// }

// export default initConfig()

// // PROTOCOL 
// // HOST
// // POST
// // ROOT_ENDPOINT