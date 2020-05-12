jeton_model_raza//VERSIUNE
var VERSIUNEA_1 = 0;
var VERSIUNEA_2 = 1;
var VERSIUNEA_SELECTATA = VERSIUNEA_1;
var TEXT_VERSIUNEA_1 = "V1";
var TEXT_VERSIUNEA_2 = "V2";

//Parametrii
var CANVAS_WIDTH_V1 = 800;
var CANVAS_HEIGHT_V1 = 650;
var CANVAS_WIDTH_V2 = 1200;
var CANVAS_HEIGHT_V2 = 700;

//canvas
var CANVAS_WIDTH = CANVAS_WIDTH_V1;
var CANVAS_HEIGHT = CANVAS_HEIGHT_V1;
var y_linie_mijloc = CANVAS_HEIGHT / 2 - 100 + 25/2;

var LUNGIME_REZERVOR = 90;
var INALTIME_REZERVOR = 174;
var IDENTARE_VERTICALA_GRUP_LEGENDA = 20;

//var x_grup_legenda = 15;
//var y_grup_legenda = 460;
var x_grup_legenda = 15;
var y_grup_legenda = CANVAS_HEIGHT - INALTIME_REZERVOR - IDENTARE_VERTICALA_GRUP_LEGENDA;

//CULORI
var CULOARE_TEXT_LEGENDA = "#002e4d";
var CULOARE_TEXT_PROTECTII = "grey";

//temporizare
var accelerare_timp = 5;
var timp_joc = 200 / accelerare_timp;
var granularitate_timp = 1000;
var STOP = true;
var pauza_joc = false;
var timer = 0;
var zi = Math.floor(timer);
var INTERVAL_ZILE_SCHIMBARE_METODA_PREVENTIE = 8;
var INTERVAL_ZILE_VINDECARE = 18;
var metoda_preventie_schimbata = true;

//retea jetoane
var adancime_retea = 16; //straturi
var MAXIM_FRUNZE = 60;
var FACTOR_CAPACITATE_REZERVOR = 0.6;
var nr_straturi_per_faza = 4; //latime retea
var vector_jetoane = [];
var distantare_x_jetoane = 2;
var distantare_y_jetoane = 1.5;

var FRUNZA_NORMALA = 0;
var FRUNZA_PIERDUTA = 1;
var FRUNZA_VINDECATA = 2;
var FRUNZA_PENETRATA = 3;

var CULOARE_FRUNZA_NORMALA = "#d9d9d9";
var CULOARE_FRUNZA_PIERDUTA = "#dab38b";
var CULOARE_FRUNZA_VINDECATA = "#79d2a6";//"#ebf2f9";
var CULOARE_FRUNZA_PENETRATA = "#1aa3ff";
var CULOARE_FRUNZA_REACTIVA = "#1aa3ff";

var METODA_PREVENTIE_ACASA = 0;
var METODA_PREVENTIE_MASCA = 1;
var METODA_PREVENTIE_AFARA = 2;

var RATA_TRANSMITERE_AFARA = 1;
var RATA_TRANSMITERE_ACASA = 0;
var RATA_TRANSMITERE_MASCA = 0.3;

var RATA_PENETRARE_ACASA = 0;
var RATA_PENETRARE_MASCA = RATA_TRANSMITERE_MASCA;
var RATA_PENETRARE_AFARA = 1;

//0 - probabilitate 20% - frunza pierduta
//1 - probabilitate 60% - frunza vindecata
//2 - probabilitate 20% - frunza reactiva
var DISTRIBUTIE_OUTCOME_FRUNZA_FAVORABILA = [0, 0, 1, 1, 1, 1, 1, 1, 2, 2];
var DISTRIBUTIE_OUTCOME_FRUNZA_NEFAVORABILA = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2];
var distributieOutcomeFrunza = DISTRIBUTIE_OUTCOME_FRUNZA_FAVORABILA;


//0 acasa - 5% probabilitate
//1 masca - 15% probabilitate
//2 afara - 80% probabilitate
var distributieAlegereMetodaPreventie = [0,0, 1,1, 1,1, 2,2, 2,2, 2,2, 2,2, 2,2, 2,2, 2,2];

var FACTOR_ACCELERARE_DEBIT = 4;
var DEBIT_TRANSMITERE_JETON = 0.01 * FACTOR_ACCELERARE_DEBIT;
var DEBIT_UMPLERE_JETON = 0.01 * FACTOR_ACCELERARE_DEBIT;

var METODA_PREVENTIE = METODA_PREVENTIE_AFARA;

var CULOARE_ACASA = "#002e4d";
var CULOARE_MASCA = "white";

var GROSIME_LINIE_METODA_PROTECTIE = 6;
var RAZA_CERC_METODA_PROTECTIE = 10;

//retea tuburi
var vector_tuburi = [];
var grosime_tub = 7;
var grosime_flux_tub = 8;
var grosime_margine_jeton = 1;

var TUB_NORMAL = "tub normal";
var TUB_CULOARE_GOL = "#bfbfbf";
var TUB_CULOARE_PLIN = TUB_CULOARE_GOL;
var TUB_CULOARE_FLUX = "#66c2ff";

//tipuri
var TIP_DREPTUNGHI = "dreptunghi";
var TIP_CERC = "cerc";

//matrice jetoane
var jeton_model_diametru = 25;
var jeton_model_raza = jeton_model_diametru / 2;


var CULOARE_JETON = "#d9d9d9";
var CULOARE_MARGINE_JETON = "#336699";
var jeton_model_x = 10 + jeton_model_raza;
var jeton_model_y = 10 + jeton_model_diametru;
var me_tip = TIP_DREPTUNGHI;

var me2_culoare = "orange";
var me2_x = jeton_model_x;
var me2_y = jeton_model_y + 100;

