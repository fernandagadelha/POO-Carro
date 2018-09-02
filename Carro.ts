export class Carro {
	tanque : number;

	passageiros : number;

	km : number;

	abastecer(valor : number) : void {
		this.tanque +=  Number(valor);
		if(this.tanque > 10) this.tanque = 10;
	}

	desembarcar(valor : number) : void {
		this.passageiros -= Number(valor);
		if(this.passageiros < 0) this.passageiros = 0;
	}

	embarcar(valor : number) : void {
		this.passageiros += Number(valor);
		if(this.passageiros > 2) this.passageiros = 2;
	}

	mostrarEstado() : void {
		console.log(this.tanque, this.passageiros, this.km);
	}

	andar(km: number) : void {
		if(this.passageiros >= 1){
			if( this.tanque >= km/10){
				this.tanque -= km/10;
				this.km += Number(km);		
			}
			else console.log("Nao ha combustivel suficiente");
		}
		else console.log("Nao ha passageiros"); 
	}
}
