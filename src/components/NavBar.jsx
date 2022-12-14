import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="bg-sky-400">
        <nav>
          <Link to='/'>
            Home 
          </Link>
          &nbsp;
          <Link to='/forum'>
            Forum
          </Link>
          &nbsp;
          <Link to='/planner'>
            Planner
          </Link>
          &nbsp;
          <Link to='/tracker'>
            Calendar
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
