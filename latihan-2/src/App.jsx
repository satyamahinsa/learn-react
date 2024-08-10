import { useState } from 'react'
import Header from './components/Header';


function App() {
    const students = ["Satya", "Dea", "Amel"];
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return(
        <>
            <Header name="Gede Satyamahinsa" />
            <ul>
                {
                    students.map((student) => (
                        <li key={student}>{student}</li>
                    ))
                }
            </ul>
            <button onClick={handleClick}>Like ({ likes })</button>
        </>
    );
}

export default App
