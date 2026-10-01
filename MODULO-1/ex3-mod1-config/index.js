// Passo 2. Carregar as variáveis no início do script[cite: 19]
import "dotenv/config";

// Passo 3. Criar uma função que "mascara" um valor sensível, mostrando apenas os últimos 4 caracteres[cite: 19]
function mascarar(valor) {
  if (!valor || valor.length <= 4) return "****";
  
  // O método .slice(-4) pega os últimos 4 caracteres de qualquer string[cite: 19]
  const ultimosQuatro = valor.slice(-4);
  const asteriscos = "*".repeat(valor.length - 4);
  
  return asteriscos + ultimosQuatro;
}

// Passo 4. Aplicar a função a cada variável sensível e imprimir o resultado[cite: 19]
console.log("API_TOKEN:", mascarar(process.env.API_TOKEN));
// API_TOKEN: ***************cdef[cite: 19]

console.log("DB_PASSWORD:", mascarar(process.env.DB_PASSWORD));
// DB_PASSWORD: *********a123[cite: 19]

// E-mail não é um dado sigiloso da mesma forma -- pode ser impresso direto[cite: 19]
console.log("ADMIN_EMAIL:", process.env.ADMIN_EMAIL);