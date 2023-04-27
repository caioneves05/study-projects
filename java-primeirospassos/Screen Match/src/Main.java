public class Main {
    public static void main(String[] args) {
        /* 
        System.out.printf("Bem vindo ao Screen Match");
        System.out.println("Filme: Top Gun: Maverick");

        String anoDeLancamento = "2003";
        System.out.println("Ano de lançamento" + anoDeLancamento);
        boolean incluidoNoPlano = true;
        double notaDoFilme = 8.1;
        // O Equals serve apenas para String.
        if (anoDeLancamento.equals("2003")) {
            System.out.println("Equals deu certo!!");
        }

        double media = (9.8 + 6.3 + 8.0) / 3;
        System.out.println(media);
        String sinopse;
        sinopse = """
                  O Ano de lançamento do filme foi em %s, e a média é: %.2f
                  """.formatted(anoDeLancamento, notaDoFilme);
        System.out.println(sinopse);

        //System.out.println(String.format("O Ano de lançamento do filme foi em %s, e a média é: %.2f", anoDeLancamento, notaDoFilme));

        int classificacao;
        classificacao = (int) (media /2);

        System.out.println(classificacao); */

        int tempCelcius = 39;
        double conversao = (tempCelcius * 1.8) + 32;
        System.out.println(String.format("A conversão de 39 graus Celcius para Farenheit é de %f", conversao));

        int semDecimais;
        semDecimais = (int) conversao;

        System.out.println(String.format("O resultado sem casa decimais é de %d", semDecimais));

    }
}