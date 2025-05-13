let myName = document.querySelector("#myName")
 let isim = prompt("Adınız Nedir?")
myName.innerHTML=`${isim[0].toUpperCase()}${isim.slice(1).toLocaleLowerCase()}`


window.onload = function() {
    showTime();
    setInterval(showTime, 1000);
};

function showTime(){
    let date = new Date()
    const day = date.toLocaleDateString("tr-TR", { weekday: "long" });
    const time = date.toLocaleTimeString("tr-TR");
    document.querySelector("#myClock").innerHTML = `${time} ${day}`;
}