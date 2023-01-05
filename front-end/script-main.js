function tabSelect(e){
    e.preventDefault();
    tabLabels.forEach(label => label.classList.remove('tab-current'));
    tabContents.forEach(content => content.style.display='none');
    this.classList.add('tab-current');
    activateContent=this.getAttribute('href');
    document.querySelector(activateContent).style.display='block';
}

const tabLabels=document.querySelectorAll('.tab-label');
const tabContents=document.querySelectorAll('.tab-contents .tab-content');
let activateContent='';
tabLabels.forEach(label => label.addEventListener('click', tabSelect));
