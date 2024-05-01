import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [meaning, setMeaning] = useState("")
    const [word, setWord] = useState("")
    const [isFound, setIsFound] = useState(true)
    const dictionary =
        [
            {word: "React", meaning: "A JavaScript library for building user interfaces."},
            {word: "Component", meaning: "A reusable building block in React."},
            {word: "State", meaning: "An object that stores data for a component."}
        ]

    const search = () => {
        const meaning = dictionary.filter((item) => item.word.toLowerCase() === word.toLowerCase()).map((item) => item.meaning)
        if (meaning.length === 0) {
            setIsFound(false);
        } else {
            setIsFound(true);
        }
        setMeaning(meaning);
    }
    return (
        <div className="App">
            <h1>Dictionary App</h1>
            <input type="text" name="search" placeholder="Search for a word..."
                   onChange={(e) => setWord(e.target.value)}/>
            <button onClick={search}>Search</button>
            <h4>Definition:</h4>
            {isFound && (
                <div>{meaning}</div>
            )}
            {!isFound && (
                <div>Word not found in the dictionary.</div>
            )
            }

        </div>
    );
}

export default App;
