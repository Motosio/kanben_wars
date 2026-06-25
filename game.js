const area =
document.getElementById("player-area");

playerCards.forEach(card => {

    const div =
    document.createElement("div");

    div.innerHTML = `
        <h3>${card.name}</h3>
        HP ${card.hp}<br>
        ATK ${card.atk}<br>
        DEF ${card.def}
    `;

    area.appendChild(div);
});

button.onclick = battleTurn;
