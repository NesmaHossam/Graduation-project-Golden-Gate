// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import "./SearchBar.css";
// import mic_icon from "../Assests/mic_icon.png";

// export const SearchBar = ({ setResults }) => {
//   const [input, setInput] = useState("");

//   const fetchData = (value) => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((json) => {
//         const results = json.filter((user) => {
//           return (
//             value &&
//             user &&
//             user.name &&
//             user.name.toLowerCase().includes(value)
//           );
//         });

//         setResults(results);
//       });
//   };

//   const handleChange = (value) => {
//     setInput(value);
//     fetchData(value);
//   };

//   return (
//     <div className="input-wrapper">
//       <FaSearch id="search-icon" />
//       <input
//         placeholder="Search"
//         value={input}
//         onChange={(e) => handleChange(e.target.value)}
//       />
//       <img src={mic_icon} id="mic-icon" alt=""/>
//     </div>
//   );
// };

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import mic_icon from "../Assests/mic_icon.png";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [listening, setListening] = useState(false);
  const recognition = new window.webkitSpeechRecognition();

  const handleSpeechRecognition = () => {
    if (!listening) {
      recognition.start();
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.trim();
        setInput(transcript);
        fetchData(transcript);
        recognition.stop();
        setListening(false);
      };
      recognition.onend = () => {
        setListening(false);
      };
      setListening(true);
    } else {
      recognition.stop();
      setListening(false);
    }
  };

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });

        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <img
        src={mic_icon}
        id="mic-icon"
        alt="Microphone"
        onClick={handleSpeechRecognition}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};
