var request= new XMLHttpRequest();

request.open('GET','https://restcountries.com/v2/all')

request.send();

request.onload=function(){
var data=JSON.parse(this.response);

for(i=0;i<data.length;i++){
    console.log(data[i]);
    console.log("Region:"+data[i].region)
    console.log("Subregion:"+data[i].subregion)
    console.log("Population:"+data[i].population)
    const h3 = document.createElement("h3");
    h3.innerHTML+= "\n"+"Country name: "+data[i].name+ " " +"Region: "+data[i].region;
    
    const img = document.createElement("img");
    img.src=data[i].flags.png;
    document.getElementById("main").append(h3,img);
    // document.body.append(img);
}
}