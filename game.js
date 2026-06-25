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

const elementColors = {

    fire: "#ff5555",

    water: "#55aaff",

    wood: "#55cc55",

    light: "#ffee88",

    dark: "#aa55ff"

};

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

    if (!isEnemy) {

        card.classList.add(
            unit.rarity === 5
            ? "rarity5"
            : "rarity4"
        );

    }

let borderColor;

if (isEnemy) {

    borderColor = "red";

}
else {

    borderColor =
        unit.rarity === 5
        ? "gold"
        : "#4da6ff";

}

const elementColor =
    elementColors[
        unit.element
    ] || "white";

card.style.borderColor =
    borderColor;

card.innerHTML = `

<div class="card-top">

    <div class="rarity">
        ${
            unit.rarity === 5
            ? "★★★★★"
            : "★★★★"
        }
    </div>

    <div
        class="element"
        style="
            background:
            ${elementColor}
        "
    ></div>

</div>

<div class="portrait">

    ${
        unit.image
        ? `<img src="${unit.image}">`
        : ""
    }

</div>

<div class="card-bottom">

    <div class="name">
        ${unit.name}
    </div>

    <div class="hp-bar">

        <div
            class="hp-fill"
            style="
                width:
                ${(unit.hp / unit.maxHp) * 100}%;
            "
        ></div>

    </div>

    <div>
        HP:
        ${unit.hp}
        /
        ${unit.maxHp}
    </div>

    <div>
        ATK:
        ${unit.atk}
    </div>

    <div>
        DEF:
        ${unit.def}
    </div>

</div>
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

    if (playerDeck.length === 0) {

        alert("ゲームオーバー");

        return;
    }
}

const battleLog =
document.getElementById(
    "battleLog"
);

function addLog(text){

    battleLog.innerHTML +=
        text + "<br>";

    battleLog.scrollTop =
        battleLog.scrollHeight;

}

createStage(stage);

render();
