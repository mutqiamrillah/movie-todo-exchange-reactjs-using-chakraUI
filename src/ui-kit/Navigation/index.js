import { Link } from 'react-router-dom'
import { Input } from "@chakra-ui/react"
import './style.css';

const Navigation = () => {
  return (
    <div className="container">
      <h1 className="mh-logo">
        FinProH8
      </h1>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li style={{float: 'right'}}>
            <Input placeholder="Search..." />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
