const enemyArea =
document.getElementById(
    "enemy-area"
);

const playerArea =
document.getElementById(
    "player-area"
);

const turnButton =
document.getElementById(
    "turnButton"
);

turnButton.onclick =
battleTurn;

function removeDead() {

    for (
        let i = enemyDeck.length - 1;
        i >= 0;
        i--
    ) {

        if (
            enemyDeck[i].hp <= 0
        ) {

            enemyDeck.splice(
                i,
                1
            );
        }
    }

    for (
        let i = playerDeck.length - 1;
        i >= 0;
        i--
    ) {

        if (
            playerDeck[i].hp <= 0
        ) {

            playerDeck.splice(
                i,
                1
            );
        }
    }
}

function createCard(
    unit,
    isEnemy
) {

    const card =
    document.createElement(
        "div"
    );

    card.className =
        `card ${
            isEnemy
            ? "enemy"
            : "player"
        }`;

    card.innerHTML = `
        <h3>${unit.name}</h3>

        HP:
        ${unit.hp}
        /
        ${unit.maxHp}
        <br>

        ATK:
        ${unit.atk}
        <br>

        DEF:
        ${unit.def}
    `;

    return card;
}

function render() {

    enemyArea.innerHTML = "";
    playerArea.innerHTML = "";

    enemyDeck.forEach(
        enemy => {

        enemyArea.appendChild(
            createCard(
                enemy,
                true
            )
        );
    });

    playerDeck.forEach(
        player => {

        playerArea.appendChild(
            createCard(
                player,
                false
            )
        );
    });
}

render();
