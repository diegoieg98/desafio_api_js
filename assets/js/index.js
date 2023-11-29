        // variables

let select = document.querySelector("#select");
let boton = document.querySelector("#conversor");
    let apiURL = 'https://www.mindicador.cl/api';
    let dataGrafico = document.getElementById("myChart").getContext('2d');
    
        // Evento del boton Buscar

    boton.addEventListener("click", () => {
        let valorIngresado = document.querySelector("#valorInput").value;
        let resultadoConversion = document.querySelector("#resultado");
        resultadoConversion.innerHTML = 'El resultado es: $' + Number(valorIngresado * select.value);
        resultadoConversion.value = "";
        console.log(select.value)
    });
    
        // Funcion para buscar el valor de la monedas

    async function monedas() {
        try {
            const res = await fetch(apiURL);
            const data = await res.json();
            return data;
        } catch (error) {
            console.log("error 1 " + error.message);
        }
    }
    
        // Render de monedas

    async function renderMonedas() {
        try {
            const data = await monedas();
            let template = "";
            
            for (const moneda in data) {
                if (data[moneda].valor !== undefined) {
                    template += `
                    <option value="${data[moneda].valor}" id=${data[moneda].codigo}">${data[moneda].nombre}</option>
                    `;
                }
            }
            select.innerHTML = template;
        } catch (error) {
            console.log("error2 " + error.message);
        }
    }

    // Funcion del Grafico con condiciones para cada valor

    async function grafico() {
        if(select.value = '36554.14'){
            const endpoint = 'https://mindicador.cl/api/uf';
            const res = await fetch(endpoint);
            const datas = await res.json();
            const fechas = [];
            const valor = [];
            for (let date in datas.serie) {
                fechas.push(datas.serie[date].fecha);
                valor.push(datas.serie[date].valor);
            }
            const data = {
                labels: fechas,
                datasets: [{
                    label: "Ultimos Valores",
                    borderColor: "blue",
                    data: valor
                }]
            };
            const config = {
                type: 'line',
                data
            };
            myChart = new Chart(dataGrafico, config);
        } else if (select.value = '37918.39'){
            const endpoint = 'https://mindicador.cl/api/ivp';
            const res = await fetch(endpoint);
            const datas = await res.json();
            const fechas = [];
            const valor = [];
            for (let date in datas.serie) {
                fechas.push(datas.serie[date].fecha);
                valor.push(datas.serie[date].valor);
            }
            const data = {
                labels: fechas,
                datasets: [{
                    label: "Ultimos Valores",
                    borderColor: "blue",
                    data: valor
                }]
            };
            const config = {
                type: 'line',
                data
            };
            myChart = new Chart(dataGrafico, config);
        } else if (select.value = '872.03'){
            const endpoint = 'https://mindicador.cl/api/dolar';
            const res = await fetch(endpoint);
            const datas = await res.json();
            const fechas = [];
            const valor = [];
            for (let date in datas.serie) {
                fechas.push(datas.serie[date].fecha);
                valor.push(datas.serie[date].valor);
            }
            const data = {
                labels: fechas,
                datasets: [{
                    label: "Ultimos Valores",
                    borderColor: "blue",
                    data: valor
                }]
            };
            const config = {
                type: 'line',
                data
            };
            myChart = new Chart(dataGrafico, config);
        }else if (select.value = '758.87'){
            const endpoint = 'https://mindicador.cl/api/dolar_intercambio';
            const res = await fetch(endpoint);
            const datas = await res.json();
            const fechas = [];
            const valor = [];
            for (let date in datas.serie) {
                fechas.push(datas.serie[date].fecha);
                valor.push(datas.serie[date].valor);
            }
            const data = {
                labels: fechas,
                datasets: [{
                    label: "Ultimos Valores",
                    borderColor: "blue",
                    data: valor
                }]
            };
            const config = {
                type: 'line',
                data
            };
            myChart = new Chart(dataGrafico, config);
        }else if (select.value = '953.46'){
            const endpoint = 'https://mindicador.cl/api/euro';
            const res = await fetch(endpoint);
            const datas = await res.json();
            const fechas = [];
            const valor = [];
            for (let date in datas.serie) {
                fechas.push(datas.serie[date].fecha);
                valor.push(datas.serie[date].valor);
            }
            const data = {
                labels: fechas,
                datasets: [{
                    label: "Ultimos Valores",
                    borderColor: "blue",
                    data: valor
                }]
            };
            const config = {
                type: 'line',
                data
            };
            myChart = new Chart(dataGrafico, config);
        } else if (select.value = '0.4'){
            const endpoint = 'https://mindicador.cl/api/ipc';
            const res = await fetch(endpoint);
            const datas = await res.json();
            const fechas = [];
            const valor = [];
            for (let date in datas.serie) {
                fechas.push(datas.serie[date].fecha);
                valor.push(datas.serie[date].valor);
            }
            const data = {
                labels: fechas,
                datasets: [{
                    label: "Ultimos Valores",
                    borderColor: "blue",
                    data: valor
                }]
            };
            const config = {
                type: 'line',
                data
            };
            myChart = new Chart(dataGrafico, config);
        } else if (select.value = '63960'){
            const endpoint = 'https://mindicador.cl/api/utm';
            const res = await fetch(endpoint);
            const datas = await res.json();
            const fechas = [];
            const valor = [];
            for (let date in datas.serie) {
                fechas.push(datas.serie[date].fecha);
                valor.push(datas.serie[date].valor);
            }
            const data = {
                labels: fechas,
                datasets: [{
                    label: "Ultimos Valores",
                    borderColor: "blue",
                    data: valor
                }]
            };
            const config = {
                type: 'line',
                data
            };
            myChart = new Chart(dataGrafico, config);
        } else if (select.value = '0'){
            const endpoint = 'https://mindicador.cl/api/imacec';
            const res = await fetch(endpoint);
            const datas = await res.json();
            const fechas = [];
            const valor = [];
            for (let date in datas.serie) {
                fechas.push(datas.serie[date].fecha);
                valor.push(datas.serie[date].valor);
            }
            const data = {
                labels: fechas,
                datasets: [{
                    label: "Ultimos Valores",
                    borderColor: "blue",
                    data: valor
                }]
            };
            const config = {
                type: 'line',
                data
            };
            myChart = new Chart(dataGrafico, config);
        } else if (select.value = '9'){
            const endpoint = 'https://mindicador.cl/api/tpm';
            const res = await fetch(endpoint);
            const datas = await res.json();
            const fechas = [];
            const valor = [];
            for (let date in datas.serie) {
                fechas.push(datas.serie[date].fecha);
                valor.push(datas.serie[date].valor);
            }
            const data = {
                labels: fechas,
                datasets: [{
                    label: "Ultimos Valores",
                    borderColor: "blue",
                    data: valor
                }]
            };
            const config = {
                type: 'line',
                data
            };
            myChart = new Chart(dataGrafico, config);
        } else if (select.value = '3.78'){
            const endpoint = 'https://mindicador.cl/api/libra_cobre';
            const res = await fetch(endpoint);
            const datas = await res.json();
            const fechas = [];
            const valor = [];
            for (let date in datas.serie) {
                fechas.push(datas.serie[date].fecha);
                valor.push(datas.serie[date].valor);
            }
            const data = {
                labels: fechas,
                datasets: [{
                    label: "Ultimos Valores",
                    borderColor: "blue",
                    data: valor
                }]
            };
            const config = {
                type: 'line',
                data
            };
            myChart = new Chart(dataGrafico, config);
        } else if (select.value = '8.91'){
            const endpoint = 'https://mindicador.cl/api/tasa_desempleo';
            const res = await fetch(endpoint);
            const datas = await res.json();
            const fechas = [];
            const valor = [];
            for (let date in datas.serie) {
                fechas.push(datas.serie[date].fecha);
                valor.push(datas.serie[date].valor);
            }
            const data = {
                labels: fechas,
                datasets: [{
                    label: "Ultimos Valores",
                    borderColor: "blue",
                    data: valor
                }]
            };
            const config = {
                type: 'line',
                data
            };
            myChart = new Chart(dataGrafico, config);
        } else if (select.value = '37800.94'){
            const endpoint = 'https://mindicador.cl/api/bitcoin';
            const res = await fetch(endpoint);
            const datas = await res.json();
            const fechas = [];
            const valor = [];
            for (let date in datas.serie) {
                fechas.push(datas.serie[date].fecha);
                valor.push(datas.serie[date].valor);
            }
            const data = {
                labels: fechas,
                datasets: [{
                    label: "Ultimos Valores",
                    borderColor: "blue",
                    data: valor
                }]
            };
            const config = {
                type: 'line',
                data
            };
            myChart = new Chart(dataGrafico, config);
            return config;
        }else{
            console.log('error')
        }
    }
    
    renderMonedas();
    grafico();    
