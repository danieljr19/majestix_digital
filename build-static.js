const { exec } = require('child_process');
const fs = require('fs').promises;
const path = require('path');

// Função para executar comandos shell
const runCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao executar o comando: ${error}`);
        return reject(error);
      }
      console.log(stdout);
      if (stderr) console.error(stderr);
      resolve(stdout);
    });
  });
};

async function buildStatic() {
  try {
    // Executa o build do Vite
    console.log('Construindo o frontend com Vite...');
    await runCommand('npx vite build');
    
    console.log('Build estático concluído com sucesso!');
  } catch (error) {
    console.error('Erro durante o build:', error);
    process.exit(1);
  }
}

buildStatic();