# PotHoleDetectionYOLOv8 🚧

A deep learning-based pothole detection project using [YOLOv8](https://github.com/ultralytics/ultralytics) and a custom dataset from [Roboflow](https://roboflow.com/). This project detects potholes in road images and provides predictions with bounding boxes around detected regions.

---

## 📂 Project Structure

```

PotHoleDetectionYOLOv8/
│
├── runs/                     # YOLO training runs and results
├── data/                     # Downloaded dataset from Roboflow
├── potholes-object-detection-akkkk/  # Roboflow dataset directory
├── model\_training.ipynb      # Main notebook for training and testing
└── README.md                 # This file

````

---

## 🚀 Features

- Pothole detection using YOLOv8 object detection model.
- Trained on a custom dataset via Roboflow.
- Easy-to-use web interface for uploading and detecting potholes in images.
- Visualizations: confusion matrix, validation batch predictions, training results.

---

## 🛠️ Setup Instructions

### 1. Clone this repository

```bash
git clone git@github.com:Anooz111/PotHoleDetectionYOLOv8.git
cd PotHoleDetectionYOLOv8
````

### 2. Install dependencies

```bash
pip install ultralytics==8.2.103 roboflow
```

### 3. Set up environment variables

Create a `.env` file and add your Roboflow API key:

```env
API_KEY=your_roboflow_api_key
```

Or set it directly in your notebook/script:

```python
import os
os.environ["API_KEY"] = "your_roboflow_api_key"
```

---

## 📊 Training the Model

The model is trained using YOLOv8 with the following command:

```bash
yolo task=detect mode=train model=yolov8s.pt data=path_to_data.yaml epochs=25 imgsz=800 plots=True
```

---

## 🧪 Validating the Model

After training, run validation:

```bash
yolo task=detect mode=val model=runs/detect/train/weights/best.pt data=path_to_data.yaml
```

---

## 🔍 Inference (Prediction)

Predict potholes on new images:

```bash
yolo task=detect mode=predict model=runs/detect/train/weights/best.pt conf=0.25 source=path_to_image_or_folder save=True
```

Or use the upload widget in the notebook to detect potholes interactively.

---

## 📷 Sample Results

* `results.png`: Training metrics
* `val_batch0_pred.jpg`: Sample validation predictions
* `confusion_matrix.png`: Confusion matrix for evaluation

---

## 🤝 Acknowledgements

* [Ultralytics YOLOv8](https://github.com/ultralytics/ultralytics)
* [Roboflow](https://roboflow.com/)
* OpenCV, Matplotlib, and other Python libraries

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

