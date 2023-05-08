package br.com.alura.screenmatch.modelos;

public class Titulo {
    private String nome;
    private int anoLancamento;
    private boolean incluidoNoPlano;
    private double somaAvaliacoes;
    private int totalAvaliacoes;
    private int duracaoEmMinutos;

    public void exibirTudo() {
        System.out.println("Nome do filme: " + this.nome);
        System.out.println("Ano de lançamento: " + this.anoLancamento);
    }
    public void avalia(double nota) {
        somaAvaliacoes += nota;
        totalAvaliacoes++;
    }

    public double mediaAvaliacoes() {
        return somaAvaliacoes / totalAvaliacoes;
    }

    public int getTotalAvaliacoes() {
        return  totalAvaliacoes;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setAnoLancamento(int anoLancamento) {
        this.anoLancamento = anoLancamento;
    }

    public int getDuracaoEmMinutos() {
        return duracaoEmMinutos;
    }

    public void setDuracaoEmMinutos(int duracaoEmMinutos) {
        this.duracaoEmMinutos = duracaoEmMinutos;
    }

    public boolean isIncluidoNoPlano() {
        return incluidoNoPlano;
    }

    public void setIncluidoNoPlano(boolean incluidoNoPlano) {
        this.incluidoNoPlano = incluidoNoPlano;
    }
}
