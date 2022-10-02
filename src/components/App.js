// create your App component here
import React, { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(r => r.json())
            .then(data => setMessage(data.message))
    }, [])

    if (!message) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <p>Here's a lovely fox for you:</p>
            <img src={message} alt="Random Fox" />
        </div>
    );
}

export default App;