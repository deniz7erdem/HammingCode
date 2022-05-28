var input = document.getElementById('data');
var select = document.getElementById('select');
var parRes = document.getElementById('parityRes');
var cheRes = document.getElementById('checkRes');

var p = []
var c;
function bitSelect(val) {
    if (document.getElementById('fso')) { fso = document.getElementById('fso').remove(); input.placeholder = 'Veri Giriniz'; }
    input.value = '';
    input.maxLength = val;
    input.disabled = false;
    
}

function partiyCode() {
    cheRes.innerHTML='';
    var data = input.value.split('');
    for (var i = 0; i < data.length; i++) {
        data[i] = parseInt(data[i]);
    }
    switch (select.value) {
        case '99':
            alert('Veri biti seçin');
            break;

        case '4':
            var p1 = data[0] ^ data[1] ^ data[3];
            var p2 = data[0] ^ data[2] ^ data[3];
            var p4 = data[1] ^ data[2] ^ data[3];
            p = [p1, p2, data[0], p4, data[1], data[2], data[3]];

            parRes.innerHTML = `<h6 class="display-6"> Parity bitleri p1: ${p1},  p2: ${p2},  p4: ${p4}</h6>
             <table class='table table-bordered text-white'>
                <tr><td><u><b>p1</b></u></td><td><u><b>p2</b></u></td><td>p3</td><td><u><b>p4</b></u></td><td>p5</td><td>p6</td><td>p7</td></tr>
                <tr><td><u><b>${p1}</b></u></td><td><u><b>${p2}</b></u></td><td>${data[0]}</td><td><u><b>${p4}</b></u></td><td>${data[1]}</td><td>${data[2]}</td><td>${data[3]}</td></tr>
                <tr><td><u><button class='btn btn-outline-danger btn-sm' onclick='check(4,0)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(4,1)'>x</button></u></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(4,2)'>x</button></td><td><u><button class='btn btn-outline-danger btn-sm' onclick='check(4,3)'>x</button></u></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(4,4)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(4,5)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(4,6)'>x</button></td></tr>
             </table>`
            break;


        case '8':
            var p1 = data[0] ^ data[1] ^ data[3] ^ data[4] ^ data[6];
            var p2 = data[0] ^ data[2] ^ data[3] ^ data[5] ^ data[6];
            var p4 = data[1] ^ data[2] ^ data[3] ^ data[7];
            var p8 = data[4] ^ data[5] ^ data[6] ^ data[7];
            p = [p1, p2, data[0], p4, data[1], data[2], data[3], p8, data[4], data[5], data[6], data[7]];

            parRes.innerHTML = `<h6 class="display-6"> Parity bitleri p1: ${p1},  p2: ${p2},  p4: ${p4}</h6>
                 <table class='table table-bordered text-white'>
                    <tr><td><u><b>p1</b></u></td><td><u><b>p2</b></u></td><td>p3</td><td><u><b>p4</b></u></td><td>p5</td><td>p6</td><td>p7</td><td><u><b>p8</b></u></td><td>p9</td><td>p10</td><td>p11</td><td>p12</td></tr>
                    <tr><td><u><b>${p1}</b></u></td><td><u><b>${p2}</b></u></td><td>${data[0]}</td><td><u><b>${p4}</b></u></td><td>${data[1]}</td><td>${data[2]}</td><td>${data[3]}</td><td><u><b>${p8}</b></u></td><td>${data[4]}</td><td>${data[5]}</td><td>${data[6]}</td><td>${data[7]}</td></tr>
                    <tr><td><u><button class='btn btn-outline-danger btn-sm' onclick='check(8,0)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(8,1)'>x</button></u></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(8,2)'>x</button></td><td><u><button class='btn btn-outline-danger btn-sm' onclick='check(8,3)'>x</button></u></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(8,4)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(8,5)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(8,6)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(8,7)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(8,8)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(8,9)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(8,10)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(8,11)'>x</button></td></tr>
                 </table>`
            break;

        case '16':

            var p1 = data[0] ^ data[1] ^ data[3] ^ data[4] ^ data[6] ^ data[8] ^ data[10] ^ data[11] ^ data[13] ^ data[15];
            var p2 = data[0] ^ data[2] ^ data[3] ^ data[5] ^ data[6] ^ data[9] ^ data[10] ^ data[12] ^ data[13] ^ data[15];
            var p4 = data[1] ^ data[2] ^ data[3] ^ data[7] ^ data[8] ^ data[9] ^ data[10] ^ data[15];
            var p8 = data[4] ^ data[5] ^ data[6] ^ data[7] ^ data[8] ^ data[9] ^ data[10];
            var p16 = data[11] ^ data[12] ^ data[13] ^ data[14] ^ data[15];
            p = [p1, p2, data[0], p4, data[1], data[2], data[3], p8, data[4], data[5], data[6], data[7], data[8], data[9], data[10], p16, data[11], data[12], data[13], data[14], data[15]];

            parRes.innerHTML = `<h6 class="display-6"> Parity bitleri p1: ${p1},  p2: ${p2},  p4: ${p4}</h6>
            <table class='table table-bordered text-white'>
               <tr><td><u><b>p1</b></u></td><td><u><b>p2</b></u></td><td>p3</td><td><u><b>p4</b></u></td><td>p5</td><td>p6</td><td>p7</td><td><u><b>p8</b></u></td><td>p9</td><td>p10</td><td>p11</td><td>p12</td><td>p13</td><td>p14</td><td>p15</td><td><u><b>p16</b></u></td><td>p17</td><td>p18</td><td>p19</td><td>p20</td><td>p21</td></tr>
               <tr><td><u><b>${p1}</b></u></td><td><u><b>${p2}</b></u></td><td>${data[0]}</td><td><u><b>${p4}</b></u></td><td>${data[1]}</td><td>${data[2]}</td><td>${data[3]}</td><td><u><b>${p8}</b></u></td><td>${data[4]}</td><td>${data[5]}</td><td>${data[6]}</td><td>${data[7]}</td><td>${data[8]}</td><td>${data[9]}</td><td>${data[10]}</td><td><u><b>${p16}</b></u></td><td>${data[11]}</td><td>${data[12]}</td><td>${data[13]}</td><td>${data[14]}</td><td>${data[15]}</td></tr>
               <tr><td><u><button class='btn btn-outline-danger btn-sm' onclick='check(16,0)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(16,1)'>x</button></u></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(16,2)'>x</button></td><td><u><button class='btn btn-outline-danger btn-sm' onclick='check(16,3)'>x</button></u></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(16,4)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(16,5)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(16,6)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(16,7)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(16,8)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(16,9)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(16,10)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(16,11)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(16,12)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(16,13)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(16,14)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(16,15)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(16,16)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(16,17)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(16,18)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(16,19)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(16,20)'>x</button></td></tr>
            </table>`

            break;


        default:

            var er = new Error('Beklenmeyen bit türü 1');
            alert(er);
            console.log(er);
            break;
    }

}

