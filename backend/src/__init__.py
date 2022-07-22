from flask import Flask, jsonify
import os
from src.auth import auth
from src.database import db
from src.wallet import wallet
from flask_jwt_extended import JWTManager

def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)

    if test_config is None:
        app.config.from_mapping(
            SECRET_KEY = os.environ.get("SECRET_KEY"),
            SQLALCHEMY_DATABASE_URI = os.environ.get("SQLALCHEMY_DATABASE_URI"),
            SQLALCHEMY_TRACK_MODIFICATIONS = False,
            JWT_SECRET_KEY = os.environ.get("JWT_SECRET_KEY"),
        )

    else:
        app.config.from_mapping(test_config)

    db.app = app
    db.init_app(app)

    JWTManager(app)

    app.register_blueprint(auth)
    app.register_blueprint(wallet)

    @app.errorhandler(404)
    def handle_404(e):
        return { "error": "Page not found" }, 404

    return app