const searchicon1 = document.querrySelector('#searchicon1');
const srchicon1 = document.querrySelector('#srchicon1');
const search1 = document.querrySelector('#searchinput1');

searchicon1.addEventListener('click',function(){
      search1.style.display = 'flex';
      searchicon1.style.display = 'none';
    }
)
const searchicon2 = document.querrySelector('#searchicon2');
const srchicon2 = document.querrySelector('#srchicon2');
const search2 = document.querrySelector('#searchinput2');

searchicon2.addEventListener('click',function(){
    search2.style.display = 'flex';
    searchicon2.style.display = 'none';
  }
)
const bar = document.querrySelector('.fa-bars');
const cross = document.querrySelector('#hdcross');
const headerbar = document.querrySelector('.headerbar');

bar.addEventListener('click',function(){
    setTimecut(()=>{
        cross.style.display = 'block';
    },200);
    headerbar.style.right = '0%'
})
cross.addEventListener('click',function(){
  cross.style.display = 'none';
  headerbar.style.right = '-100%';
})