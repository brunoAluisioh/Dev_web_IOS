import java.util.Scanner;

public class Mes {
    public static void main(String[] args){
        Scanner teclado = new Scanner(System.in);
        System.out.println("Digite um mês: ");
        String mes = teclado.next();

        String [] primavera = {"Outubro", "Novembro", "Dezembro"};
        String [] outono = {"Abril", "Maio", "Junho"};
        String [] inverno = {"Julho", "Agosto", "Setembro"};
        String [] verao = {"Janeiro", "Fevereiro", "Março"};

        for (int i = 0; i <3; i++) {
            if (mes.equalsIgnoreCase(outono[i])) {
                System.out.println("O mês " + mes + " é Outono.");
            }
            else if (mes.equalsIgnoreCase(primavera[i])) {
                System.out.println("O mês " + mes + " é Primavera.");
            }
            else if (mes.equalsIgnoreCase(verao[i])) {
                System.out.println("O mês " + mes + " é Verão.");
            }
            else if (mes.equalsIgnoreCase(inverno[i])) {
                System.out.println("O mês " + mes + " é Inverno.");
            }
            else {
                System.out.println("Mês inválido! ");
                break;
            }
        }
    }
}
