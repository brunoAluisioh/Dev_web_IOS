import java.util.Scanner;

public class ParImpar {
    public static void main (String [] args) {
        Scanner teclado = new Scanner(System.in);

        int  number;
        System.out.println ("Digite um número inteiro: ");
        number = teclado.nextInt();

        if ((number % 2) == 0) {
            System.out.println("O número " + number + " é par");
        }
        else {
            System.out.println("O número " + number + " é ímpar");
        }
        teclado.close();
    }
}
