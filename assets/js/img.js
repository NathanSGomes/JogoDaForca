function carregarImagemForca() {
    const imgForca = document.getElementById('img');
    
    switch (tentativas) {
        case 5:
            imgForca.style.background = "url('assets/img/forca01.png')";
            break;

        case 4:
            imgForca.style.background = "url('assets/img/forca02.png')";
            break;

        case 3:
            imgForca.style.background = "url('assets/img/forca03.png')";
            break;

        case 2:
            imgForca.style.background = "url('assets/img/forca04.png')";
            break;

        case 1:
            imgForca.style.background = "url('assets/img/forca05.png')";
            break;

        case 0:
            imgForca.style.background = "url('assets/img/forca06.png')";
            break;

        default:
            imgForca.style.background = "url('assets/img/forca.png')";
            break;
    }
}
