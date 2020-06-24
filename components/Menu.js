import PropTypes from 'prop-types'
import Link from 'next/link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link href="/"><a><span onClick={props.onToggleMenu}>Home</span></a></Link></li>
                <li><Link href="/landing"><a><span onClick={props.onToggleMenu}>Projects</span></a></Link></li>
                <li><Link href="/generic"><a><span onClick={props.onToggleMenu}>About</span></a></Link></li>
                {/* <li><Link href="/elements"><a><span onClick={props.onToggleMenu}>Elements</span></a></Link></li> */}
            </ul>
            {/* <ul className="actions vertical">
                <li><a href="#" className="button special fit">Get Started</a></li>
                <li><a href="#" className="button fit">Log In</a></li>
            </ul> */}
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
