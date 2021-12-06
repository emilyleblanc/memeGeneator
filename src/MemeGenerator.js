// TextInput.js
import { useState, useEffect } from "react";
import Meme from "./Meme";
import Form from "./Form";

function MemeGenerator() {
  const [ data, setData ] = useState([]);
  const [ meme, setMeme ] = useState({})
  const [ randomNum, setRandomNum ] = useState(0)
  
  // CALLING API "https://api.imgflip.com/get_memes"
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      // DATA IS SAVED AS "allMemeImgs"
      .then((result) => {
        const allMemeImgs = result.data.memes;
        //filter data so we only get one image memes
        const filteredMemeImgs = allMemeImgs.filter( meme => meme.box_count <= 2)
        // GET RANDOM IMAGE
        setRandomNum(Math.floor(Math.random() * filteredMemeImgs.length))

        // SET STATE TO RANDOM IMAGE
        setData(filteredMemeImgs);
        setMeme(filteredMemeImgs[randomNum])
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
      e.preventDefault()
      setMeme(data[ Math.floor(Math.random() * data.length) ])
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
        id={meme.id}
        img={meme.url}
        alt={meme.name}
        topText={topText}
        bottomText={bottomText}
        />
    </div>
  );
}
export default MemeGenerator;
