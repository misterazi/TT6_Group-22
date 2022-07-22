from flask import Flask
from database import db
from datetime imp
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/insert_transaction")
def insert_transaction():
    return "testing_insert_transaction"

@app.route("/list_wallet_details")
def list_wallet_details():
    return "testing list_wallet_details"
    
@app.route("/delete_currency")
def delete_currency():
    return "testing_delete_currency"
    
@app.route("/delete_wallet")
def delete_wallet():
    return "testing delete wallet"
    
if __name__ == "__main__":
    app.run()