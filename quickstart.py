import gspread
from oauth2client.service_account import ServiceAccountCredentials

credencialjson = r"credentials.json"
ID_planilha = "ID_PLANILHA"
Pagina_planilha = "NOME_PAGINA_PLANILHA"
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]

def POST_CONTENT(id_pedido, nome_empresa, dia_envio, status_entregue):
    credentials = ServiceAccountCredentials.from_json_keyfile_name(credencialjson, scope)
    gc = gspread.authorize(credentials)
    url_planilha = gc.open_by_key(ID_planilha)
    guia_planilha = url_planilha.worksheet(Pagina_planilha)

    row = len(guia_planilha.get_all_values()) + 1  

    data = dia_envio.split("-")
    data_padão = data[2] + "/" + data[1] + "/" + data[0]
    
    valores = [[id_pedido, nome_empresa, data_padão, status_entregue]]
    
    guia_planilha.update(f"A{row}:D{row}", valores)