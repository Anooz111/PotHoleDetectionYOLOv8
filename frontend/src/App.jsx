import { useState } from "react";
import axios from "axios";

function App() {
  const [image, setImage] = useState(null);
  const [resultUrl, setResultUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setResultUrl(null);
  };

  const handleUpload = async () => {
    if (!image) return;
    const formData = new FormData();
    formData.append("image", image);
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/predict", formData);
      setResultUrl(res.data.result_url);
    } catch (err) {
      alert("Error uploading image");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center p-6">
      <div className="max-w-2xl w-full bg-white shadow-md rounded-2xl p-8 mt-10">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 text-center mb-8 tracking-widest animate-pulse drop-shadow-lg">
          YOLOv8 Object Detection
        </h1>

        <p className=""></p>

        <div className="flex flex-col items-center space-y-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
          />

          <button
            onClick={handleUpload}
            disabled={loading || !image}
            className={`px-6 py-2 rounded-full text-white font-bold tracking-wide shadow-lg transition-all duration-300 ease-in-out
    ${
      loading || !image
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 hover:brightness-110 animate-bounce"
    }
  `}
          >
            {loading ? "Detecting..." : "Detect Objects"}
          </button>
        </div>

        {resultUrl && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Detected Image:
            </h2>
            <img
              src={resultUrl}
              alt="Detected"
              className="w-full rounded-lg border border-gray-300 shadow-sm"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
