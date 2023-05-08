import br.com.alura.screenmatch.calculo.CalculadoraTempo;
import br.com.alura.screenmatch.calculo.Episodio;
import br.com.alura.screenmatch.calculo.filtroRecomendacao;
import br.com.alura.screenmatch.modelos.Filme;
import br.com.alura.screenmatch.modelos.Serie;

public class Principal {
    public static void main(String[] args) {
        //Tipo por referência.
        Filme novoFilme = new Filme();
        Serie novaSerie = new Serie();
        CalculadoraTempo calculadora = new CalculadoraTempo();
        filtroRecomendacao filtro = new filtroRecomendacao();

        novoFilme.setNome("Caillou");
        novoFilme.setAnoLancamento(2005);
        novoFilme.setIncluidoNoPlano(true);
        novoFilme.setDiretor("Franklin");
        novoFilme.setDuracaoEmMinutos(54);
        novoFilme.avalia(2);
        novoFilme.avalia(2);
        novoFilme.avalia(2);

        filtro.filtra(novoFilme);

        Episodio episodio = new Episodio();

        episodio.setNumero(1);
        episodio.setTotalVisualizacoes(300);

        filtro.filtra(episodio);
    }
}
