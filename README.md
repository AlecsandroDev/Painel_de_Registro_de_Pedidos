# **Painel de Registro de Pedidos**

Esse projeto tem como objetivo realizar o envio de pedidos diretamente a planilha do Google atráves da API da Google Cloud.

  Nesse projeto foi utilizado as seguintes Ferramentas:
    
    1. HTML5 / CSS / JS
    2. Python

  Também foi utilizados os seguintes Frameworks e Bibliotecas:
  
    1. Axios/JS
    2. Flask
    3. Flask Cors
    4. Gspread
    5. Auth2client
    6. Google Cloud Services "Google Sheets API"

Esse projeto possui o arquivo "**requirements.txt**" para realizar a instalação das bibliotecas do projeto. Além disso é necessário
criar o Token da API do Google Clous, que está nesse site: https://console.cloud.google.com/.
Após realizar o download do arquivo json do Token, basta colocar o endereço da variável "**credencialjson**".

Na parte da Planilha, é necessário que a conta que foi criada o Token seja a mesma da Planilha. O "**ID_planilha**" da Planilha fica no link, nesse
ponto "/spreadsheets/d/**123...255**/edit", colocando essa parte na variável. Após isso basta passar o nome da página que irá ser modificada no Planilhas,
e coloca-lá na variável "**Pagina_planilha**".

Com isso, o projeto está configurado, bastando apenas executar o comando "**python main.py** no terminal, e abrir o arquivo **index.html**.
