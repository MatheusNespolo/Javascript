//  Run with Node.js
// Definição da estrutura da árvore binária
class Tree {
    constructor(x, l = null, r = null) {
        this.x = x;  // Valor do nó
        this.l = l;  // Subárvore à esquerda
        this.r = r;  // Subárvore à direita
    }
}

// Função principal para encontrar o maior zigzag na árvore
function solution(T) {
    let maxZigzag = 0;

    // Função auxiliar de busca em profundidade (DFS)
    function dfs(node, isLeft, length) {
        if (!node) return; // Caso base: nó nulo, encerra a chamada recursiva
        
        // Atualiza o comprimento máximo encontrado
        maxZigzag = Math.max(maxZigzag, length);
        
        // Se o último movimento foi à esquerda, agora deve ir à direita
        dfs(node.r, false, isLeft ? length + 1 : 1);
        
        // Se o último movimento foi à direita, agora deve ir à esquerda
        dfs(node.l, true, !isLeft ? length + 1 : 1);
    }

    // Inicia a busca a partir da raiz, considerando os dois primeiros caminhos possíveis
    dfs(T.l, true, 1);  // Começando pela esquerda
    dfs(T.r, false, 1); // Começando pela direita

    return maxZigzag;
}

// Árvore de exemplo
const T = new Tree(1, new Tree(2, new Tree(3), new Tree(4)), new Tree(5, new Tree(6), new Tree(7)));

// Encontra o maior zigzag na árvore
const result = solution(T);
