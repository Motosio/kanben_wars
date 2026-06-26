async function battleTurn() {

    if (battleBusy)
        return;

    battleBusy = true;

    const actions = [];

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

        battleBusy = false;
        return;
    }

    if (playerDeck.length === 0) {

        alert("ゲームオーバー");

        battleBusy = false;
        return;
    }

    render();

    battleBusy = false;
}
