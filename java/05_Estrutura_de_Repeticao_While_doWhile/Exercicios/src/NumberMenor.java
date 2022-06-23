import java.util.Scanner;
public class NumberMenor {
    public static void main (String [] args) {
        System.out.print("Digite um número: ");

        Scanner scanner = new Scanner(System.in);
        int menorNumber = scanner.nextInt();

        int contador = 0;
        while (contador < 9){
           int valorAtual = scanner.nextInt();
           if (valorAtual < menorNumber) {
               menorNumber = valorAtual;
           }
            contador++;
        }
        System.out.print("Menor número é " + menorNumber);
    }
}
