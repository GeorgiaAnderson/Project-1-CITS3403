//fetch data from corona api, await the result, access latest deaths where location is australia and return this number
async function gettt() {
    const result = await fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations');
    const data = await result.json();
    const countDeath = data.latest.deaths;
    return countDeath;
};


    
//refresh the data every 6 seconds by calling the refresh function every 6 seconds geting the data from the gettt2 function then logging the data so user can see that it is refreshing then replacing the old death count with the new one 
window.setInterval("refreshDiv()", 5000);
async function refreshDiv() {
    const dtaa = await gettt();
    console.log(dtaa)
    document.getElementById("test").innerHTML =  dtaa + ' people';
};

