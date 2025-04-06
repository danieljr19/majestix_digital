# Guia de Deploy na Vercel - Majestix Digital

Este documento explica os passos para fazer deploy do site da Majestix Digital na Vercel.

## Configurações Realizadas

1. **Arquivo vercel.json**
   - Criamos um arquivo de configuração para a Vercel que instrui a plataforma sobre como construir e servir o site.
   - Este arquivo configura corretamente o build do projeto Vite e garante que todas as rotas funcionem corretamente.

2. **Arquivo .vercelignore**
   - Criamos este arquivo para excluir arquivos desnecessários do deploy, tornando-o mais limpo e rápido.

## Passos para o Deploy

1. **Preparação:**
   - Faça login na sua conta da Vercel ou crie uma nova em [vercel.com](https://vercel.com)
   - Verifique se os arquivos `vercel.json` e `.vercelignore` estão presentes no seu projeto

2. **Deploy:**
   - Clique em "Add New" / "Project" no dashboard da Vercel
   - Você pode importar diretamente de um repositório Git (GitHub, GitLab, etc.) ou fazer upload do projeto
   - **Importante:** Na tela de configuração do projeto, NÃO selecione "Create React App" como framework preset
   - Selecione "Other" ou deixe que a Vercel detecte as configurações a partir do vercel.json

3. **Configuração do Projeto:**
   - **Build Command:** A Vercel usará automaticamente o comando definido no vercel.json (`cd client && vite build`)
   - **Output Directory:** Já está configurado no vercel.json (`dist/public`)
   - **Install Command:** Já está configurado (`npm install`)

4. **Verificação após Deploy:**
   - Após o deploy, verifique se todas as páginas e rotas estão funcionando corretamente
   - Teste a navegação e as funcionalidades principais do site
   - Verifique a responsividade em diferentes dispositivos

## Troubleshooting

Se encontrar o erro 404 (NOT_FOUND) após o deploy:

1. Verifique os logs de build na Vercel para identificar possíveis erros
2. Confirme que o build está sendo gerado corretamente (deve haver arquivos na pasta dist/public)
3. Verifique se as configurações de rota no vercel.json estão corretas
4. Se necessário, tente usar um dos formatos alternativos do vercel.json que comentamos

## Configurações Alternativas

Se a configuração atual não funcionar, você pode tentar estas alternativas para o arquivo vercel.json:

### Opção 1 - Configuração Simplificada
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Opção 2 - Configuração Detalhada
```json
{
  "version": 2,
  "public": true,
  "cleanUrls": true,
  "routes": [
    { "handle": "filesystem" },
    { "src": "/assets/(.*)", "dest": "/assets/$1" },
    { "src": "/(.*\\.(js|css|png|jpg|jpeg|gif|ico|json|svg|webp)$)", "dest": "/$1" },
    { "src": "/.*", "dest": "/index.html" }
  ]
}
```

## Considerações Finais

- A Vercel é otimizada para aplicações frontend como a sua, então uma vez configurada corretamente, o processo de deploy deve ser tranquilo
- As atualizações futuras serão automáticas se você conectar um repositório Git
- Para domínios personalizados, você pode configurá-los nas opções do projeto após o deploy inicial