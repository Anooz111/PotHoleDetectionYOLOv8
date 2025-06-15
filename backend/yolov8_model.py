from ultralytics import YOLO
import os

model = YOLO("model/best.pt") 

def detect_objects(image_path, filename):
    results = model(image_path)
    save_path = os.path.join('static/results', filename)
    results[0].save(save_path)
    return f'static/results/{filename}'
