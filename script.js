$(() => {
    var url = $("#txtURL")
    var keyList = $("#txtLista")
    var result = $("#txtResult")  

    $("#btnGerar").on("click", ()=>{
        let string_result = url.val()
        if(string_result.charAt(string_result.length-1) != "/"){
            string_result += "/"
            url.val(string_result)
        }

        let keys = []
        $.each(keyList.val().split(/\n/), (i, line) => {
            if(line){
                line = line.replace(/ /g, "-")
                keys.push(line);
            } else {
                keys.push("");
            }
        });

        let resultString = "";
        $.each(keys, (i,key) => {
            resultString += url.val()+key;
            if(i < keys.length-1){
                resultString += "\n"
            }
        })  
        result.val(resultString)         
    })

    $("#btnCopiar").on("click", ()=>{
        navigator.clipboard.writeText(result.val())
        .then(() => alert("Testo Copiado"))
        .catch( () => alert(("Falha ao copiar o Texto")))
    })
})