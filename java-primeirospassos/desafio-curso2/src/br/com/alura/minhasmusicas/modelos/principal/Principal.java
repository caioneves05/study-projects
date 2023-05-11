package br.com.alura.minhasmusicas.modelos.principal;

import br.com.alura.minhasmusicas.modelos.Musica;
import br.com.alura.minhasmusicas.modelos.Podcast;

public class Principal {
    public static void main(String[] args) {
        Musica minhaMusica = new Musica();
        Podcast meuPodcast = new Podcast();
        minhaMusica.setTitulo("Forever");
        minhaMusica.setArtista("Kiss");

        for(int i = 0; i< 50; i++) {
            minhaMusica.curte();
        }

        for(int i = 0; i< 50; i++) {
            minhaMusica.reproduzir();
        }
        System.out.println("A minha música teve %d".formatted(minhaMusica.getTotalCurtidas()));
    }
}
