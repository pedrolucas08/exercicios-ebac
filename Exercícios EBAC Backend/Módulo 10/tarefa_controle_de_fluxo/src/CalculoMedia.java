public class CalculoMedia {
    public static void calcularMedia(double nota1, double nota2, double nota3, double nota4) {
        double media = (nota1 + nota2 + nota3 + nota4) / 4;

        if (media >= 7) {
            System.out.println("Média: " + media);
            System.out.println("Aprovado");
        } else if (media >= 5) {
            System.out.println("Média: " + media);
            System.out.println("Recuperação");
        } else {
            System.out.println("Média: " + media);
            System.out.println("Reprovado");
        }
    }
}
