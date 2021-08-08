let h1 = document.createElement('h1');
        h1.innerHTML = "WEATHER REPORT";
        h1.style.color = "pink";
        h1.style.backgroundColor = "purple";
        h1.setAttribute("class","center");
        let h = document.createElement('h4');
        h.innerHTML = "Enter your place WOEID (Where On Earth IDentifier):"
        document.body.append(h1, h);
        let f = document.createElement("FORM");
        var x = document.createElement("INPUT");
        x.setAttribute("type", "text");
        x.setAttribute("id", "name");
        // x.setAttribute("value","alli")
        let y = document.createElement("button");
        y.innerHTML = "click me"
        y.setAttribute("id", "but_y")
        f.append(x, y);
        document.body.append(f);
        let p = document.createElement('p');
        p.setAttribute("id", "demo");
        //p.innerHTML="welcome";
        document.body.append(p);
        y.addEventListener("click", valuetext);


        function valuetext(e) {
           e.preventDefault();
            var name1 = document.getElementById("name").value;
            fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${name1}`)
           .then (function(resp) {
               return resp.json();
           })
           .then(function(data){
               foo(data);
           })
           .catch(function(error){
               console.log(error);
           })

            // var demo1 = document.getElementById("demo");
            // demo1.innerHTML = name1;

            // console.log(name1);
            // alert(document.getElementById("name").value);

            // getjson(name1);
           }


           //fetch(`https://api-thirukkural.vercel.app/api?num=${i}`)
           

        // async function getjson(name) {
        //     try {

        //         let resp = await fetch(`“https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${name}`);
        //         let data = await resp.json();
        //         foo(data);
        //         console.log(data);
        //     }
        //     catch (error) {
        //         console.log(error);

        //     }
        // }

        // foo2();
        //foo2();



        // const  apiurl="https://api.nationalize.io/?name=";
        // async function getData(name) {

        //         let resp =await fetch(apiurl+name);
        //         let data =await resp.json();
        //        foo1(data);
        //         console.log(data);
        //         }




        //     let button1= document.getElementById("but_y");
        // button1.addEventListener("click",valuetext);



        //document.getElementById("demo").innerHTML="welcome"
        //p.innerHTML="h1";
        // p.innerHTML=document.getElementById("name").value;

        // alert(document.getElementById("name").value);






        function foo(data) {

            let container = document.createElement("div");
            container.setAttribute("class", "container");
            let row = document.createElement("div");
            row.setAttribute("class", "row");
            console.log(data);
            
            //    let cardTilte = document.createElement("h2");
            //     cardTilte.setAttribute("class", "h2");
            //     cardTilte.innerHTML = "Name :" + data.name;


            data.consolidated_weather.forEach((element) => {
                let col = document.createElement("div"); 
                col.setAttribute("class", "col-4 mb-3");

                let card = document.createElement("div");
                card.setAttribute("class", "card h-100");

                // let cardImg = document.createElement("img");
                // cardImg.setAttribute("class","card-img-top");
                // cardImg.setAttribute("src","https://www.metaweather.com/static/img/weather/png/64/s.png");

                let cardBody = document.createElement("div");
                cardBody.setAttribute("class", "card-body");

                let cardTilte1 = document.createElement("h6");
                cardTilte1.setAttribute("class", "h6");
                cardTilte1.innerHTML = "id :" + element.id;

                let cardTilte2 = document.createElement("h6");
                cardTilte2.setAttribute("class", "h6");
                cardTilte2.innerHTML = "weather Status :" + element.weather_state_name;

                let cardTilte3 = document.createElement("h6");
                cardTilte3.setAttribute("class", "h6");
                cardTilte3.innerHTML = "Date :" + element.applicable_date;
                
                let cardTilte4 = document.createElement("h6");
                cardTilte4.setAttribute("class", "h6");
                cardTilte4.innerHTML = "Max-Temp:" + element.max_temp;

                let cardTilte5 = document.createElement("h6");
                cardTilte5.setAttribute("class", "h6");
                cardTilte5.innerHTML = "Min-Temp :" + element.min_temp;

                let cardTilte6 = document.createElement("h6");
                cardTilte6.setAttribute("class", "h6");
                cardTilte6.innerHTML = "Present Temp :" + element.the_temp;

                let cardTilte7 = document.createElement("h6");
                cardTilte7.setAttribute("class", "h6");
                cardTilte7.innerHTML = "Air Pressure :" + element.air_pressure;

                let cardtext = document.createElement('p');
                cardtext.setAttribute("class", "card-text");
                cardtext.innerHTML = "Have a wonderful day to you";

                cardBody.append(cardTilte1,cardTilte2,cardTilte3,cardTilte4,cardTilte5,cardTilte6,cardTilte7,cardtext);

                card.append(cardBody);
                col.append(card);
                row.append(col);
            });

            container.append(row);
            document.body.append(container);
        }
