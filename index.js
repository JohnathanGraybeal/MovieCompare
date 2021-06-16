const fetchData = async () =>{
    const response = await axios.get("http://www.omdbapi.com/",{
        params: {
            apikey: '65d9cda5',
            s: ''
        }
    });
};

fetchData();