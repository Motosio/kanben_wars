let enemyDeck = [];

const enemyDatabase = [

{
    name: "勘弁ネズミ",
    hp: 1000,
    maxHp: 1000,
    atk: 400,
    def: 100,
    statuses: [],
    tier: 1,
    element: "wood"
},

{
    name: "勘弁コウモリ",
    hp: 2500,
    maxHp: 2500,
    atk: 500,
    def: 100,
    statuses: [],
    tier: 1,
    element: "dark"
},

{
    name: "勘弁スライム",
    hp: 3500,
    maxHp: 3500,
    atk: 600,
    def: 200,
    statuses: [],
    tier: 1,
    element: "water"
},

{
    name: "勘弁兵士",
    hp: 50,
    maxHp: 50,
    atk: 8,
    def: 3,
    statuses: [],
    tier: 2,
    element: "wood"
},

{
    name: "勘弁騎士",
    hp: 70,
    maxHp: 70,
    atk: 10,
    def: 5,
    statuses: [],
    tier: 2,
    element: "light"
},

{
    name: "勘弁魔導士",
    hp: 60,
    maxHp: 60,
    atk: 12,
    def: 2,
    statuses: [],
    tier: 3,
    element: "dark"
},

{
    name: "勘弁竜兵",
    hp: 90,
    maxHp: 90,
    atk: 15,
    def: 4,
    statuses: [],
    tier: 3,
    element: "fire"
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
            def: 4,

            statuses: [],

            element: "light"

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
            def: 5,

            statuses: [],

            element: "dark"
            
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
            def: 6,

            statuses: [],

            element: "dark"

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
