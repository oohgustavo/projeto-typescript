import { readFile, writeFile } from 'fs/promises';

// Passo 1: Capturar o comando e o valor digitados pelo utilizador, descartando os dois primeiros itens[cite: 15]
const [comando, valor] = process.argv.slice(2);

// Passo 2: Carregar as tarefas já salvas no arquivo JSON[cite: 15]
async function carregarTarefas() {
  try {
    const conteudo = await readFile("tarefas.json", "utf-8");
    return JSON.parse(conteudo);
  } catch {
    // Tratando o caso em que o arquivo ainda não existe (primeira execução)[cite: 15]
    return []; 
  }
}

// Função auxiliar para o Passo 4 (regravar o arquivo inteiro)[cite: 15]
async function salvarTarefas(tarefas) {
  await writeFile("tarefas.json", JSON.stringify(tarefas, null, 2));
}

// Função principal que orquestra a lógica
async function main() {
  const tarefas = await carregarTarefas();

  // Passo 3: Implementar cada comando separadamente com if/else[cite: 15]
  if (comando === 'add') {
    // add insere uma nova tarefa no array[cite: 15]
    if (!valor) {
      console.log("Por favor, informe o nome da tarefa. Exemplo: node index.js add 'Estudar Node'");
      return;
    }
    const novaTarefa = { id: Date.now(), texto: valor, feita: false };
    tarefas.push(novaTarefa);
    
    // Passo 4: Sempre que os dados mudarem (add ou done), regravar o arquivo inteiro[cite: 15]
    await salvarTarefas(tarefas); 
    console.log(`Tarefa "${valor}" adicionada com sucesso!`);

  } else if (comando === 'list') {
    // list percorre e imprime[cite: 15]
    if (tarefas.length === 0) {
      console.log("Nenhuma tarefa registada.");
    } else {
      console.table(tarefas);
    }

  } else if (comando === 'done') {
    // done localiza pelo id e marca feita: true[cite: 15]
    const idProcurado = Number(valor);
    const tarefa = tarefas.find(t => t.id === idProcurado);
    
    if (tarefa) {
      tarefa.feita = true;
      // Passo 4: Sempre que os dados mudarem (add ou done), regravar o arquivo inteiro[cite: 15]
      await salvarTarefas(tarefas); 
      console.log(`Tarefa ${idProcurado} marcada como concluída!`);
    } else {
      console.log("ID da tarefa não encontrado.");
    }

  } else {
    console.log("Comando não reconhecido. Use: add, list ou done.");
  }
}

// Executar a aplicação
main();