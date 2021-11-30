// Form.js
function Form(props){
    return(
        <form action="">
        <div className='input-container'>
          <input
            className="top-text"
            value={props.topText}
            onChange={props.handleChange}
            />
          <input
            className="bottom-text"
            value={props.bottomText}
            onChange={props.handleChange}
          />
        </div>
          <button
            onClick={props.handleClick}
          >
            Get a new meme image
          </button>
      </form>
    )
}
export default Form;