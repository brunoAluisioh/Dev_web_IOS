import java.util.Scanner;
public class Tabuada {
    public static void main (String [] args) {
        int contador;
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite um número: ");
        contador = scanner.nextInt();

        //Função Tabuada
        int multiplicador = 1;
        while( multiplicador <= 10) {
            int resultado = contador * multiplicador;
            System.out.println( contador + " X " + multiplicador + " = " + resultado);
            multiplicador++;
        }

        //Função Raiz Quadrada
        double raiz = Math.sqrt(contador);
        System.out.println("\nA raiz quadrada é: " + raiz);

        //Função Par e Ímpar
        boolean parImpar = contador % 2 == 0;
        if (parImpar == true) {
            System.out.println("\nO número é par");
        }
        else {
            System.out.println("\nO número é ímpar");
        }
    }
}
