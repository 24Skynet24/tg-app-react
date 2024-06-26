import "./header.scss"
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
    const {user} = useTelegram()

    return (
        <header>
            <span>Your name:</span>
            <strong>{ user?.username }</strong>
        </header>
    );
};

export default Header;