//GRUP_LEGENDA (Rezervor + Legenda)
var distantareOrizontalaRezervorLegenda = 30;
var FONT_TEXT_LEGENDA = "20px Arial";
var IDENTARE_VERTICALA_TEXT_LEGENDA = 7;

//rezervor
var nivelApaRezervor = 50;
var xRezervor = x_grup_legenda;
var yRezervor = y_grup_legenda;
var CULOARE_REZERVOR = CULOARE_FRUNZA_NORMALA;
var CULOARE_APA_REZERVOR = CULOARE_FRUNZA_PENETRATA;
var CULOARE_APA_REZERVOR_CAPACITATE_DEPASITA = "#c88c51";
var xApaRezervor = xRezervor;
var yApaRezervor = yRezervor + INALTIME_REZERVOR - nivelApaRezervor;
var lungimeApaRezervor = LUNGIME_REZERVOR;
var capacitatea_a_fost_depasita = false;


//contor
var total_frunze_vindecate = 0;
var total_frunze_pierdute = 0;
var total_frunze_penetrate = 0;
var total_frunze_normale = 0;


var x_jeton_legenda = xRezervor + LUNGIME_REZERVOR + distantareOrizontalaRezervorLegenda;
var y_jeton_legenda = yRezervor + jeton_model_raza;

var x_text_legenda = x_jeton_legenda + jeton_model_diametru;
var y_text_legenda = y_jeton_legenda + IDENTARE_VERTICALA_TEXT_LEGENDA;


//canvas
var canvasPositionX = 285;
var canvasPositionY = 176;

var MARJA_POZITIONARE_MOUSE = 0.2 * jeton_model_raza;

//LIMBA
var LIMBA_ENGLEZA = 0;
var LIMBA_ROMANA = 1;
var LIMBA_SELECTATA = LIMBA_ROMANA;

//TEXT LIMBI
var TEXT_TITLU_RO = "Copacul Vietii";
var TEXT_TITLU_EN = "The Tree of Life";
var TEXT_ZILE_TRECUTE_RO = "Ziua";
var TEXT_ZILE_TRECUTE_EN = "Day";
var TEXT_LEGENDA_FRUNZE_NORMALE_RO = "frunze normale";
var TEXT_LEGENDA_FRUNZE_NORMALE_EN = "normal";
var TEXT_LEGENDA_FRUNZE_PATRUNSE_RO = "frunze atinse";
var TEXT_LEGENDA_FRUNZE_PATRUNSE_EN = "touched";
var TEXT_LEGENDA_FRUNZE_VINDECATE_RO = "frunze vindecate";
var TEXT_LEGENDA_FRUNZE_VINDECATE_EN = "healed";
var TEXT_LEGENDA_FRUNZE_PIERDUTE_RO = "frunze pierdute";
var TEXT_LEGENDA_FRUNZE_PIERDUTE_EN = "lost";
var TEXT_LEGENDA_MASCA_RO = "strat protector";
var TEXT_LEGENDA_MASCA_EN = "cover layer";
var TEXT_LEGENDA_ACASA_RO = "strat acasa";
var TEXT_LEGENDA_ACASA_EN = "home layer";

var TEXT_TITLU = TEXT_TITLU_EN;
var TEXT_ZILE_TRECUTE = TEXT_ZILE_TRECUTE_EN;
var TEXT_LEGENDA_FRUNZE_NORMALE = TEXT_LEGENDA_FRUNZE_NORMALE_EN;
var TEXT_LEGENDA_FRUNZE_PATRUNSE = TEXT_LEGENDA_FRUNZE_PATRUNSE_EN;
var TEXT_LEGENDA_FRUNZE_VINDECATE = TEXT_LEGENDA_FRUNZE_VINDECATE_EN;
var TEXT_LEGENDA_FRUNZE_PIERDUTE = TEXT_LEGENDA_FRUNZE_PIERDUTE_EN;
var TEXT_LEGENDA_MASCA = TEXT_LEGENDA_MASCA_EN;
var TEXT_LEGENDA_ACASA = TEXT_LEGENDA_ACASA_EN;



//captura apasare taste
const input = document.querySelector('html');
input.onkeydown = trimiteComenziJoc;

function restart(){
  location.reload();
  return false;
}

function startJoc(){
  setare_limba_preferata();
  setare_versiune_preferata();

  if(VERSIUNEA_SELECTATA == VERSIUNEA_1){
      generare_retea_jetoane_v1();
      generare_retea_tuburi_v1();
      setare_conditii_initiale_v1();
  }else{
      console.log("versiunea 2 nu are nimic de afisat");
  }



  mySuprafataJoc.creare();
}

