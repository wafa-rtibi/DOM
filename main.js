//badge panier
function badge(){
 var list=document.getElementsByClassName("produit")
 var x=list.length
 var y=document.getElementById("conteur")
 y.innerHTML=x
}
 //likes
  var list_likes=document.querySelectorAll('.fa-heart')
 
  for(let i=0;i<list_likes.length;i++){
    list_likes[i].addEventListener('click',function(){
       if(list_likes[i].style.color=="black"){
         list_likes[i].style.color="red" }  
        else list_likes[i].style.color="black"
   })
 }
 //delet
 var list_rom=document.querySelectorAll('.fa-times')
 for(let i=0;i<list_rom.length;i++){
  list_rom[i].addEventListener("click",function(){
    list_rom[i].parentNode.parentNode.remove()
    total()
    badge()
  }) }

//qte (+)

var list=document.querySelectorAll('.add')
for(let i=0;i<list.length;i++)
{
  list[i].addEventListener("click",function(){
     list[i].nextElementSibling.value++  
    total()})
}

//qte (-)
var list_mois=document.querySelectorAll('.sous')
for(let i=0;i<list_mois.length;i++)
{
  list_mois[i].addEventListener("click",function(){
    if(list_mois[i].previousElementSibling.value>1){
     list_mois[i].previousElementSibling.value-- }
    total()})
}

// total 
function total(){
   sum=0
    p=document.getElementsByClassName("prix_produit")
    qt=document.getElementsByClassName('qte')
   for(let i=0 ; i<p.length ;i++){
     sum=sum+parseFloat(p[i].innerHTML)*qt[i].value
   }
  
   document.getElementById("prix").innerHTML=sum
   document.getElementById("prix_total").innerHTML=sum
}


 function promotion(){
   let x= Number(document.getElementById("prix").innerHTML)
   
  if (document.getElementById("coupon").value=="welcome"){
     x=x-(x*0.1)
     let y=Math.round(x*100)/100
     document.getElementById("prix_total").innerHTML=y
     document.getElementById("prix").innerHTML=y
    }
  
 }
total()
badge()