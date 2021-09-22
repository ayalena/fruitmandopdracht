import React from 'react';
import './App.css';
import Fruit from "./components/Fruit";
import {useState} from "react";


function App() {
    const [clicked, toggleClicked] = React.useState(false);
    const [checkedTerms, toggleCheckedTerms] = React.useState(false);

    const [firstNameValue, setFirstNameValue] = React.useState('');
    const [lastNameValue, setLastNameValue] = React.useState('');
    const [ageValue, setAgeValue] = React.useState('');
    const [postalCode, setPostalCode] = React.useState('');
    const [messageValue, setMessageValue] = React.useState('');
    const [deliveryFrequency, setDeliveryFrequency] = React.useState('weekly');
    const [timeOfDay, setTimeOfDay] = React.useState('');

    const [strawberryCount, setStrawberryCount] = useState(0);
    const [bananaCount, setBananaCount] = useState(0);
    const [appleCount, setAppleCount] = useState(0);
    const [lemonCount, setLemonCount] = useState(0);

    function handleClick() {
        toggleClicked(!clicked);
    }

    function handleReset() {
        setStrawberryCount(0);
        setBananaCount(0);
        setAppleCount(0);
        setLemonCount(0);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstNameValue, lastNameValue, ageValue, postalCode, deliveryFrequency, timeOfDay, messageValue, checkedTerms, strawberryCount, bananaCount, appleCount, lemonCount);
        toggleClicked(!clicked);
    }

    return (
        <>
            <fieldset>
                <h1>Fruitmand bezorgservice</h1>
                <h2>Je mag toch niet naar buiten :)</h2>
            </fieldset>

            <main>
                <Fruit
                    name="🍓 Aardbeien"
                    fruitCount={strawberryCount}
                    setFruitCount={setStrawberryCount}
                />
                <Fruit
                    name="🍌 Bananen"
                    fruitCount={bananaCount}
                    setFruitCount={setBananaCount}
                />
                <Fruit
                    name="🍎 Appels"
                    fruitCount={appleCount}
                    setFruitCount={setAppleCount}
                />
                <Fruit
                    name="🥝 Kiwi's"
                    fruitCount={lemonCount}
                    setFruitCount={setLemonCount}
                />

                <button
                    type="button"
                    onClick={handleReset}
                >
                    Reset
                </button>
            </main>

            <footer>
                <div className="form-container">
                    <h2>Gegevens</h2>
                    <form onSubmit={handleSubmit}>
                        <fieldset>

                            <div>
                                <label htmlFor="first-name"> Voornaam </label>
                                <input
                                    type="text"
                                    placeholder=""
                                    name="first-name"
                                    className={firstNameValue.length > 20 ? 'input-error' : 'input-normal'}
                                    value={firstNameValue}
                                    onChange={(e) => setFirstNameValue(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="last-name"> Achternaam </label>
                                <input
                                    type="text"
                                    placeholder=""
                                    name="last-name"
                                    className={lastNameValue.length > 20 ? 'input-error' : 'input-normal'}
                                    value={lastNameValue}
                                    onChange={(e) => setLastNameValue(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="age"> Leeftijd </label>
                                <input
                                    type="number"
                                    placeholder="0"
                                    name="age"
                                    className={ageValue.length > 20 ? 'input-error' : 'input-normal'}
                                    value={ageValue}
                                    onChange={(e) => setAgeValue(e.target.value)}
                                />
                                {ageValue.length > 3 && <p className="error-message">Geef een geldige leeftijd op</p>}
                            </div>

                            <div>
                                <label htmlFor="postal-code"> Postcode </label>
                                <input
                                    type="text"
                                    placeholder=""
                                    name="name"
                                    className={postalCode.length > 6 ? 'input-error' : 'input-normal'}
                                    value={postalCode}
                                    onChange={(e) => setPostalCode(e.target.value)}
                                />
                                {postalCode.length > 7 && <p className="error-message">Geef een geldige postcode op</p>}
                            </div>

                            <div id="delivery">
                                <label htmlFor="delivery-frequency"> Bezorgfrequentie </label>
                                <select
                                    name="delivery-frequency"
                                    id="delivery-frequency"
                                    className={deliveryFrequency}
                                    value={deliveryFrequency}
                                    onChange={(e) => setDeliveryFrequency(e.target.value)}
                                >
                                    <option value="weekly"> Iedere week</option>
                                    <option value="two-weekly"> Om de week</option>
                                    <option value="monthly">Iedere maand</option>
                                </select>
                            </div>

                            <div
                                onChange={(e) => setTimeOfDay(e.target.value)}
                            >
                                <input
                                    type="radio"
                                    id="daytime"
                                    name="delivery-moment"
                                    value="daytime"
                                />
                                <label htmlFor="daytime"> Overdag </label>
                                <input
                                    type="radio"
                                    id="nighttime"
                                    name="delivery-moment"
                                    value="nighttime"
                                />
                                <label htmlFor="nighttime"> 's Avonds </label>
                            </div>

                            <div>
                                <label htmlFor="message"> Opmerkingen </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="10"
                                    className={messageValue.length > 20 ? 'input-error' : 'input-normal'}
                                    value={messageValue}
                                    onChange={(e) => setMessageValue(e.target.value)}>
                        </textarea>
                            </div>

                            <div>
                                <input
                                    type="checkbox"
                                    name="terms-and-conditions"
                                    id="terms-and-conditions"
                                    checked={checkedTerms}
                                    onChange={() => toggleCheckedTerms(!checkedTerms)}
                                />
                                Ik ga akkoord met de voorwaarden
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={clicked}
                                >
                                    Verstuur
                                </button>
                            </div>

                        </fieldset>
                    </form>
                </div>
            </footer>
        </>
    );
}

export default App;
