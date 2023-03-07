let isim=prompt("Lütfen İsim Giriniz:") //kullanıcıdan bilgi istedik
let islev = document.querySelector("#myName"); //islev diye veri oluşturduk  id si myName olan veriyi çagırdık
islev.innerHTML=isim; //html e yazdırdıma işlemi
let div = document.querySelector("#myClock"); //div diye veri oluşturduk  id si myClock olan veriyi çagırdık

function Time(){  //fonksiyon oluşturma
  var now = new Date()  //zaman 
  var hour=now.getHours() //saat
  var minute=now.getMinutes() //dakika
  var second=now.getSeconds() //saniye
  var day = now.getDay() //gün

  let gunTutucu= ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]; // gunTutucu oluşturup günleri yazdık

  div.innerHTML= `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${gunTutucu[day]}` ; //HTML Yazdırdık
}
setInterval(Time,1000);