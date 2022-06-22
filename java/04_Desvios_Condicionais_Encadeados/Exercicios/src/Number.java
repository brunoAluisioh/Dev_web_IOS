import java.util.Scanner;

public class Number {
    public static void main ( String [] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.println("Digite um número:");
        float number1 = teclado.nextFloat();

        System.out.println("Digite mais um número:");
        float number2 = teclado.nextFloat();

        if (number1 > number2) {
            System.out.println("O número é decrescente");
            System.out.println("Primeiro número: " + number1);
            System.out.println("Segundo número: " + number2);
        }
        else  {
            if (number1 < number2) {
                System.out.println("O número é decrescente");
                System.out.println("Segundo número: " + number2);
                System.out.println("Primeiro número: " + number1);
            }
        }
        teclado.close();
    }
}
