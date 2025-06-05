
class Produto {
    private String nome;
    private double preco;

    public Produto(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
    }

    public void exibirInfo() {
        System.out.println("Nome: " + nome);
        System.out.println(String.format("Preço: R$%.2f", preco));
    }
}


    private String autor;
    private int numeroPaginas;
    private boolean capaDura;

    public Livro(String nome, double preco, String autor, int numeroPaginas, boolean capaDura) {
        super(nome, preco); 
        this.autor = autor;
        this.numeroPaginas = numeroPaginas;
        this.capaDura = capaDura;
    }

    @Override 
    public void exibirInfo() {
        super.exibirInfo(); 
        System.out.println("Autor: " + autor);
        System.out.println("Número de Páginas: " + numeroPaginas);
        System.out.println("Capa Dura: " + (capaDura ? "Sim" : "Não"));
    }
}


class Camisa extends Produto {
    private String cor;
    private String tamanho;
    private String material;

    public Camisa(String nome, double preco, String cor, String tamanho, String material) {
        super(nome, preco); 
        this.cor = cor;
        this.tamanho = tamanho;
        this.material = material;
    }

    @Override 
    public void exibirInfo() {
        super.exibirInfo(); 
        System.out.println("Cor: " + cor);
        System.out.println("Tamanho: " + tamanho);
        System.out.println("Material: " + material);
    }
}


public class Main {
    public static void main(String[] args) {
        System.out.println("--- Informações do Livro ---");
        Livro livro1 = new Livro("Dom Casmurro", 35.90, "Machado de Assis", 256, true);
        livro1.exibirInfo();
        System.out.println("\n");

        System.out.println("--- Informações da Camisa ---");
        Camisa camisa1 = new Camisa("Camisa Polo Azul", 89.99, "Azul", "M", "Algodão");
        camisa1.exibirInfo();
        System.out.println("\n");

        System.out.println("--- Informações de Outro Livro ---");
        Livro livro2 = new Livro("O Pequeno Príncipe", 22.50, "Antoine de Saint-Exupéry", 96, false);
        livro2.exibirInfo();
        System.out.println("\n");

        System.out.println("--- Informações de Outra Camisa ---");
        Camisa camisa2 = new Camisa("Camisa Esportiva Preta", 129.90, "Preta", "G", "Poliéster");
        camisa2.exibirInfo();
        System.out.println("\n");
    }
}