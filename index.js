function prayer_times() {
    document.getElementById('seconddiv').classList.add("out");
    document.getElementById('audio_ayah').classList.add("out");
    document.getElementById('audio-surah').classList.add("out");
    document.getElementById('citytimes').classList.add("out");
    document.getElementById('thirddiv').classList.add("out");
    document.getElementById('main_for_surah').classList.add("out");
    document.getElementById('audio-ayah').classList.add("out");


    document.getElementById('firstdiv').classList.remove("out");


}
function Calendar() {
    document.getElementById('firstdiv').classList.add("out");
    document.getElementById('audio_ayah').classList.add("out");
    document.getElementById('audio-surah').classList.add("out");
    document.getElementById('citytimes').classList.add("out");
    document.getElementById('thirddiv').classList.add("out");
    document.getElementById('main_for_surah').classList.add("out");
    document.getElementById('audio-ayah').classList.add("out");

    document.getElementById('seconddiv').classList.remove("out");
    // seconddiv.classList.add("out");
    // audio_ayah.classList.add("out");
    // audiosurah.classList.add("out");
    // citytimes.classList.add("out");
    // thirddiv.classList.add("out");
    // main_for_surah.classList.add("out");
    // firstdiv.classList.remove("out");
    // audioayah.classList.add("out");
}
function Audio_Ayat() {
    document.getElementById('firstdiv').classList.add("out");
    document.getElementById('seconddiv').classList.add("out");
    document.getElementById('audio-surah').classList.add("out");
    document.getElementById('citytimes').classList.add("out");
    document.getElementById('thirddiv').classList.add("out");
    document.getElementById('main_for_surah').classList.add("out");
    document.getElementById('audio-ayah').classList.add("out");

    document.getElementById('audio_ayah').classList.remove("out");

}
function Audio_Surah() {
    document.getElementById('firstdiv').classList.add("out");
    document.getElementById('seconddiv').classList.add("out");
    document.getElementById('audio_ayah').classList.add("out");
    document.getElementById('citytimes').classList.add("out");
    document.getElementById('thirddiv').classList.add("out");
    document.getElementById('main_for_surah').classList.add("out");
    document.getElementById('audio-ayah').classList.add("out");

    document.getElementById('audio-surah').classList.remove("out");
}
function Times() {

    let inp_ut1 = document.getElementById("citynames");
    let inp_ut2 = document.getElementById("countrynames");


    axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${inp_ut1.value}&country=${inp_ut2.value}&method=1`)
        .then(function (response) {
            document.getElementById('fajr').innerHTML = response.data.data.timings.Fajr;
            document.getElementById('sunrise').innerHTML = response.data.data.timings.Sunrise;
            document.getElementById('hijridate').innerHTML = response.data.data.date.gregorian.date + " " + response.data.data.date.gregorian.designation.abbreviated;
            document.getElementById('gregoriandate').innerHTML = response.data.data.date.hijri.date + " " + response.data.data.date.hijri.designation.abbreviated;
            document.getElementById('zuhur').innerHTML = response.data.data.timings.Dhuhr;
            document.getElementById('asr').innerHTML = response.data.data.timings.Asr;
            document.getElementById('sunset').innerHTML = response.data.data.timings.Sunset;
            document.getElementById('maghrib').innerHTML = response.data.data.timings.Maghrib;
            document.getElementById('esha').innerHTML = response.data.data.timings.Isha;
        }
        )
        document.getElementById('citytimes').classList.remove("out");
        inp_ut1.value = "";
        inp_ut2.value = "";
}
function HijriCalendar() {
    document.getElementById('thirddiv').classList.remove("out");

    let inp_ut1 = document.getElementById("citynames_forcalendar");
    let inp_ut2 = document.getElementById("countrynames_forcalendar");
    let inp_ut3 = document.getElementById("monthsnames");
    let inp_ut4 = document.getElementById("yearnames");

    axios.get(`https://api.aladhan.com/v1/hijriCalendarByCity?city=${inp_ut1.value}&country=${inp_ut2.value}&method=1&month=${inp_ut3.value}&year=${inp_ut4.value}`)
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
    inp_ut1.value = "";
    inp_ut2.value = "";
    inp_ut3.value = "";
    inp_ut4.value = "";
}
function AudioAyah() {
    document.getElementById('audio-ayah').classList.remove("out");
    let select = document.getElementById('Ayah');
    let showaudio = document.getElementById('show-audio');
    let ayatnumber = document.getElementById('ayat_number');
    axios.get(`https://api.alquran.cloud/v1/ayah/${ayatnumber.value}/${select.value}`)
        .then(function (response) {
            console.log(response.data);
            document.getElementById('para').innerHTML = "Para :" + " " + response.data.data.juz;
            document.getElementById('manzil').innerHTML = "Manzil :" + " " + response.data.data.manzil;
            document.getElementById('ayatnum').innerHTML = "Ayat-Num :" + " " + response.data.data.number;
            document.getElementById('rukunum').innerHTML = "Ruku-Num :" + " " + response.data.data.ruku;
            document.getElementById('suratname').innerHTML = "Surat-Name :" + " " + response.data.data.surah.name;
            document.getElementById('suratnum').innerHTML = "Surat-Num :" + " " + response.data.data.surah.number;
            document.getElementById('numofsurah').innerHTML = "Ayats-of-Surah :" + " " + response.data.data.surah.numberOfAyahs;
            document.getElementById('revelation').innerHTML = "Revelation :" + " " + response.data.data.surah.revelationType;
            document.getElementById('text').innerHTML = response.data.data.text;
            showaudio.innerHTML = `<audio controls>
            <source  src="${response.data.data.audio}" type="audio/mp3">
            </audio>`;
        })
    select.value = "";
    showaudio.value = "";
}
function AudioSurah() {
    document.getElementById('main_for_surah').classList.remove("out");
    let select = document.getElementById('Surah');
    let showaudiosurah = document.getElementById('show-audio_surah');
    let surahnumber = document.getElementById('surah_number');

    axios.get(`https://api.alquran.cloud/v1/surah/${surahnumber.value}/${select.value}`)
        .then(function (response) {
            console.log(response.data);

            document.getElementById('surah_name').innerHTML = "Surat Name :" + " " + response.data.data.name;
            document.getElementById('surah_num').innerHTML = "Surat Num :" + " " + response.data.data.number;
            document.getElementById('ayats_of_surah').innerHTML = "Ayats of Surat :" + " " + response.data.data.numberOfAyahs;
            document.getElementById('revelation_of_surah').innerHTML = "Revelation :" + " " + response.data.data.revelationType;

            for (let i = 0; i < response.data.data.ayahs.length; i++) {
                response.data.data.ayahs[i].audio;
                showaudiosurah.innerHTML += `<div id="surahtext"> <audio  controls>
                <source src=${response.data.data.ayahs[i].audio} type="audio/mp3">
                </audio>`+
                    `<p>${response.data.data.ayahs[i].text}</p>` +
                    `<div>${response.data.data.ayahs[i].numberInSurah}</div> </div>` + `<br>`;
                response.data.data.ayahs[i].juz;

            }
        }
        )
    select.value = "";
    showaudiosurah.value = "";
}
// function direction() {
    let maindiv = document.getElementById('main');
    let qibla_direction = document.getElementById('qiblaimage');
    axios.get(`http://api.aladhan.com/v1/qibla/25.4106386/51.1846025`)
            .then(function (response) {
                console.log(response.data);
                maindiv.innerHTML = ` <div id="qiblaimage" style="transform: rotate(${response.data.data.direction +"deg"});">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDfwUgPMMXfM3SU6gnjWRL8sxEmXZKqMzeJQ&usqp=CAU">
            </div>`
                   
}
)
// }

