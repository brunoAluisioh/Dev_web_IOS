import java.util.Locale;
import java.util.Scanner;
public class Strings {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        String[] frutas = new String[5];

        for (int i = 0; i < 5; i++) {
            System.out.println("Digite o nome de uma fruta " + (i + 1) + " :");
            String vazia = teclado.nextLine();
            boolean add = true;

            for (int j = 0; j < 5; j++) {
                if (frutas[j] == null) {
                    continue;
                }
                if (vazia.compareTo(frutas[j]) == 0 || vazia.isEmpty() || vazia.length() < 3) {
                    System.out.println("Insira um nome válido");
                    add = false;
                    break;
                }
            }
            if (add) {
                frutas[i] = vazia;
            }
        }
        
        for (int i = 0; i < frutas.length; i++) {
            if (frutas[i] != null) {
                System.out.print(frutas[i].toUpperCase() + " ");
                System.out.print(frutas[i].toLowerCase() + " ");
                System.out.println(" ");
            }
        }
    }
}