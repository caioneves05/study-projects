import java.util.Scanner;

public class OutroLoop {
    public static void main(String[] args) {
        Scanner leitura = new Scanner(System.in);
        double mediaAvaliacaoFilme = 0;
        double nota = 0;
        int contador = 0;

        while (nota != -1) {

            System.out.println("Qual a sua avaliação sobre o filme ou -1 para encerrar. ");

            nota = leitura.nextDouble();

            if(nota != -1) {
                mediaAvaliacaoFilme += nota;
                contador++;
            }
        }

        System.out.println(String.format("Média das avaliações: %.1f", mediaAvaliacaoFilme/contador));
    }
}
