const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form=document.querySelector('form');
const search=document.querySelector('#s1');
const weather=document.querySelector('.row');
const getBackground=()=>{
    let now = new Date();
    let isMorning   = now.getHours() > 5  && now.getHours() <= 12;
    let isEvening   = now.getHours() > 18 && now.getHours() <= 22;
    let isNight     = now.getHours() > 22 || now.getHours() <= 5;
   if(isNight=true)
   {
    document.body.style.backgroundImage = "url('./night2.jpg')";
    document.body.style.backgroundSize="1700px 800px"
    
   }
   else
   if(isMorning=true)
   {
   
    document.body.style.backgroundImage = "url('./morning.jpg')";
    document.body.style.backgroundSize="1700px 700px"
  
   }
   else
   if(isEvening=true)
   {
    document.body.style.backgroundImage = "url('./evening.jpg')";
    document.body.style.backgroundSize="1700px 1000px"
  
   }
  
}
getBackground();
form.addEventListener('submit',
function(event)
{
    let currentDate = new Date () ; 
    event.preventDefault();
   if(search.value=='')
    {
    weather.innerHTML=``;
    weather.style=``; 
    }
    
    getWeather(search.value);
})
const getWeather=async(city)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response= await fetch(url)
    const data=await response.json()
    if(search.value==null)
    {
        weather.innerHTML=``; 
    }
    console.log(data)
    return showWeather(data)
}
const showWeather=(data)=>
{   
   
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
    <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
       <h2>${data.main.temp} ℃</h2>
        <h4> ${data.weather[0].main} </h4>
    </div>
    <div>
    <br>
    <h4>Maximum Temp- ${data.main.temp_max}℃</h4>
    <h4>Minimum Temp- ${data.main.temp_min}℃</h4>
    </div>
    <div>
    <h4>Wind speed- ${data.wind.speed}km/h </h4>
     <h4>Humidity- ${data.main.humidity}% </h4>
     <h4>Sunset- ${data.main.pressure}mb </h4>
 </div>
    </div>
    </div>
`
weather.style.border="2px solid brown";
weather.style.color="brown";
weather.style.padding="34px 34px";
weather.style.margin="19px";
weather.style.height="320px";
weather.style.background="white";
}
