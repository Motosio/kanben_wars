function attack(attacker, target) {

    let damage =
        attacker.atk -
        target.def;

    damage = Math.max(
        damage,
        1
    );

    target.hp -= damage;
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

    render();
}
