import React,{useState} from 'react'
import { useLocation,useNavigate,Link } from "react-router-dom";

const Nav = () => {
    const [isLoggedIn,setisLoggedIn] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = ()=>{
        setisLoggedIn(true);
        navigate('/user');
    }

    const handleLogout = ()=>{
        setisLoggedIn(false);
        navigate('/homepage');
    }

  return (
    <div>
      <ul>
        <li>
            <Link to='/'>Home</Link>
        </li>

        {(isLoggedIn && (
            <>
             <li>
            <Link to='/user'>User</Link>
             </li>
             <li>
                <button onClick={handleLogout}>Logout</button>
             </li>
            </>
        ))}
        
           {(!isLoggedIn && (
            <>
             <li>
            <Link to='/about'>About</Link>
             </li>
             <li>
            <Link to='/contact'>Contact</Link>
             </li>
             <li>
                <button onClick={handleLogin}>Login</button>
             </li>
            </>
        ))}

      </ul>
    </div>
  )
}

export default Nav
