Vue.component('tabla',{
    props:{
        clientes: Array
    }, 
    template:/*html*/`
        <div>
        <table class="content-table"> 
            <thead>
                <tr> 
                    <th>Nombre y Apellido</th> 
                    <th>Direccion</th> 
                    <th>Documento</th>
                </tr> 
            </thead> 
            <tbody > 
                <tr class="table1" v-for="(cliente, index) in clientes" :key="index"> 
                    <td>{{cliente.nombre}}</td>
                    <td>{{cliente.direccion}}</td> 
                    <td>{{cliente.dni}}</td>
                </tr> 
            </tbody> 
        </table>
       
        </div>

    `
})