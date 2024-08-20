import React, { useState } from "react";
import "./App.css"; // For custom CSS

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  // Function to handle running the AI model
  const handleRunModel = () => {
    console.log("AI Model running...");
    // alert("AI Model has been triggered.");
    const result = document.getElementById("result");
    result.style.display = "flex";
    location.href='./#result'


    const text = "Here you will get the result of your crops disease in a detailed context . so run the ai model by uploading your crops image in above section and hit the Find disease button .";
    const typingSpeed = 30;
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            document.getElementById("typedText").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            document.getElementById("typedText").style.animation = "none"; // Stop caret blinking after text is complete
        }
    }

    typeWriter();




  };

  return (
    <div className="min-h-screen flex items-center homepage flex-col">

      <div className="agro-logo">
        <img src="/agro logo.png" alt="logo"/>

      </div>


      <div className="grid grid-cols-2 gap-10 p-10 rounded-xl shadow-xl w-3/4 container justify-center">
        
        {/* Left Column: Image Upload */}
        <div className="left-column flex flex-col items-center">
          <div className="image-placeholder border-2 border-dashed border-black w-full h-64 flex items-center justify-center mb-4">
            {selectedImage ? (  
              <img src={selectedImage} alt="Selected" className="uploaded-image object-cover h-full w-full" />
            ) : (
                  <label className="file-upload bg-violet-900 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-violet-800">
                    choose file
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageChange} 
                      className="hidden" 
                    />
                  </label>
            )}
          </div>
          
        </div>

        {/* Right Column: Heading and Button */}
        <div className="right-column flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-5">Upload image of crops on the left side</h1>
          <h2 className="text-lg font-bold mb-20 ">please upload high quality images of crops for better results in detection of the disease</h2>
          <button 
            onClick={handleRunModel}
            className="button">
            Find disease
          </button>
        </div>
      </div>

      <div className="p-10 rounded-xl shadow-xl w-3/4 m-10 flex justify-center items-center flex-col" id="result">
            <h1 className="text-4xl font-bold mb-5">Result</h1>
            <h2 className="text-xl font-bold text-white m-5 typing " id="typedText">
              {/* Here you will get the result of your crops disease in a detailed context . so run the ai model by uploading your crops image in above section and hit the Find disease button . */}
            </h2>
            
      </div>


    </div>
  );
};

export default App;
