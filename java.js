var mensualPayment = false;
var anualPayment = false;
let periodo = document.getElementById("Periodo")

function SelectPaymentMensual(){
    if (mensualPayment == false && anualPayment == false) {
        document.getElementById("btnMensual").classList.remove("border-2","border-black");
        document.getElementById("btnMensual").classList.add("bg-green-500","text-white");
        periodo.innerHTML = "Mensual";

        mensualPayment = true;
    }
    else{
        document.getElementById("btnMensual").classList.add("border-2","border-black");
        document.getElementById("btnMensual").classList.remove("bg-green-500","text-white");
        if (anualPayment == false) {
            periodo.innerHTML = "a medida";
            }

        mensualPayment = false;
    }
}

function SelectPaymentAnual(){
    if (anualPayment == false && mensualPayment == false) {
        document.getElementById("btnAnual").classList.remove("border-2","border-black");
        document.getElementById("btnAnual").classList.add("bg-green-500","text-white");
        periodo.innerHTML = "Anual";

        anualPayment = true;
    }
    else{
        document.getElementById("btnAnual").classList.add("border-2","border-black");
        document.getElementById("btnAnual").classList.remove("bg-green-500","text-white");
        if (mensualPayment == false) {
        periodo.innerHTML = "a medida";
        }

        anualPayment = false;
    }
}

function SelectPaymentType(){
    let pago = document.getElementById("TipoPago").value
    if (pago == 1) {
        document.getElementById("TipoPagoString").innerHTML = "Unidades"
    }
    else if (pago == 2){
        document.getElementById("TipoPagoString").innerHTML = "Paquetes"
    }
}

function SelectPaymenUnits(){
    let unidades = document.getElementById("unidades").value
    if (unidades > 40){
        document.getElementById("unidades").value = 0
        alert("No puedes ingresar mas de 40 unidadaes")
        console.log(unidades);
    }
}