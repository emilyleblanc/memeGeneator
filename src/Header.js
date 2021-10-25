// Header.js

function Header(props){
    return(
    <header id={props.id}>
       <h1>Meme Generator!!</h1>
       <img src={props.img} alt=""/>
    </header>)
}
export default Header;