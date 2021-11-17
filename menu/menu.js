const menu = [
    {
        id:1,
        name: "cup cake",
        price:65,
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ad, obcaecati repudiandae dolorem incidunt a laboriosam ullam libero ab magnam maiores in veniam cupiditate magni inventore, fuga hic, tenetur sed.",
        pic: "https://www.recipetineats.com/wp-content/uploads/2020/09/Vanilla-Cupcakes-with-Vanilla-Swiss-Meringue-SQ.jpg",
        category: "food"
    },
    {
        id:4,
        name: "toast",
        price:35,
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ad, obcaecati repudiandae dolorem incidunt a laboriosam ullam libero ab magnam maiores in veniam cupiditate magni inventore, fuga hic, tenetur sed.",
        pic: "https://christieathome.com/wp-content/uploads/2021/01/HK-French-Toast-New-1-b-scaled.jpg",
        category: "food"
    },
    {
        id:2,
        name: "thai tea",
        price:35,
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ad, obcaecati repudiandae dolorem incidunt a laboriosam ullam libero ab magnam maiores in veniam cupiditate magni inventore, fuga hic, tenetur sed.",
        pic: "https://www.coffeefavour.com/wp-content/uploads/2016/07/2ice-tea-milk.png",
        category: "drink"
    },
    {
        id:3,
        name: "milk tea",
        price:35,
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ad, obcaecati repudiandae dolorem incidunt a laboriosam ullam libero ab magnam maiores in veniam cupiditate magni inventore, fuga hic, tenetur sed.",
        pic:"https://kcinterfoods.co.th/upload-img/Meow_/product_cover/TaiwanMilkTea_5_(1).png",
        category: "drink"
    },
    {
    id:4,
    name: "Green tea",
    price:30,
    des: "ullam libero ab magnam maiores in veniam cupiditate magni inventore, fuga hic, tenetur sed.",
    pic:"https://img.wongnai.com/p/1920x0/2019/02/02/1e0e327a52ce405196bb7242d22ea752.jpg",
    category: "drink"
    },{
        id:4,
        name: "sugar",
        price:5,
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ad, obcaecati repudiandae dolorem incidunt a laboriosam ullam libero ab magnam maiores in veniam cupiditate magni inventore, fuga hic, tenetur sed.",
        pic: "https://images.newscientist.com/wp-content/uploads/2019/07/26113904/sugar-gd4w3h_web.jpg",
        category: "etc"
    }
]

const section = document.querySelector('.menu')
const btnFilters = document.querySelectorAll('.btn-filter')

btnFilters.forEach((btnFilter) =>{
    
      btnFilter.addEventListener("click",function (event) {
              
        const category = event.target.dataset.id
        const menuFilter = menu.filter(function (item){ 
        const dataset = "dataset-" + item.category;
            
            if(dataset === category){
            return item
                
                } 
            })
              
         if(category == "dataset-all"){
             showItem(menu)
         }else{
            showItem(menuFilter)
         }

      })

      btnFilter.addEventListener("mouseenter",function (){
       btnFilter.style.color  = "white"
       btnFilter.style.backgroundColor = "rgb(255, 1, 91)"
    })

      btnFilter.addEventListener("mouseleave", function(){
          btnFilter.style.color = "black"
          btnFilter.style.backgroundColor  = "white"
      })
      
})

window.addEventListener('load', function () {
        showItem(menu);
    });

    //เรียกรายละเอียดเมนู
    function showItem(menu){
        let menu1 = menu.map(function(item){
            return `<article class = "menu">    
        <div class = container>
        <div class = "img">
            <img src="${item.pic}" alt="">
        </div>
        <div class = "menu-title">
            
         <header>
             <h3>${item.name}</h3>

         </header> 
           
            <div class = dsc>
            ${item.des}       
        </div>
        </div>
        <div class = menu-price>
           <h3>${item.price}฿</h3>
         </div>
    </div> 
    </article>  <br>`
  ;
        })
        menu1 = menu1.join(" ")
       section.innerHTML = menu1
    }
