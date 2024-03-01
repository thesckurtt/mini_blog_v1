var aside_bar = document.querySelector('.aside-bar-dashboard');
var btn_close_aside_bar = document.querySelector('.close-button-aside-bar');
var btn_menu = document.querySelector('.close-aside-bar');

btn_menu.addEventListener('click', () => {
    // document.querySelector('body').classList.toggle('g-sidenav-pinned');
    if(document.querySelector('.aside-bar-dashboard').style.display == 'none'){
        document.querySelector('body').classList.add('g-sidenav-pinned');
    }else{
        document.querySelector('body').classList.remove('g-sidenav-pinned');
    }
    $('.aside-bar-dashboard').toggle();
});

btn_close_aside_bar.addEventListener('click', ()=>{

});

$('.close-button-aside-bar').click(()=>{
    $('.aside-bar-dashboard').toggle();
})
