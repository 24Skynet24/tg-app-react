// @ts-ignore
import menImg from "../../assets/img/men.webp"
// @ts-ignore
import heartImg from "../../assets/img/heart.svg"
// @ts-ignore
import manaImg from "../../assets/img/mana.svg"
import "./men.scss"


const MenCmp = () => {
    const handleClick = (e: any): void => {
        e.target.className = 'men_img men_hover'
        setTimeout(() => {
            e.target.className = 'men_img'
        }, 100)
    }

    return (
        <article className="men_cmp">
            <img src={menImg} alt="Men" className="men_img" onClick={handleClick}/>

            <article className="stats">
                <div className="stats_item">
                    <img src={heartImg} alt="HP"/>
                    <div className="line health">
                        <span/>
                    </div>
                    <span>
                        100 / 100
                    </span>
                </div>

                <div className="stats_item">
                    <img src={manaImg} alt="MP"/>
                    <div className="line mana">
                        <span/>
                    </div>
                    <span>
                        100 / 100
                    </span>
                </div>
            </article>
        </article>
    );
};

export default MenCmp;