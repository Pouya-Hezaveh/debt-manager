export async function postToBackend(dataToSend) {
    console.log("SHIT");

    try {
        const response = await fetch('localhost:3001/api/post', {
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
