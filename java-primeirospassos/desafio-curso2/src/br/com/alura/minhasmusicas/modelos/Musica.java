package br.com.alura.minhasmusicas.modelos;

public class Musica extends Audio {

    String album;
    String artista;
    String genero;

    String descricao;

    public String getAlbum() {
        return album;
    }

    public void setAlbum(String album) {
        this.album = album;
    }

    public String getArtista() {
        return artista;
    }

    public void setArtista(String artista) {
        this.artista = artista;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    @Override
    public int getClassificacao() {
        if(this.getTotalReproducoes() > 2000) {
            return 10;
        } else {
            return  7;
        }
    }
}

