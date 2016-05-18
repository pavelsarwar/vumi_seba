
function c2p() {
    var $area1 = Number(document.getElementById('area1').value);
    var $year1 = Number(document.getElementById('year1').value);
    var text_msg = '';
    if ($area1 < 825)
    {

      var  $hall_dabi1 = 10;
       var $intarest1 = 0;
      var  $bakeya1 = 10 * $year1;
      var  $total1 = $hall_dabi1 + $bakeya1;
       var $total13 = $total1;
        $hall_dabi1 = 0;
        $bakeya1 = 0;
        if ($area1 !== '') {
            $total1;
            $total13;
        } else {

            $total1 = 0;
            $total13 = 0;
        }



    } else if ($area1 >= 825)
    {
       var $satangso1 = 2;
        $hall_dabi1 = $area1 * $satangso1;
        $intarest1 = ($hall_dabi1 * 0.0625 + $hall_dabi1 * 0.0625 * $year1) * $year1 / 2;
        $bakeya1 = $hall_dabi1 * $year1;
        $total13 = $hall_dabi1 + $bakeya1 + $intarest1;
        $total1 = 0;
    }



   var $area5 = Number(document.getElementById('area5').value);
    var $year5 = Number(document.getElementById('year5').value);
   var $satangso5 = 2;
   var $hall_dabi5 = $area5 * $satangso5;
  var  $intarest5 = ($hall_dabi5 * 0.0625 + $hall_dabi5 * 0.0625 * $year5) * $year5 / 2;
  var  $bakeya5 = $hall_dabi5 * $year5;
   var $total53 = $hall_dabi5 + $bakeya5 + $intarest5;
  var  $total5 = 0;

    $total7 = 0;


  var  $hall_dabi_total = $hall_dabi1 + $hall_dabi5;
   var  $bakeya_total = $bakeya1 + $bakeya5;
    var  $intarest_total = $intarest1 + $intarest5;


   var  $sum_total1 = $total1 + $total5;


   var  $sum_total3 = $total13 + $total53;

    //var top = '<div class="col-md-8 col-md-offset-2" style="font-size:15px;"> <div class="table col-xm-12 col-sm-12 col-md-12 col-lg-12"><table class="table-responsive col-xm-12 col-sm-12 col-md-12 col-lg-12" style="border:3px solid black" border="3"><tr class="danger" style="border:3px solid black"><th style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px;">হাল দাবী </th><th style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#235a01; color:white;"">'+  Math.round(hall_dabi*Math.pow(10,2))/Math.pow(10,2)+'</th><th style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#0276a6; color:white;"">সুদ</th><th style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px;">অন্যান্য</th><th style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px;">মোট দাবী টাকা</th></tr>'; //rad is radius
    var top = '<div class="table"><table class="table-responsive col-xm-12 col-sm-12 col-md-12 col-lg-12" style="border:3px solid black" border="3">';
    var a1 = '<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">হাল দাবী</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#235A01; color:white;">' + Math.round($hall_dabi_total * Math.pow(10, 2)) / Math.pow(10, 2) + '</td></tr>';
    var a2 = '<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#f22a09; color:white;">বকেয়া</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">' + Math.round($bakeya_total * Math.pow(10, 2)) / Math.pow(10, 2) + '</td></tr>';
    var a3 = '<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px;">সুদ</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#235A01; color:white;">' + Math.round($intarest_total * Math.pow(10, 2)) / Math.pow(10, 2) + '</td></tr>';
    var a4 = '<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">অন্যান্য</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#f22a09; color:white;">' + Math.round($sum_total1 * Math.pow(10, 2)) / Math.pow(10, 2) + '</td></tr>';
    var a5 = '<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#f22a09; color:white;">মোট দাবি টাকা</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">' + Math.round($sum_total3 * Math.pow(10, 2)) / Math.pow(10, 2) + '</td></tr></table></div>';
    var a6 = '';

    //var a2='<td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#0276a6; color:white;">'+  Math.round(bakeya*Math.pow(10,2))/Math.pow(10,2) +'</td>';
    //var a3='<td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#0276a6; color:white;">'+  Math.round(intarest*Math.pow(10,2))/Math.pow(10,2) +'</td>';
    //var a4='<td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#f22a09; color:white;">'+  Math.round(total1*Math.pow(10,2))/Math.pow(10,2) +'</td>';
    //var a5='<td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:16px; background:#f22a09; color:white;">'+ Math.round(total3*Math.pow(10,2))/Math.pow(10,2) +'</td>';


    var a6 = '<div style="text-align: center;"><h style=" color: black; font-size: 17px;">' + text_msg + '</h></div>'

    var a = top + a1 + a2 + a3 + a4 + a5;
    result = document.getElementById('result');
    result.innerHTML = a;

    result_text = document.getElementById('result_text');
    result_text.innerHTML = a6;
}
function p2c() {
    var kd_bis_area = Number(document.getElementById('kd_bis_area').value);
    var kd_bis_year = Number(document.getElementById('kd_bis_year').value);

    var satangso = 300.00;
    var hall_dabi1 = kd_bis_area * satangso;
    var intarest1 = (hall_dabi1 * 0.0625 + hall_dabi1 * 0.0625 * kd_bis_year) * kd_bis_year / 2;
    var bakeya1 = hall_dabi1 * kd_bis_year;
    var total1 = hall_dabi1 + bakeya1 + intarest1;




    var kd_sil_area = Number(document.getElementById('kd_sil_area').value);
    var kd_sil_year = Number(document.getElementById('kd_sil_year').value);


    var satangso = 150.00;
    var hall_dabi2 = kd_sil_area * satangso;
    var intarest2 = (hall_dabi2 * 0.0625 + hall_dabi2 * 0.0625 * kd_sil_year) * kd_sil_year / 2;
    var bakeya2 = hall_dabi2 * kd_sil_year;
    var total2 = hall_dabi2 + bakeya2 + intarest2;



    var kd_aba_area = Number(document.getElementById('kd_aba_area').value);
    var kd_aba_year = Number(document.getElementById('kd_aba_year').value);
    /*
     $area=$_POST["area3"];
     $year=$_POST["year3"];
     $satangso=60.00;
     $hall_dabi3= $area * $satangso;
     $intarest3= ($hall_dabi3*0.0625+$hall_dabi3*0.0625*$year)*$year/2;
     $bakeya3= $hall_dabi3*$year;
     $total3=$hall_dabi3+$bakeya3+$intarest3;
     //echo "Total $total3";
     */

    var satangso = 60.00;
    var hall_dabi3 = kd_aba_area * satangso;
    var intarest3 = (hall_dabi3 * 0.0625 + hall_dabi3 * 0.0625 * kd_aba_year) * kd_aba_year / 2;
    var bakeya3 = hall_dabi3 * kd_aba_year;
    var total3 = hall_dabi3 + bakeya3 + intarest3;


    var khd_bis_area = Number(document.getElementById('khd_bis_area').value);
    var khd_bis_year = Number(document.getElementById('khd_bis_year').value);

    var satangso = 250.00;
    var hall_dabi4 = khd_bis_area * satangso;
    var intarest4 = (hall_dabi4 * 0.0625 + hall_dabi4 * 0.0625 * khd_bis_year) * khd_bis_year / 2;
    var bakeya4 = hall_dabi4 * khd_bis_year;
    var total4 = hall_dabi4 + bakeya4 + intarest4;

    var khd_silp_area = Number(document.getElementById('khd_silp_area').value);
    var khd_silp_year = Number(document.getElementById('khd_silp_year').value);

    var satangso = 150.00;
    var hall_dabi5 = khd_silp_area * satangso;
    var intarest5 = (hall_dabi5 * 0.0625 + hall_dabi5 * 0.0625 * khd_silp_year) * khd_silp_year / 2;
    var bakeya5 = hall_dabi5 * khd_silp_year;
    var total5 = hall_dabi5 + bakeya5 + intarest5;

    var khd_aba_area = Number(document.getElementById('khd_aba_area').value);
    var khd_aba_year = Number(document.getElementById('khd_aba_year').value);

    var satangso = 50.00;
    var hall_dabi6 = khd_aba_area * satangso;
    var intarest6 = (hall_dabi6 * 0.0625 + hall_dabi6 * 0.0625 * khd_aba_year) * khd_aba_year / 2;
    var bakeya6 = hall_dabi6 * khd_aba_year;
    var total6 = hall_dabi6 + bakeya6 + intarest6;

    var gd_bis_area = Number(document.getElementById('gd_bis_area').value);
    var gd_bis_year = Number(document.getElementById('gd_bis_year').value);

    var satangso = 200.00;
    var hall_dabi7 = gd_bis_area * satangso;
    var intarest7 = (hall_dabi7 * 0.0625 + hall_dabi7 * 0.0625 * gd_bis_year) * gd_bis_year / 2;
    var bakeya7 = hall_dabi7 * gd_bis_year;
    var total7 = hall_dabi7 + bakeya7 + intarest7;

    var gd_sil_area = Number(document.getElementById('gd_sil_area').value);
    var gd_sil_year = Number(document.getElementById('gd_sil_year').value);

    var satangso = 125.00;
    var hall_dabi8 = gd_sil_area * satangso;
    var intarest8 = (hall_dabi8 * 0.0625 + hall_dabi8 * 0.0625 * gd_sil_year) * gd_sil_year / 2;
    var bakeya8 = hall_dabi8 * gd_sil_year;
    var total8 = hall_dabi8 + bakeya8 + intarest8;


    var gd_aba_area = Number(document.getElementById('gd_aba_area').value);
    var gd_aba_year = Number(document.getElementById('gd_aba_year').value);
    var satangso = 40.00;
    var hall_dabi9 = gd_aba_area * satangso;
    var intarest9 = (hall_dabi9 * 0.0625 + hall_dabi9 * 0.0625 * gd_aba_year) * gd_aba_year / 2;
    var bakeya9 = hall_dabi9 * gd_aba_year;
    var total9 = hall_dabi9 + bakeya9 + intarest9;


    var ghd_bis_area = Number(document.getElementById('ghd_bis_area').value);
    var ghd_bis_year = Number(document.getElementById('ghd_bis_year').value);
    var satangso = 100.00;
    var hall_dabi10 = ghd_bis_area * satangso;
    var intarest10 = (hall_dabi10 * 0.0625 + hall_dabi10 * 0.0625 * ghd_bis_year) * ghd_bis_year / 2;
    var bakeya10 = hall_dabi10 * ghd_bis_year;
    var total10 = hall_dabi10 + bakeya10 + intarest10;


    var ghd_sil_area = Number(document.getElementById('ghd_sil_area').value);
    var ghd_sil_year = Number(document.getElementById('ghd_sil_year').value);
    var satangso = 75.00;
    var hall_dabi11 = ghd_sil_area * satangso;
    var intarest11 = (hall_dabi11 * 0.0625 + hall_dabi11 * 0.0625 * ghd_sil_year) * ghd_sil_year / 2;
    var bakeya11 = hall_dabi11 * ghd_sil_year;
    var total11 = hall_dabi11 + bakeya11 + intarest11;


    var ghd_aba_area = Number(document.getElementById('ghd_aba_area').value);
    var ghd_aba_year = Number(document.getElementById('ghd_aba_year').value);
    var satangso = 20.00;
    var hall_dabi12 = ghd_aba_area * satangso;
    var intarest12 = (hall_dabi12 * 0.0625 + hall_dabi12 * 0.0625 * ghd_aba_year) * ghd_aba_year / 2;
    var bakeya12 = hall_dabi12 * ghd_aba_year;
    var total12 = hall_dabi12 + bakeya12 + intarest12;


    var umm_bis_area = Number(document.getElementById('umm_bis_area').value);
    var umm_bis_year = Number(document.getElementById('umm_bis_year').value);
    var satangso = 60.00;
    var hall_dabi13 = umm_bis_area * satangso;
    var intarest13 = (hall_dabi13 * 0.0625 + hall_dabi13 * 0.0625 * umm_bis_year) * umm_bis_year / 2;
    var bakeya13 = hall_dabi13 * umm_bis_year;
    var total13 = hall_dabi13 + bakeya13 + intarest13;

    var umm_sil_area = Number(document.getElementById('umm_sil_area').value);
    var umm_sil_year = Number(document.getElementById('umm_sil_year').value);
    var satangso = 40.00;
    var hall_dabi14 = umm_sil_area * satangso;
    var intarest14 = (hall_dabi14 * 0.0625 + hall_dabi14 * 0.0625 * umm_sil_year) * umm_sil_year / 2;
    var bakeya14 = hall_dabi14 * umm_sil_year;
    var total14 = hall_dabi14 + bakeya14 + intarest14;


    var umm_aba_area = Number(document.getElementById('umm_aba_area').value);
    var umm_aba_year = Number(document.getElementById('umm_aba_year').value);
    var satangso = 15.00;
    var hall_dabi15 = umm_aba_area * satangso;
    var intarest15 = (hall_dabi15 * 0.0625 + hall_dabi15 * 0.0625 * umm_aba_year) * umm_aba_year / 2;
    var bakeya15 = hall_dabi15 * umm_aba_year;
    var total15 = hall_dabi15 + bakeya15 + intarest15;

    var ch_bis_area = Number(document.getElementById('ch_bis_area').value);
    var ch_bis_year = Number(document.getElementById('ch_bis_year').value);
    var satangso = 40.00;
    var hall_dabi16 = ch_bis_area * satangso;
    var intarest16 = (hall_dabi16 * 0.0625 + hall_dabi16 * 0.0625 * ch_bis_year) * ch_bis_year / 2;
    var bakeya16 = hall_dabi16 * ch_bis_year;
    var total16 = hall_dabi16 + bakeya16 + intarest16;


    var ch_sil_area = Number(document.getElementById('ch_sil_area').value);
    var ch_sil_year = Number(document.getElementById('ch_sil_year').value);
    var satangso = 30.00;
    var hall_dabi17 = ch_sil_area * satangso;
    var intarest17 = (hall_dabi17 * 0.0625 + hall_dabi17 * 0.0625 * ch_sil_year) * ch_sil_year / 2;
    var bakeya17 = hall_dabi17 * ch_sil_year;
    var total17 = hall_dabi17 + bakeya17 + intarest17;


    var ch_aba_area = Number(document.getElementById('ch_aba_area').value);
    var ch_aba_year = Number(document.getElementById('ch_aba_year').value);
    var satangso = 10.00;
    var hall_dabi18 = ch_aba_area * satangso;
    var intarest18 = (hall_dabi18 * 0.0625 + hall_dabi18 * 0.0625 * ch_aba_year) * ch_aba_year / 2;
    var bakeya18 = hall_dabi18 * ch_aba_year;
    var total18 = hall_dabi18 + bakeya18 + intarest18;


    var grand_total = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14 + total15 + total16 + total17 + total18;
    var grand_hall_dabi = hall_dabi1 + hall_dabi2 + hall_dabi3 + hall_dabi4 + hall_dabi5 + hall_dabi6 + hall_dabi7 + hall_dabi8 + hall_dabi9 + hall_dabi10 + hall_dabi11 + hall_dabi12 + hall_dabi13 + hall_dabi14 + hall_dabi15 + hall_dabi16 + hall_dabi17 + hall_dabi18;
    var grand_bakeya = bakeya1 + bakeya2 + bakeya3 + bakeya4 + bakeya5 + bakeya6 + bakeya7 + bakeya8 + bakeya9 + bakeya10 + bakeya11 + bakeya12 + bakeya13 + bakeya14 + bakeya15 + bakeya16 + bakeya17 + bakeya18;
    var grand_intarest = intarest1 + intarest2 + intarest3 + intarest4 + intarest5 + intarest6 + intarest7 + intarest8 + intarest9 + intarest10 + intarest11 + intarest12 + intarest13 + intarest14 + intarest15 + intarest16 + intarest14 + intarest18;


    var top = '<div class="table"><table class="table-responsive col-xm-12 col-sm-12 col-md-12 col-lg-12" style="border:3px solid black" border="3">';
    var a1 = '<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#002256; color:white;">হাল দাবী</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#235A01; color:white;">' + Math.round(grand_hall_dabi * Math.pow(10, 2)) / Math.pow(10, 2) + '</td></tr>';
    var a2 = '<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#005416; color:white;">বকেয়া</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">' + Math.round(grand_bakeya * Math.pow(10, 2)) / Math.pow(10, 2) + '</td></tr>';
    var a3 = '<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#563D11; color:white;">সুদ</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#235A01; color:white;">' + Math.round(grand_intarest * Math.pow(10, 2)) / Math.pow(10, 2) + '</td></tr>';
    //var a4='<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#FF0000; color:white;">অন্যান্য</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#f22a09; color:white;">'+  Math.round(total1*Math.pow(10,2))/Math.pow(10,2) +'</td></tr>';
    var a5 = '<tr class="success"><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#f22a09; color:white;">মোট দাবী টাকা</td><td style="font-family: SolaimanLipi; border-left:3px solid black; text-align:center; font-size:20px; background:#0276a6; color:white;">' + Math.round(grand_total * Math.pow(10, 2)) / Math.pow(10, 2) + '</td></tr></table></div>';
    var a6 = '';


    var a = top + a1 + a2 + a3 + a5;
    result = document.getElementById('result');
    result.innerHTML = a;
}
