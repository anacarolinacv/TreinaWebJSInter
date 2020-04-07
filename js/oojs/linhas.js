function main(linhas) {
    let i = 0;
    var n = parseInt(linhas[i++]);
    var lista = new Map();
    while(i <= n)
    {
        let linha = new Map();
        let dados = linhas[i].split(' ').map(s => s.trim());
        var d = parseInt(dados[0]);
        for(var j = 1; j <= d; j++)
            linha.set(j, parseInt(dados[j]));
        
        lista.set(i, linha);
        
        i++;
    }

    var q = i + parseInt(linhas[i++]);
    while(i <= q)
    {
        var [y, x] = linhas[i].split(' ').map(s => s.trim()).map(Number);

        let linha = lista.get(y);
        if(linha)
            console.log(linha.get(x) || "ERRO!");
        else
            console.log("ERRO!");
            
        i++;
    }