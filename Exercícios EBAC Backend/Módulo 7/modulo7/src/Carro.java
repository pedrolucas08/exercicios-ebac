public class Carro {

  private String marca;
  private String nome;
  private String anoFabricacao;
  private double quantidadeCavalos;
  private int velocidade;

  public String getMarca() {
    return this.marca;
  }

  public void setMarca(String marca) {
    this.marca = marca;
  }

  public String getNome() {
    return this.nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public String getAnoFabricacao() {
    return this.anoFabricacao;
  }

  public void setAnoFabricacao(String anoFabricacao) {
    this.anoFabricacao = anoFabricacao;
  }

  public double getQuantidadeCavalos() {
    return this.quantidadeCavalos;
  }

  public void setQuantidadeCavalos(double quantidadeCavalos) {
    this.quantidadeCavalos = quantidadeCavalos;
  }

  public int getVelocidade() {
    return this.velocidade;
  }

  public void acelerar(int velocidadeDesejada) {
    for (int i = 2; this.velocidade <= velocidadeDesejada; i = 2) {
      if (velocidadeDesejada - this.velocidade == 1) {
        this.velocidade += 1;
        break;
      } else if (this.velocidade == velocidadeDesejada) {
        break;
      }

      this.velocidade += i;
    }
  }

  public void parar() {
    for (int i = 10; i <= this.velocidade; i = 10) {
      this.velocidade -= i;

      if (this.velocidade < 10) {
        this.velocidade = 0;
      }
    }
  }
}
