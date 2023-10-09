let empresas = {
    nombre: 'nombreEmpresa',
    tesoreria: 15500,
    empleados: [
        {
            id: 0,
            nombre: 'empleado1',
            sueldo: 111,//sueldo semanal
            proyectoActual: ''
        },
        {
            id: 1,
            nombre: 'empleado2',
            sueldo: 222,//sueldo semanal
            proyectoActual: ''
        },
        {
            id: 2,
            nombre: 'empleado3',
            sueldo: 333,//sueldo semanal
            proyectoActual: ''
        }
    ],
    proyectos: [
        {
            id: 0,
            nombre: 'proyecto1',
            esfuerzo: 50, //esfuerzo semana/persona
            presupuesto: 11111
        },
        {
            id: 1,
            nombre: 'proyecto2',
            esfuerzo: 50, //esfuerzo semana/persona
            presupuesto: 22222
        },
        {
            id: 2,
            nombre: 'proyecto3',
            esfuerzo: 50, //esfuerzo semana/persona
            presupuesto: 33333
        }
    ]
}
let idEmpleado = 1
let idProyecto = 1
let asignar = (empleado=empresas.empleados[idEmpleado],proyecto=empresas.proyectos[idProyecto]) => {

    console.log(empleado.nombre,proyecto.nombre)
    empleado.proyectoActual = 1
    //console.log(proyecto.id)
}
//console.log(empresas.empleados[idEmpleado])
asignar()