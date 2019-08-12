function runOnScroll () {
  const headerInner = document.getElementsByTagName('nav');
  if (document.body.scrollTop >= 50) {
    headerInner[0].classList.add('shrink');
  } else {
    headerInner[0].classList.remove('shrink');
  }
  console.log(stopMenu[0].classList);
}
// 
// const navContainer = document.getElementById('navContainer');
//
//   if (navContainer !== )
//
// console.log(navContainer);
//


const ernie = {
  animal: 'dog',
  breed: 'pug',

}
