# Sítio Sonho Nosso — E-commerce

Loja Next.js para cestas da roça em Ponte Nova, MG, com catálogo, adicionais, carrinho, entrega ou retirada e checkout pelo WhatsApp.

## Rodar localmente

```bash
npm install
npm run build
npm run dev
```

## Publicar na Vercel

1. Acesse https://vercel.com/new e escolha **Import Git Repository**.
2. Selecione **celeirosoftwares/sitio-sonho-nosso** e a equipe **Diego's projects**.
3. Confirme **Next.js** e mantenha a pasta raiz como `./`.
4. Opcionalmente, crie a variável pública `NEXT_PUBLIC_WHATSAPP_NUMBER` com valor `5531988860562` (já há fallback no código).
5. Clique em **Deploy** e confira o resultado do build.

## Observações

- WhatsApp: +55 31 98886-0562.
- Preços provisórios: Essencial R$ 49,90 e Família R$ 79,90.
- O checkout abre uma mensagem pré-preenchida no WhatsApp, mas não cobra nem grava pedidos em banco.
- Frete, composição e disponibilidade dependem de confirmação manual.
- Imagens de produtos ainda são ilustrações com emojis; substituir por fotografias reais antes da divulgação comercial.
- Produtos processados exigem adequação às regras sanitárias aplicáveis.
