//Sergio Mosquera Marin
console.log('Script cargado correctamente.')
let ficheros = ['entrada.txt']
// Carga de ficheros de datos de entrada
ficheros.forEach( fichero => {
	fetch(fichero)	//Carga el ficherito
		.then(respuesta => respuesta.text())	//Saca el texto
		.then(funcion1)		//pasa el texto a funcion1
})
function funcion1(entrada){
	//console.log(entrada)
    if(entrada == 0){
        throw 'El fichero esta vacio'
    }
    let caraDados = entrada.split(", ")
    if(caraDados[0] == null ||caraDados[1] == null){
        console.log('Solo se ha introducido un numero')
    }
    else{
        //console.log(caraDados)
        if(caraDados[0] == '' || caraDados[1] == ''){
            console.log('Introduce dos dados')
        }
        else{
            let dado1 = caraDados[0]
            let dado2 = caraDados[1]
            if(+dado1 > +dado2){
                let aux = dado1
                dado1 = dado2
                dado2 = aux
                //console.log(dado1, dado2)
            }
            if(dado1 < '4' || dado2 > '20'){
                console.log('solo se admiten dados de 4 a 20 caras')
            }
            else{
                let maximoInicio = +dado1+1
                let maximoFinal = +dado2+1
                //console.log(maximoInicio, maximoFinal)
                let arrayMaximos = []
                arrayMaximos[0] = maximoInicio
                let j = 1
                for(let i=+maximoInicio+1; i<=maximoFinal; i++){
                    arrayMaximos[j] = i
                    j++
                }
                let arrayMinimos = []
                arrayMinimos[0] = 2
                arrayMinimos[1] = +dado1 + +dado2
                console.log(arrayMaximos.toString())
                console.log(arrayMinimos.toString())
            }
        }
    }
    
}