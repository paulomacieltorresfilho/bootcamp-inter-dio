export const getQuote = async () => {
    const data = await fetch(process.env.REACT_APP_API)
        .then(response => response.json())
        .catch(err => {
            console.log('ops deu erro', err.message);
        });
    return data;
}