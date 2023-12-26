const sendDataToBackend = async () => {
    const dataToSend = {
        name: 'John Doe',
        email: 'johndoe@example.com'
        // Other data fields...
    };

    try {
        const response = await fetch('http://your-backend-api.com/data-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        });

        const responseData = await response.json();
        console.log('Response from backend:', responseData);
        // Handle the response data as needed
    } catch (error) {
        console.error('Error sending data to backend:', error);
        // Handle errors
    }
};
