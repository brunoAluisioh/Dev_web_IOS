public class ParImpar {
    public static void main(String[] args) {
        int i = 1;

        while (i <= 10) {
            if (i % 2 == 0) {
                System.out.println("Número par: " +i);
            }
            else {
                System.out.println("Número ímpar: " +i);
            }
            i++;
        }
    }
}