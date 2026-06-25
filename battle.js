function attack(attacker, target) {

    let damage =
        attacker.atk -
        target.def;

    damage = Math.max(
        damage,
        1
    );

    target.hp -= damage;

    addLog(
        `${attacker.name}の攻撃！
        ${target.name}に
        ${damage}ダメージ！`
    );
}

function battleTurn() {

    playerDeck.forEach(player => {

        const target =
            enemyDeck.find(
                enemy => enemy.hp > 0
            );

        if (!target) return;

        attack(
            player,
            target
        );
    });

    enemyDeck.forEach(enemy => {

        const target =
            playerDeck.find(
                player => player.hp > 0
            );

        if (!target) return;

        attack(
            enemy,
            target
        );
    });

    removeDead();

    if (enemyDeck.length === 0) {

        if (stage >= 12) {

            alert("ゲームクリア！");
            return;
        }

        stage++;

        createStage(stage);

        render();

        return;
    }

    if (playerDeck.length === 0) {

        alert("ゲームオーバー");
        return;
    }

    render();
}
