package kmain

import java.util.*

fun main() {
    println("Hello World");

    // VARIAVEIS

    // igual
    //var idade : Int = 10;
    //var idade2 = 10;
    // declaracao de float
    //var altura = 5.5f
    //val nome = "Ana Carolina";
    // muda a tipagem da variavel
    //val bb = idade.toFloat() is Float
    //println(bb);

    // USANDO SCANNER DO JAVA

    //println("Bem vindo ao nosso cadastro!");
    val nomeContato : String;
    val idade : Int;
    //println("Digite o seu nome: ");
    val input = Scanner(System.`in`);
    //nomeContato = input.nextLine();
    //println("Digite sua idade: ");
    idade = input.nextInt();
    //input.nextLine();

    //println(nomeContato);
    //println(idade);

    // USANDO READLINE

    println("Digite o seu nome: ");
    nomeContato = readLine().toString();
    println("Digite sua idade: ");
    // nao funciona mt bem com inteiros sem condicionar antes
    //nullpoint

    // sinomimo de switch case
    when(idade) {
        in 1 .. 17 -> println("Menor de idade");
        in 18..64 -> println("Já pode ser preso ihu");
         else -> println("Idoso");
    }

    


}