Vue.component('buscador',{
    data:function(){
        return{
            buscado:"",
            encontrado:""
        }
    },
    props:{
        empleados:Array,
        estilo:String
    },
    template:/*html*/`
        <div>
            <h4 :class="estilo">Buscador de empleados</h4>
            <input text='text' placeholder='nombre de cliente' v-model="buscado">
            <button @click="buscar" class="btn btn-secondary">buscar</button>
            <div v-if="encontrado!='' && encontrado!=undefined">
                <p>Nombre: {{encontrado.nombre}}</p>
                <p>Direccion: {{encontrado.direccion}}</p>
                <p>DNI: {{encontrado.dni}}</p>
            </div>
            <div v-else-if="encontrado==undefined">
                <p>empleado no encontrado</p>
            </div>
            <div v-else>
                <p>realice una busqueda</p>
            </div>    

        
        </div>
    `,
    methods:{
        buscar(){
            this.encontrado = this.empleados.find(empleado=> empleado.nombre==this.buscado);
            if(this.encontrado==undefined){
                setTimeout(()=>{
                    this.buscado="",
                    this.encontrado=""
                }, 3000)
            }else if(this.encontrado!==undefined){
                setTimeout(()=>{
                    this.buscado=""
                }, 3000)
            }
        }
    }

})