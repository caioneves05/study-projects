import { Link, useMatch, useResolvedPath } from "react-router-dom"

/* eslint-disable react/prop-types */
export const Navbar = () => {
    return(
        <nav className="nav">
            <Link to="/">Front Beginners</Link>
            <ul>
                <CustomLink to={'/about'}>Sobre</CustomLink>
                <CustomLink to={'/profile'}>Profile</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvePath.pathname, end: true })
    return(
        <li className={isActive === to ? 'active' : ''}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}