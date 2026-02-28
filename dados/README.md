Análise Exploratória de Dados - Titanic

Este repositório contém a resolução do desafio prático de Análise de Dados em Python, focado na utilização da biblioteca Pandas. O projeto apresenta uma Análise Exploratória de Dados (EDA) completa utilizando o dataset de passageiros do Titanic fornecido pelo SCTEC e com base nos conceitos da trilha SENAI LAB365, aplicando desde comandos básicos de seleção e visualização de DataFrames até técnicas avançadas de limpeza de dados e geração de gráficos.

Objetivos do Projeto
- Aplicar na prática os fundamentos da biblioteca Pandas ('read_csv', 'head', 'info', 'describe', etc.).
- Realizar a limpeza e o tratamento de dados faltantes ou duplicados (NaNs).
- Criar novas variáveis analíticas e adaptar valores para perder o minimno de informação, maximizando a aprendizagem e insights percebidos através dos dados.
- Desenvolver visualizações gráficas diversas para melhorar a obtenção de insights.

Tecnologias e Bibliotecas Utilizadas
- Python 3.12 - Precisei mudara versão do python por problemas com a bibliotena NumPy.
- Google colab - Já tinha utilizado ele em outros momentos da minha vida e o formato de células de código me ajudou muito a organizar as ideias.
- Pandas: Manipulação, agregação e análise de dados.
- NumPy: Suporte a operações numéricas.
- Matplotlib & Seaborn: Criação de gráficos e visualizações de dados estatísticos.

Estrutura da Análise
O arquivo principal do projeto é o Jupyter Notebook 'trilha_dados.ipynb', que está estruturado nas seguintes etapas:

0. GitHub: Fiz upload do arquivo em uma pasta do GitHub para que não tenha erro de caminho quando rodar o código.
1. Importação e Inspeção Inicial: Carregamento do dataset direto do repositório via URL e verificação da estrutura (linhas, colunas e tipos de dados).
2. Tratamento de Dados: - Identificação de dados nulos.
   - Imputação de dados: preenchimento de idades ('Age') com a mediana e portos de embarque ('Embarked') com a moda.
   - Remoção de colunas não representativas devido à alta taxa de valores nulos (ex: 'Cabin') e substituição por um grande grupo comparativo que acredito ter validado pelas classes.
   - Remoção de possíveis dados duplicados.
3. Engenharia de Recursos (Feature Engineering):
   - Criação de categorias de agrupamento de tarifas ('FareGroup').
   - Extração de setores/decks do navio com base em strings.
4. Visualização de Dados: 
- Geração de tabelas cruzadas e gráficos (ex: Relação de Sobrevivência por Classe, Idade e Sexo).

Insights

1 - O grupo demográfico com a menor taxa de sobrevivência é de longe, o dos homens adultos da 3ª classe.
2 - Mulheres tiveram uma probabilidade de sobrevivência drasticamente maior do que os homens, quando aplicamos a váriavel de classes percebemos que mulheres da 3ª classe tiveram taxas de sobrevivência piores do que as mulheres da 1ª e 2ª classes, mas melhores ou iguais às dos homens da 1ª classe.
3 - Crianças pequenas (> 10 anos) apresentam taxas de sobrevivência mais elevadas em todas as classes, especialmente na 1ª e 2ª classes.
4 - Ao analisar a sobrevivência por classe, fica claro que os passageiros da 1ª classe tiveram uma taxa de sobrevivência significativamente superior aos da 3ª classe, assim como o agrupamento feito pelos preços dos bilhetes apontam que passageiros que pagaram tarifas mais altas (geralmente associadas à 1ª classe) sobreviveram em maior proporção.
5 - Passageiros no grupo de convés mais alto (identificados com iniciais A - E) tiveram maiores probabilidade de sobrevivência e estão relacionados com classes e valores de tickets mais altos.
