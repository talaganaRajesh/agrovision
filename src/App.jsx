import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css"; // Import custom CSS if needed



import logo from '/agro logo black 2.png';
import leaf from '/pagelines-brands-solid.png';


const App = () => {

  const [selectedImage, setSelectedImage] = useState(null);
  const [isModelRun, setIsModelRun] = useState(false); // Track if the model has been run


  // Function to handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setIsModelRun(false); // Reset the model run state when a new image is selected
    }
  };


  


  // Function to handle running the AI model
  const handleRunModel = () => {
    if (!selectedImage) {
      alert("Please select an image first!");
      return;
    }

    if (isModelRun) {
      return; // Prevent the function from running again for the same image
    }

    console.log("AI Model running...");
      const result = document.getElementById("result");
      result.style.display = "flex";
      location.href='./#final'

      const text = "Here you will get the result of your crops disease in a detailed context . so run the ai model by uploading your crops image in above section and hit the Find disease button .\n \n For team members :- Our ai predictions will be shown here , after integrating the python model  . \n \n \n Here you will get the result of your crops disease in a detailed context . Here you will get the result of your crops disease in a detailed context . Here you will get the result of your crops disease in a detailed context . Here you will get the result of your crops disease in a detailed context .";
      const typingSpeed = 20;
      let index = 0;

      function typeWriter() {
          if (index < text.length) {
              document.getElementById("typedText").innerHTML += text.charAt(index);
              index++;

              // Scroll the window smoothly as the text is being written
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });


              setTimeout(typeWriter, typingSpeed);
          } else {
              document.getElementById("typedText").style.animation = "none"; // Stop caret blinking after text is complete
          }
      }

      typeWriter();

      setIsModelRun(true); // Set the state to indicate the model has been run for the current image


  };



  // useEffect to add the enter keyup event listener only once when the enter key is pressed and image is selected
  
  useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.key === 'Enter' && selectedImage && !isModelRun) {
        handleRunModel();
      }
    };

    window.addEventListener('keyup', handleKeyUp);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [selectedImage, isModelRun]); 


  return (
    <div className="min-h-screen flex flex-col items-center homepage">

      {/* <div className="agro-logo mb-15 mt-20 w-32 cursor-pointer">
        <img src={logo} alt="logo"/>
      </div> */}


      {/* Navbar */}
      
      <nav>
      <img src={logo} alt="logo"/>
        <button>
            Log in
        </button>
      </nav>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 rounded-xl shadow-xl w-full md:w-3/4 container">
        
        {/* Left Column: Image Upload */}
        <div className="flex flex-col items-center">
          <div className="border-2 border-dashed border-gray-500 w-full h-64 flex items-center justify-center mb-4">
            {selectedImage ? (  
              <img src={selectedImage} alt="Selected" className="object-cover w-full h-full rounded-lg" />
            ) : (
              <label className="bg-white text-black py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-200 inputfile">
                Choose file
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
        <div className="flex flex-col items-center justify-center text-center right-column">
          <h1 className="text-2xl md:text-4xl font-bold mb-5 text-white flex flex-row"><span><img src={leaf} alt="leaf" className="size-9"/></span>Upload image of crops on the left side</h1>
          <h2 className="text-sm md:text-lg font-bold mb-10 text-gray-400">Please upload high quality images of crops for better results in detection of the disease</h2>
          <button 
            onClick={handleRunModel}
            className="w-2/3 md:w-1/3 h-12 font-extrabold button">
            Find disease
          </button>
        </div>
      </div>

      <div className="hidden p-10 rounded-xl shadow-xl w-full md:w-3/4 mt-10 justify-center items-center flex-col bg-gradient-to-r from-purple-900 to-indigo-900" id="result">
        <h1 className="text-2xl md:text-4xl mb-5 text-white font-extrabold">Result</h1>
        <h2 className="text-sm md:text-xl font-bold text-white m-5 typing" id="typedText"></h2>
      </div>

      <div id="final">
        
      </div>

    </div>
    
  );
};

export default App;
