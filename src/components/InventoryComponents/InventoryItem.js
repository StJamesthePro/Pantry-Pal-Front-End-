import '../css/InventoryItem.css';
import { useState } from "react";

let InventoryItem = (props) => {

    const [itemData, setItemData] = useState(props.itemData);

    let imageURL = itemData.image.length > 20 ? itemData.image : `https://spoonacular.com/cdn/ingredients_100x100/${itemData.image}`;

    return (
        <article className="box2">
            <header>
                <span className='YellowTag'>
                    {props.item}
                </span>
            </header>
            <div>
                <div>
                    <img className='image2' src={`${imageURL}`} alt="" />
                </div>
                <div>

                </div>

            </div>
        </article>
    )
}

export default InventoryItem;
