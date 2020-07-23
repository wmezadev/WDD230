const requestURL = 'https://heidipond23.github.io/scoots/data/rent.json';




fetch(requestURL)
    .then(function (response) {
        return response.json();

    })
    .then(function (jsonObject) {
      
        const rentals = jsonObject['rentals'];
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let th = document.createElement('th');
        let tr = document.createElement('tr');
        let tr2 = document.createElement('tr');
        let reservation = document.createElement('th');
        let walkin = document.createElement('th');
        let rentaltype = document.createElement('th');
        let maxpersons = document.createElement('th');
        let halfday = document.createElement('th');
        let fullday = document.createElement('th');
        let halfday2 = document.createElement('th');
        let fullday2 = document.createElement('th');

        
        reservation.textContent = "Reservation";
        walkin.textContent = "Walk-In";
        rentaltype.textContent = "Rental Type";
        maxpersons.textContent = "Max. Persons";
        halfday.textContent = "Half Day (3hrs)";
        fullday.textContent = "Full Day";
        halfday2.textContent = "Half Day (3hrs)";
        fullday2.textContent = "Full Day";

       
        th.setAttribute("colspan", "2");
        reservation.setAttribute("colspan", "2");
        walkin.setAttribute("colspan", "2");


        table.appendChild(thead);
        thead.appendChild(tr);
        tr.appendChild(th);
        tr.appendChild(reservation);
        tr.appendChild(walkin);
        thead.appendChild(tr2);
        tr2.appendChild(rentaltype);
        tr2.appendChild(maxpersons);
        tr2.appendChild(halfday);
        tr2.appendChild(fullday);
        tr2.appendChild(halfday2);
        tr2.appendChild(fullday2);

        


        for (let i = 0; i < rentals.length; i++) {

            let tr = document.createElement('tr');
            let vehicle = document.createElement('td');
            let persons = document.createElement('td');
            let reserveHalf = document.createElement('td');
            let reserveFull = document.createElement('td');
            let walkHalf = document.createElement('td');
            let walkFull = document.createElement('td');



            vehicle.textContent = rentals[i].vehicle;
            persons.textContent = rentals[i].persons;
            reserveHalf.textContent = rentals[i].reserveHalf;
            reserveFull.textContent = rentals[i].reserveFull;
            walkHalf.textContent = rentals[i].walkHalf;
            walkFull.textContent = rentals[i].walkFull;



            table.appendChild(vehicle);
            table.appendChild(persons);
            table.appendChild(reserveHalf);
            table.appendChild(reserveFull);
            table.appendChild(walkHalf);
            table.appendChild(walkFull);
            table.appendChild(tr);

        }

        document.querySelector('div.table').appendChild(table);
    });