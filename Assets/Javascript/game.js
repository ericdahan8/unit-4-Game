$(document).ready(function() {
  //Hide at the beginning
  $(".Characters2").hide();
  $(".Characters3").hide();

  // Attack point system
  var characterSelected = false;
  var opponentSelected = false;

  var obi1 = false;
  var maul1 = false;
  var kylo1 = false;
  var dv1 = false;

  var obi2 = false;
  var maul2 = false;
  var kylo2 = false;
  var dv2 = false;

  var obihealth = 120;
  var maulhealth = 110;
  var kylohealth = 150;
  var dvhealth = 200;

  var obiattack = 15;
  var maulattack = 8;
  var kyloattack = 20;
  var dvattack = 25;

  var obicounter = 30;
  var maulcounter = 20;
  var kylocounter = 50;
  var dvcounter = 70;

  //RESET FUNCTION
  function reset() {
    $(".Characters2").hide();
    $(".Characters3").hide();
    characterSelected = false;
    opponentSelected = false;
    obi1 = false;
    maul1 = false;
    kylo1 = false;
    dv1 = false;

    obi2 = false;
    maul2 = false;
    kylo2 = false;
    dv2 = false;

    obihealth = 120;
    maulhealth = 110;
    kylohealth = 150;
    dvhealth = 200;

    obiattack = 15;
    maulattack = 8;
    kyloattack = 20;
    dvattack = 25;

    obicounter = 30;
    maulcounter = 20;
    kylocounter = 50;
    dvcounter = 70;
    $("#healthPointsobi").text(obihealth);
    $("#healthPointsmaul").text(maulhealth);
    $("#healthPointskylo").text(kylohealth);
    $("#healthPointsdv").text(dvhealth);
    $("#healthPointsobi2").text(obihealth);
    $("#healthPointsmaul2").text(maulhealth);
    $("#healthPointskylo2").text(kylohealth);
    $("#healthPointsdv2").text(dvhealth);
    $("#p2").text("");
    $("#p3").text("");
    $(".G1").show();
    $(".G2").show();
    $(".G3").show();
    $(".G4").show();
  }
  ///////////////////////////////////////////////////////////////////////////////////////
  //when you click obi won show other guys then hide on click
  $(".G1").on("click", function() {
    if (characterSelected === false) {
      obi1 = true;
      $(".Characters2").show();
      $(".Characters3").hide();
      $(".G2").hide();
      $(".G3").hide();
      $(".G4").hide();
      $(".D1").hide();
      characterSelected = true;
    }
  });
  //when you click Darth Maul show other guys then hide on click
  $(".G2").on("click", function() {
    if (characterSelected === false) {
      maul1 = true;
      $(".Characters2").show();
      $(".Characters3").hide();
      $(".G1").hide();
      $(".G3").hide();
      $(".G4").hide();
      $(".D2").hide();
      characterSelected = true;
    }
  });
  //when you click Kylo Ren show other guys then hide on click
  $(".G3").on("click", function() {
    if (characterSelected === false) {
      kylo1 = true;
      $(".Characters2").show();
      $(".Characters3").hide();
      $(".G1").hide();
      $(".G2").hide();
      $(".G4").hide();
      $(".D3").hide();
      characterSelected = true;
    }
  });
  //when you click DV show other guys then hide on click
  $(".G4").on("click", function() {
    if (characterSelected === false) {
      dv1 = true;
      $(".Characters2").show();
      $(".Characters3").hide();
      $(".G1").hide();
      $(".G2").hide();
      $(".G3").hide();
      $(".D4").hide();
      characterSelected = true;
    }
  });
  ////////////////////////////////////////////////////////////////////////////////////////
  //Moving to fighting area
  $(".D1").on("click", function() {
    obi2 = true;
    $(".Characters2").hide();
    $(".E1").show();
    $(".D1").hide();
    opponentSelected = true;
  });
  $(".D2").on("click", function() {
    maul2 = true;
    $(".Characters2").hide();
    $(".E2").show();
    $(".D2").hide();
    opponentSelected = true;
  });
  $(".D3").on("click", function() {
    kylo2 = true;
    $(".Characters2").hide();
    $(".E3").show();
    $(".D3").hide();
    opponentSelected = true;
  });
  $(".D4").on("click", function() {
    dv2 = true;
    $(".Characters2").hide();
    $(".E4").show();
    $(".D4").hide();
    opponentSelected = true;
  });

  //attacking sequence
  ////////////////////////////////////////////////////////////////////////////////////////
  //obi vs maul

  $("#attackbtn").on("click", function() {
    if (opponentSelected === true && characterSelected === true) {
      if (obi1 === true && maul2 === true) {
        $("#p2").text("You inflicted " + obiattack + " damage");
        $("#p3").text("You took " + maulcounter + " damage");
        obihealth -= maulcounter;
        maulhealth -= obicounter;
        obiattack += obiattack;
        $("#healthPointsobi").text(obihealth);
        $("#healthPointsmaul2").text(maulhealth);

        if (maulhealth <= 0) {
          alert("You Win!");
          reset();
        }
      }
    }
  });
  //obi vs kylo
  $("#attackbtn").on("click", function() {
    if (opponentSelected === true && characterSelected === true) {
      if (obi1 === true && kylo2 === true) {
        $("#p2").text("You inflicted " + obiattack + " damage");
        $("#p3").text("You took " + kylocounter + " damage");
        obihealth -= kylocounter;
        kylohealth -= obicounter;
        obiattack += obiattack;
        $("#healthPointsobi").text(obihealth);
        $("#healthPointskylo2").text(kylohealth);

        if (obihealth <= 0) {
          alert("You Lose!");
          reset();
        }
      }
    }
  });
  //obi vs dv
  $("#attackbtn").on("click", function() {
    if (opponentSelected === true && characterSelected === true) {
      if (obi1 === true && dv2 === true) {
        $("#p2").text("You inflicted " + obiattack + " damage");
        $("#p3").text("You took " + dvcounter + " damage");
        obihealth -= dvcounter;
        dvhealth -= obicounter;
        obiattack += obiattack;
        $("#healthPointsobi").text(obihealth);
        $("#healthPointsdv2").text(dvhealth);

        if (obihealth <= 0) {
          alert("You Lose!");
          reset();
        }
      }
    }
  });
  /////////////////////////////////////////////////////////////////////////////////////////
  //maul vs obi
  $("#attackbtn").on("click", function() {
    if (opponentSelected === true && characterSelected === true) {
      if (maul1 === true && obi2 === true) {
        $("#p2").text("You inflicted " + maulattack + " damage");
        $("#p3").text("You took " + obicounter + " damage");
        maulhealth -= obicounter;
        obihealth -= maulcounter;
        maulattack += maulattack;
        $("#healthPointsmaul").text(maulhealth);
        $("#healthPointsobi2").text(obihealth);

        if (maulhealth <= 0) {
          alert("You win!");
          reset();
        }
      }
    }
  });

  //maul vs kylo
  $("#attackbtn").on("click", function() {
    if (opponentSelected === true && characterSelected === true) {
      if (maul1 === true && kylo2 === true) {
        $("#p2").text("You inflicted " + maulattack + " damage");
        $("#p3").text("You took " + kylocounter + " damage");
        maulhealth -= kylocounter;
        kylohealth -= maulcounter;
        maulattack += maulattack;
        $("#healthPointsmaul").text(maulhealth);
        $("#healthPointskylo2").text(kylohealth);

        if (maulhealth <= 0) {
          alert("You Lose!");
          reset();
        }
      }
    }
  });

  //maul vs dv
  $("#attackbtn").on("click", function() {
    if (opponentSelected === true && characterSelected === true) {
      if (maul1 === true && dv2 === true) {
        $("#p2").text("You inflicted " + maulattack + " damage");
        $("#p3").text("You took " + dvcounter + " damage");
        maulhealth -= dvcounter;
        dvhealth -= maulcounter;
        maulattack += maulattack;
        $("#healthPointsmaul").text(maulhealth);
        $("#healthPointsdv2").text(dvhealth);

        if (maulhealth <= 0) {
          alert("You Lose!");
          reset();
        }
      }
    }
  });
  //////////////////////////////////////////////////////////////////////////////////////////////
  // kylo vs dv
  $("#attackbtn").on("click", function() {
    if (opponentSelected === true && characterSelected === true) {
      if (kylo1 === true && dv2 === true) {
        $("#p2").text("You inflicted " + kyloattack + " damage");
        $("#p3").text("You took " + dvcounter + " damage");
        kylohealth -= dvcounter;
        dvhealth -= kylocounter;
        kyloattack += kyloattack;
        $("#healthPointskylo").text(kylohealth);
        $("#healthPointsdv2").text(dvhealth);

        if (kylohealth <= 0) {
          alert("You Loose!");
          reset();
        }
      }
    }
  });
  //kylo vs obi
  $("#attackbtn").on("click", function() {
    if (opponentSelected === true && characterSelected === true) {
      if (kylo1 === true && obi2 === true) {
        $("#p2").text("You inflicted " + kyloattack + " damage");
        $("#p3").text("You took " + obicounter + " damage");
        kylohealth -= obicounter;
        obihealth -= kylocounter;
        kyloattack += kyloattack;
        $("#healthPointskylo").text(kylohealth);
        $("#healthPointsobi2").text(obihealth);

        if (obihealth <= 0) {
          alert("You Win!");
          reset();
        }
      }
    }
  });

  //kylo vs darth maul
  $("#attackbtn").on("click", function() {
    if (opponentSelected === true && characterSelected === true) {
      if (kylo1 === true && maul2 === true) {
        $("#p2").text("You inflicted " + kyloattack + " damage");
        $("#p3").text("You took " + maulcounter + " damage");
        kylohealth -= maulcounter;
        maulhealth -= kylocounter;
        kyloattack += kyloattack;
        $("#healthPointskylo").text(kylohealth);
        $("#healthPointsmaul2").text(maulhealth);

        if (maulhealth <= 0) {
          alert("You Win!");
          reset();
        }
      }
    }
  });

  /////////////////////////////////////////////////////////////////////////////////////
  //dv vs obi
  $("#attackbtn").on("click", function() {
    if (opponentSelected === true && characterSelected === true) {
      if (dv1 === true && obi2 === true) {
        $("#p2").text("You inflicted " + dvattack + " damage");
        $("#p3").text("You took " + obicounter + " damage");
        dvhealth -= obicounter;
        obihealth -= dvcounter;
        dvattack += dvattack;
        $("#healthPointsdv").text(dvhealth);
        $("#healthPointsobi2").text(obihealth);

        if (obihealth <= 0) {
          alert("You win!");
          reset();
        }
      }
    }
  });
  //dv vs maul
  $("#attackbtn").on("click", function() {
    if (opponentSelected === true && characterSelected === true) {
      if (dv1 === true && maul2 === true) {
        $("#p2").text("You inflicted " + dvattack + " damage");
        $("#p3").text("You took " + maulcounter + " damage");
        dvhealth -= maulcounter;
        maulhealth -= dvcounter;
        dvattack += dvattack;
        $("#healthPointsdv").text(dvhealth);
        $("#healthPointsmaul2").text(maulhealth);

        if (maulhealth <= 0) {
          alert("You Win!");
          reset();
        }
      }
    }
  });
  //dv vs kylo

  $("#attackbtn").on("click", function() {
    if (opponentSelected === true && characterSelected === true) {
      if (dv1 === true && kylo2 === true) {
        $("#p2").text("You inflicted " + dvattack + " damage");
        $("#p3").text("You took " + kylocounter + " damage");
        dvhealth -= kylocounter;
        kylohealth -= dvcounter;
        dvattack += dvattack;
        $("#healthPointsdv").text(dvhealth);
        $("#healthPointskylo2").text(kylohealth);

        if (kylohealth <= 0) {
          alert("You Win!");
          reset();
        }
      }
    }
  });
});
