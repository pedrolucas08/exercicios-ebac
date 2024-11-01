import java.util.Scanner;

public class Wrapper {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite um número: ");
        int numero1 = scanner.nextInt();
        scanner.close();
        Integer numero2 = numero1;

        System.out.println("Número: " + numero2);
    }
}
