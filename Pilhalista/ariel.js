//Fila
  
  
  // Classe Fila (FIFO)
  class Fila {
    constructor() {
      this.itens = [];
    }
  
    // Adiciona um item ao final da fila
    enfileirar(item) {
      this.itens.push(item);
      console.log(`📥 '${item}' entrou na fila.`);
    }
  
    // Remove o item do início da fila
    desenfileirar() {
      if (this.estaVazia()) {
        console.log('⚠️ A fila está vazia. Nenhum item para remover.');
        return null;
      }
      const removido = this.itens.shift();
      console.log(`🚪 '${removido}' saiu da fila.`);
      return removido;
    }
  
    // Mostra o primeiro da fila
    frente() {
      return this.itens[0];
    }
  
    // Verifica se a fila está vazia
    estaVazia() {
      return this.itens.length === 0;
    }
  
    // Tamanho da fila
    tamanho() {
      return this.itens.length;
    }
  
    // Limpa a fila
    limpar() {
      this.itens = [];
      console.log('🧹 Fila esvaziada.');
    }
  
    // Imprime a fila atual
    imprimir() {
      console.log('🚶‍♂️ Fila atual:', this.itens.join(' -> ') || 'vazia');
    }
  }

//exercisio
var fila = new Fila();
//1)
fila.enfileirar("Aluno A");
fila.enfileirar("Aluno B");
fila.enfileirar("Aluno C");
fila.enfileirar("Aluno D");
fila.enfileirar("Aluno E");

fila.desenfileirar(); 

console.log(`proximo da fila: ${fila.frente()}`); // Saída: Aluno B
console.log(`Tamanho da fila: ${fila.tamanho()}`); // Saída: 4
console.log(`mostrando a fila: ${fila.imprimir()}`); // Saída: Aluno A -> Aluno B -> Aluno C -> Aluno D -> Aluno E

//2)

//Pilha:

// Classe Pilha
class Pilha {
    constructor() {
      this.itens = [];
    }
  
    empilhar(item) { //adiciona elementos
      this.itens.push(item);
      console.log(`✔️ Elemento '${item}' empilhado.`);
    }
  
    desempilhar() { //remove elementos da pilha
      if (this.estaVazia()) {
        console.log('⚠️ A pilha está vazia. Nada a desempilhar.');
        return null;
      }
      const removido = this.itens.pop();
      console.log(`❌ Elemento '${removido}' desempilhado.`);
      return removido;
    }
  
    topo() {  //verifica se a pilha esta vazia 
      if (this.estaVazia()) {
        return null;
      }
      return this.itens[this.itens.length - 1];
    }
  
    estaVazia() { //verifica se a pilha esta vazia
      return this.itens.length === 0;
    }
  
    tamanho() {
      return this.itens.length;
    }
  
    limpar() {
      this.itens = [];
      console.log('🧹 Pilha esvaziada.');
    }
  
    imprimir() {
      console.log('📦 Pilha atual:', this.itens.slice().reverse().join(' <- topo'));
    }
  }

  //exercisio

  var pilha = new Pilha();
    pilha.empilhar("Nome");
    pilha.empilhar("Idade");
    pilha.empilhar("Sexo");
    pilha.empilhar("CPF");

    pilha.desempilhar(); //remove o ultimo elemento da pilha CPF

    console.log(`Topo da pilha: ${pilha.topo()}`)// Saída: Sexo
    console.log(`mostrando toda pilha restante: ${pilha.imprimir()}`)// Saída: CPF <- topo


