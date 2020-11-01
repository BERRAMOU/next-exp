function MenuComponent() {
    return (
        <nav>
        <ul className="menuItems">
            <li><a href='/' data-item='Home'>Home</a></li>
            <li><a href='/about' data-item='About'>About</a></li>
            <li><a href='/projects' data-item='Projects'>Projects</a></li>
            <li><a href='/blog?page=0' data-item='Blog'>Blog</a></li>
            <li><a href='/contact' data-item='Contact'>Contact</a></li>
        </ul>
    </nav>
    )
}

export default MenuComponent;