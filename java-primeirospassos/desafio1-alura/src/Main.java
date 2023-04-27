import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        String name = "Caio";
        String typeCount = "Corrente";
        double openingBalance = 2500;
        Scanner learning = new Scanner(System.in);


        System.out.println("""
                ****************************
                Client initial data:
                               
                Name: %s
                Type Account: %s
                Inicial Balance: R$ %.2f
                ****************************
                               
                Operations
                               
                1- Search balance
                2- Receive value
                3- Transfer value
                4- Exit
                 """.formatted(name, typeCount, openingBalance));
        System.out.println("Enter the desired option:");
        int chosenOption = learning.nextInt();
        while (chosenOption != 4) {
            //Colocar as condições escolhidas pelo usuário aqui dentro.
            System.out.println("Enter the desired option:");
            chosenOption = learning.nextInt();
            System.out.println(chosenOption);
        }
    }
}