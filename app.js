document.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        event.preventDefault();
        enterApp();
    }
});
function enterApp() {
    const welcomeScreen = document.querySelector('.welcome-screen');
    const secondScreen = document.querySelector('.second-screen');
    const oopsScreen = document.querySelector('.oops');

    welcomeScreen.classList.add('hidden');
    oopsScreen.classList.add('hidden');
    secondScreen.classList.remove('hidden');
    
    setTimeout(() => {
        secondScreen.classList.add('hidden');
        oopsScreen.classList.remove('hidden');
    }, 7500)
}
function restartApp() {
    const welcomeScreen = document.querySelector('.welcome-screen');
    const secondScreen = document.querySelector('.second-screen');
    const oopsScreen = document.querySelector('.oops');
    
    welcomeScreen.classList.remove('hidden');
    oopsScreen.classList.add('hidden');
    secondScreen.classList.add('hidden');
}