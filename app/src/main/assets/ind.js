document.addEventListener('DOMContentLoaded', () => {

    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('mainContent');


    setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.classList.remove('hidden');
    }, 1000);
});
