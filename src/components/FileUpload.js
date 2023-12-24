import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState('');
    const [email, setEmail] = useState('');
    const [result, setResult] = useState(''); // State to store the response

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleCheck = async () => {
        if (!file) {
            alert('Please select a file first!');
            return;
        }

        if (!url) {
            alert('Please enter a URL!');
            return;
        }

        if (!email) {
            alert('Please enter a email!');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('url', url);
        formData.append('email', email);

        try {
            const response = await axios.post('http://localhost:8080/check', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setResult(response.data); // Update the result state with the response
        } catch (error) {
            console.error('Error:', error);
            setResult(`Error: ${error.message}`); // Display error message in the result div
        }
    };

    return (
        <div>
            <input type="file" accept=".pdf" onChange={handleFileChange} />
            <input
                type="text"
                placeholder="Enter URL"
                value={url}
                onChange={handleUrlChange}
            />
            <input
                 type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
            />
            <button onClick={handleCheck}>Check</button>

            <div id="result">
                <p>Result:</p>
                <div>{result}</div> {/* Display the result here */}
            </div>
        </div>
    );
}

export default FileUpload;
