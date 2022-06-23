import java.util.Scanner;

public class Tabuada {
    public static void main (String [] args) {
        int contador;
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite um número: ");
        contador = scanner.nextInt();

        int multiplicador = 1;
        while( multiplicador <= 10) {
            int resultado = contador * multiplicador;
            System.out.println( contador + " X " +multiplicador + " = " + resultado);
            multiplicador++;
        }
    }
}
