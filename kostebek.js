body {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    background: url("./menu2.jpg");
    background-size: cover;
    margin: 0;
    padding: 0;
}

#board {
    width: 414px;
    height: 896px;
    margin: 150px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 sütun düzeni */
    grid-template-rows: repeat(3, 1fr); /* 3 satır düzeni */
    gap: 0px; /* Hücreler arasında boşluk */
    background-size: cover; 
    border-radius: 25px;
    position: relative; /* İçerideki elemanların düzgün yerleşmesi için */
}

#board div {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-image: url("./gif.gif");
    background-size: cover;
    border-radius: 0px; /* Köşeleri yuvarlatmak için */
    position: relative; /* İçindeki köstebek ve düşmanı yerleştirmek için */
}

#board div img {
    width: 100px;
    height: 100px;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}

/* Mobil cihazlar için medya sorgusu */
@media (max-width: 768px) {
    #board {
        width: 100%;
        max-width: none; /* Mobilde tam genişlik */
        height: auto; /* Yüksekliği otomatik yap */
    }

    #board div {
        width: 100%; /* 2 sütun düzeni */
        height: 100%; /* her kutu daha küçük olacak */
    }

    #board div img {
        width: 100%; /* Görseller daha küçük olacak */
        height: 100%;
    }
}

/* Çok küçük ekranlar için (telefonlar) */
@media (max-width: 480px) {
    #board div {
        width: 100%; /* 1 sütun düzeni */
        height: 100%; /* her kutu tam ekran */
    }

    #board div img {
        width: 100%; /* Görseller daha da küçük olacak */
        height: 100%;
    }
}

/* Timer ve skor için stil */
#timer, #score {
    font-size: 20px;
    margin-top: 10px;
    color: white;
    font-weight: bold;
}
    
