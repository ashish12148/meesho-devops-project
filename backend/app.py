from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return jsonify({
        "message": "Meesho DevOps Backend is running"
    })


@app.route("/api/products")
def products():
    return jsonify([
        {
            "id": 1,
            "name": "Stylish Women's Kurti",
            "price": 499,
            "category": "Fashion"
        },
        {
            "id": 2,
            "name": "Wireless Bluetooth Earbuds",
            "price": 799,
            "category": "Electronics"
        },
        {
            "id": 3,
            "name": "Casual Men's Shirt",
            "price": 599,
            "category": "Fashion"
        },
        {
            "id": 4,
            "name": "Smart Watch",
            "price": 999,
            "category": "Electronics"
        }
    ])


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)