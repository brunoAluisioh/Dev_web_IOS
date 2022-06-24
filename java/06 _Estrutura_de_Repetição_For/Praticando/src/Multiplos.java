public class Multiplos {
    public static void main (String [] args) {
        int number;
        int acumulador = 0;

        for (number = 0; number < 1000; number += 2) {
            System.out.print(number + " ");
            if (number % 30 == 0) System.out.println("");
                acumulador = acumulador + number;
        }
    }
}

