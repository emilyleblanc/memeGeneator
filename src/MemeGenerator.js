// TextInput.js
import { useState, useEffect } from "react";
import Header from "./Header";

function MemeGenerator() {
  const [data, setData] = useState([]);
  // CALLING API "https://api.imgflip.com/get_memes"
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      // DATA IS SAVED AS "allMemeImgs"
      .then((result) => {
        const allMemeImgs = result.data.memes;

        setData(allMemeImgs);
      });
  }, []);

  // INPUT FIELD LOGIC AND SAVING STATE OF INPUTS
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  const handleChange = (e) => {
    // WHEN INPUT IN FILLED OUT THE STATE CHANGES
    if (e.target.className === "top-text") {
      setTopText(e.target.value);
    } else {
      setBottomText(e.target.value);
    }
  };
  return (
    <div>
      {data.map((item) => {
        return (
        <Header 
        key={item.id} 
        img={item.url} 
        alt={item.name} 
        />);
      })}
      <input className="top-text" value={topText} onChange={handleChange} />

      <input
        className="bottom-text"
        value={bottomText}
        onChange={handleChange}
      />
    </div>
  );
}
export default MemeGenerator;
