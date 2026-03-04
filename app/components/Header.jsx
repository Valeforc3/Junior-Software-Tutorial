export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <h1>Your Site Title</h1>
                <nav>
                    <ul>
                        <li><a href="./app/index.jsx">Home</a></li>
                        <li><a href="./about/index.jsx">About</a></li>
                        <li><a href="./contact/index.jsx">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}