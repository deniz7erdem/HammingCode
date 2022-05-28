var input = document.getElementById('data');
var select = document.getElementById('select');
var parRes = document.getElementById('parityRes');
var cheRes = document.getElementById('checkRes');


var p = []
var c;
function bitSelect(val) {
    // fso=document.getElementById('fso').remove();
    input.placeholder='Veri Giriniz';
    input.maxLength = val==99?0:val;
    input.disabled =false;
    input.value='';
}

function partiyCode() {
    switch (select.value) {
        case '99':
            alert('Veri biti seçin');
            break;

        case '4':
            let data = input.value.split('');
            for (let i = 0; i < data.length; i++) {
                data[i]=parseInt(data[i]);
                
            }
            let p1 = data[0] ^ data[1] ^ data[3];
            let p2 = data[0] ^ data[2] ^ data[3];
            let p4 = data[1] ^ data[2] ^ data[3];
            p = [p1, p2, data[0], p4, data[1], data[2], data[3]];

            parRes.innerHTML = `<h6 class="display-6"> Parity bitleri p1: ${p1},  p2: ${p2},  p4: ${p4}</h6>
             <table class='table table-bordered text-white'>
                <tr><td><u><b>p1</b></u></td><td><u><b>p2</b></u></td><td>p3</td><td><u><b>p4</b></u></td><td>p5</td><td>p6</td><td>p7</td></tr>
                <tr><td><u><b>${p1}</b></u></td><td><u><b>${p2}</b></u></td><td>${data[0]}</td><td><u><b>${p4}</b></u></td><td>${data[1]}</td><td>${data[2]}</td><td>${data[3]}</td></tr>
                <tr><td><u><button class='btn btn-outline-danger btn-sm' onclick='check(4,0)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(4,1)'>x</button></u></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(4,2)'>x</button></td><td><u><button class='btn btn-outline-danger btn-sm' onclick='check(4,3)'>x</button></u></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(4,4)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(4,5)'>x</button></td><td><button class='btn btn-outline-danger btn-sm' onclick='check(4,6)'>x</button></td></tr>
             </table>`

            break;

        default:
            alert('Beklenmeyen durum');
            break;
    }

}

function check(bit, error) {

    switch (bit) {
        case 4:
            //console.log(error);
            let pCheck=[...p];
            pCheck[error]=p[error]==0?1:0;
            // if(p[error]==0){
            //     pCheck[error]=1;
            // }
            //pCheck[error] = !pCheck[error];
            let c1 = pCheck[0] ^ pCheck[2] ^ pCheck[4] ^ pCheck[6];
            let c2 = pCheck[1] ^ pCheck[2] ^ pCheck[5] ^ pCheck[6];
            let c4 = pCheck[3] ^ pCheck[4] ^ pCheck[5]^ pCheck[6];
            c = c4 +''+ c2 +''+ c1;
            c=parseInt(c,2);
            console.log(c);
            if (c != 0) {
                cheRes.innerHTML=`<hr><h6 class="display-6">p${error+1} biti hatalandırılmıştır. Yeni verimiz: </h6>
                <table class='table table-bordered text-white'>
                <tr><td>p1</td><td>p2</td><td>p3</td><td>p4</td><td>p5</td><td>p6</td><td>p7</td></tr>
                <tr><td>${pCheck[0]}</td><td>${pCheck[1]}</td><td>${pCheck[2]}</td><td>${pCheck[3]}</td><td>${pCheck[4]}</td><td>${pCheck[5]}</td><td>${pCheck[6]}</td></tr></table><p style='font-size:20px;'>Check bitleri c4: ${c4},  c2: ${c2},  c1: ${c1} - C: ${c4}${c2}${c1}  <br> Check bitlerinden hatanın p${c} bitinde olduğunu doğrulayabiliriz.</p>
                `
            }
            break;

        default:
            break;
    }

}