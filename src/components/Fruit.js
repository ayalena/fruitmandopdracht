import React, { } from "react";
// import 'Fruit.css';

function Fruit({ name, fruitCount, setFruitCount }) {
    // const [fruitCount, setFruitCount] = React.useState(0);

    function addOne() {
        setFruitCount(fruitCount + 1)
    }

    function subtractOne() {
        if (fruitCount === 0) {
            setFruitCount(0)
        } else {
            setFruitCount(fruitCount - 1)
        }
    }

    return (
        <>
            <div className="fruit">
                <fieldset>
                    {name}
                    <button
                        type="button"
                        className="subtract-button"
                        onClick={subtractOne}
                    >
                        -
                    </button>
                    {fruitCount}
                    <button
                        type="button"
                        onClick={addOne}
                        className="add-button"
                    >
                        +
                    </button>
                </fieldset>
            </div>
        </>
    )
}

export default Fruit;

