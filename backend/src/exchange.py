from flask import Blueprint, request, jsonify
import validators
import requests
import os
from flask_jwt_extended import jwt_required, create_access_token, create_refresh_token, get_jwt_identity

exchange = Blueprint(name="exchange", import_name=__name__, url_prefix="/exchange")

@exchange.get('/all')
def get_all_exchange_rates(): 
    return jsonify(
        [
            {
                "id": 1,
                "base_currency": "SGD",
                "exchange_currency": "CAD",
                "rate": 0.9255
            },
            {
                "id": 2,
                "base_currency": "SGD",
                "exchange_currency": "CNH",
                "rate": 4.7868
            },
            {
                "id": 3,
                "base_currency": "SGD",
                "exchange_currency": "EUR",
                "rate": 0.7086
            },
            {
                "id": 4,
                "base_currency": "SGD",
                "exchange_currency": "HKD",
                "rate": 5.5830
            },
            {
                "id": 5,
                "base_currency": "SGD",
                "exchange_currency": "JPY",
                "rate": 97.5303
            },
            {
                "id": 6,
                "base_currency": "SGD",
                "exchange_currency": "NZD",
                "rate": 1.1612
            },
            {
                "id": 7,
                "base_currency": "SGD",
                "exchange_currency": "NOK",
                "rate": 7.2912
            },
            {
                "id": 8,
                "base_currency": "SGD",
                "exchange_currency": "GBP",
                "rate": 0.5974
            },
            {
                "id": 9,
                "base_currency": "SGD",
                "exchange_currency": "SEK",
                "rate": 7.5168
            },
            {
                "id": 10,
                "base_currency": "SGD",
                "exchange_currency": "THB",
                "rate": 25.7275
            },
            {
                "id": 11,
                "base_currency": "SGD",
                "exchange_currency": "USD",
                "rate": 0.7113
            }
            ]
    ), 200


@exchange.get('/<string:base_currency>')
def get_all_exchange_rates_for_base(base_currency):
    base = base_currency
    symbols = ""
    url = "https://api.apilayer.com/fixer/latest?symbols=" + symbols + "&base=" + base
    print(url)

    payload = {}
    headers= {
        "apikey": os.environ.get("CURRENCY_API_KEY")
    }

    response = requests.request("GET", url, headers=headers, data=payload)

    status_code = response.status_code
    result = response.text

    if (status_code == 200):
        return response.text
    
    else: 
        return { "error": "Error getting exchange rates from server" }