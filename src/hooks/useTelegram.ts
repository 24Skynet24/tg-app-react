// @ts-ignore
const tg = window.Telegram.WebApp

export function useTelegram() {
    const onToggleButton = () => {
        tg?.MainButton.isVisible ? tg?.MainButton.hide() : tg?.MainButton.show()
    }

    return {
        tg,
        onToggleButton,
        user: tg.initDataUnsafe?.user
    }
}