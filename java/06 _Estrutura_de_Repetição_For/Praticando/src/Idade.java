import java.util.Scanner;
public class Idade {
    public static void main(String [] args) {
        int idade;
        Scanner scanner = new Scanner(System.in);

        for(var i = 0; i < 5; i++)  {
            System.out.print("Digite sua idade: ");
            idade = scanner.nextInt();
            System.out.println( "Voce tem: " + idade + " anos");
        }
    }
}
