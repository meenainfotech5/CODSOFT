  const images= ["Images/slide-1.png","Images/slide-2.png","Images/slide-3.png","Images/slide-4.png",
    "Images/slide-5.png","Images/slide-6.png","Images/slide-7.png"]
 let index = 0;
 const slideimg = document.getElementById("slideimg");

setInterval(() => {
    index = (index + 1) % images.length;
     slideimg.src = images[index];
 },2000);


let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight = "0px")

        {
            menuList.style.maxHeight = "30px"
        }
else{
    menuList.style.maxHeight = "0px";
}

}