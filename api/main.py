from flask import (
    Flask, jsonify,request
)
from flask_cors import CORS
import json
from grafo.lista_adjacencia import *
from merge_sort import *

app = Flask("application")
cors = CORS(app, resources={r"/*": {"origins": "*"}})
# Define error when status code is 404 
@app.errorhandler(404)
def page_not_found(error):
    return jsonify({"error_message":"This page doesn't exist"}),404

# Define error when status code is 500
@app.errorhandler(500)
def page_not_found(error):
    return jsonify({"error_message":"O id desse campeão não existe"}),500

# Home page
@app.route('/',methods=['GET'])
def index():
    return jsonify({"status":"API is up","version":"1"})

@app.route('/winrate',methods=['GET'])
def getWinrate():
    n = len(winrate)
    # Aplicando mergeSort para ordenar o array
    mergeSort(winrate, 0, n-1)
    ## Reverter a ordenacao para o maior winrate ficar no topo
    res = winrate[::-1]

    return jsonify(res)

@app.route('/matchUp',methods=['GET'])
def getDistance():
    # Get data of query params
    champ = int(request.args.get('champ'))
    try:
        if (champ!=0):
            arrayAdjList = g.grafo[champ-1]
        elif(champ==0):
            abort(500)
    except :
        abort(500)
    returnArray = []
    for element in arrayAdjList:
        returnArray.append(nodes[element])
    if (len(returnArray)==0):
            return jsonify({"response":"O campeão escolhido não possui um matchUp nos nossos dados"})
    g.mostra_lista()    
    return jsonify(returnArray)

if __name__ == "__main__":

    with open("Nodes.json", encoding='utf-8') as meu_json:
        nodes = json.load(meu_json)

    with open("Edges.json", encoding='utf-8') as meu_json:
        edges = json.load(meu_json)
    with open("randomWinrate.json", encoding='utf-8') as meu_json:
        winrate = json.load(meu_json)
    
    g = Grafo(len(nodes))

    for item in edges:
    # print("item:", item)
        g.adiciona_aresta(item["champ"],item["betterThan"])

    app.run(host='0.0.0.0', port=8081)

