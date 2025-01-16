# **Painel de Registro de Pedidos**

Esse projeto se desenvolve na parte de registro de pedidos, utilizando o Google Planilhas, através da API da Google Cloud Console,
fazendo com que seja possível realizar o registro de pedidos de forma mais eficiente, a fim de otimizar tempo.

<hr> 

**Ferramentas e Bibliotecas:**
    
  1. HTML5 / CSS / JS
  2. Python
  3. Axios/JS
  4. Flask
  5. Flask Cors
  6. Gspread
  7. Auth2client
  8. Google Cloud Services
  8. Google Sheets API

<hr> 

O projeto acompanha um arquivo **requirements.txt**, que pode ser instalado executando o comando: 

    pip install -r requirements.txt
    
<hr>

    

É necessário para que o projeto funcione a criar o Token da API do Google Cloud, que está nesse site: **<a href="https://console.cloud.google.com/">Google Cloud Console</a>**.

Após realizar o download do arquivo JSON do Token, basta colocar o endereço da variável "**credencialjson**".

Na parte da Planilha, é necessário que a conta que foi criada o Token seja a mesma da Planilha. O "**ID_planilha**" da Planilha fica no link, nesse
ponto "/spreadsheets/d/**123...255**/edit", colocando essa parte na variável. Após isso, basta passar o nome da página que irá ser modificada no Planilhas,
e coloca-lá na variável "**Pagina_planilha**".

Com isso, o projeto está configurado, bastando apenas executar o comando: 
    
    python main.py

Após isso, basta abrir o arquivo HTML **index.html**, para conseguir acessar o painel do projeto.
