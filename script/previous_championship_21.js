fetch("http://ergast.com/api/f1/2021.json")
    .then(reponse => reponse.json())
    .then(data => {
       
        function previous_championship()
        {
            console.log(data);
            for (i=0;i<data.MRData.RaceTable.Races.length;i++)
            {
                console.log(data.MRData.RaceTable.Races[i]);
                let modele =
                `
                <h2>Saison : ${data.MRData.RaceTable.Races[i].Circuit.circuitName}</h2>
                `;
                let element = document.querySelector('#previous_championship_21')
                element.innerHTML = modele; 
            }
        }
        previous_championship()
    })

