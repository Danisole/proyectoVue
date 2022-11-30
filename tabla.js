Vue.component('tabla',{
    props:{ 
        empleados: Array,
        estilo:String,
        
        
    }, 
    template:/*html*/`
    
        <div>
        <h3 :class="estilo">tablas de empleados</h3>
        <table class="table table-striped table-bordered border-primary w-50"> 
            <thead>
                <tr> 
                    <th>Nombre y Apellido</th> 
                    <th>Direccion</th> 
                    <th>Documento</th>
                </tr> 
            </thead> 
            <tbody  > 
                <tr class="table1" v-for="(empleado, index) in empleados" :key="index"> 
                    <td>{{empleado.nombre}}</td>
                    <td>{{empleado.direccion}}</td> 
                    <td>{{empleado.dni}}</td>
                </tr> 
            </tbody> 
        </table>
        </div>

        <div>
        <table class="table table-striped table-bordered border-primary w-50"> 
        <thead>
            <tr> 
                <th>Nombre y Apellido</th> 
                <th>menu</th> 
                <th>horario laboral</th>
            </tr> 
        </thead> 
        <tbody> 
                <tr class="table2" v-for="(empleado, index) in empleados" :key="index"> 
                <td>{{empleado.nombre}}</td>
                <td>{{empleado.direccion}}</td> 
                <td>{{empleado.dni}}</td>
                </tr> 
        </tbody> 
        </table>
        </div>

        
        <div>
        <table class="table table-striped table-bordered border-primary w-50"> 
            <thead>
                <tr> 
                    <th>Nombre y Apellido</th> 
                    <th>Seniority</th> 
                    <th>experiencia</th>
                </tr> 
            </thead> 
            <tbody > 
                <tr class="table3" v-for="(empleado, index) in empleados" :key="index"> 
                    <td>{{empleado.nombre}}</td>
                    <td>{{empleado.direccion}}</td> 
                    <td>{{empleado.dni}}</td>
                </tr> 
            </tbody> 
        </table>
        </div>   
        

    `
})