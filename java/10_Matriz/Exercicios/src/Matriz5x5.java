public class Matriz5x5 {
    public static void main(String[] args) {

        //preenchendo com o número 1 a diagonal na sequência
        int matriz[][] = {{1, 0, 0, 0, 0}, {0, 1, 0, 0, 0}, {0, 0, 1, 0, 0}, {0, 0, 0, 1, 0}, {0, 0, 0, 0, 1}};

        //Criando função pra percorrer no arraz de elementos e imprimir na tela pro usúario visulaizar
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                System.out.print(matriz[i][j] + "\t");
            }
            System.out.println("");
        }
    }
}
