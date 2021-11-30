// TextInput.js
import { useState, useEffect } from "react";
import Meme from "./Meme";
import Form from "./Form";

function MemeGenerator() {
  const [data, setData] = useState([]);
  // CALLING API "https://api.imgflip.com/get_memes"
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      // DATA IS SAVED AS "allMemeImgs"
      .then((result) => {
        const allMemeImgs = result.data.memes;
        
        // GET RANDOM IMAGE
        const randomNum = Math.floor(Math.random() * allMemeImgs.length)

        // SET STATE TO RANDOM IMAGE
        setData(allMemeImgs[randomNum]);
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

  const handleClick = (e) => {
    fetch("https://api.imgflip.com/get_memes")
    .then((response) => response.json())
    // DATA IS SAVED AS "allMemeImgs"
    .then((result) => {
      const allMemeImgs = result.data.memes;
      
      // GET RANDOM IMAGE
      const randomNum = Math.floor(Math.random() * allMemeImgs.length)

      // SET STATE TO RANDOM IMAGE
      setData(allMemeImgs[randomNum]);
      });
    } 

  return (
    <div className='wrapper'>
      
      <Form
        handleClick={handleClick}
        handleChange={handleChange}
        topText={topText}
        bottomText={bottomText}
        />
        
      <Meme 
        id={data.id}
        img={data.url}
        alt={data.name}
        topText={topText}
        bottomText={bottomText}
        />
    </div>
  );
}
export default MemeGenerator;
