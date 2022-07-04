import java.util.Scanner;

public class Matrix4x4 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        //número inteiro
        int number[][] = new int[4][4];
        //inicializador
        int inicial = 0;

        //Criando função;
        for (int i = 0; i <number.length; i++) {
            for (int j = 0; j <number[i].length; j++) {
                System.out.println("Insira um número para a posição ["+i+"]["+j+"]");
                number[i][j] = teclado.nextInt();
            }
        }
        System.out.println ("=======Números maiores que 10=======");
        for (int i = 0; i < number.length; i++) {
            for (int j = 0; j < number[i].length; j++) {

                //Criando uma condição enquanto...
                if (number[i][j] > 10) {
                    System.out.println("[ " + number[i][j] + " ] \t");
                    inicial++;
                }
            }
        }
        System.out.println("Encontramos " + inicial + " números no Array maior que 10");
        System.out.println(" ");

        //Elementos da Raiz
        System.out.println("=======Elementos da Matriz=======");

        //Criando função
        for (int i = 0; i < number.length; i++) {
            for (int j = 0; j < number[i].length; j++) {
                System.out.print(number[i][j] + "\t");
            }
            System.out.println(" ");
        }
        teclado.close();
    }
}
