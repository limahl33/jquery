$('body').css("background", "gold");
$('#formik').change(soucet);
$('#vyslbut').click(soucet);
$('#kontbut').click(kontrola);
$('#odesbut').click(odeslat);

function soucet(){
    let hkol=0;let dkol=0;let skol=0;let gkol=0;
    if($("#horske").is(":checked")) { hkol = $('#pocethor').val();}
    if($("#detske").is(":checked")) { dkol = $('#pocetdet').val();};
    if($("#silnicni").is(":checked")) { skol = $('#pocetsil').val();};
    if ($("#gravel").is(":checked")) { gkol = $('#pocetgra').val();};
    let pocetdni=$('#doba').val(); 
    let koef=1.0; 
    if($("#stresni").is(":checked")){koef=1.05;}
    if($("#tazne").is(":checked")){koef=1.1;}
    $('#f_soucet').val(((hkol*500+dkol*200+skol*1500+gkol*2500)*pocetdni)*koef);
}

function kontrola(){
    soucet(); let textik="";
    let rozdil = ($('#f_limit').val()) - ($('#f_soucet').val());
    if (rozdil<0){textik=`NESTACI, CHYBI ${0-rozdil} KORUN`};
    if (rozdil>0){textik=`S REZERVOU STACI, PREBYVA ${rozdil} KORUN`}
    if (rozdil==0){textik=`LIMIT PRESNE SOUHLASI S VYPOCTENOU CENOU`}
    $("#kontvysl").text(textik);
}

function odeslat(){
    let zemail=""; let odpo="";
    zemail=$('#textx').val();
    let result = zemail.includes("@");
    if (result){ odpo="OBJEDNAVKA BYLA ODESLANA";}
    if (!result){ odpo="NEPLATNÝ EMAIL - ZADEJTE PROSÍM ZNOVU";}
    $("#odeslani").text(odpo);
}