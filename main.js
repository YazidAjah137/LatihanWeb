function getPilihanComputer(){
  const batu = '️🪨';
  const gunting = '✂';
  const kertas = '️🗒';
  const comp = Math.random()
  
  if(comp < 0.34){
    return '️🪨';
  } else if (comp >= 0.34 && comp < 0.68){
    return '✂';
  } else if (comp >= 0.68) {
    return '️🗒';
  }
  
}

function getHasil(comp, player){

const batu = '️🪨';
const gunting = '✂';
const kertas = '️🗒';

if (player == comp) {
  return 'Seri';
} else if (player == batu) {
  
  if (comp == gunting) {
    return 'Menang';
  } else {
    return 'Kalah';
  }
} else if (player == gunting) {
  
  if (comp == kertas) {
    return 'Menang';
  } else {
    return 'Kalah';
  }
  
} else if (player == kertas) {
  
  if (comp == batu) {
    return 'Menang';
  } else {
    return 'Kalah';
  }
  
} 

};


function putar(){
  const imgComputer = document.querySelector('.pil-comp');
  
  const akhirnya = document.getElementById('akhir');
  
  const pilihan = ['️🪨', '✂', '️🗒', '️🪨', '✂', '️🗒'];
  
  const hasil = ['?', '?', '?', '?', '?', '?']
  
  let i = 0;
  
  const waktuMulai = new Date().getTime();
  
  setInterval(function(){
    
    if (new Date().getTime() - waktuMulai > 2500) {
      clearInterval;
      return;
    }
    
    imgComputer.innerHTML = pilihan[i++];
    if (i == pilihan.length) {
      i = 0;
    }
    
    akhirnya.innerHTML = hasil[i++];
    if (i == hasil.length) {
      i = 0;
    }
    
  }, 60);
  
}







const playerBatu = document.getElementById('️🪨');

playerBatu.addEventListener('click',function(){
  
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = playerBatu.className;
  
  const hasilAkhir = getHasil(pilihanComputer, pilihanPlayer);
  
  const pilihanpe = document.getElementById('pilihanmu')
  
  pilihanpe.innerHTML = pilihanPlayer;
  
  putar();
  
  setTimeout(function(){
    
  const imgComp = document.getElementById('pil-comp');
  imgComp.innerHTML = pilihanComputer;
  
  const info = document.getElementById('akhir');
  info.innerHTML = hasilAkhir;
  
  }, 2550)
  
  
  
  
  
  
  //console.log('comp : ' + pilihanComputer);
  //console.log('player : ' + pilihanPlayer);
  //console.log('hasil : ' + hasilAkhir);
  
});




const playerGunting = document.getElementById('✂');

playerGunting.addEventListener('click',function(){
  
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = playerGunting.className;
  
  const hasilAkhir = getHasil(pilihanComputer, pilihanPlayer);
  
  const pilihanpe = document.getElementById('pilihanmu')
  
  pilihanpe.innerHTML = pilihanPlayer;
  
  putar();
  
  setTimeout(function(){
    
  const imgComp = document.getElementById('pil-comp');
  imgComp.innerHTML = pilihanComputer;
  
  const info = document.getElementById('akhir');
  info.innerHTML = hasilAkhir;
    
  }, 2550)
  
  
  
  //console.log('comp : ' + pilihanComputer);
  //console.log('player : ' + pilihanPlayer);
  //console.log('hasil : ' + hasilAkhir);
  
});




const playerKertas = document.getElementById('️🗒');

playerKertas.addEventListener('click',function(){
  
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = playerKertas.className;
  
  const hasilAkhir = getHasil(pilihanComputer, pilihanPlayer);
  
  const pilihanpe = document.getElementById('pilihanmu')
  
  pilihanpe.innerHTML = pilihanPlayer;
  
  putar();
  
  setTimeout(function(){
    
  const imgComp = document.getElementById('pil-comp');
  imgComp.innerHTML = pilihanComputer;
  
  const info = document.getElementById('akhir');
  info.innerHTML = hasilAkhir;
    
  }, 2550)
  
  
  
  //console.log('comp : ' + pilihanComputer);
  //console.log('player : ' + pilihanPlayer);
  //console.log('hasil : ' + hasilAkhir);
  
});

//Tambah Score Pemain






