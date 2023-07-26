var mensualPayment = false;
var anualPayment = false;
let periodo = document.getElementById("Periodo");    
let precio = document.getElementById("Oferta");

function SelectPaymentMensual(){
    if (mensualPayment == false && anualPayment == false) {
        document.getElementById("btnMensual").classList.remove("border-2","border-black");
        document.getElementById("btnMensual").classList.add("bg-green-500","text-white");
        periodo.innerHTML = "Mensual";
        event.preventDefault();

        mensualPayment = true;
        SelectPaymenUnits()
    }
    else{
        document.getElementById("btnMensual").classList.add("border-2","border-black");
        document.getElementById("btnMensual").classList.remove("bg-green-500","text-white");
        if (anualPayment == false) {
            periodo.innerHTML = "a medida";
            precio.innerHTML = "OFERTA";
            }
            event.preventDefault();

        mensualPayment = false;
    }
}

function SelectPaymentAnual(){
    if (anualPayment == false && mensualPayment == false) {
        document.getElementById("btnAnual").classList.remove("border-2","border-black");
        document.getElementById("btnAnual").classList.add("bg-green-500","text-white");
        periodo.innerHTML = "Anual";
        event.preventDefault();

        anualPayment = true;
        SelectPaymenUnits()
    }
    else{
        document.getElementById("btnAnual").classList.add("border-2","border-black");
        document.getElementById("btnAnual").classList.remove("bg-green-500","text-white");
        if (mensualPayment == false) {
        periodo.innerHTML = "a medida";
        precio.innerHTML = "OFERTA";
        }
        event.preventDefault();

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
    if (unidades > 40)
    {
        document.getElementById("unidades").value = 0;
        alert("No puedes ingresar mas de 40 unidadaes");
        document.getElementById("UnidadesString").innerHTML = "X";
        precio.innerHTML = "OFERTA";
    }
    else if(unidades == "")
    {
        document.getElementById("UnidadesString").innerHTML = "X";
    }
    else
    {
        document.getElementById("UnidadesString").innerHTML = unidades;

        if (mensualPayment == true) 
        {
            if (unidades > 0 && unidades <= 4) 
            {
                precio.innerHTML = "$4.99";
            }
            else if (unidades >= 5 && unidades <= 20) 
            {
                precio.innerHTML = "$4.49";
            }
            else if (unidades >=21 && unidades <= 40) 
            {
                precio.innerHTML = "$3.99";
            }
            else
            {
                precio.innerHTML = "OFERTA";
            }
        }
        else if (anualPayment == true) 
        {
            if (unidades > 0 && unidades <= 4) 
            {
                precio.innerHTML = "$59.88";
            }
            else if (unidades >= 5 && unidades <= 20) 
            {
                precio.innerHTML = "$53.88";
            }
            else if (unidades >=21 && unidades <= 40) 
            {
                precio.innerHTML = "$47.88";
            }
            else
            {
                precio.innerHTML = "OFERTA";
            }
        }
        else
        {
            precio.innerHTML = "OFERTA";
        }

        
    }
    
}