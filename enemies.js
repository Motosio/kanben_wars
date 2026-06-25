let enemyDeck = [];

const enemyDatabase = [

{
    name: "勘弁ネズミ",
    hp: 20,
    maxHp: 20,
    atk: 4,
    def: 1,
    statuses: [],
    tier: 1
},

{
    name: "勘弁コウモリ",
    hp: 25,
    maxHp: 25,
    atk: 5,
    def: 1,
    statuses: [],
    tier: 1
},

{
    name: "勘弁スライム",
    hp: 35,
    maxHp: 35,
    atk: 6,
    def: 2,
    statuses: [],
    tier: 1
},

{
    name: "勘弁兵士",
    hp: 50,
    maxHp: 50,
    atk: 8,
    def: 3,
    statuses: [],
    tier: 2
},

{
    name: "勘弁騎士",
    hp: 70,
    maxHp: 70,
    atk: 10,
    def: 5,
    statuses: [],
    tier: 2
},

{
    name: "勘弁魔導士",
    hp: 60,
    maxHp: 60,
    atk: 12,
    def: 2,
    statuses: [],
    tier: 3
},

{
    name: "勘弁竜兵",
    hp: 90,
    maxHp: 90,
    atk: 15,
    def: 4,
    statuses: [],
    tier: 3
}

];

function cloneEnemy(enemy){

    return structuredClone(enemy);

}

function getRandomEnemy(maxTier){

    const candidates =
    enemyDatabase.filter(
        enemy => enemy.tier <= maxTier
    );

    const index =
    Math.floor(
        Math.random() *
        candidates.length
    );

    return cloneEnemy(
        candidates[index]
    );
}

function createStage(stage){

    enemyDeck = [];

    // 中ボス1

    if(stage === 4){

        enemyDeck.push({

            name: "勘弁番人",

            hp: 150,
            maxHp: 150,

            atk: 12,
            def: 4

        });

        return;
    }

    // 中ボス2

    if(stage === 8){

        enemyDeck.push({

            name: "勘弁司祭",

            hp: 220,
            maxHp: 220,

            atk: 15,
            def: 5

        });

        return;
    }

    // ラスボス

    if(stage === 12){

        enemyDeck.push({

            name: "勘弁大魔王",

            hp: 350,
            maxHp: 350,

            atk: 20,
            def: 6

        });

        return;
    }

    let enemyCount = 2;
    let maxTier = 1;

    if(stage >= 3)
        enemyCount = 3;

    if(stage >= 6)
        enemyCount = 4;

    if(stage >= 9)
        enemyCount = 5;

    if(stage >= 5)
        maxTier = 2;

    if(stage >= 9)
        maxTier = 3;

    for(
        let i = 0;
        i < enemyCount;
        i++
    ){

        enemyDeck.push(
            getRandomEnemy(maxTier)
        );

    }

}
