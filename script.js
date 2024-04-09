console.log("script running")
document.querySelector('.cross').style.display = 'None'; //for remove the cross bar 

//if i click in the menubar open the sidebar if its in.
document.querySelector('.menubar').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.menu').style.display = 'inline'
        document.querySelector('.cross').style.display = 'None'
    }
    else{
        document.querySelector('.cross').style.display = 'inline'
        setTimeout(() =>{
        document.querySelector('.menu').style.display = 'None'
        }, 20);    
    }
})     