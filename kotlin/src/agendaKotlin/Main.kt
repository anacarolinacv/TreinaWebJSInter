package agendaKotlin

import java.util.*

fun main() {

    println("Olá Carol!");
    println("Bem-vinda a sua agenda");
    var opcao: Int? = 0;
    var listaInformacoes: MutableList<Contato>


    println("MENU");
    println("1. CADASTRAR NOVO CONTATO.");
    println("2. QUALIFICA CONTATO.");
    println("3. LISTAR OS CONTATOS. ")
    println("3. REMOVER UM CONTATO");
    opcao = readLine().toInt();

    do {
        when(opcao) {

           1 -> {
               var nomeContato: String? = null;
               var emailContato = String;
               var idadeContato: Int? = null;

               println("Digite o seu nome: ");
               nomeContato = readLine().toString()
               println("Digite o seu nome: ");
               emailContato = readLine().toString()
               println("Digite sua idade: ");
               idadeContato = readLine().toInt();

               var contato1 = Contato(nomeContato, emailContato, idadeContato);
               listaInformacoes.add(contato1);
           }
            2 -> {
                var nomeContato1: String? = null;
                println("INSIRA O NOME DO CONTATO");
                nomeContato1 = readLine().toString();

                for (x in listaInformacoes.indices) {
                    if (listaInformacoes[x].nomeContato != null) {
                        when (listaInformacoes[x].idadeContato) {
                            in 1..17 -> {
                                println("É adolescente")
                            }
                            in 18..64 -> {
                                println("É adulto")
                            }
                            else -> {
                                println("É idoso")
                            }
                        }
                    }
                }
            }
            3 -> {
                for(x in listaInformacoes {
                    println(listaInformacoes[x].toString());
                }
            }

            4 -> {
                println("INSIRA O CONTATO QUE VOCÊ DESEJA REMOVER");
                val contatoRemover: Int? = readLine().toInt();
                if(contatoRemover != null) {
                    listaInformacoes.removeAt(contatoRemover);
                } else {
                    println("Não há esse contato.");
                }
            }
            else -> {
                println("Opção inválida.")
            }

        }
    } while(opcao != 0)
}


