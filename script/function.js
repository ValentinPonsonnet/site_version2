export function showTracksInformation()
{
    fetch("http://ergast.com/api/f1/current/last/results.json")
        .then(reponse => {
            return reponse.json();
        })
        .then(data => {
                let modele =`
                <h2>Le dernier gagnant :</h2>
                <p>Année du championnat : ${data.MRData.RaceTable.season}</p>
                <p>Manche du championnat : ${data.MRData.RaceTable.Races[0].round}</p>
                <p>Nom du circuit : ${data.MRData.RaceTable.Races[0].Circuit.circuitName}</p>
                <p>Localisation GPS du circuit :<br>Latitude: ${data.MRData.RaceTable.Races[0].Circuit.Location.lat}<br>Longitude: ${data.MRData.RaceTable.Races[0].Circuit.Location.long}
                <p>Nom et prénom du pilote : ${data.MRData.RaceTable.Races[0].Results[0].Driver.familyName} ${data.MRData.RaceTable.Races[0].Results[0].Driver.givenName}</p>
                <p>Nationnalité du pilote : ${data.MRData.RaceTable.Races[0].Results[0].Driver.nationality}</p> 
                <p>Ecurie du pilote : ${data.MRData.RaceTable.Races[0].Results[0].Constructor.name}</p>
                <p>Numéro permanent du pilote : ${data.MRData.RaceTable.Races[0].Results[0].Driver.permanentNumber}</p>
                <p>Code d'identification du pilote : ${data.MRData.RaceTable.Races[0].Results[0].Driver.code}</p>
                <p>Status de la course : ${data.MRData.RaceTable.Races[0].Results[0].status} </p>`;

                let element = document.querySelector('#last_winner')
                element.innerHTML = modele; 
                return data; 
        })
        .then(data =>{
            const coordLatitude = data.MRData.RaceTable.Races[0].Circuit.Location.lat
            const coordLongitude = data.MRData.RaceTable.Races[0].Circuit.Location.long

            let target = document.querySelector(`#track_view`);
            let modele3=`
            <iframe width="100%" height="650" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=54.60246491405997%2C24.46763112051758%2C54.61250710461173%2C24.47482796838245&amp;layer=mapnik"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=17/${coordLatitude}/${coordLongitude}">Afficher une carte plus grande</a></small>`
            target.innerHTML = modele3;
            return data;
         })
        .then(data =>{
            const api_keys = "1369479ae345426711eac957ac8ccbb4"
            const latitude = data.MRData.RaceTable.Races[0].Circuit.Location.lat
            const longitude = data.MRData.RaceTable.Races[0].Circuit.Location.long
            const city = data.MRData.RaceTable.Races[0].Circuit.Location.locality
            let geo = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_keys}&units=metric&lang=fr`;
        
            fetch(geo)
            .then(response2 => {
                return response2.json();
                    })
                        .then(data2 =>{
                        let u = "http://openweathermap.org/img/wn/"+data2.weather[0].icon+".png"
                        let modèle2 =`
                        <h2>La météo actuel pour : ${city} (${data2.sys.country})</h2>
                        <p>Température : ${data2.main.temp}°C</p>
                        <p>Temps : <img src="${u}">${data2.weather[0].description}</p>
                        <p>Température Min : ${data2.main.temp_min}°C</p>
                        <p>Température Max : ${data2.main.temp_max}°C</p>
                        <p>Humidité : ${data2.main.humidity}%</p>
                        <p>Pression Atmosphèrique : ${data2.main.pressure}hPa</p>
                        <p>Vitesse du vent : ${data2.wind.speed}km/h</p>
                        `
                        let element2 = document.querySelector(`#track_weather`)
                        element2.innerHTML = modèle2
                        })
        })

 
}
    
