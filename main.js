const tab = document.getElementsByClassName('tabLink');

const content = document.getElementsByClassName('tabContent');


for(let i =0;i < tab.length;i++){
    tab[i].addEventListener("click",function(){
        this.classList.toggle("active");

        //set the active tab to a variable
        let el = this.textContent;

        for(let j = 0; j < content.length;j++){

            if(content[j].id === el){
                let value = content[j];
                if(value.style.display === "block"){
                    value.style.display = "none";

                }
                else{
                    value.style.display = "block";
                }
            }   
        }
        
    })
}
/*
{
const tab = document.querySelectorAll('.tabLink');
 for(let i = 0 ; i < tab.length; i++){
    tab[i].addEventListener('click',function(event){
    
 
    let i,tabContent,tabLink;

    //get all the element with the class tabLink and hide them;
    tabContent = document.getElementsByClassName('tabContent');
    
    for(i = 0;i < tabContent.length;i++){
        tabContent[i].style.display = "none";
    }
    //get all element with class tabLink and remove the active class
    tabLink = document.querySelectorAll(".tabLink");
    for(let j = 0 ; j < tabLink.length;j++){
         cityName = tabLink[j].textContent;
        console.log(cityName)
        tabLink[j].className =tabLink[j].className.replace("active","");
    }
    //show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    event.currentTarget.className += "active";
    

    })
}
}
*/


