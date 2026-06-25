let enemyDeck = [];

function createStage(stage) {

    enemyDeck = [];

    if (stage === 1) {

        enemyDeck.push({
            name: "勘弁ネズミ",
            hp: 20,
            maxHp: 20,
            atk: 4,
            def: 1
        });

        enemyDeck.push({
            name: "勘弁ネズミ",
            hp: 20,
            maxHp: 20,
            atk: 4,
            def: 1
        });

    }

    if (stage === 2) {

        enemyDeck.push({
            name: "勘弁コウモリ",
            hp: 30,
            maxHp: 30,
            atk: 6,
            def: 1
        });

        enemyDeck.push({
            name: "勘弁コウモリ",
            hp: 30,
            maxHp: 30,
            atk: 6,
            def: 1
        });

    }

    if (stage === 3) {

    enemyDeck.push({
        name: "勘弁スライム",
        hp: 50,
        maxHp: 50,
        atk: 7,
        def: 3
    });

}

}
