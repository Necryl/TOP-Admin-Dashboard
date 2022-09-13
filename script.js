// elements
const profileInfoChildrenElem = [...document.querySelectorAll('.profile-info>*')];


// events
window.addEventListener('resize', event => {
    resizeProfilePic();
})


//functions
function resizeProfilePic() {
    profileInfoChildrenElem[0].style.setProperty('--size', `${profileInfoChildrenElem[1].clientHeight + profileInfoChildrenElem[2].clientHeight}px`);
}


// on start
resizeProfilePic();