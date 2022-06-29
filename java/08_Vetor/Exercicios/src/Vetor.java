import java.util.Scanner;

public class Vetor {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        String vetorA[] = new String[4];
        String vetorB[] = new String[7];
        String vetorC[] = new String[11];

        //Criando Primeiro Vetor
        System.out.println("Lendo Vetor A...");
        for (int i = 0; i < vetorA.length; i++) {
            System.out.println("Por favor digite algo: ");
            vetorA[i] = teclado.nextLine();
        }
        System.out.println("Primeiro Vetor concluido com sucesso!!!");
        System.out.println("======================================");

        //Criando Segundo Vetor
        System.out.println("Lendo Vetor B...");
        for (int i = 0; i < vetorB.length; i++) {
            System.out.println("Por favor digite algo: ");
            vetorB[i] = teclado.nextLine();
        }
        System.out.println("Segundo Vetor concluido com sucesso!!!");
        System.out.println("======================================");

        //Criando junção dos dois Vetores A + B
        System.out.println("Junção dos Vetores A + B: ");
        for (int i = 0; i < vetorA.length; i++) {
            vetorC[i] = vetorA[i];
        }

        for (int i = 4; i < vetorB.length + 4; i++) {
            vetorC[i] = vetorB[i-4];
        }

        for (int i = 0; i < vetorC.length; i++) {
            System.out.println(vetorC[i]);
        }
        teclado.close();
    }
}