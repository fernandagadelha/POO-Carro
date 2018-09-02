declare function require(msg : string) : any;
var readline = require('readline-sync');

import {Carro} from "./Carro"

let car : Carro = new Carro();

car.tanque = 0;

car.passageiros = 0;

car.km = 0;

while(true){
	let possiveisComandos : string = "" +
		"estado - mostrar a quantidade de combustivel\n" +
		"abastecer - abastecer tanque de combustivel\n" +
		"desembarcar - desembarque de passageiros\n" +
		"embarcar - embarque de passageiros\n" +
		"andar - começar a dirigir\n" +
		"sair - sair do programa\n";
	console.log(possiveisComandos);

	let comando : string = readline.question("Digite um comando: ");

	if(comando == "sair") break;

	switch (comando) {
		case "estado":
			car.mostrarEstado()
			break;

		case "abastecer":
			let litros : number = readline.question("Digite litros de gasolina: ")
			car.abastecer(litros);
			break;

		case "desembarcar":
			let pessoasD : number = readline.question("Digite quantas pessoas desembarcaram: ");
			car.desembarcar(pessoasD);
			break;

		case "embarcar":
			let pessoasE : number = readline.question("Digite quantas pessoas embarcaram: ");
			car.embarcar(pessoasE);
			break;

		case "andar":
			let km : number = readline.question("Digite quantos km o carro vai percorrer: ");
			car.andar(km);
			break;

	}	
}