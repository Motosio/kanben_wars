let battleBusy = false;

function wait(ms){

    return new Promise(resolve => {

        setTimeout(
            resolve,
            ms
        );

    });

}

function getElementMultiplier(
    attackerElement,
    targetElement
){

    if(
        attackerElement === "fire" &&
        targetElement === "wood"
    ){
        return 1.5;
    }

    if(
        attackerElement === "wood" &&
        targetElement === "water"
    ){
        return 1.5;
    }

    if(
        attackerElement === "water" &&
        targetElement === "fire"
    ){
        return 1.5;
    }

    if(
        attackerElement === "light" &&
        targetElement === "dark"
    ){
        return 1.5;
    }

    if(
        attackerElement === "dark" &&
        targetElement === "light"
    ){
        return 1.5;
    }

    return 1;
}

function attack(attacker, target) {

    let damage =
        attacker.atk -
        target.def;

    damage = Math.max(
        damage,
        1
    );

    damage *=
    getElementMultiplier(
        attacker.element,
        target.element
    );
    
    damage =
    Math.floor(damage)
    
    target.hp -= damage;

    addLog(
        `${attacker.name}の攻撃！
        ${target.name}に
        ${damage}ダメージ！`
    );
}

async function battleTurn() {

    const actions = [];

    async function battleTurn() {

        if (battleBusy)
            return;

        battleBusy = true;

    playerDeck.forEach(player => {

        if(player.hp <= 0)
            return;

        actions.push(() => {

            const target =
                enemyDeck.find(
                    enemy => enemy.hp > 0
                );

            if (!target)
                return;

            attack(
                player,
                target
            );

    });

});

    enemyDeck.forEach(enemy => {

        if(enemy.hp <= 0)
            return;

        actions.push(() => {

            const target =
                playerDeck.find(
                    player => player.hp > 0
                );

            if (!target)
                return;

            attack(
                enemy,
                target
            );

        });

    });

    for(const action of actions){

        action();

        removeDead();

        render();

        await wait(1000);

    }

    if (enemyDeck.length === 0) {

        if (stage >= 12) {

            alert("ゲームクリア！");
            battleBusy = false;
            return;
        }

        stage++;

        playerDeck.forEach(player => {

            player.hp =
            player.maxHp;

        });

        createStage(stage);

        render();

        return;
    }

    if (playerDeck.length === 0) {

        alert("ゲームオーバー");
        return;
    }

    render();

    battleBusy = false;
}
