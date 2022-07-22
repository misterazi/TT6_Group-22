from flask import Flask, jsonify
import os

def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)

    return app
