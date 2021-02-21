const { src } = require("gulp");

// // image.src = "https://status.ks.ua/img/tvlogo/vtvplus.jpg"
// // image1.src = "https://status.ks.ua/img/tvlogo/skifija.png"

// // let channels = [[id, title, img], [id, title, img]]
// let channels = [["ВТВ+", image], ["Скифия", image1]]

// for (var i = 0; i < channels.length; i++){
//     let channel_title = channels.title;
//     // let channel_logo = channels.img;
//     console.log("втв-массив:" + channel_title);
// }
// console.log("втв-массив:");
let channels = [["ВТВ+", 5], ["Скифия", 6]]

for (let channel of channels) {
    console.log(`title: ${channel[0]}, logo: ${channel[1]}`);
}

// {{'my name'|trans}}
// {% if (a==1) %}
//     <div></div>
// {% endif %}