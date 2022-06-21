import java.util.Scanner;

public class Media {
    public static void main (String [] args) {
        Scanner nome = new Scanner(System.in);
        String aluno;
        System.out.println ("Digite seu nome: ");
        aluno = nome.nextLine();

        System.out.println ("Digite duas notas: ");
        double nota = nome.nextDouble();
        double nota2 = nome.nextDouble();
        double media = (nota + nota2)/ 2;
        System.out.println(aluno + " sua média é:" + media );
        nome.close();
    }
}


