const list = document.querySelector("#list");
// const veri = document.querySelector("#task");
const buton = document.querySelector("#liveToastBtn")
const input = document.querySelector("#task")
const alertDOM = document.querySelector("#alert")
const remove = document.querySelector("#list")
const toastAdd = document.querySelector("#liveToast") 
const toastFail = document.querySelector("#liveToastFail")

function eventListeners(){
    buton.addEventListener("dblclick",addTask)
    remove.addEventListener("click",deleteTodo)
    
}

eventListeners(event)

function addTask(event){
    const deger = input.value

    if(deger ===""){
    toastTimeFail(toastFail)
        alertDOM.innerHTML = alertfunction(`Hata!!!`,"Eksik Bilgi Girdiniz","warning");
    }
    else{
       addTodoToUI(deger)
localStorage.setItem("Yapilacaklar",deger)
toastTime(toastAdd)

    }
 

    event.preventDefault();
    
}

function tik(a){
if(a.length !=0){
  let img =document.createElement("img")
    img.src=`https://www.hatavecozum.com/wp-content/uploads/kalin-tik-isareti-kopyala-mobil-ve-pc.jpg`
    a.appendChild(img)
    img.className="position: absolute; top: 10; right: 0"
} 
}

const alertfunction = (title,message,className = "warning" ) => `  <div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>`

   function toastTime(a){
a.className="toast success show"
setTimeout(time,2000)
function time(){a.className = "toast success hide"}}
   

function toastTimeFail(a){
    a.className="toast error show"
    setTimeout(time,2000)
    function time(){a.className = "toast error hide"}}
       

  function addTodoToUI(e){
    let li = document.createElement("li");
        textNode = document.createTextNode(e);
        li.appendChild(textNode);
        list.appendChild(li);
        li.className = "task"
        const link = document.createElement("a");
    link.className = "close"
    link.href = "#"
    link.innerHTML = "<span aria-hidden='true'>&times;</span>"
    li.appendChild(link)
tik(li)
    
    }

    function deleteTodo(e){
    if(e.target.className = "close"){
        e.target.parentElement.parentElement.remove();
        console.log(e.target)
    }

}

