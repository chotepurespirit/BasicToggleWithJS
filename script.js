function clickToToggle() {
    const title = document.getElementById('title')
    
    if(title.classList.contains("hidden")) {
        title.classList.remove("hidden")
    }
    else {
        title.classList.add("hidden")
    }
}