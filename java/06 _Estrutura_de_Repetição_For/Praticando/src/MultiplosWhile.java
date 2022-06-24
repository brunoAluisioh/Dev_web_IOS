public class MultiplosWhile {
    public static void main (String [] args) {
        int number = 0;
        int max = 1000;
        int acumulador = 0;

        while(number < max) {
            System.out.print(number + " ");
            number+=2;
            if (number % 30 == 0) System.out.println("");
            acumulador = acumulador + number;
        }
    }
}
