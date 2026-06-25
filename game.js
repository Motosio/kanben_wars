let stage = 1;

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

const stageText =
document.getElementById(
    "stageText"
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

    stageText.textContent =
    `Stage ${stage}`;
    
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

    if (enemyDeck.length === 0) {

        if (stage >= 12) {

            alert("ゲームクリア！");

            return;
        }

        stage++;

        createStage(stage);

        render();
    }

    if (playerDeck.length === 0) {

        alert("ゲームオーバー");

        return;
    }
}


if (enemyDeck.length === 0) {
    alert("ステージクリア！");
}

if (playerDeck.length === 0) {
    alert("ゲームオーバー");
}
