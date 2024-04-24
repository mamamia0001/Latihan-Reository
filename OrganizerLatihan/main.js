//alert('halo');

//console.log('halo')

//prompt('masukan usia anda')

//let nama = 'Gde Beefolk'
//let usia = 17
//let pacar = null
//console.log('Halo, usia kamu ' + usia, 'nama saya ' + nama)

//'nama saya ' +nama,
//'tinggi badan saya ' +tinggiBadan,
//'hobi saya ' +hobi,
//'saya lahir di ' +tempatLahir.kota,
// alert (`nama saya ${nama} usia saya ${usia}`)

//let saldoAwal = 5000
//let saldoTambahan = 1000
//const hutang = 3000
//const saldoAkhir = saldoAwal + saldoTambahan - hutang

//alert(`nama saya ${nama} usia saya ${usia}`)
//alert(`saya memiliki saldo Rp ${saldoAwal}`)

//ini array
//let namaMahasiswa = ['Mie', 'Shie', 'Chao']
//namaMahasiswa.push('Makan', 'Mie')
//namaMahasiswa.shift()
//namaMahasiswa.pop()
//alert (namaMahasiswa)[1],[2]

//ini for loop
//for (let i = 1; i <= 10; i = i + 1){
//    console.log('dasar javascript')
//}

//const namaMahasiswa=['Mie', 'Shie', 'Chao']
//for (let i = 0; i < namaMahasiswa.length ;i++){
//    console.log('NIM :${i+1} nama : ${namaMahasiswa[i]}');
//}

console.log(document.title)
document.title = 'pemrograman Web'
console.log(document.title)

console.log(document.body)

const body = document.body
body.append('Hello World!')

const h1 = document.createElement('h1')
h1.textContent = 'Ini adalah baris Heading 1'

const variablePertama = document.createElement('p')
variablePertama.innerHTML = '<marquee>Ini merupakan baris paragraph</marquee>'

const variableKedua = document.createElement('b')
variableKedua.innerText = 'ini merupakan baris dengan tulisan bold'

const variableKetiga = document.createElement('p')
variableKetiga.innerHTML = '<marquee width="60%" direction="up" height= "100px">Ini merupakan paragraph</marquee>'

body.append(h1)
body.append(variablePertama)
body.append(variableKedua)
body.append(variableKetiga)

const btn1 = document.getElementById('btn1')
btn1.style.border = 'none'
btn1.style.padding = '8px'
btn1.style.fontSize = '24px'
btn1.style.background = 'tomato'

const btn2 = document.querySelector('.btn2')
console.log(btn2)

//function gantiWarna