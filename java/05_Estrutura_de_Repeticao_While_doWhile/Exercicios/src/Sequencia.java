public class Sequencia {
    public static void main(String[] args) {
        int contador;
        contador = 100;

        while (contador <= 200) {
            System.out.print(contador + " ");
            if (contador % 30 == 0) System.out.println("");
            contador++;
        }
    }
}
