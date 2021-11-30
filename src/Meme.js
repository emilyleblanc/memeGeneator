function Meme(props) {
  return (
    <div className="meme-img">
      <p>{props.topText}</p>
      <img src={props.img} alt="" />
      <p>{props.bottomText}</p>
    </div>
  );
}
export default Meme;