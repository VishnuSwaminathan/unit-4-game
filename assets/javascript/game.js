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
    console.log('Hero base att ' + hero.base);
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
    while (enemy1.hp !== 0 && enemy1.hp > 0) {
      enemy1.hp = enemy1.hp - hero.att;
      console.log('You dealt ' + hero.att + 'damage to ' + enemy1.selectedID);
      hero.att = hero.base + hero.att;
      hero.hp = hero.hp - enemy1.catt;
      console.log('You took ' + enemy1.catt + ' damage');
    }
    console.log('Enemy Defeated');
    console.log(hero.att);
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
        if (
          charB.selectedID == $(this).attr('id') ||
          charC.selectedID == $(this).attr('id') ||
          charD.selectedID == $(this).attr('id')
        ) {
          console.log('Selected ' + $(this).attr('id') + ' as enemy');
          $('#attack').on('click', function() {
            console.log($(this).attr('id'));
            if ('attack' == $(this).attr('id')) {
              attackEnemy(heroSelected, charB);
              $('#Wild').html('');
            }
          });
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
      $('.btn').on('click', function() {
        if (
          charB.selectedID == $(this).attr('id') ||
          charC.selectedID == $(this).attr('id') ||
          charD.selectedID == $(this).attr('id')
        ) {
          console.log('Selected ' + $(this).attr('id') + ' as enemy');
          $('#attack').on('click', function() {
            console.log($(this).attr('id'));
            if ('attack' == $(this).attr('id')) {
              attackEnemy(heroSelected, charC);
              $('#Triss').html('');
            }
          });
        }
      });
    } else if (charC.selectedID == $(this).attr('id')) {
      heroSelected = charC;
      if (charC.defender == 0) {
        console.log('charC selected');
        setHero(charC);
        setEnemies(charA);
        setEnemies(charB);
        setEnemies(charD);
      }
      $('.btn').on('click', function() {
        if (
          charB.selectedID == $(this).attr('id') ||
          charC.selectedID == $(this).attr('id') ||
          charD.selectedID == $(this).attr('id')
        ) {
          console.log('Selected ' + $(this).attr('id') + ' as enemy');
          $('#attack').on('click', function() {
            console.log($(this).attr('id'));
            if ('attack' == $(this).attr('id')) {
              attackEnemy(heroSelected, charD);
              $('#King').html('');
            }
          });
        }
      });
    } else if (charD.selectedID == $(this).attr('id')) {
      heroSelected = charD;
      if (charA.defender == 0) {
        console.log('charD selected');
        setHero(charD);
        setEnemies(charA);
        setEnemies(charB);
        setEnemies(charC);
      }
      $('.btn').on('click', function() {
        if (
          charB.selectedID == $(this).attr('id') ||
          charC.selectedID == $(this).attr('id') ||
          charD.selectedID == $(this).attr('id')
        ) {
          console.log('Selected ' + $(this).attr('id') + ' as enemy');
          $('#attack').on('click', function() {
            console.log($(this).attr('id'));
            if ('attack' == $(this).attr('id')) {
              attackEnemy(heroSelected, charA);
              $('#Geralt').html('');
            }
          });
        }
      });
    }
  });
});
