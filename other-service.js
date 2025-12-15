document.addEventListener("DOMContentLoaded", () => {

    const btnserviceothers = document.getElementById('boton-more-service');
    const direcmoreservice = 'none.html';

    btnserviceothers.addEventListener('click', () => {
        window.location.href = direcmoreservice;
    });

    const BtnCosMain = document.getElementById('btn-cost-main');
    const direcCostMain = "index.html";


    BtnCosMain.addEventListener('click', () => {
        window.location.href = direcCostMain;
    });


});