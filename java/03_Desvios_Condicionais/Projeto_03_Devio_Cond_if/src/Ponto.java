import java.util.Scanner;

public class Ponto {
    public static void main (String [] args) {
        Scanner teclado = new Scanner(System.in);
        int pontos = 0;
        System.out.println ("Digite o número de pontos do jogador: ");
        pontos = teclado.nextInt();

        if(pontos >= 1000) {
            System.out.println ("Você passou para a fase 2!!!");
        }
        else {
            System.out.println("Você não passou de nível ");
        }
        teclado.close();
    }
}
