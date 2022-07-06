function start() {
    document.getElementById('seconddiv').style.display = "none";
}

function Times() {

    let inp_ut1 = document.getElementById("citynames");
    let inp_ut2 = document.getElementById("countrynames");

    axios.get(`http://api.aladhan.com/v1/timingsByCity?city=${inp_ut1.value}&country=${inp_ut2.value}&method=1`)
        .then(function (response) {
            document.getElementById('fajr').innerHTML = response.data.data.timings.Fajr;
            document.getElementById('sunrise').innerHTML = response.data.data.timings.Sunrise;
            document.getElementById('zuhur').innerHTML = response.data.data.timings.Dhuhr;
            document.getElementById('asr').innerHTML = response.data.data.timings.Asr;
            document.getElementById('sunset').innerHTML = response.data.data.timings.Sunset;
            document.getElementById('maghrib').innerHTML = response.data.data.timings.Maghrib;
            document.getElementById('esha').innerHTML = response.data.data.timings.Isha;
            document.getElementById('hijridate').innerHTML = response.data.data.date.gregorian.date + " " + response.data.data.date.gregorian.designation.abbreviated;
            document.getElementById('gregoriandate').innerHTML = response.data.data.date.hijri.date + " " + response.data.data.date.hijri.designation.abbreviated;
        }
        )
    document.getElementById('citytimes').style.display = 'block';

    inp_ut1.value = "";
    inp_ut2.value = "";
}
function Calendar() {
    document.getElementById('seconddiv').style.display = "block";
    document.getElementById('firstdiv').style.display = "none";
    document.getElementById('table_for_calendar').style.display = "none";

}

function HijriCalendar() {
    document.getElementById('table_for_calendar').style.display = "block";

    let inp_ut1 = document.getElementById("citynames_forcalendar");
    let inp_ut2 = document.getElementById("countrynames_forcalendar");
    let inp_ut3 = document.getElementById("monthsnames");
    let inp_ut4 = document.getElementById("yearnames");

    axios.get(`http://api.aladhan.com/v1/hijriCalendarByCity?city=${inp_ut1.value}&country=${inp_ut2.value}&method=1&month=${inp_ut3.value}&year=${inp_ut4.value}`)
        .then(function (response) {
            console.log(response.data);
            for (let i = 0; i < response.data.data.length; i++) {
                response.data.data[i].date.gregorian.date;
                response.data.data[i].date.gregorian.weekday.en;
                response.data.data[i].date.hijri.date;
                response.data.data[i].timings.Fajr;
                response.data.data[i].timings.Asr;
                response.data.data[i].timings.Dhuhr;
                response.data.data[i].timings.Isha;
                response.data.data[i].timings.Maghrib;
                response.data.data[i].timings.Midnight;
                response.data.data[i].timings.Sunrise;
                response.data.data[i].timings.Sunset;

                document.getElementById('table_for_calendar').innerHTML += `<tr>

                <td>${i + 1}</td>
                <td>${response.data.data[i].date.hijri.date}</td>
                <td>${response.data.data[i].date.gregorian.date}</td>
                <td>${response.data.data[i].date.gregorian.weekday.en}</td>
                <td>${response.data.data[i].timings.Fajr}</td>
                <td>${response.data.data[i].timings.Sunrise}</td>
                <td>${response.data.data[i].timings.Dhuhr}</td>
                <td>${response.data.data[i].timings.Asr}</td>
                <td>${response.data.data[i].timings.Sunset}</td>
                <td>${response.data.data[i].timings.Maghrib}</td>
                <td>${response.data.data[i].timings.Isha}</td>
                <td>${response.data.data[i].timings.Midnight}</td>
                </tr>`;
            }
            document.getElementById('hijrimonth').innerHTML = "Hijri Month :" + " " + response.data.data[0].date.hijri.month.en;
            document.getElementById('georgmonth').innerHTML = "Gregorian Month :" + " " + response.data.data[0].date.gregorian.month.en;
            document.getElementById('heading').innerHTML = ` <th>S.No</th>
            <th>Hijri Date</th>
            <th>Gregorian Date</th>
            <th>Day</th>
            <th>Fajr</th>
            <th>Sunrise</th>
            <th>Zuhur</th>
            <th>Asr</th>
            <th>Sunset</th>
            <th>Maghrib</th>
            <th>Isha</th>
            <th>Tahajjud</th>`;

        }
        )
    document.getElementById('form').style.display = "none";
    document.getElementById('firstbtn').style.display = 'block';

}
// function asma_ul_husna() {
//     axios.get(`http://api.aladhan.com/asmaAlHusna/`)
//         .then(function (response) {
//             console.log(response.data);
//             let k = 0;
//             for (let i = 0; i < 11; i++) {
//                 for (let j = 0; j < 9; j++) {
//                     k++;
//                     document.getElementById('showasma').innerHTML += response.data.data[k].name;

//                 }
//                 document.getElementById('showasma').innerHTML += "<br>";
//             }
//         }
//         )
// }
