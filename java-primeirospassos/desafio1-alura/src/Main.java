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
        System.out.println("Enter the desired option: ");
        int chosenOption = learning.nextInt();
        while (chosenOption != 4) {

            switch (chosenOption) {
                case 1:
                    System.out.println("your balance is: R$ %.2f".formatted(openingBalance));
                    break;
                case 2:
                    double receiveValue = 0;
                    System.out.println("Enter the amount you wish to deposit: ");
                    receiveValue = learning.nextInt();
                    openingBalance += receiveValue;
                    System.out.println("Balance update: %.2f".formatted(openingBalance));
                    break;
                case 3:
                    System.out.println("How much you want to transfer: ");
                    double transferValue = learning.nextInt();
                    openingBalance -= transferValue;
                    System.out.println("Your current balance is: %.2f".formatted(openingBalance));
                    break;
                default:
                    System.out.println("Opção inválida");
                    break;
            }
            //Colocar as condições escolhidas pelo usuário aqui dentro.
            System.out.println("Enter the desired option:");
            chosenOption = learning.nextInt();
        }
        System.out.println("Completed operation.");
    }
}