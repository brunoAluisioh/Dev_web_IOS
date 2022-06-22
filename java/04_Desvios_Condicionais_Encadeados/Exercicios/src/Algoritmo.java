import java.util.Scanner;

public class Algoritmo {
    public static void main ( String [] args) {
        Scanner teclado = new Scanner(System.in);

        System.out.println(" Digite o Primeiro número: ");
        int number1 = teclado.nextInt();

        System.out.println(" Digite o Segundo número: ");
        int number2 = teclado.nextInt();

        System.out.println(" Digite o Terceiro número: ");
        int number3 = teclado.nextInt();

        if (number1 == number2 && number1 == number3) {
            System.out.println("Os números são iguais " + number1 + " " + number2 + " " + number3);
        }
        else if (number1 > number2 && number1 > number3) {
            System.out.println("O primeiro número é maior: " + number1);
        }
        else if (number2 >number3 && number2 > number1){
            System.out.println("O segundo número é maior: " + number2);
        }
        else {
            System.out.println("O terceiro número é maior: " + number3);
        }
        teclado.close();
    }
}
