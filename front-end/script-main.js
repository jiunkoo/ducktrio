function handleTabClick(e){
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
tabLabels.forEach(label => label.addEventListener('click', handleTabClick));

function handleDropDownClick(e) {
  e.preventDefault();
  if(this.classList.contains('trigger-enter')){
    this.classList.remove('trigger-enter', 'trigger-enter-active')
  } else{
    filterList.forEach(filter =>
      filter.classList.remove('trigger-enter', 'trigger-enter-active')
    );
    this.classList.add('trigger-enter');
    this.classList.add('trigger-enter-active');  
  }
}

const filterList = document.querySelectorAll('.content-filter > li');
filterList.forEach(filter => filter.addEventListener('click', handleDropDownClick));
