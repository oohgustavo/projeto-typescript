# Portfólio de Exercícios - Desenvolvimento Web

**Aluno:** Gustavo Câmara dos Reis
**Curso:** Sistemas Digitais para Internet

Este repositório contém a resolução de exercícios práticos divididos em 4 módulos principais, abrangendo desde os fundamentos de Node.js até à construção de interfaces modernas com React e Next.js.

---

## 📂 Estrutura do Repositório

### [Módulo 1: Fundamentos Node.js](./MODULO-1)
Projetos focados no ecossistema base do Node.js, manipulação de ficheiros e ambiente.
* **CLI de Tarefas:** Aplicação de linha de comandos para adicionar, listar e concluir tarefas guardadas num ficheiro JSON (`fs/promises`).
* **Servidor de Arquivos:** Servidor web nativo criado com o módulo `http`, capaz de servir ficheiros estáticos (HTML/CSS) com os Content-Types corretos.
* **Configuração Segura:** Gestão de variáveis de ambiente com `dotenv` e funções de mascaramento de dados sensíveis (tokens e senhas).

### [Módulo 2: APIs e Backend](./MODULO-2)
* *(Caso tenha exercícios de Express, SQLite ou CRUD do módulo 2, adicione uma breve descrição aqui. Se não, basta colocar os títulos dos projetos).*

### [Módulo 3: React e Interfaces](./MODULO-3)
Projetos criados com Vite focados na componentização e estado.
* **Gestão de Estado:** Manipulação de dados na interface, formulários controlados e interatividade.
* **Efeitos Colaterais:** Utilização do hook `useEffect` para sincronização, como a alteração dinâmica do título do separador do navegador.

### [Módulo 4: Next.js e Rotas](./MODULO-4)
Projetos explorando as funcionalidades do Next.js (App Router).
* **Rotas Simples:** Criação de páginas e rotas baseadas em ficheiros (`/sobre`, `/contato`).
* **Menu e Layout Global:** Implementação do componente nativo `<Link>` e partilha de componentes de navegação através do ficheiro `layout.tsx` principal.
* **Layout de Secção:** Criação de layouts específicos para secções isoladas do site (ex: limitador de largura apenas para a rota `/projetos`).

---

## 🚀 Como Executar os Projetos

Cada pasta funciona como um projeto independente. Para testar qualquer um dos exercícios:

1. Abra o terminal e navegue para a pasta do exercício pretendido. Exemplo:
   ```bash
   cd MODULO-4/ex1-mod4-rotas