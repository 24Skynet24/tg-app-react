// @ts-ignore
import menImg from "../../assets/img/men.webp"
// @ts-ignore
import heartImg from "../../assets/img/heart.svg"
// @ts-ignore
import manaImg from "../../assets/img/mana.svg"
import "./men.scss"
import {useState} from "react";


const MenCmp = () => {
    const [mana, setMana] = useState(0)
    const [hp, setHp] = useState(0)

    const handleClick = (e: any): void => {
        e.target.className = 'men_img men_hover'
        setTimeout(() => {
            if (mana === 99) {
                setHp(hp + 1)
                setMana(0)
            }
            else setMana(mana + 1)
            e.target.className = 'men_img'
        }, 100)
    }

    return (
        <article className="men_cmp">
            <img src={menImg} alt="Men" className="men_img" onClick={handleClick}/>

            <article className="stats">
                <div className="stats_item">
                    <img src={manaImg} alt="MP"/>
                    <div className="line mana">
                        <span style={{width: mana + "%"}}/>
                    </div>
                    <span>
                        {mana} / 100
                    </span>
                </div>

                <div className="stats_item">
                    <img src={heartImg} alt="HP"/>
                    <div className="line health">
                        <span style={{width: hp + "%"}}/>
                    </div>
                    <span>
                        {hp} / 100
                    </span>
                </div>
            </article>
        </article>
    );
};

export default MenCmp;