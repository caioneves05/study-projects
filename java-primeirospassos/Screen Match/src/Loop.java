import java.util.Scanner;

public class Loop {
    public static void main(String[] args) {
        Scanner leitura = new Scanner(System.in);
        double mediaAvaliacaoFilme = 0;
        double nota;

        for (int i = 0; i < 3; i++) {
            System.out.println("Qual a sua avaliação sobre o filme? ");
            nota = leitura.nextDouble();
            mediaAvaliacaoFilme += nota;
        }

        System.out.println(String.format("Média das avaliações: %.1f", mediaAvaliacaoFilme/3));
    }
}
