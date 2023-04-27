import java.util.Scanner;

public class Leitura2 {
    public static void main(String[] args) {

        Scanner leitura = new Scanner(System.in);

        System.out.println("Digite seu nome: ");
        String filme = leitura.nextLine();

        System.out.println("Qual é o ano de lançamento do filme? ");
        int anoDeLancamento = leitura.nextInt();

        System.out.println("Qual a sua avaliação sobre o filme? ");
        double avaliacaoFilme = leitura.nextDouble();

        System.out.println(anoDeLancamento);
        System.out.println(filme);
        System.out.println(avaliacaoFilme);
    }
}
