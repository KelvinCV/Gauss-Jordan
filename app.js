const fileSelector = document.getElementById('file-selector');

fileSelector.addEventListener('change', function(event){

    if (fileSelector) {
        fileSelector.addEventListener('click', event, false);
    }

    const file = event.target.files[0];

    if (file) {
        let a = new LinearAlgebra();
        let reader = new FileReader(file);
        let firstLine = true;

        reader.onload = function() {

            let lines = reader.result.split('\n');
            let matrix;

            for (let i = 0; i < lines.length; i++) {
                if (!lines[i].startsWith('%') && lines[i] != '') {
                    let aux = lines[i].split(' ');
                    if (firstLine){
                        matrix = new Matrix(parseInt(aux[0]), parseInt(aux[1]))
                        firstLine = false;
                    } else {
                        matrix.set(parseInt(aux[0]), parseInt(aux[1]), parseInt(aux[2]))
                    }
                }
            }
            
            if (matrix.rows != matrix.cols-1) {
                alert("A entrada deve ser uma matriz AUMENTADA.");
            }
            
            console.log(matrix);
            // Marcação do tempo: início
            let start = Date.now();

            // Gauss-Jordan
            let gaussJordan = a.solve(matrix);
            
            // Marcação do tempo: fim
            let stop = Date.now();

            // Resultados 
            console.log(gaussJordan);
            console.log(stop - start);

            var tempo = 0;
            var tempo = stop - start;
            document.write(`Matrix in: ${JSON.stringify(matrix)}`)
            document.write("<h3>Matrix out: " + JSON.stringify(gaussJordan) + "</h3>");
            document.write(`runtime = ${tempo}ms`);         
        }
        reader.readAsText(file);
    }
})