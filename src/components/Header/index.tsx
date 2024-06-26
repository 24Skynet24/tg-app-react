import "./header.scss"
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
    const {user} = useTelegram()

    return (
        <header>
            User name: { user?.username }
        </header>
    );
};

export default Header;