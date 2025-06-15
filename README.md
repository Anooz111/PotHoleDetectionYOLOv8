# PotHoleDetectionYOLOv8 🚧

A deep learning-based pothole detection project using [YOLOv8](https://github.com/ultralytics/ultralytics) and a custom dataset from [Roboflow](https://roboflow.com/). This project detects potholes in road images and provides predictions with bounding boxes around detected regions.

---

## ⚙️ Setting up the System

### 🖥️ Backend Setup

1. Create a virtual environment:
   ```bash
   python -m venv venv
   venv/Sctripts/activate
   ```

2. Install required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the backend server:
   ```bash
   cd Backend/
   python app.py
   ```

### 💻 Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd Frontend/
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

---

## 📦 Project Structure

```

backend/
    │
    ├── model/                     # pre-trained model i.e best.pt file
    ├── data/                     # Downloaded dataset from Roboflow
    ├── static/results            # output image  
    ├── uploads/                  # User uploaded image 
    └── README.md                 # This file
    

PotHoleDetectionYOLOv8/
├── Backend/
│   ├── app.py                    # Flask server
│   ├── model/                    # Pre-trained model i.e best.pt file
│   ├── static/results            # Output image  
│   ├── uploads/                  # User uploaded image 
│   └── yolov8_model.py           # YOLO model
│   └── requirements.txt          # requirements
│   
├── Frontend/
│   ├── public/
│   ├── src/
│   ├── app.jsx     #all the frontend codes
│   └── ...
├── README.md
└── LICENSE
```

---

## 📄 License

This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for details.

---

## 🙌 Acknowledgments

- [Ultralytics YOLOv8](https://github.com/ultralytics/ultralytics)
- [Roboflow](https://roboflow.com/) for dataset hosting
