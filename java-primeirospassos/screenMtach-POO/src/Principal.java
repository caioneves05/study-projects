import br.com.alura.screenmatch.modelos.Filme;

public class Principal {
    public static void main(String[] args) {
        //Tipo por referência.
        Filme novoFilme = new Filme();
        novoFilme.setNome("O poderoso chefão");
        novoFilme.setAnoLancamento(2005);

        novoFilme.avalia(8);
        novoFilme.avalia(5);
        novoFilme.avalia(10);
        novoFilme.exibirilme();

        System.out.println("Total de avaliações: " + novoFilme.getTotalAvaliacoes());
        System.out.println(novoFilme.mediaAvaliacoes());
    }
}
