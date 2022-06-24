import java.util.Scanner;

public class IdadeWhile {
    public static void main (String [] args) {
        int vezes = 0;
        int idade;
        Scanner scanner = new Scanner(System.in);

        while(vezes < 5) {
            System.out.print("Digite sua idade: ");
            idade = scanner.nextInt();
            System.out.println( "Voce tem: " + idade + " anos");
            vezes++;
        }
    }
}
