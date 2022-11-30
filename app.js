const app = new Vue({
    el:'#app',
    data:{
        empleados:[
            {
                nombre: "cristina diaz",
                direccion: "mitre 567",
                dni: "28646908"
            },
            {
                nombre: "vicente lopez",
                direccion: "mendoza 344",
                dni: "17334905"
            },
            {
                nombre: "pablo castro",
                direccion: "colombia 2432",
                dni: "29575983"
            }

        ],
        empleados2:[
            {
                nombre: "maria morales",
                direccion: "avenida libertador 1233",
                dni: "36858908"
            },
            {
                nombre: "carla rojas",
                direccion: "Calle verdadera 233",
                dni: "25834905"
            },
            {
                nombre: "julio iglesias",
                direccion: "rawson 1233",
                dni: "27747483"
            }

        ],
        empleados3:[
            {
                nombre: "Juan Perez",
                direccion: "avenida siempreviva 1233",
                dni: "45876908"
            },
            {
                nombre: "Maria Lopez",
                direccion: "Calle falsa 1233",
                dni: "35834905"
            },
            {
                nombre: "Pepe Argento",
                direccion: "Rivadavia 1233",
                dni: "28745983"
            }

        ],
        estilo1:"text-primary",
        estilo2:"text-warning",
        estilo3:"text-success"
          
    }

    
})