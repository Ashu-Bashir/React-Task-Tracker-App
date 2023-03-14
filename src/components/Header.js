import PropTypes from "prop-types"
import Button from './Button'
import { useLocation } from "react-router-dom"

const Header = ({title , onAdd , showAdd}) => {
    const location = useLocation()

  return (
    <header className=' header'>
    <h1>Task Tracker {title}</h1>
    {location.pathname === '/' && (<Button color={showAdd ? "red" : "green"} text={showAdd ? "Close": "Add"} onClick={onAdd} />)}  
  </header>
    


  )
}

// Header.defaultProps = {
//     title : " My React Js" , // just in case we dont pass props

// }

Header.propTypes = {
    title : PropTypes.string.isRequired,
}

export default Header