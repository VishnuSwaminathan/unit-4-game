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
    base: 0,
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
    hero.base = hero.att;
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
  function attackEnemy(hero, enemy1) {
    enemy1.hp = enemy1.hp - hero.att;
    console.log('You dealt ' + hero.att + 'damage to ' + enemy1.selectedID);
    hero.att = hero.base + hero.att;
    if (enemy1.hp === 0 || enemy1.hp < 0) {
      console.log('Enemy Defeated');
      return 1;
    } else {
      hero.hp = hero.hp - enemy1.catt;
      console.log('You took ' + enemy1.catt + ' damage');
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
      $('.btn').on('click', function() {
        if (charB.selectedID == $(this).attr('id')) {
          console.log('Selected ' + heroSelected.selectedID);
          $('');
        }
      });
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

  if (hero.hasOwnProperty('selectedID')) {
    console.log('hero selected ID created');
    $('.btn').on('click', function() {
      if (charA == $(this).attr('id')) {
        var i = 1;
      } else if (charB == $(this).attr('id')) {
        var i = 2;
        console.log(i);
      } else if (charC == $(this).attr('id')) {
        var i = 1;
      } else if (charD == $(this).attr('id')) {
        var i = 1;
      } else if ('reset' == $(this).attr('id')) {
        var i = 'reset';
      }
    });
  }
  //  attackEnemy(a, b);
  // console.log(charA.selectedID);
});
