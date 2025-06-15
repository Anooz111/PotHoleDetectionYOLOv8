from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
from yolov8_model import detect_objects

UPLOAD_FOLDER = 'uploads'
RESULT_FOLDER = 'static/results'

app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(RESULT_FOLDER, exist_ok=True)

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'}), 400

    image = request.files['image']
    image_path = os.path.join(UPLOAD_FOLDER, image.filename)
    image.save(image_path)

    result_path = detect_objects(image_path, image.filename)
    return jsonify({'result_url': f"http://localhost:5000/{result_path}"})

@app.route('/static/results/<path:filename>')
def serve_result(filename):
    return send_from_directory('static/results', filename)

if __name__ == '__main__':
    app.run(debug=True)
