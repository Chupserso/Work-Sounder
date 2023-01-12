import img from "../../resources/img/project-logo.png";

const AppHeader = () => {
    return (
        <header className="header">
            <div className="header__logo"><img src={img} alt="Logotype" /></div>
            <div className="header__title"><h1>WorkSounder</h1></div>
        </header>
    );
}

export default AppHeader;