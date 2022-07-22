from flask import Flask, Blueprint, request, jsonify
from src.database import User, Transaction, Wallet, Currency, db
from datetime import datetime
from sqlalchemy import desc
import json
app = Flask(__name__)

# @app.route("/")
# def hello():
    # return "Hello World!"

@app.post("/insert_transaction")
def insert_transaction():
    user_id = request.json['user_id']
    from_currency = request.json['from_currency']
    to_currency = request.json['to_currency']
    from_amount = request.json['from_amount']
    to_amount = request.json['to_amount']
    lastId = db.session.Transaction.query.with_entities(Transaction.id).order_by(desc(Transaction.id).first()
    newId = lastId+1
    transaction = Transaction(id=newId, user_id=user_id, from_currency=from_currency, to_currency=to_currency, from_amount = from_amount, to_amount = to_amount)
    
    db.session.add(transaction)
    db.session.commit()

    return {
        "transaction" : { "id": newId  "user_id": user_id, "from_currency": from_currency, "to_currency":to_currency, "from_amount":from_amount, "to_amount":to_amount }
    }, 200

@app.get("/list_wallet_details")
def list_wallet_details():
    wallet_id = request.json['wallet_id']
    wallet = db.session.Wallet.query.filter_by(id=wallet_id).first()
    
     return { 
        "name": wallet.name,
        "user_id": wallet.user_id,
        "currencies": wallet.currencies
    }

@app.get("/list_wallet_details_by_userid")
def list_wallet_details():
    user_id = request.json['user_id']
    wallets = db.session.Wallet.query.filter_by(user_id=user_id)
    return json.dumps(wallets)
    
@app.post("/delete_currency")
def delete_currency():
    return "testing_delete_currency"
    
@app.post("/delete_wallet")
def delete_wallet():
    return "testing delete wallet"
    
if __name__ == "__main__":
    app.run()