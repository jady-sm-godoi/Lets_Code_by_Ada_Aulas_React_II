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



//PARA FAZER A BUILD DO PROJETO:
// No terminal:
// > npm run build

// O Vite vai criar a pasta "dist" onde estão os arquivos prontos para subir para o servidor que fará o build da aplicação na web 

// Para mais info: https://vitejs.dev/guide/static-deploy.html

//URL DO PROJETO NA VERCEL: https://instagram-for-letscode-by-ada.vercel.app/


//TESTES

//Para configurar tests em projeto com Vite:
// https://dev.to/theandersonn/configurando-o-jest-e-testing-library-no-vite-10p1


// Teste E2E: Testes end to end
// esses testes buscam verificar o comportamento do sistema como um todo, “de uma ponta à outra”. 
// Geralmente simulam a atividade que o usuário final teria, mas feita em um ambiente preparado para ser muito semelhante ao do ambiente de produção.

// Teste unidade: Buscam testar um trecho de código, são os testes “mais baratos” pois levam menos tempo para serem feitos e executados.

// Teste de Integração: Testam a integração entre componentes e/ou entre serviços (se o componente está buscando os dados do backend por exemplo), 
// esse tipo de teste é mais caro de se construir pois levam mais tempo para serem sua criação e execução, esses testes ficam no meio da pirâmide de testes.

//PARA RODAR OS TESTES:
// > npm run test

//PARA RODAR OS TESTES COM RELATÓRIOS COMPLETOS:
// > npm run test -- --coverage

//PARA ABRIR UM RELATÓRIO BEM CHIC:
//> open coverage