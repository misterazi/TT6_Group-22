from flask import Blueprint, request, jsonify
import validators
from src.database import Wallet, Currency, User, db
from flask_jwt_extended import jwt_required, create_access_token, create_refresh_token, get_jwt_identity

wallet = Blueprint(name="wallet", import_name=__name__, url_prefix="/wallet")

@wallet.post('/create')
@jwt_required()
def create_wallet():
    current_user = get_jwt_identity()
    wallet_name = request.json['name']

    if Wallet.query.filter_by(id=current_user, name=wallet_name).first():
            return jsonify({
                'error': 'Wallet already exists'
            }), 400
    
    wallet = Wallet(name=wallet_name, user_id=current_user)
    db.session.add(wallet)
    db.session.commit()

    return { 
        "wallet": {
            "id": wallet.id,
            "name": wallet.name,
        }
    }, 200


@wallet.get('/all')
@jwt_required()
def get_all_wallets(): 
    current_user = get_jwt_identity()

    wallets = Wallet.query.filter_by(user_id=current_user).all()

    data = []

    for wallet in wallets:
        data.append({
            'id': wallet.id,
            'name': wallet.name
        })

    return {
        "wallets": data
    }, 200


@wallet.get('/<int:wallet_id>')
@jwt_required()
def get_wallet(wallet_id):
    current_user = get_jwt_identity()

    wallet = Wallet.query.filter_by(user_id=current_user, id=wallet_id).first()

    if not wallet:
        return { "error": "Wallet not found" }, 400

    return { 
        "wallet": {
            "id": wallet.id,
            "name": wallet.name,
        }
    }, 200


@wallet.delete('/<int:wallet_id>')
@jwt_required()
def delete_wallet(wallet_id): 
    # to add

    return jsonify({"message": "Wallet deleted"}), 200


@wallet.post('/currency/all')
@jwt_required()
def get_all_wallet_currencies():
    username = request.json['username']
    password = request.json['password']
    name = request.json['name']

    if len(username) > 20:
        return {'error': "Username is too long"}, 400

    if not username.isalnum() or " " in username:
        return {'error': "Username should be alphanumeric, also no spaces"}, 400

    if User.query.filter_by(username=username).first() is not None:
        return {'error': "Username is taken"}, 409

    pwd_hash = generate_password_hash(password)
    user = User(username=username, password=pwd_hash, name=name)
    db.session.add(user)
    db.session.commit()

    return {
        "user" : { "name": name, "username": username }
    }, 200