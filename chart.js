
function graficoPedidos(){
$.ajax({
    url: 'pedidos.php',
    type: 'GET',
    success: function(response){
    var nombre = []
    var num = []
    var pedidos = JSON.parse(response)
    for(var p=0;p < pedidos.length;p++){
        nombre.push(pedidos[p][1] + "s")
        num.push(pedidos[p][0])
    }
//////
    const ctx = document.getElementById('graficaPedidos');
    const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: nombre,
        datasets: [{
            label: 'SISGRAN',
            data: num, 
            backgroundColor: [
                'rgba(255, 150, 45, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(249, 243, 68, 0.7)',
                'rgba(168, 237, 89, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(237, 79, 79, 0.7)'
            ],
            borderColor: [
                'rgba(255, 150, 45, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(249, 243, 68)',
                'rgba(168, 237, 89)',
                'rgba(153, 102, 255, 1)',
                'rgba(237, 79, 79)'
            ],
            borderWidth: 3
        }]
    },

});
////////
    }
})
}
graficoPedidos()
