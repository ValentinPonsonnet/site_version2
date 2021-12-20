fetch("http://ergast.com/api/f1/current/last/results.json")
    .then((reponse) => {
        return reponse.json();
    })
    .then((data) => {
       
        function show_last_winner()
        {
            let modele =`
            <h2>Le dernier gagnant :</h2>
            <p> Année du championnat : ${data.MRData.RaceTable.season} </p>
            <p>Nom du circuit : ${data.MRData.RaceTable.Races[0].Circuit.circuitName}</p>
            <p>Nom et prénom du pilote : ${data.MRData.RaceTable.Races[0].Results[0].Driver.givenName} ${data.MRData.RaceTable.Races[0].Results[0].Driver.familyName}</p>
            <p>Nationnalité du pilote : ${data.MRData.RaceTable.Races[0].Results[0].Driver.nationality}</p> 
            <p>Ecurie du pilote : ${data.MRData.RaceTable.Races[0].Results[0].Constructor.name}</p>
            <p>Numéro du pilote : ${data.MRData.RaceTable.Races[0].Results[0].Driver.permanentNumber}</p>
            <p>Code d'identification : ${data.MRData.RaceTable.Races[0].Results[0].Driver.code}</p>
            <p>Status de la course : ${data.MRData.RaceTable.Races[0].Results[0].status} </p>`;

            let element = document.querySelector('#last_winner')
            element.innerHTML = modele;  
        };
        show_last_winner()
    })

    