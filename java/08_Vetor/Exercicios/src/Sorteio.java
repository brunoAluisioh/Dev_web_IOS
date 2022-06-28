import java.util.Random;

public class Sorteio {
    public static void main (String[]args) {
        Random aleatorio = new Random();

        int[] number = new int[10];

        for(int i = 0; i < number.length; i++) {
            number[i] = aleatorio.nextInt(10) +1;
            System.out.print(number [i] + " ");
        }

        int menor = number[0];
        for(int i = 0; i < number.length; i++) {
            if (number [i] < menor){
                menor = number [i];
            }
        }
        System.out.println("\nNúmero menor " + menor);
    }
}
