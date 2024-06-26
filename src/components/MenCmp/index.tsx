// @ts-ignore
import menImg from "../../assets/img/men.webp"
// @ts-ignore
import heartImg from "../../assets/img/heart.svg"
// @ts-ignore
import manaImg from "../../assets/img/mana.svg"
import "./men.scss"


const MenCmp = () => {
    return (
        <article className="men_cmp">
            <img src={menImg} alt="Men" className="men_img"/>

            <article className="stats">
                <div className="stats_item">
                    <img src={heartImg} alt="HP"/>
                    <div className="line health">
                        <span/>
                    </div>
                </div>

                <div className="stats_item">
                    <img src={manaImg} alt="MP"/>
                    <div className="line mana">
                        <span/>
                    </div>
                </div>
            </article>
        </article>
    );
};

export default MenCmp;