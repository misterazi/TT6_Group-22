from flask import Flask, Blueprint, request, jsonify
from src.database import User, Transaction, Wallet, Currency, db
from datetime import datetime
from sqlalchemy import desc
from flask_jwt_extended import jwt_required, create_access_token, create_refresh_token, get_jwt_identity
import json

app = Flask(__name__)

# @app.route("/")
# def hello():
    # return "Hello World!"

@app.post("/insert_transaction")
@jwt_required()
def insert_transaction():
    current_user = get_jwt_identity()
    from_currency = request.json['from_currency']
    to_currency = request.json['to_currency']
    from_amount = request.json['from_amount']
    to_amount = request.json['to_amount']
    lastId = db.session.Transaction.query.with_entities(Transaction.id).order_by(desc(Transaction.id)).first()
    newId = lastId+1
    transaction = Transaction(id=newId, user_id=user_id, from_currency=from_currency, to_currency=to_currency, from_amount = from_amount, to_amount = to_amount)
    
    db.session.add(transaction)
    db.session.commit()

    return {
        "transaction" : { "id": newId, "user_id": user_id, "from_currency": from_currency, "to_currency":to_currency, "from_amount":from_amount, "to_amount":to_amount }
    }, 200

@app.get('/<int:wallet_id>')
def list_wallet_details_by_wallet_id(wallet_id):
    wallet_id = request.json['wallet_id']
    wallet = db.session.Wallet.query.filter_by(id=wallet_id).first()
    
    return { 
        "name": wallet.name,
        "user_id": wallet.user_id,
    }

@app.get("/list_wallet_details_by_userid")
@jwt_required()
def list_wallet_details():
    current_user = get_jwt_identity()
    user_id = current_user
    wallets = db.session.Wallet.query.filter_by(user_id=user_id)
    return json.dumps(wallets)
    
@app.delete('/<int:currency_id>')
@jwt_required()
def delete_currency(currency_id):
    Currency.query.filter_by(id=currency_id).delete()
    db.session.commit()
    return jsonify({"message": "Currency deleted"}), 200
    
@app.delete('/<int:wallet_id>')
@jwt_required()
def delete_wallet(wallet_id): 
    Wallet.query.filter_by(id=wallet_id).delete()
    db.session.commit()
    return jsonify({"message": "Wallet deleted"}), 200
    
