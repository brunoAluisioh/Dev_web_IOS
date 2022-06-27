package br.com.bruno;
import java.util.Scanner;

public class Banco {
    public static void main(String[] args) {
        int conta;
        char resp = 'S';
        Scanner scanner = new Scanner(System.in);
        while(resp == 's' || resp == 'S') {
            System.out.println("Banco - BMG");
            System.out.println("\nOpção de conta:");
            System.out.println("1 - Conta corrente");
            System.out.println("2 - Conta poupança");
            System.out.println("3 - Conta estudante");
            System.out.println("\nDigite a opção desejada da abertura da conta:");

            conta = scanner.nextInt();

            switch (conta) {
                case 1:
                    System.out.println("Você escolheu a opção 1");
                    System.out.println("Conta corrente selecionada");
                    System.out.println("Você está no banco - BMG");
                    break;

                case 2:
                    System.out.println("Você escolheu a opção 2");
                    System.out.println("Conta poupança selecionada");
                    System.out.println("Você está no banco - BMG");
                    break;

                case 3:
                    System.out.println("Você escolheu a opção 3");
                    System.out.println("Conta estudante selecionada");
                    System.out.println("Você está no banco - BMG");
                    break;

                default:
                    System.out.println("Opção invàlida");
            }
            System.out.println("Deseja refazer a operação? (S/N)");
            resp = scanner.next().charAt(0);
        }
    }
}
