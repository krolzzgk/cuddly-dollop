/*Comandos de Busca no DOM*/
//document.children[0].children[0].children[1];
//document.querySelector("[seletor css]");
//document.querySelectorAll("[seletor css ou *]"); retorna uma coleção de todos os elementos do parametro
//document.getElementsByTagName("[tag]"); retorna uma coleção de todos os elementos do parametro *
//document.getElementsByClassName("[nome classe]"); retorna uma coleçao de todos os elementos daquela classe *
//document.getElementById("[nome id]"); retorna o elemento com o id do parametro *
//document.getElementsByName("[nome do item de formulario]"); retorna uma coleção de todos os elementos do parametro **
//* maneira mais antiquada
//** antiquado, mas mais fácil para selecionar elementos de um formulario

//ELEMENT(parent) - modificadores
//	>>children(outros elements) - remover, adicionar, mudar ordem
//	>>attribute(ex: p id="abc") - getAttribute("id"), setAttribute("id", "abcd")
//	>>property(ex: campo.value) - campo.value, campo.innerHTML, campo.textContent (alteram os valores)
//	>>style (ex: campo.style["background-color"]) - estilo css

/*Comandos com ELEMENTS*/
//elemento.parentNode; - acessa o pai do elemento
//document.createElement("[comando html]")/
//pai.appendChild(filho);
//elemento.remove(); *CUIDADO NO IE
//elemento.parentNode.removeChild(elemento);

/*Comandos de Modificação*/
//elemento.setAttribute("[atributo]", "[valor atributo]");
//elemento.PROPRIEDADE = valor;
//elemento.style["[estilo css]"];


function main(){
	var btn = document.querySelector("button#btn");
	btn.addEventListener("click",adicionar);
}

// function ativar(){
	// console.log("ATIVADO");
	// var txt = document.getElementById("abc").value;
	// var p = document.querySelector("p:first-of-type");
	// // p.textContent = txt;
	// p.innerHTML += "<br>" + txt;
// }

function adicionar(){
	var texto = document.getElementById("abc").value;
	this.desenhar = function(){
		var li = document.createElement("li");
		var btn = document.createElement("button");
		li.textContent = texto;
		btn.textContent = "X";
		btn.addEventListener("click", remover);
		document.querySelector("#lista").appendChild(li).appendChild(btn);
		//document.querySelector("#lista").appendChild(btn);
	}
	this.desenhar();
	document.getElementById("abc").value = "";	
}

function remover(){
	var li = document.querySelector("li");
	li.parentNode.removeChild(li);
}

function validar(texto){
	var valido = false;

	//expressão de validação - validar se o texto é uma data
	//EXPRESSAO REGULAR - texto.match(/\d\d\d\d-\d\d-\d\d);
	//INSTANCIAR DATA Date.parse(texto);
	//texto[i] (for)
	//texto.split("caracter de parametro para separar a string")
	
	return valido;
}

window.addEventListener("load",main);