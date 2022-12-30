import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='container-fluid'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <Link to='/'>
              Our Mission 
            </Link>
          &nbsp;
            <Link to='/forum'>
              Forums
            </Link>
          &nbsp;
            <Link to='/planner'>
              Planner
            </Link>
          &nbsp;
            <Link to='/timer'>
              Timer
            </Link>
          &nbsp;
            <Link to='/resources'>
              Resources
            </Link>
          {/* <Link to='/About'>
            About
          </Link> */}
    </nav>
        </div>
 
  )
}
