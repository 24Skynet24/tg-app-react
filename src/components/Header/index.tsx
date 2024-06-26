import "./header.scss"
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
    const {tg, user} = useTelegram()

    return (
        <header>
            User name: { user?.username }
        </header>
    );
};

export default Header;