var mySuprafataJoc = {
  canvas : document.createElement("canvas"),
  creare : function() {
      this.canvas.width = CANVAS_WIDTH;
      this.canvas.height = CANVAS_HEIGHT;
      this.context = this.canvas.getContext("2d");
      this.canvas.addEventListener("click", interactioneaza, false);
      //dezactiveaza dublu click - selectie text html
      this.canvas.addEventListener("mousedown", function(e){ e.preventDefault(); }, false);
      //this.canvas.addEventListener("dblclick", doSomething, false);

      document.body.insertBefore(this.canvas, document.body.childNodes[3]);
      this.interval = setInterval(actualizareSuprafataJoc, timp_joc);

      //document.querySelector("canvas").onclick = function(){
        //alert("Ai apasat pe ecran!")
        //pauzaJoc();
      //}
  },
  stergere : function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

function jeton(raza, culoare, x, y, tip) {
    this.raza = raza;
    //this.w = w;
    //this.h = h;
    //this.vitezaX = 2;
    this.stop = STOP;
    this.culoare = culoare;
    this.culoare_flux = TUB_CULOARE_FLUX;
    this.culoare_stare_frunza = CULOARE_FRUNZA_NORMALA;

    this.x = x;
    this.y = y;
    this.tip = tip;
    this.penetrat = false;

    this.stare_frunza = FRUNZA_NORMALA;
    this.staredetransmitere = false;
    this.conditie_transmitere = false;
    this.metoda_preventie = METODA_PREVENTIE_AFARA;
    this.rata_transmitere = RATA_TRANSMITERE_AFARA;
    this.rata_penetrare = RATA_PENETRARE_AFARA;
    this.contor_zile = 0;
    this.start_contor = false;
    this.zi_curenta = zi;

    this.stop_umplere = false;
    this.procent_umplere = 0.1; //100%
    this.viteza_umplere = DEBIT_UMPLERE_JETON;
    this.unghi_apa1 = Math.PI/2;
    this.unghi_apa2 = Math.PI/2;

    this.desenare = function() {
        ctx = mySuprafataJoc.context;

        if(this.tip === TIP_CERC){

            //desenare jeton
            ctx.fillStyle = this.culoare_stare_frunza;
            ctx.strokeStyle = CULOARE_MARGINE_JETON;
            //ctx.strokeStyle = this.culoare_stare_frunza;
            ctx.lineWidth = grosime_margine_jeton;
            ctx.beginPath();
            //ctx.arc(this.x+this.w/2, this.y+this.h/2, this.w/2, 0, Math.PI*2, false);
            //ctx.arc(this.x, this.y, this.w/2, 0, Math.PI*2, false);
            ctx.arc(this.x, this.y, this.raza, 0, Math.PI*2, false);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            //desenare flux - doar pentru frunze pentrate si normale
            if(this.stare_frunza != FRUNZA_PIERDUTA && this.stare_frunza != FRUNZA_VINDECATA){
                ctx.lineWidth = grosime_margine_jeton;
                ctx.fillStyle = this.culoare_flux;
                ctx.strokeStyle = this.culoare_flux;
                ctx.beginPath();
                //start PI/2 sens contrar acelor de ceasornic
                //ctx.arc(this.x+this.w/2, this.y+this.h/2, this.w/2, this.unghi_apa1, this.unghi_apa2, false);
                ctx.arc(this.x, this.y, this.raza, this.unghi_apa1, this.unghi_apa2, false);
                //ctx.lineTo(this.x+this.w/2, this.y+this.h/2);
                ctx.lineTo(this.x, this.y);
                ctx.closePath();
                ctx.fill();
                //ctx.stroke();
            }

            //desenare metoda preventie doar daca frunza nu este pierduta sau vindecata
              if (this.metoda_preventie == METODA_PREVENTIE_ACASA){
                  ctx.fillStyle = CULOARE_ACASA;
                  ctx.strokeStyle = CULOARE_ACASA;
                  ctx.lineWidth = GROSIME_LINIE_METODA_PROTECTIE;
                  ctx.beginPath();
                  //ctx.arc(this.x+this.w/2, this.y+this.h/2, RAZA_CERC_METODA_PROTECTIE , 0, Math.PI*2, false);
                  ctx.arc(this.x, this.y, RAZA_CERC_METODA_PROTECTIE , 0, Math.PI*2, false);
                  ctx.closePath();
                  ctx.fill();
                  ctx.stroke();
              }
              else if(this.metoda_preventie == METODA_PREVENTIE_MASCA){
                  ctx.fillStyle = CULOARE_MASCA;
                  ctx.strokeStyle = CULOARE_MASCA;
                  ctx.lineWidth = GROSIME_LINIE_METODA_PROTECTIE;
                  ctx.beginPath();
                  //ctx.arc(this.x+this.w/2, this.y+this.h/2, this.w/2, Math.PI/2, 3*Math.PI/2, true);
                  ctx.arc(this.x, this.y, RAZA_CERC_METODA_PROTECTIE, 0, Math.PI*2, false);
                  //ctx.arc(this.x+this.w/2, this.y+this.h/2, RAZA_CERC_METODA_PROTECTIE, 0, Math.PI*2, false);
                  //ctx.lineTo(this.x+this.w/2, this.y+this.h/2);
                  ctx.closePath();
                  ctx.fill();
                  ctx.stroke();
              }

        }
    }

    this.umplere = function() {
        if(this.stare_frunza == FRUNZA_PENETRATA)
            if(this.penetrat && this.procent_umplere <= 1){
              this.procent_umplere += this.viteza_umplere;
              this.unghi_apa2 = this.unghi_apa1 + this.procent_umplere * 2 * Math.PI;
            }
    }

    this.actualizarestare = function() {
        if (this.metoda_preventie == METODA_PREVENTIE_ACASA){
            this.rata_transmitere = RATA_TRANSMITERE_ACASA;
            this.rata_penetrare = RATA_PENETRARE_ACASA;
        }
        if (this.metoda_preventie == METODA_PREVENTIE_AFARA){
            this.rata_transmitere = RATA_TRANSMITERE_AFARA;
            this.rata_penetrare = RATA_PENETRARE_AFARA;
        }
        if (this.metoda_preventie == METODA_PREVENTIE_MASCA){
            this.rata_transmitere = RATA_TRANSMITERE_MASCA;
            this.rata_penetrare = RATA_PENETRARE_MASCA;
        }

        if(this.penetrat == true){
            //frunzele pierdute sau vindecate nu transmit
            if (this.stare_frunza == FRUNZA_PIERDUTA || this.stare_frunza == FRUNZA_VINDECATA ){
              this.staredetransmitere = false;
              this.conditie_transmitere = false;
            }
            else{
                this.staredetransmitere = true;
                this.conditie_transmitere = true;

                if (this.stare_frunza == FRUNZA_PENETRATA)
                    if(this.start_contor == false){
                        this.start_contor = true;
                        //console.log("contor started");
                    }
            }
        }

        if(this.start_contor == true){
            if(zi > this.zi_curenta){
                this.zi_curenta = zi;
                this.contor_zile += 1;
                //console.log("zi curenta: " + this.zi_curenta + " contor zile: " + this.contor_zile);
            }
            if(this.contor_zile > INTERVAL_ZILE_VINDECARE){
                this.start_contor = false;

                //nr_stari = 2;
                var idx = Math.floor(Math.random() * distributieOutcomeFrunza.length);
                stare_frunza_random = distributieOutcomeFrunza[idx];
                //stare_frunza_random = Math.floor(Math.random() * Math.floor(nr_stari));

                //console.log("stare frunza random = " + stare_frunza_random);
                if(stare_frunza_random == 0){
                    this.stare_frunza = FRUNZA_PIERDUTA;
                    this.culoare_stare_frunza = CULOARE_FRUNZA_PIERDUTA;
                    //scot metoda de preventie
                    this.metoda_preventie = METODA_PREVENTIE_AFARA;
                    //console.log("frunza pierduta");

                }
                else if (stare_frunza_random == 1){
                    this.stare_frunza = FRUNZA_VINDECATA;
                    this.culoare_stare_frunza = CULOARE_FRUNZA_VINDECATA;
                    //scot metoda de preventie
                    this.metoda_preventie = METODA_PREVENTIE_AFARA;
                    //console.log("frunza vindecata");
                }
                else if (stare_frunza_random == 2){
                    //this.stare_frunza = FRUNZA_VINDECATA;
                    //this.culoare_stare_frunza = CULOARE_FRUNZA_REACTIVA;
                    //scot metoda de preventie
                    this.metoda_preventie = METODA_PREVENTIE_AFARA;
                    //console.log("frunza vindecata");
                }
            }
        }

        if(this.procent_umplere>=1 && this.stop_umplere==false){
            //frunza este deja penetrata, dar culoarea vine cu intarziere
            //cand se umple fluxul va lua culoarea unei frunze penetrate si se va suprapune
            this.culoare_flux = CULOARE_FRUNZA_PENETRATA;
            //this.stare_frunza = FRUNZA_PENETRATA;
            this.stop_umplere = true;
        }

    }

}

function tub (jeton_intrare, jeton_iesire, culoare, tip_tub) {
    this.jeton_intrare = jeton_intrare;
    this.jeton_iesire = jeton_iesire;
    this.culoare = culoare;
    this.x1 = this.jeton_intrare.x; //+ this.jeton_intrare.w/2;
    this.y1 = this.jeton_intrare.y; //+ this.jeton_intrare.h/2;
    this.x2 = this.jeton_iesire.x; //+ this.jeton_iesire.w/2;
    this.y2 = this.jeton_iesire.y; //+ this.jeton_iesire.h/2;
    this.tip_tub = tip_tub;
    this.lungimetub_x = this.x2 - this.x1;
    this.lungimetub_y = this.y2 - this.y1;
    this.procent_umplere = 0; //1 = 100%
    this.viteza_umplere = DEBIT_TRANSMITERE_JETON * RATA_TRANSMITERE_AFARA;
    this.flux_x1 = this.x1;
    this.flux_y1 = this.y1;
    this.flux_x2 = this.x1 + this.lungimetub_x * this.procent_umplere;
    this.flux_y2 = this.y1 + this.lungimetub_y * this.procent_umplere;
    this.stop_umplere = false;
    this.tub_golit = false;


    this.desenare = function() {
        ctx = mySuprafataJoc.context;
        //ctx.fillStyle = this.culoare;

        if(this.tip_tub === TUB_NORMAL){
            //desenare tub
            ctx.lineWidth = grosime_tub;
            ctx.strokeStyle = this.culoare;
            ctx.beginPath();
            ctx.moveTo(this.x1, this.y1);
            ctx.lineTo(this.x2, this.y2);
            ctx.closePath();
            ctx.stroke();

            //desenare flux
            ctx.lineWidth = grosime_flux_tub;
            ctx.strokeStyle = TUB_CULOARE_FLUX;
            ctx.beginPath();
            ctx.moveTo(this.flux_x1, this.flux_y1);
            ctx.lineTo(this.flux_x2, this.flux_y2);
            ctx.closePath();
            ctx.stroke();
            //ctx.fill();
        }
    }

    this.umplere = function() {
        this.viteza_umplere = DEBIT_TRANSMITERE_JETON * this.jeton_intrare.rata_transmitere * this.jeton_iesire.rata_penetrare;

        if(this.jeton_intrare.conditie_transmitere == true && this.procent_umplere < 1){
          this.procent_umplere += this.viteza_umplere;

          this.flux_x2 = this.x1 + this.lungimetub_x * this.procent_umplere;
          this.flux_y2 = this.y1 + this.lungimetub_y * this.procent_umplere;

        }

    }

    this.actualizarestare = function() {
        if(this.procent_umplere >= 1 && this.stop_umplere == false){
            this.jeton_iesire.penetrat = true;
            this.jeton_iesire.stare_frunza = FRUNZA_PENETRATA;
            this.stop_umplere = true;
            //culoarea vine cu intarziere dupa ce se umple jetonul 100%
        }

        //goleste tub daca jeton intrare este nontransmisibil
        if(this.jeton_intrare.staredetransmitere == false && this.tub_golit == false){
            if (this.jeton_intrare.stare_frunza == FRUNZA_PIERDUTA || this.jeton_intrare.stare_frunza == FRUNZA_VINDECATA){
                this.tub_golit = true;
                this.procent_umplere = 0;

                this.flux_x2 = this.x1 + this.lungimetub_x * this.procent_umplere;
                this.flux_y2 = this.y1 + this.lungimetub_y * this.procent_umplere;

                //console.log("tub golit");
            }

        }

    }


    this.schimbareculoare = function() {
        if(this.culoare === TUB_CULOARE_GOL){
          this.culoare = TUB_CULOARE_PLIN;
        }
        else {
          this.culoare = TUB_CULOARE_GOL;
        }
    }
}

function desenareValoareZi(){
  ctx = mySuprafataJoc.context;
  //ctx.fillStyle = "orange";

  //Ziua
  ctx.font = "30px Arial";
  ctx.lineWidth = 1;
  ctx.strokeStyle = "grey";
  ctx.strokeText(TEXT_ZILE_TRECUTE + " " + zi, 10, 40);

}

function actualizareSuprafataJoc() {
    if (pauza_joc == false){
        mySuprafataJoc.stergere();

        //tuburi
        for (let i = 0; i < vector_tuburi.length; i++) {
            vector_tuburi[i].actualizarestare();
            vector_tuburi[i].umplere();
            vector_tuburi[i].desenare();
        }

        //jetoane
        for (let i = 0; i < vector_jetoane.length; i++) {
            vector_jetoane[i].actualizarestare();
            vector_jetoane[i].umplere();
            vector_jetoane[i].desenare();
        }

        //Zile
        timer += timp_joc/granularitate_timp;
        //console.log(timer);
        zi = Math.floor(timer);
        //console.log(zi);
        desenareValoareZi();

        //Legenda si contor
        actualizareContor();
        desenareContor();

        desenareRezervor();

        //Schimbare metode de preventie
        schimbareMetodePreventie();


  }
}

function interactioneaza(e) {
    // calcul coordonate mouse raportat la pozitie canvas
    //console.log("x: " + e.clientX + " y: " + e.clientY);

    var rect = mySuprafataJoc.canvas.getBoundingClientRect();

    //console.log("x canvas: " + rect.left + " y canvas: " + rect.right);

    var mouseX = e.clientX - rect.left;
    var mouseY = e.clientY - canvasPositionY; //- rect.right;

    //console.log("x relativ: " + mouseX + " y relativ: " + mouseY);

    for(let i=0; i<vector_jetoane.length; i++){
        distanta_click_x = mouseX - vector_jetoane[i].x;
        distanta_click_y = mouseY - vector_jetoane[i].y;
        distanta_click = Math.pow(distanta_click_x,2) + Math.pow(distanta_click_y,2);
        distanta_arie_jeton = Math.pow(jeton_model_raza,2);
        if(distanta_click < distanta_arie_jeton){
            if (vector_jetoane[i].metoda_preventie == METODA_PREVENTIE_AFARA){
                vector_jetoane[i].metoda_preventie = METODA_PREVENTIE_MASCA;
            }
            else if (vector_jetoane[i].metoda_preventie == METODA_PREVENTIE_MASCA){
                vector_jetoane[i].metoda_preventie = METODA_PREVENTIE_ACASA;
            }
        }

    }
}

/*
function getMousePos(canvas, evt) {
    var rect = mySuprafataJoc.canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}*/

function actualizareContor(){
    total_frunze_normale = 0;
    total_frunze_penetrate = 0;
    total_frunze_vindecate = 0;
    total_frunze_pierdute = 0;
    for(let i=0; i<vector_jetoane.length; i++){
        if (vector_jetoane[i].stare_frunza == FRUNZA_NORMALA){
            total_frunze_normale += 1;
        }
        if (vector_jetoane[i].stare_frunza == FRUNZA_PENETRATA){
            total_frunze_penetrate += 1;
        }
        if (vector_jetoane[i].stare_frunza == FRUNZA_VINDECATA){
            total_frunze_vindecate += 1;
        }

        if (vector_jetoane[i].stare_frunza == FRUNZA_PIERDUTA){
            total_frunze_pierdute += 1;
        }
    }
    //console.log("total frunze normale: " + total_frunze_normale);
    //console.log("total frunze penetrate: " + total_frunze_penetrate);
}

function desenareRezervor(){
    ctx = mySuprafataJoc.context;
    ctx.fillStyle = CULOARE_REZERVOR;
    //ctx.strokeStyle = this.culoare_stare_frunza;
    //ctx.lineWidth = grosime_margine_jeton;

    //rezervor
    ctx.fillRect(xRezervor, yRezervor, LUNGIME_REZERVOR, INALTIME_REZERVOR);

    //apa rezervor
    if (total_frunze_penetrate <= MAXIM_FRUNZE * FACTOR_CAPACITATE_REZERVOR){
        nivelApaRezervor = total_frunze_penetrate * INALTIME_REZERVOR / (MAXIM_FRUNZE * FACTOR_CAPACITATE_REZERVOR);
        ctx.fillStyle = CULOARE_APA_REZERVOR;
    }
    else {
        nivelApaRezervor = INALTIME_REZERVOR;
        ctx.fillStyle = CULOARE_APA_REZERVOR_CAPACITATE_DEPASITA;
        if (capacitatea_a_fost_depasita == false){
            capacitatea_a_fost_depasita = true;
            distributieOutcomeFrunza = DISTRIBUTIE_OUTCOME_FRUNZA_NEFAVORABILA;
            //console.log("capacitatea a fost depasita: " + capacitatea_a_fost_depasita);
        }
    }
    //calcul yApaRezervor
    yApaRezervor = yRezervor + INALTIME_REZERVOR - nivelApaRezervor;
    ctx.fillRect(xApaRezervor, yApaRezervor, lungimeApaRezervor, nivelApaRezervor);

}

function desenareContor(){
    ctx = mySuprafataJoc.context;

    //Contor

    //desenare culori

    //desenare jeton normal
    ctx.fillStyle = CULOARE_FRUNZA_NORMALA;
    ctx.strokeStyle = CULOARE_MARGINE_JETON;
    //ctx.strokeStyle = this.culoare_stare_frunza;
    ctx.lineWidth = grosime_margine_jeton;
    ctx.beginPath();

    //(jeton_model_width, jeton_model_diametru, CULOARE_JETON, x_jeton, y_jeton, tip_jeton);
    ctx.arc(x_jeton_legenda, y_jeton_legenda, jeton_model_raza, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fill();
    //ctx.stroke();

    //desenare jeton penetrat
    ctx.fillStyle = CULOARE_FRUNZA_PENETRATA;
    ctx.strokeStyle = CULOARE_MARGINE_JETON;
    //ctx.strokeStyle = this.culoare_stare_frunza;
    ctx.lineWidth = grosime_margine_jeton;
    ctx.beginPath();

    //(jeton_model_width, jeton_model_diametru, CULOARE_JETON, x_jeton, y_jeton, tip_jeton);
    ctx.arc(x_jeton_legenda, y_jeton_legenda + 30, jeton_model_raza, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fill();
    //ctx.stroke();

    //desenare jeton vindecat
    ctx.fillStyle = CULOARE_FRUNZA_VINDECATA;
    ctx.strokeStyle = CULOARE_MARGINE_JETON;
    //ctx.strokeStyle = this.culoare_stare_frunza;
    ctx.lineWidth = grosime_margine_jeton;
    ctx.beginPath();

    //(jeton_model_width, jeton_model_diametru, CULOARE_JETON, x_jeton, y_jeton, tip_jeton);
    ctx.arc(x_jeton_legenda, y_jeton_legenda + 60, jeton_model_raza, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fill();
    //ctx.stroke();

    //desenare jeton pierdut
    ctx.fillStyle = CULOARE_FRUNZA_PIERDUTA;
    ctx.strokeStyle = CULOARE_MARGINE_JETON;
    //ctx.strokeStyle = this.culoare_stare_frunza;
    ctx.lineWidth = grosime_margine_jeton;
    ctx.beginPath();

    //(jeton_model_width, jeton_model_diametru, CULOARE_JETON, x_jeton, y_jeton, tip_jeton);
    ctx.arc(x_jeton_legenda, y_jeton_legenda + 90, jeton_model_raza, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fill();
    //ctx.stroke();

    //desenare jeton masca
    ctx.fillStyle = CULOARE_MASCA;
    ctx.strokeStyle = CULOARE_MARGINE_JETON;
    //ctx.strokeStyle = this.culoare_stare_frunza;
    ctx.lineWidth = grosime_margine_jeton;
    ctx.beginPath();

    //(jeton_model_width, jeton_model_diametru, CULOARE_JETON, x_jeton, y_jeton, tip_jeton);
    ctx.arc(x_jeton_legenda, y_jeton_legenda + 120, jeton_model_raza, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fill();
    //ctx.stroke();

    //desenare jeton acasa
    ctx.fillStyle = CULOARE_ACASA;
    ctx.strokeStyle = CULOARE_MARGINE_JETON;
    //ctx.strokeStyle = this.culoare_stare_frunza;
    ctx.lineWidth = grosime_margine_jeton;
    ctx.beginPath();

    //(jeton_model_width, jeton_model_diametru, CULOARE_JETON, x_jeton, y_jeton, tip_jeton);
    ctx.arc(x_jeton_legenda, y_jeton_legenda + 150, jeton_model_raza, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fill();
    //ctx.stroke();


    //desenare text
    ctx.fillStyle = CULOARE_TEXT_LEGENDA;
    ctx.font = FONT_TEXT_LEGENDA;
    //ctx.lineWidth = 0.1;
    //ctx.strokeStyle = "black";
    ctx.fillText(total_frunze_normale + " " + TEXT_LEGENDA_FRUNZE_NORMALE, x_text_legenda, y_text_legenda);
    ctx.fillText(total_frunze_penetrate + " " + TEXT_LEGENDA_FRUNZE_PATRUNSE , x_text_legenda, y_text_legenda + 30);
    ctx.fillText(total_frunze_vindecate + " " + TEXT_LEGENDA_FRUNZE_VINDECATE , x_text_legenda, y_text_legenda + 60);
    ctx.fillText(total_frunze_pierdute + " " + TEXT_LEGENDA_FRUNZE_PIERDUTE , x_text_legenda, y_text_legenda + 90);

    ctx.fillStyle = CULOARE_TEXT_PROTECTII;
    ctx.fillText(TEXT_LEGENDA_MASCA + " (" + (1 - RATA_TRANSMITERE_MASCA) * 100 + "%)" , x_text_legenda, y_text_legenda + 120);
    ctx.fillText(TEXT_LEGENDA_ACASA + " (100%)" , x_text_legenda, y_text_legenda + 150);
    //ctx.strokeText(total_frunze_vindecate + " frunze vindecate" , 10, 500);

}

function schimbareMetodePreventie(){

    if (zi > 0){
        if(zi % INTERVAL_ZILE_SCHIMBARE_METODA_PREVENTIE == 0){
            if (metoda_preventie_schimbata == false){
                //console.log("zi = " + zi);
                for(let i=1; i<vector_jetoane.length; i++){
                    //nr_stari = 3;
                    var idx = Math.floor(Math.random() * distributieAlegereMetodaPreventie.length);
                    metoda_preventie_random = distributieAlegereMetodaPreventie[idx];

                    //metoda_preventie_random = Math.floor(Math.random() * Math.floor(nr_stari));
                    //console.log("i = " + i + " stare: " + metoda_preventie_random);
                    if(vector_jetoane[i].stare_frunza != FRUNZA_VINDECATA && vector_jetoane[i].stare_frunza != FRUNZA_PIERDUTA)
                        vector_jetoane[i].metoda_preventie = metoda_preventie_random;
                    else {
                        //daca frunza este vindecata sau pierduta scot metodele de preventie
                        vector_jetoane[i].metoda_preventie = METODA_PREVENTIE_AFARA;
                    }
                }
                metoda_preventie_schimbata = true;
            }
        }
        else{
            metoda_preventie_schimbata = false;
        }
    }
}

function pauzaJoc() {
    pauza_joc = !pauza_joc;
    //console.log("pauza = " + pauza_joc)
    /*
    for(let i=0; i<vector_tuburi.length; i++){
      vector_tuburi[i].schimbareculoare();
    }
    */
}

function generare_retea_jetoane_v1() {
    y_start = y_linie_mijloc;
    distanta = jeton_model_raza * distantare_y_jetoane;
    for (let i = 0; i < adancime_retea; i++) {
        adancimefaza = i % 4;

        numar_jetoane_per_nivel = Math.pow(2,adancimefaza);
        //separare faze
        if (adancimefaza === 0){
            distanta = jeton_model_raza * distantare_y_jetoane;
            //nr faza
            nr_faza = Math.round(i/4) + 1;
            //console.log("numar faza " + nr_faza);
        }

        //console.log(numar_jetoane_per_nivel);
        //distanta = 2*i;
        if (i>0 && adancimefaza!=0)
          distanta *= 2 ;
        y_start = y_linie_mijloc - distanta;

        for (let j = 0; j < numar_jetoane_per_nivel; j++) {
            x_jeton = jeton_model_x + i * jeton_model_diametru * distantare_x_jetoane;
            y_jeton = y_start + j * jeton_model_diametru * distantare_y_jetoane;
            tip_jeton = TIP_CERC;
            myJeton = new jeton(jeton_model_raza, CULOARE_JETON, x_jeton, y_jeton, tip_jeton);
            vector_jetoane.push(myJeton);
        }
    }
}

function generare_retea_tuburi_v1() {
    if(vector_jetoane.length > 1){
        /*
        jeton_intrare = vector_jetoane[0];
        jeton_iesire = vector_jetoane[1];
        vector_tuburi[0] = new tub(jeton_intrare, jeton_iesire, TUB_CULOARE_GOL, TUB_NORMAL);
        */

        index_jeton = 0;
        // i = nr_strat
        nr_faza = 0; // de la 1 la 3 pentru adancime retea = 3
        for (let i = 0; i < adancime_retea; i++) {
            adancimefaza = i % nr_straturi_per_faza; // de la 0 la 3 - adancime 0 are 1 jetoane, adancime 2 are 2 jetoane

            numar_jetoane_per_strat = Math.pow(2,adancimefaza);
            //separare faze
            if (adancimefaza === 0){
                //nr faza
                nr_faza += 1;
                nr_jetoane_faza = 0;
                for(let k = 0; k < nr_straturi_per_faza; k++)
                  nr_jetoane_faza += Math.pow(2,k);
            }

            for (let j = 0; j < numar_jetoane_per_strat; j++) {
                index_jeton_intrare = index_jeton;

                //exceptand primul jeton din fiecare faza
                if (numar_jetoane_per_strat>1 && adancimefaza >0)
                    index_jeton_intrare = Math.floor((index_jeton - 1 + nr_jetoane_faza * (nr_faza - 1)) /2);
                else{
                    //primul jeton de la inceputul fiecarei faze, incepand cu a doua faza
                    if (nr_faza == 2){
                        //tub la jetonul din mijlocul ultimului strat din faza precedenta
                        index_jeton_intrare = Math.floor((index_jeton - 1) /2) + nr_straturi_per_faza;
                        //tub la ultimul jeton din faza precedenta
                        //index_jeton_intrare = index_jeton-1;
                    }
                    if (nr_faza >= 3){
                        //tub la jetonul din mijlocul ultimului strat din faza precedenta
                        //index_jeton_intrare = Math.floor((index_jeton - 1) /2);
                        index_jeton_intrare = Math.floor((index_jeton + nr_jetoane_faza - 1) /2) + nr_straturi_per_faza;
                        //tub la ultimul jeton din faza precedenta
                        //index_jeton_intrare = index_jeton-1;
                    }
                }

                jeton_intrare = vector_jetoane[index_jeton_intrare];
                jeton_iesire = vector_jetoane[index_jeton];
                //nu insereaza tubul pentru jetonul 0
                if (index_jeton_intrare != index_jeton){
                  myTub = new tub(jeton_intrare, jeton_iesire, TUB_CULOARE_GOL, TUB_NORMAL);
                  vector_tuburi.push(myTub);
                }
                index_jeton += 1;
            }

        }
    }

}

function setare_conditii_initiale_v1() {
    //setare conditii initiale
    if(vector_jetoane.length > 0){
      vector_jetoane[0].staredetransmitere = true;
      vector_jetoane[0].penetrat = true;
      vector_jetoane[0].stare_frunza = FRUNZA_PENETRATA;

      jeton_intrare = vector_jetoane[12];
      jeton_iesire = vector_jetoane[17];
      myTub = new tub(jeton_intrare, jeton_iesire, TUB_CULOARE_GOL, TUB_NORMAL);
      vector_tuburi.push(myTub);

      jeton_intrare = vector_jetoane[43];
      jeton_iesire = vector_jetoane[45];
      myTub = new tub(jeton_intrare, jeton_iesire, TUB_CULOARE_GOL, TUB_NORMAL);
      vector_tuburi.push(myTub);

      //vector_tuburi[43].jeton_intrare = vector_jetoane[7];

    }
    for(let i=1; i<vector_jetoane.length; i++){
        nr_stari = 3;
        metoda_preventie_random = Math.floor(Math.random() * Math.floor(nr_stari));
        //console.log("i = " + i + " stare: " + metoda_preventie_random);
        vector_jetoane[i].metoda_preventie = metoda_preventie_random;
    }
}

function trimiteComenziJoc(e){
    if(e.code === "Space") {
      pauzaJoc();
    }
    //if (e.code === "ArrowDown" || e.code === "ArrowLeft"){
    //}
}

function schimbareVersiune(){
  var element_versiune = document.getElementById("versiune");
  //console.log(element_versiune.textContent);

  //actualizare HTML V1 V2
  if(element_versiune.textContent == TEXT_VERSIUNEA_1){
      VERSIUNEA_SELECTATA = VERSIUNEA_1;
      //TEXT_TITLU = TEXT_TITLU_EN;
      //schimbare text in functie de versiunea selectata
      element_versiune.textContent = TEXT_VERSIUNEA_2;
      //actualizare parametrii versiune
  }
  else{
      VERSIUNEA_SELECTATA = VERSIUNEA_2;
      //TEXT_TITLU = TEXT_TITLU_RO;
      //schimbare text in functie de versiunea selectata
      element_versiune.textContent = TEXT_VERSIUNEA_1;
      //actualizare parametrii versiune
  }

  //salvare preferinta
  localStorage.setItem('version', VERSIUNEA_SELECTATA);

  restart();

  //actualizare Parametrii Versiune
  //actualizareParametriiVersiune();

}



function setare_versiune_preferata() {
  if(!localStorage.getItem('version')) {
      localStorage.setItem('version', VERSIUNEA_SELECTATA);
  } else {
    VERSIUNEA_SELECTATA = localStorage.getItem('version');
  }
  actualizareParametriiVersiune();
}

function selectieLimbaEngleza(){
    LIMBA_SELECTATA = LIMBA_ENGLEZA;
    actualizareLimba();
    salvarePreferintaLimba();
}
function selectieLimbaRomana(){
    LIMBA_SELECTATA = LIMBA_ROMANA;
    actualizareLimba();
    salvarePreferintaLimba();
}

function salvarePreferintaLimba() {
  //console.log("se salveaza limba " + LIMBA_SELECTATA);
  localStorage.setItem('language', LIMBA_SELECTATA);
}

function setare_limba_preferata() {
  if(!localStorage.getItem('language')) {
    salvarePreferintaLimba();
    //console.log("setare limba initiala " + LIMBA_SELECTATA);
  } else {
    LIMBA_SELECTATA = localStorage.getItem('language');
    //console.log("limba preferata salvata " + LIMBA_SELECTATA + " . Se seteaza limba preferata.");
    actualizareLimba();
  }
}



function actualizareLimba(){
  //console.log("LIMBA_SELECTATA: " + LIMBA_SELECTATA)
  var titlu = document.querySelector('h1');
  var link_pauza = document.getElementById("pauza");

  if (LIMBA_SELECTATA == LIMBA_ENGLEZA){
    TEXT_TITLU = TEXT_TITLU_EN;
    TEXT_ZILE_TRECUTE = TEXT_ZILE_TRECUTE_EN;
    TEXT_LEGENDA_FRUNZE_NORMALE = TEXT_LEGENDA_FRUNZE_NORMALE_EN;
    TEXT_LEGENDA_FRUNZE_PATRUNSE = TEXT_LEGENDA_FRUNZE_PATRUNSE_EN;
    TEXT_LEGENDA_FRUNZE_VINDECATE = TEXT_LEGENDA_FRUNZE_VINDECATE_EN;
    TEXT_LEGENDA_FRUNZE_PIERDUTE = TEXT_LEGENDA_FRUNZE_PIERDUTE_EN;
    TEXT_LEGENDA_MASCA = TEXT_LEGENDA_MASCA_EN;
    TEXT_LEGENDA_ACASA = TEXT_LEGENDA_ACASA_EN;

    titlu.textContent = TEXT_TITLU;
    link_pauza.textContent = "Pause";
  }
  else{
    TEXT_TITLU = TEXT_TITLU_RO;
    TEXT_ZILE_TRECUTE = TEXT_ZILE_TRECUTE_RO;
    TEXT_LEGENDA_FRUNZE_NORMALE = TEXT_LEGENDA_FRUNZE_NORMALE_RO;
    TEXT_LEGENDA_FRUNZE_PATRUNSE = TEXT_LEGENDA_FRUNZE_PATRUNSE_RO;
    TEXT_LEGENDA_FRUNZE_VINDECATE = TEXT_LEGENDA_FRUNZE_VINDECATE_RO;
    TEXT_LEGENDA_FRUNZE_PIERDUTE = TEXT_LEGENDA_FRUNZE_PIERDUTE_RO;
    TEXT_LEGENDA_MASCA = TEXT_LEGENDA_MASCA_RO;
    TEXT_LEGENDA_ACASA = TEXT_LEGENDA_ACASA_RO;

    titlu.textContent = TEXT_TITLU;
    link_pauza.textContent = "Pauza";
  }
}

function actualizareParametriiVersiune(){
  //actualizare HTML V1 V2
  var element_versiune = document.getElementById("versiune");

  if(VERSIUNEA_SELECTATA == VERSIUNEA_1){
      //V1
      element_versiune.textContent = TEXT_VERSIUNEA_2;
      console.log("Versiune Selectata: " + TEXT_VERSIUNEA_1);
      CANVAS_WIDTH = CANVAS_WIDTH_V1;
      CANVAS_HEIGHT = CANVAS_HEIGHT_V1;
  }
  else{
      //V2
      element_versiune.textContent = TEXT_VERSIUNEA_1;
      console.log("Versiune Selectata: " + TEXT_VERSIUNEA_2);
      CANVAS_WIDTH = CANVAS_WIDTH_V2;
      CANVAS_HEIGHT = CANVAS_HEIGHT_V2;
  }

  //actualizare variabile dependente
  y_linie_mijloc = CANVAS_HEIGHT / 2 - 100 + 25/2;
  y_grup_legenda = CANVAS_HEIGHT - INALTIME_REZERVOR - IDENTARE_VERTICALA_GRUP_LEGENDA;
  yRezervor = y_grup_legenda;
  y_jeton_legenda = yRezervor + jeton_model_raza;
  y_text_legenda = y_jeton_legenda + IDENTARE_VERTICALA_TEXT_LEGENDA;
}
