from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import datetime

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend requests

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")  # or use MongoDB Atlas URI
db = client["contact_db"]
collection = db["messages"]

@app.route('/submit-form', methods=['POST'])
def submit_form():
    try:
        data = request.get_json()

        name = data.get('name')
        email = data.get('email')
        subject = data.get('subject', '')
        message = data.get('message')

        if not name or not email or not message:
            return jsonify({'error': 'Missing required fields'}), 400

        contact_entry = {
            'name': name,
            'email': email,
            'subject': subject,
            'message': message,
            'submitted_at': datetime.datetime.utcnow()
        }

        collection.insert_one(contact_entry)
        return jsonify({'success': 'Message sent successfully!'}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
