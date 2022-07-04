import java.util.Random;

public class Matriz100x100 {
    public static void main(String[] args) {

        //Limite do arraz ate o numero 100!
        int matriz[][] = new int[100][100];
        Random aleatorio = new Random();

        //Criando função
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                matriz[i][j] = aleatorio.nextInt(101);
                System.out.print(matriz[i][j] + "\t");

                //Condição pra numeros ímpares
                if (matriz[i][j] % 2 != 0) {
                    matriz[i][j] = -1;
                    //Senão para números pares
                } else {
                    matriz[i][j] = 1;
                }
            }
            System.out.println(" ");
        }

        //Criando função matriz após a substituição
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                if (matriz[i][j] == -1)
                    System.out.print(matriz[i][j] + "\t");
                else
                    System.out.print(" " +matriz[i][j] + "\t");
            }
            System.out.println(" ");
        }
    }
}