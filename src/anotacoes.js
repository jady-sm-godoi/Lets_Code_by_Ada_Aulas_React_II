// PROGRAMAÇÃO FUNCIONAL
// Programação funcional é o processo de construir software através de 
// composição de funções puras, 
// evitando compartilhamento de estados, 
// dados mutáveis e 
// efeitos colaterais. 
// É declarativa ao invés de Imperativa 

import React, { useEffect } from "react"
import { formatPostcssSourceMap } from "vite"

// Baseada em funções puras, simples, sem efeitos colaterais e sem mutações.

let age = 28

// -> função impura:
// Depende de algo que está fora dela e não entra como parâmetro.
// Pode quebrar se a variável da qual depende mudar de alguma forma.
function inpureAddAge(input){
    return age + input
}

// -> função pura:
// Uma função é chamada pura quando invocada mais de uma vez produz exatamente o mesmo resultado. 
// Isto é, o retorno da função é sempre o mesmo se você passar os mesmos parâmetros, então ela não pode depender de valores mutáveis. 
// Por outro lado, ela não pode causa efeitos colaterais externos, pois se ela imprime uma linha de saída, altera algo no banco, lança um foguete para o espaço, ao invocá-la a segunda vez ela vai causar um novo efeito.
function pureAddAge(age, input){
    return age + input
}

// -> função com mutabilidade:
// A função muda o valor de uma variável que está fora dela.
function mutabilityAddAge(input){
    age = age + input
}

// -> Efeito colateral: 
// Um efeito colateral é toda e qualquer modificação no estado da aplicação percebida fora do destino da função chamada. 
// Uma função possui efeito colateral (side effect) quando altera o estado fora do seu contexto local. 
// a programação funcional não elimina efeitos colaterais totalmente, mas tentam confiná-los. 
// Como fazemos interface com o mundo real, algumas partes do programa vão ser impuras então o papel é minimizar essas partes e separá-las do resto do programa.


// -> Composição de Função 
// ignifica criar uma nova função através da composição de outras.
const minhaLista = [1, 2, 3, 4, 5, 6]

const novaLista = minhaLista.map((num) => num * 2).filter((par) => par % 2 == 0)
console.log(novaLista);

// REACT
//Biblioteca declarativa que se utiliza da programação funcional.
//Os componentes no React são funções
//Os hooks são, entre outras coisas, usados para "controlar" os efeitos colaterais de um componente.



