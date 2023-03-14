import Proptypes from "prop-types"
const Button = ( { color , text , onClick}) => {
  return (
 
    <button
     style={{ backgroundColor: color}}
     onClick={onClick} 
    className='btn'>
        {text}
        </button>

   
  )
}

Button.propTypes = {
    text : Proptypes.string , 
    color : Proptypes.string ,
    onClick : Proptypes.func.isRequired

}

export default Button