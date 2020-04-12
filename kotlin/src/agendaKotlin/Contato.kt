package agendaKotlin

class Contato () {
    var nomeContato: String? = null;
    var emailContato: String
    var idadeContato: Int

    constructor(nomeContato: Contato, emailContato: Contato, idadeContato: Contato) {
        this.nomeContato = nomeContato;
        this.emailContato = emailContato;
        this.idadeContato = idadeContato;
    }

    override fun equals(other: Any?): Boolean {
        return super.equals(other)
    }

    override fun toString(): String {
        return super.toString()
    }
}