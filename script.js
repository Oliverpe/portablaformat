"use strict"
/**
 * @param {string} query
 * @param {HTMLElement}
 */




function searchWeather(query) {
    const apikey = '895516bde4d1a80e8c585b40ce1c8c8b';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(query)}&appid=${apikey}&units=metric&lang=sv`;

    document.querySelector('#weather_card').innerHTML = '';

    window.fetch(apiUrl).then(function(response) {
    
        if(!response.ok) {
            
            throw new Error(`Kunde ej hitta staden ${query} du vill kolla vädret efter ${response.status}`);
    
        }
        return response.json();
    
    }).then(function(data){
        console.log(data);


        let weather_card = document.getElementById('weather_card');
        weather_card.classList.add('card');

        let weather_cardbody = document.createElement('div');
        weather_cardbody.classList.add('weather_cardbody', 'text-center');
        weather_card.appendChild(weather_cardbody);        

        let weather_titel = document.createElement('h1');
        weather_titel.classList.add('weather_title', 'mb-3');
        weather_titel.textContent = `${data.name}, ${data.sys.country}`;
        weather_cardbody.appendChild(weather_titel);

        let weather_icon = document.createElement('img');
        weather_icon.classList.add('weather_icon', 'mb-3');
        weather_icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weather_cardbody.appendChild(weather_icon);

        let row1 = document.createElement('div');
        row1.classList.add('row');
        weather_cardbody.appendChild(row1);

        let col = document.createElement('div');
        col.classList.add('col-md-6');
        



        let weather_temp = document.createElement('h2');
        weather_temp.classList.add('weather_temp');
        weather_temp.textContent = `${data.main.temp}°C `;
        //weather_cardbody.appendChild(weather_temp);

        let weather_tempfl = document.createElement('p');
        weather_tempfl.classList.add('weather_tempfl');
        weather_tempfl.textContent = `känns som ${data.main.feels_like}°C`
        weather_cardbody.appendChild(weather_tempfl);

        let weather_desc = document.createElement('p');
        weather_desc.classList.add('weather_desc');
        weather_desc.textContent = `${data.weather[0].description}`;
        //weather_cardbody.appendChild(weather_desc);
        
        

        //container.appendChild(weather_card);

        row1.appendChild(col);
        col.append(weather_temp, weather_desc,);
    })

}



window.addEventListener("load", function() {
       
    /**
     * //hämtar contianer elementet
     *  let container = document.getElementById('container');
        if(!container) {
            console.error("hittar inte container element");
            return;
        }
        
        console.log("container hittad");
        
        //skapar formulär
        let container_form = document.createElement('form');
        container_form.id="sokfaltform";
    
        //skapar sökfältet
        let sokfalt = document.createElement('input');
        sokfalt.id="sokfalt";
        sokfalt.setAttribute("placeholder", "vad blir det för väder?");
        sokfalt.addEventListener("input", function() {
        console.log("användaren skriver i sökfältet");
        });
    
        //skapar kmapp
        let sokKnapp = document.createElement("button");
        sokKnapp.id = "sokKnapp";
        sokKnapp.textContent = "Sök";

   
    
        //lägger till sökfältet och knappen till formuläret
        container_form.appendChild(sokfalt);
        container_form.appendChild(sokKnapp);

        //Lägger till formuläret i container-elementet.
        container.appendChild(container_form);

     */
    
       

        

        document.querySelector('#sokfaltform').addEventListener('submit', function(event) {
            event.preventDefault();

            const query = sokfalt.value.trim();
            if(!query) {
                
                throw new Error('var vänligen fyll i namnet på en stad du vill undersöka vädret');
        
            } else {
                searchWeather(query);

                document.getElementById('sokfalt').value = '';
                
            }
        });
    
    
    
    
    
    });

//sokForm.appendChild(sokfalt);

/*const sokKnapp = this.document.createElement('button');
sokKnapp.setAttribute('textcontent', "Sök");
console.log(sokKnapp);

sokForm.append(sokfalt, sokKnapp);
});*/
