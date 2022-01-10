export function showLastWinner()
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
                <p>Localisation GPS du circuit : ${data.MRData.RaceTable.Races[0].Circuit.Location.lat}, ${data.MRData.RaceTable.Races[0].Circuit.Location.long}
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
            const api_keys = "c836698c33672d5da0b0489e218826f6"
            const latitude = data.MRData.RaceTable.Races[0].Circuit.Location.lat
            const longitude = data.MRData.RaceTable.Races[0].Circuit.Location.long
            let geo = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_keys}&units=metric&lang=fr`;
        
            fetch(geo)
            .then(response2 => {
                return response2.json();
                    })
                        .then(data2 =>{
                        let u = "http://openweathermap.org/img/wn/"+data2.weather[0].icon+".png"
                        let modèle2 =`
                        <h2>La météo actuel au dessus du circuit :</h2>
                        <p>Température : ${data2.main.temp}°C</p>
                        <p><img src="${u}"</p>
                        `
                        let element2 = document.querySelector(`#track_weather`)
                        element2.innerHTML = modèle2
                        })
        })
                            
}
    
