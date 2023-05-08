package br.com.alura.screenmatch.calculo;

import br.com.alura.screenmatch.modelos.Titulo;

public class CalculadoraTempo {
    private int tempoTotal = 0;

    public int getTempoTotal() {
        return tempoTotal;
    }

//    public void inclui(Serie s) {
//        tempoTotal += s.getDuracaoEmMinutos();
//    }
//
//    public void inclui(Serie s) {
//        tempoTotal += s.getDuracaoEmMinutos();
//    }

    public void inclui(Titulo t) {
        this.tempoTotal += t.getDuracaoEmMinutos();
    }
}
