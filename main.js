function runOnScroll () {
  const headerInner = document.getElementsByTagName('nav');
  if (document.body.scrollTop >= 50) {
    headerInner[0].classList.add('shrink');
  } else {
    headerInner[0].classList.remove('shrink');
  }
  console.log(ssssssssssssstopMenu[0].classList);
}
