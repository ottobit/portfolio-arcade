function renderGames() {
  const grid = document.getElementById("game-grid");
  if (!grid) return;

  grid.innerHTML = GAMES.map((game) => {
    const isPlayable = game.status === "playable";
    const badge = isPlayable ? "" : `<span class="badge">In arrivo</span>`;
    const card = `
      <article class="card ${isPlayable ? "" : "card--disabled"}">
        ${badge}
        <span class="card-icon" aria-hidden="true">${game.icon || "🎮"}</span>
        <h2>${game.title}</h2>
        <p>${game.description}</p>
      </article>
    `;
    return isPlayable
      ? `<a class="card-link" href="games/${game.slug}/">${card}</a>`
      : card;
  }).join("");
}

document.addEventListener("DOMContentLoaded", renderGames);
