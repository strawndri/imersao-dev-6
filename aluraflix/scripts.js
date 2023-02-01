var listaFilmes = []
listaFilmes[0] = 'https://br.web.img3.acsta.net/pictures/210/527/21052756_20131024195513383.jpg'
listaFilmes[1] = 'https://m.media-amazon.com/images/I/719AMX2PRKL._AC_.gif'
listaFilmes[2] = 'https://m.media-amazon.com/images/I/71xzYrBb72L._RI_.jpg'

for (var i = 0; i < listaFilmes.length; i++) {
    document.write('<img src="' + listaFilmes[i] + '">')
    
}
