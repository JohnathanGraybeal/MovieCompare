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
let timeoutId;
const onInput = event => {
    if(timeoutId){
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() =>{
        fetchData(event.target.value);
    }, 500)
    
};

input.addEventListener('input', onInput);