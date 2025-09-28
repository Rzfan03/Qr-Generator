const BASE_URL = 'https://barcode.orcascan.com/?data='
const inputText = document.getElementById('inputText')
const generateButton = document.getElementById('generateButton')


function generateQR(){
    const imgUrl = inputText.value;
    const hasil_sementara = BASE_URL + imgUrl;
    const qrImg = document.getElementById('qrImg')

    qrImg.src = hasil_sementara
}


