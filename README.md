# IGF Tech Site

Site estático pronto para GitHub Pages.

## Publicar no GitHub Pages

1. Envie estes arquivos para um repositório no GitHub.
2. Abra `Settings > Pages`.
3. Em `Build and deployment`, selecione `Deploy from a branch`.
4. Escolha a branch principal e a pasta `/root`.
5. Salve e aguarde o link publicado.

## Editar contato

No arquivo `index.html`, substitua:

- `contato@igftech.com.br`
- `(00) 00000-0000`
- `https://wa.me/5500000000000`

## Trocar logo

Salve a logo oficial da empresa como `assets/igf-logo.png`.

Formato recomendado:

- `PNG` com fundo transparente.
- Use uma imagem com boa resolução, por exemplo 600 px de largura ou mais.
- Evite `JPG`, porque ele não preserva transparência e costuma ficar pior em fundo escuro.

## Imagens do catálogo

As imagens do carrossel ficam na pasta `assets/catalogo/`.

Use estes nomes:

- `catalogo-01.png`
- `catalogo-02.png`
- `catalogo-03.png`
- `catalogo-04.png`
- `catalogo-05.png`
- `catalogo-06.png`
- `catalogo-07.png`
- `catalogo-08.png`
- `catalogo-09.png`
- `catalogo-10.png`

Formato recomendado:

- `PNG` ou `JPG`.
- Proporção horizontal `16:9`, por exemplo `1600 x 900 px` ou `1920 x 1080 px`.
- Se trocar para `JPG`, atualize os caminhos no arquivo `script.js`.

Os arquivos originais enviados foram preservados em `assets/catalogo/originais/`.

## Arquivos principais

- `index.html`: conteúdo da página.
- `styles.css`: identidade visual e responsividade.
- `script.js`: menu mobile, animações e ano automático.
- `assets/hero-industrial.png`: imagem principal do site.
