//fetch data from corona api, await the result, access latest deaths where location is australia and return this number
async function gettt2() {
    const result = await fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations');
    const data = await result.json();
    const today = data.locations[8].latest.deaths;
    return today
};
    
//refresh the data every 6 seconds by calling the refresh function every 6 seconds geting the data from the gettt2 function then logging the data so user can see that it is refreshing then replacing the old death count with the new one    
window.setInterval("refresh2()", 6000);
async function refresh2() {
    const dta = await gettt2();
    console.log(dta)
    document.getElementById("test2").innerHTML =  dta + ' people';
};