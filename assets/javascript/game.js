$(document).ready(function() {
  var charA = {
    att: 0,
    hp: 0,
    catt: 0,
    defender: 0,
    selectedID: 'Geralt of Rivia'
  };
  var charB = {
    att: 0,
    hp: 0,
    catt: 0,
    defender: 0,
    selectedID: 'King of the Wild Hunt'
  };
  var charC = {
    att: 0,
    hp: 0,
    catt: 0,
    defender: 0,
    selectedID: 'Triss Merigold'
  };
  var charD = {
    att: 0,
    hp: 50,
    catt: 0,
    defender: 0,
    selectedID: 'King Radovid'
  };
  var heroSelected = {
    att: 0,
    hp: 50,
    catt: 0,
    defender: 0
  };
  var enemySelected = {
    att: 0,
    hp: 50,
    catt: 0,
    defender: 0
  };

  function setHero(hero) {
    hero.att = Math.floor(Math.random() * 5 + 5);
    console.log('Hero att ' + hero.att);
    hero.hp = Math.floor(Math.random() * 75 + 100);
    console.log('Hero hp ' + hero.hp);
    hero.defender = 1;
  }
  function setEnemies(enemy) {
    enemy.catt = Math.floor(Math.random() * 30 + 5);
    console.log('Enemy ' + enemy.selectedID + ' catt ' + enemy.catt);
    enemy.hp = Math.floor(Math.random() * 75 + 100);
    console.log('Enemy ' + enemy.selectedID + ' hp ' + enemy.hp);
    enemy.defender = 2;
    console.log('Enemy ' + enemy.selectedID + ' is defender');
  }
  function attackEnemy(hero, enemy) {
    enemy.hp = enemy.hp - hero.att;
    if (enemy.hp === 0 || enemy.hp < 0) {
      console.log('Enemy Defeated');
    } else {
      hero.hp = hero.hp - enemy.catt;
      console.log('You took ' + enemy.catt + ' damage');
    }
  }

  $('.btn').on('click', function() {
    if (charA.selectedID == $(this).attr('id')) {
      heroSelected = charA;
      if (charA.defender == 0) {
        console.log('charA selected');
        setHero(charA);
        setEnemies(charB);
        setEnemies(charC);
        setEnemies(charD);
      }
    } else if (charB.selectedID == $(this).attr('id')) {
      heroSelected = charB;
      if (charB.defender == 0) {
        console.log('charB selected');
        setHero(charB);
        setEnemies(charA);
        setEnemies(charC);
        setEnemies(charD);
      }
    } else if (charC.selectedID == $(this).attr('id')) {
      heroSelected = charC;
      if (charC.defender == 0) {
        console.log('charC selected');
        setHero(charC);
        setEnemies(charA);
        setEnemies(charB);
        setEnemies(charD);
      }
    } else if (charD.selectedID == $(this).attr('id')) {
      heroSelected = charD;
      if (charA.defender == 0) {
        console.log('charD selected');
        setHero(charD);
        setEnemies(charA);
        setEnemies(charB);
        setEnemies(charC);
      }
    }
  });

  $('.btn').on('click', function() {
    if (charA == $(this).attr('id')) {
    } else if (charA == $(this).attr('id')) {
    } else if (charA == $(this).attr('id')) {
    } else if (charA == $(this).attr('id')) {
    } else if (charA == $(this).attr('id')) {
    }
  });
  //  attackEnemy(a, b);
  // console.log(charA.selectedID);

  // -------------------------------------------------------------------------------------------------------------------------------------
  // VARIABLES (FOR BOTH): HP, ATTACK POWER, COUNTER ATTACK POWER, DEFENDER (BOOLEAN), MUSIC, RESET
  // (ON) CLICK HERO PICTURE, HIDE/LOCK/DELETE OTHER HERO PICTURES
  // FOR LOOP FOR 3 TURNS (1 FOR EACH ENEMY)
  // (ON) CLICK 1ST ENEMY PICTURE, POPULATE "DEFENDER AREA" WITH ENEMY PICTURE, REPLACE WITH PLACEHOLDER IMAGE ON SAME POSITION
  // CLICK "ATTACK" BUTTON, CHECK ATTACK POWER, SUBTRACT FROM ENEMY HP, REFLECT NEW HP
  // CHECK 1ST ENEMY COUNTER ATTACK POWER, SUBTRACT FROM HERO HP, REFLECT NEW HP
  // INCREASE HERO ATTACK POWER BY n
  //IF 1ST ENEMY HP === 0, DELETE ENEMY PICTURE IN "DEFENDER AREA", CHECK IF "AREA" CLEAR
  // (ON) CLICK 2ND EMENY PICTURE, ETC...3RD ENEMY PICTURE, ETC...
  // IF HERO HP === 0, DISPLAY "YOU LOOSE"
  // --------------------------------------------------------------------------------------------------------------------------

  // --------------------------------------------------------------------------------------------------------------------------
  // HERO_HP > , HERO_ATTACK = (n)!/(n-k)!, WHERE t IS NUMBER OF TIMES TO ATTACK, AND n IS BASE ATTACK POWER
  // HP = A*T1 + B*T2 + C*T3, WHERE T IS # OF TIMES TO GET HP->0
  // (n)!/(n-k)! = A + B + C (ENEMY HP's)

  // 100 = 10x + 20x + 30x
  // n!/(n-k)! = 50 + 60 +70 = 180
  //
  // !!!!!LOOK UP PERMUATION!!!!!!
  //
  // --------------------------------------------------------------------------------------------------------------------------
  // EX:
  // HERO: 50HP, 5ATT -----> 10HP 10ATT, 20HP 15ATT, 30HP 20ATT
  // 1) 6 turns total (t), if 10(A) + 20(B) + 30(C) and ATT = 5
  // 1)a) 5 (A = 5), 10 (A = -5), 15 (B = 5), 20 (B = -15), 25 (B = 5), 30 (B = -25 )
  // 2) BUT... 50 - 10*2 = 30 (A), 30 - 15*2 = 0 (B), 0 - 20*2 = -40 (C)
  // EX:
  // HERO:100HP, 7ATT ----> 15HP 12ATT, 25HP 17ATT, 35HP 22ATT
  // 1) 5 turns total (t), if 15(A) + 25(B) + 35(C)
  // 1)a) 7 (A = 8), 14 (A = -6), 21 (B = 4), 28 (B = -24), 35 (C = 0)

  // 1) Hero's are fixed 2) Enemies are fixed
  // if hero's are fixed, enemies are variable
  // if
});
