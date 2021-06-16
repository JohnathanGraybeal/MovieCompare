const fetchData = async (searchTerm) =>{
    const response = await axios.get("http://www.omdbapi.com/",{
        params: {
            apikey: '65d9cda5', //1000 a day limit and free don't need to hide 
            s: searchTerm
        }
    });
    console.log(response.data);
};

const input = document.querySelector('input');

const onInput = event => (event => {
   
        fetchData(event.target.value);
});

input.addEventListener('input', debounce(onInput, 500));