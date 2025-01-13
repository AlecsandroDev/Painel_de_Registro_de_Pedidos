from flask import Flask, render_template, request
import quickstart as api_sheet
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route("/", methods=["GET"])
def index():
    return render_template("Index/index.html")


@app.route("/post_sheets", methods=["POST"])
def post_google_sheet():
    data = request.json 
    print(data)
    pedido = str(data["id_pedido"]) 
    nome_empresa = str(data["empresa"])
    envio = str(data["data"])
    entregue = "Entregue" if data["status"] == "Entregue" else "Não Entregue"

    api_sheet.POST_CONTENT(pedido, nome_empresa, envio, entregue)

    return render_template("Index/index.html")


if __name__ == "__main__":
    app.run(debug=True)