function check(bit, error) {
    var pCheck = [...p];
    pCheck[error] = p[error] == 0 ? 1 : 0;
    switch (bit) {
        case 4:

            var c1 = pCheck[0] ^ pCheck[2] ^ pCheck[4] ^ pCheck[6];
            var c2 = pCheck[1] ^ pCheck[2] ^ pCheck[5] ^ pCheck[6];
            var c4 = pCheck[3] ^ pCheck[4] ^ pCheck[5] ^ pCheck[6];
            c = c4 + '' + c2 + '' + c1;
            c = parseInt(c, 2);
            if (c != 0) {
                cheRes.innerHTML = `<hr><h6 class="display-6">p${error + 1} biti hatalandırılmıştır. Yeni verimiz: </h6>
                <table class='table table-bordered text-white'>
                <tr><td>p1</td><td>p2</td><td>p3</td><td>p4</td><td>p5</td><td>p6</td><td>p7</td></tr>
                <tr><td>${pCheck[0]}</td><td>${pCheck[1]}</td><td>${pCheck[2]}</td><td>${pCheck[3]}</td><td>${pCheck[4]}</td><td>${pCheck[5]}</td><td>${pCheck[6]}</td></tr></table><p style='font-size:20px;'>Check bitleri c4: ${c4},  c2: ${c2},  c1: ${c1} - C: ${c4}${c2}${c1}  <br> Check bitlerinden hatanın p${c} bitinde olduğunu doğrulayabiliriz.</p>
                `
            }
            break;

        case 8:
            var c1 = pCheck[0] ^ pCheck[2] ^ pCheck[4] ^ pCheck[6] ^ pCheck[8] ^ pCheck[10];
            var c2 = pCheck[1] ^ pCheck[2] ^ pCheck[5] ^ pCheck[6] ^ pCheck[9] ^ pCheck[10];
            var c4 = pCheck[3] ^ pCheck[4] ^ pCheck[5] ^ pCheck[6] ^ pCheck[11];
            var c8 = pCheck[7] ^ pCheck[8] ^ pCheck[9] ^ pCheck[10] ^ pCheck[11];
            c = c8 + '' + c4 + '' + c2 + '' + c1;
            c = parseInt(c, 2);

            if (c != 0) {
                cheRes.innerHTML = `<hr><h6 class="display-6">p${error + 1} biti hatalandırılmıştır. Yeni verimiz: </h6>
                <table class='table table-bordered text-white'>
                <tr><td>p1</td><td>p2</td><td>p3</td><td>p4</td><td>p5</td><td>p6</td><td>p7</td><td>p8</td><td>p9</td><td>p10</td><td>p11</td><td>p12</td></tr>
                <tr><td>${pCheck[0]}</td><td>${pCheck[1]}</td><td>${pCheck[2]}</td><td>${pCheck[3]}</td><td>${pCheck[4]}</td><td>${pCheck[5]}</td><td>${pCheck[6]}</td><td>${pCheck[7]}</td><td>${pCheck[8]}</td><td>${pCheck[9]}</td><td>${pCheck[10]}</td><td>${pCheck[11]}</td></tr></table><p style='font-size:20px;'>Check bitleri c8: ${c8} c4: ${c4},  c2: ${c2},  c1: ${c1} - C: ${c8}${c4}${c2}${c1}  <br> Check bitlerinden hatanın p${c} bitinde olduğunu doğrulayabiliriz.</p>
                `
            }
            break;

        case 16:
            var c1 = pCheck[0] ^ pCheck[2] ^ pCheck[4] ^ pCheck[6] ^ pCheck[8] ^ pCheck[10] ^ pCheck[12] ^ pCheck[14] ^ pCheck[16] ^ pCheck[18] ^ pCheck[20];
            var c2 = pCheck[1] ^ pCheck[2] ^ pCheck[5] ^ pCheck[6] ^ pCheck[9] ^ pCheck[10] ^ pCheck[13] ^ pCheck[14] ^ pCheck[17] ^ pCheck[18];
            var c4 = pCheck[3] ^ pCheck[4] ^ pCheck[5] ^ pCheck[6] ^ pCheck[11] ^ pCheck[12] ^ pCheck[13] ^ pCheck[14] ^ pCheck[19] ^ pCheck[20];
            var c8 = pCheck[7] ^ pCheck[8] ^ pCheck[9] ^ pCheck[10] ^ pCheck[11] ^ pCheck[12] ^ pCheck[13] ^ pCheck[14];
            var c16 = pCheck[15] ^ pCheck[16] ^ pCheck[17] ^ pCheck[18] ^ pCheck[19] ^ pCheck[20];
            c = c16 + '' + c8 + '' + c4 + '' + c2 + '' + c1;
            c = parseInt(c, 2);

            if (c != 0) {
                cheRes.innerHTML = `<hr><h6 class="display-6">p${error + 1} biti hatalandırılmıştır. Yeni verimiz: </h6>
                <table class='table table-bordered text-white'>
                <tr><td>p1</td><td>p2</td><td>p3</td><td>p4</td><td>p5</td><td>p6</td><td>p7</td><td>p8</td><td>p9</td><td>p10</td><td>p11</td><td>p12</td><td>p13</td><td>p14</td><td>p15</td><td>p16</td><td>p17</td><td>p18</td><td>p19</td><td>p20</td><td>p21</td></tr>
                <tr><td>${pCheck[0]}</td><td>${pCheck[1]}</td><td>${pCheck[2]}</td><td>${pCheck[3]}</td><td>${pCheck[4]}</td><td>${pCheck[5]}</td><td>${pCheck[6]}</td><td>${pCheck[7]}</td><td>${pCheck[8]}</td><td>${pCheck[9]}</td><td>${pCheck[10]}</td><td>${pCheck[11]}</td><td>${pCheck[12]}</td><td>${pCheck[13]}</td><td>${pCheck[14]}</td><td>${pCheck[15]}</td><td>${pCheck[16]}</td><td>${pCheck[17]}</td><td>${pCheck[18]}</td><td>${pCheck[19]}</td><td>${pCheck[20]}</td></tr></table><p style='font-size:20px;'>Check bitleri c16: ${c16}  c8: ${c8} c4: ${c4},  c2: ${c2},  c1: ${c1} - C: ${c16}${c8}${c4}${c2}${c1}  <br> Check bitlerinden hatanın p${c} bitinde olduğunu doğrulayabiliriz.</p>
                `
            }
            break;
        default:
            var er = new Error('Beklenmeyen bit kontrol türü 2');
            alert(er);
            console.log(er);
            break;
    }

}