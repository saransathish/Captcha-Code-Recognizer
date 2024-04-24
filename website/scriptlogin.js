// const pop = document.querySelector(".btn")
// pop.addEventListener('click',()=>{
//     console.log(pop)
// })

function changeImage() {
    // Define an array of image URLs
    const images = [
    'cap/2b827.png',
      'cap/2bg48.png',
      'cap/2cegf.png',
      'cap/2cg58.png',
      'cap/2cgyx.png',
      'cap/2en7g.png',
      'cap/2wx73.png',
      'cap/3xcgg.png',
      'cap/5xwcg.png',
      'cap/6mn8n.png',
      'cap/6ydyp.png',
      'cap/6wg4n.png',
      'cap/7wnpm.png',
      'cap/8y6b3.png',
      'cap/43mn5.png',
      'cap/bgd4m.png',
      'cap/bgem5.png',
      'cap/c4mcm.png',
      'cap/e4gd7.png',
      'cap/f4fn2.png',
      'cap/gbxyy.png',
      'cap/gf2g4.png',
      'cap/m6n4x.png',
      'cap/nfndw.png',
      'cap/ng2gw.png',
      'cap/p8wwf.png',
      'cap/p57fn.png',
      'cap/wwmn6.png',
      'cap/wyc25.png',
      'cap/x6pdb.png',
      'cap/x347n.png',
      'cap/xdn65.png',
      'cap/yd38e.png',
      'cap/yyn57.png',
    ];
    
    // Get a random image from the array
    const randomImage = images[Math.floor(Math.random() * images.length)];
    
    // Set the image source
    document.getElementById('random-image').src = randomImage;
  }



function changeToRegister() {
    const changeToRegisterBtn = document.querySelector('#changeToRegister');
    const changeToLogin = document.querySelector('#changeToLogin');
    const loginForm = document.querySelector('#login');
    const registerForm = document.querySelector('#register');
    changeToRegisterBtn.addEventListener('click', () => {
        loginForm.classList.remove('active')
        registerForm.classList.add('active')
    })
}
changeToRegister();


function changeToLogin() {
    const changeToLoginBtn = document.querySelector('#chnageToLogin');
    const loginForm = document.querySelector('#login');
    const registerForm = document.querySelector('#register');
    changeToLoginBtn.addEventListener('click', () => {
        loginForm.classList.add('active')
        registerForm.classList.remove('active')
    })
}
changeToLogin();


function activeInput(event) {
    if (screen.width > 600) {
        let input = event;
        input.style.border = '1px solid #4054D2';
    }
}
activeInput()