import http from 'http';
import { readFile } from 'fs/promises';
import { join, extname } from 'path';

// Passo 2. Montar um objeto que relacione cada extensão ao seu Content-Type correto
const MIME = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
};

// Passo 1. Criar o servidor com o módulo nativo http
const servidor = http.createServer(async (req, res) => {
  
  // Passo 3. Montar o caminho completo do arquivo dentro de public/
  // Se a rota for "/", servimos o index.html, caso contrário usamos a rota pedida[cite: 17]
  const url = req.url === "/" ? "/index.html" : req.url;
  const filePath = join(process.cwd(), "public", url);

  // Passo 4. Tentar ler o arquivo e responder com o Content-Type[cite: 17]
  try {
    const content = await readFile(filePath);
    const ext = extname(filePath);
    
    // Descobrimos o MIME type pela extensão, ou usamos um padrão genérico[cite: 17]
    const mime = MIME[ext] || "application/octet-stream";
    
    res.writeHead(200, { "Content-Type": mime });
    res.end(content);
  } catch {
    // Se falhar (arquivo não existe), responder com 404[cite: 17]
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 -- Arquivo nao encontrado");
  }
});

// Colocar o servidor à escuta numa porta
servidor.listen(3000, () => {
  console.log("Servidor a correr em http://localhost:3000");
});