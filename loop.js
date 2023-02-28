var data =[
    {
        id:"1",
        Name:"ZINGER LAZIZ",
        Desc:"LIcking Your Finger Again ANd Again",
        Price:650,
        Image:"https://c8.alamy.com/comp/EXNWTW/crispy-chicken-zinger-burger-EXNWTW.jpg"
    },
    {
        id:"2",
        Name:"ZINGER LAZIZ",
        Desc:"LIcking Your Finger Again ANd Again",
        price:650,
        Image:"https://c8.alamy.com/comp/EXNWTW/crispy-chicken-zinger-burger-EXNWTW.jpg"
    },
    {
        id:"3",
        Name:"ZINGER LAZIZ",
        Desc:"LIcking Your Finger Again ANd Again",
        price:650,
        Image:"https://c8.alamy.com/comp/EXNWTW/crispy-chicken-zinger-burger-EXNWTW.jpg"
    },
    {
        id:"4",
        Name:"ZINGER LAZIZ",
        Desc:"LIcking Your Finger Again ANd Again",
        price:650,
        Image:"https://c8.alamy.com/comp/EXNWTW/crispy-chicken-zinger-burger-EXNWTW.jpg"
    },
    {
        id:"5",
        Name:"ZINGER LAZIZ",
        Desc:"LIcking Your Finger Again ANd Again",
        price:650,
        Image:"https://c8.alamy.com/comp/EXNWTW/crispy-chicken-zinger-burger-EXNWTW.jpg"
    },
    {
        id:"6",
        Name:"ZINGER LAZIZ",
        Desc:"LIcking Your Finger Again ANd Again",
        price:650,
        Image:"https://c8.alamy.com/comp/EXNWTW/crispy-chicken-zinger-burger-EXNWTW.jpg"
    },
]

var html = "" 

data.forEach(a=>{
   html+=`
   <div class="col-md-6">
   <div class="card" style="width: 18rem;">
  <img src="${a.Image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${a.Name}</h5>
    <p class="card-text">${a.Desc}</p>
    <p class="card-text">${a.Price}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
   </div>
   
   `
   document.getElementById("product").innerHTML =html;


})