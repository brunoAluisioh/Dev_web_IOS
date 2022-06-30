import java.util.Scanner;
public class Strings {
    public static void main (String[] args) {
        Scanner teclado = new Scanner(System.in);

        String[]frutas = new String[5];

        for (int i = 0; i < frutas.length; i++) {
            System.out.println("Digite o nome de uma fruta: " );
            frutas[i] = teclado.nextLine();
          ,
        }

    }
}
