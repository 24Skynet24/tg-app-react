import "./header.scss"
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
    const {tg, user} = useTelegram()

    return (
        <header>
            User name: { user?.username }
            MainButton: { tg?.MainButton.isVisible }
        </header>
    );
};

export default Header;