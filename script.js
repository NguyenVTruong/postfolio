const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

const downloadCv = document.querySelector('#download-cv');

downloadCv.onclick = () => {
    window.open('https://github.com/NguyenVTruong/NguyenVTruong/blob/main/CV_NguyenVanTruong.pdf', '_blank').focus();
} 

const btnContact = document.querySelector('.linkedin');

btnContact.onclick = () => {
    window.open('https://www.linkedin.com/in/truongnv1998/', '_blank').focus();
} 
