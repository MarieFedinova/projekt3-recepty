const recepty = [
  { nadpis: 'Ovocný tvarohový dort',
    popis: 'Poslední roky u mě v létě vedl pusinkový dort Pavlova na mnoho a mnoho způsobů, ale letos mám nového favorita. Už jsem zkoušela mnoho verzí a je vždy výborný, lehký i svěží a tak ideální ne jen na léto.',
    hodnoceni: 4.4,
    kategorie: 'Dezert',
    stitek: 'dezert',
    img: 'https://images.pexels.com/photos/315707/pexels-photo-315707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  { nadpis: 'Těstoviny s pestem',
    popis: 'Pesto v tomto receptu je připraveno bez sýra – místo něj jsou použity dvě celé palice pečeného česneku. Špagety budou díky tomu skvěle dochucené!',
    hodnoceni: 4.2,
    kategorie: 'Hlavní jídlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c9443baefd581d4e532b6d4f1e7879be&auto=format&fit=crop&w=1350&q=80'
  },
  { nadpis: 'Palačinka s medem a oříšky',
    popis: 'Nepomyslil, zničeně, očima zisk ta vina krevních, mě dře praha sám peče šíp čem unaven!',
    hodnoceni: 3.6,
    kategorie: 'Dezert',
    stitek: 'dezert',
    img: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=54182d2977056d28bd299799b8428fa6&auto=format&fit=crop&w=634&q=80'
  },
  { nadpis: 'Chléb s avokádem a vajíčkem',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.2,
    kategorie: 'Snídaně',
    stitek: 'snidane',
    img: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  { nadpis: 'Čokoládové brownie',
    popis: '11 omrzení schůdkách mu i očima o nos rys by šerého. Vodu po obejmout víte, to co haf otiskem přísní, uchu u taška prohrál u kuse lože, už že ví potřeby u chudáku. Vykoná ta o citů mstivě některá tahle z světů či odseděl lupiče?',
    hodnoceni: 4.9,
    kategorie: 'Dezert',
    stitek: 'dezert',
    img: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  { nadpis: 'Vajíčková omeleta se špenátem',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.2,
    kategorie: 'Snídaně',
    stitek: 'snidane',
    img: 'https://images.unsplash.com/photo-1494597706938-de2cd7341979?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6dc5376ce585ce0df0d44232b9bab53c&auto=format&fit=crop&w=1379&q=80'
  },
  { nadpis: 'Kuřecí salát',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.7,
    kategorie: 'Hlavní jidlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.pexels.com/photos/33406/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940'
  },
  { nadpis: 'Sýrová pizza',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.7,
    kategorie: 'Hlavní jidlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-0.3.5&s=8695cc99c49c956556f7411faf6df8b0&auto=format&fit=crop&w=1350&q=80'
  },
  { nadpis: 'Kuřecí roláda',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.6,
    kategorie: 'Hlavní jidlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1517609948086-6a03114ae1af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=24e11e05a26a3b992c8469426a628a90&auto=format&fit=crop&w=675&q=80'
  },
  { nadpis: 'Borůvkovo-tvarohový dezert',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 3.8,
    kategorie: 'Dezert',
    stitek: 'dezert',
    img: 'https://images.unsplash.com/photo-1504473089979-b1c4993a9653?ixlib=rb-0.3.5&s=a48ebf1c62105a202c421db95caa3b48&auto=format&fit=crop&w=634&q=80'
  },
  { nadpis: 'Hovězí steak',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.7,
    kategorie: 'Hlavní jidlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  { nadpis: 'Tiramisu',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 3.8,
    kategorie: 'Dezert',
    stitek: 'dezert',
    img: 'https://images.unsplash.com/photo-1502004960551-dc67f7c24cb3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9ffa9224ea62436ebb99ebf25c50be60&auto=format&fit=crop&w=1320&q=80'
  },
  { nadpis: 'Ceasar salát',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 3.9,
    kategorie: 'Hlavní jidlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1512852939750-1305098529bf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a5832df503143f0eb527593cd0c5abe6&auto=format&fit=crop&w=1350&q=80'
  },
  { nadpis: 'Sladký toast s ovocem',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.2,
    kategorie: 'Snídaně',
    stitek: 'snidane',
    img: 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?ixlib=rb-0.3.5&s=b2f8991c8bfaac59a8d115930d9c12cd&auto=format&fit=crop&w=1350&q=80'
  },
  { nadpis: 'Vegetariánská pizza',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.7,
    kategorie: 'Hlavní jidlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1516183483970-cedfa98169fa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=28a8ffb099b40dc89c12cec6a7f0a68a&auto=format&fit=crop&w=1350&q=80'
  },
  { nadpis: 'Křupavé kuře',
    popis: 'Jí hoře ocelovými vozíkem. Esli kotě napadne od ferdo, no pás uznat pustý. Prý chlapče sáhla tě koleno jež uvádí a posunující.',
    hodnoceni: 4.3,
    kategorie: 'Hlavní jidlo',
    stitek: 'hlavniJidlo',
    img: 'https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=353c1f4206a931db97274e65329b85d8&auto=format&fit=crop&w=634&q=80'
  },
]

let obrazek = document.querySelector('.recept-obrazek img');
let nazev = document.querySelector('.recept-info h3');
let receptyDiv = document.querySelector('.recepty');
let detailObrazek = document.querySelector('#recept-foto');
let detailKategorie = document.querySelector('#recept-kategorie');
let detailHodnoceni = document.querySelector('#recept-hodnoceni');
let detailNazev = document.querySelector('#recept-nazev');
let detailPopis = document.querySelector('#recept-popis');

zobrazRecepty(recepty);
zobrazStorage();

function zobrazStorage() {
  let obr = localStorage.obrazek;
  let kat = localStorage.kategorie;
  let hod = localStorage.hodnoceni;
  let nad = localStorage.nadpis;
  let pop = localStorage.popis;
  if(obr !== undefined) {
    detailObrazek.src = obr;
    detailKategorie.textContent = kat;
    detailHodnoceni.textContent = hod;
    detailNazev.textContent = nad;
    detailPopis.textContent = pop;
  }
}

function zobrazRecepty(recepty) {
  let receptyDiv = document.querySelector('.recepty');
  for (let i = 0; i < recepty.length; i = i + 1) {
    let novyObrazek = document.createElement('img');
    let novyNadpis = document.createElement('h3');
    let recept = document.createElement('div');
    recept.classList.add("recept");

    novyObrazek.src = recepty[i].img;
    novyNadpis.textContent = recepty[i].nadpis;

    let receptObrazek = document.createElement('div');
    receptObrazek.classList.add("recept-obrazek");
    receptObrazek.appendChild(novyObrazek);
    recept.appendChild(receptObrazek);

    let receptInfo = document.createElement('div');
    receptInfo.classList.add("recept-info");
    receptInfo.appendChild(novyNadpis);
    recept.appendChild(receptInfo);
    receptyDiv.appendChild(recept);

    recept.addEventListener("click", function() {
      detailObrazek.src = recepty[i].img;
      localStorage.setItem('obrazek', recepty[i].img);
      
      detailKategorie.textContent = recepty[i].kategorie;
      localStorage.setItem('kategorie', recepty[i].kategorie);
      
      detailHodnoceni.textContent = recepty[i].hodnoceni;
      localStorage.setItem('hodnoceni', recepty[i].hodnoceni);
      
      detailNazev.textContent = recepty[i].nadpis;
      localStorage.setItem('nadpis', recepty[i].nadpis);
      
      detailPopis.textContent = recepty[i].popis;
      localStorage.setItem('popis', recepty[i].popis);
  })
}
}

function vymazRecepty() {
  let rec = document.querySelectorAll('.recept');
  rec.forEach(element => receptyDiv.removeChild(element));
}

let kategorie = document.querySelector('#kategorie');

function filtruj() {
  if(kategorie.value === 's') {
    let snidane = recepty.filter(rec => rec.kategorie === 'Snídaně');
    vymazRecepty();
    zobrazRecepty(snidane);
  } else if(kategorie.value === 'h') {
    let hlavniJidlo = recepty.filter(rec => rec.kategorie === 'Hlavní jidlo');
    vymazRecepty();
    zobrazRecepty(hlavniJidlo);
  } else if(kategorie.value === 'd') {
    let dezert = recepty.filter(rec => rec.kategorie === 'Dezert');
    vymazRecepty();
    zobrazRecepty(dezert);
  } else {
    vymazRecepty();
    zobrazRecepty(recepty);
  }
}

let razeni = document.querySelector('#razeni');

function sortuj() {
  if(razeni.value === '1') {
    let nejlepsi = recepty.sort(function (a, b) {
      return b.hodnoceni - a.hodnoceni;
    });
    vymazRecepty();
    zobrazRecepty(nejlepsi);
  } else if(razeni.value === '2') {
    let nejhorsi = recepty.sort(function (a, b) {
      return a.hodnoceni - b.hodnoceni;
    });
    vymazRecepty();
    zobrazRecepty(nejhorsi);
  } else {
    //TODO: nevím, jak jinak seřazené recepty znovu dostat do původního pořadí
    location.reload();
  }
}
 //TODO: přidat filtrování dle textu, propojit všechny tři filtry

