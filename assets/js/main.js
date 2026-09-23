function renderGames() {
  const grid = document.getElementById("game-grid");
  if (!grid) return;

  if (GAMES.length === 0) {
    grid.innerHTML = `<p class="empty-state">Banco di prova vuoto per ora — torna a trovarci.</p>`;
    return;
  }

  grid.innerHTML = GAMES.map((game) => {
    const isPlayable = game.status === "playable";
    const badge = isPlayable ? "" : `<span class="badge">In arrivo</span>`;
    // A game with its own og-card image shows that card as-is (title and
    // description already live inside the image), same treatment as the
    // portfolio's Playground entry for Embergale — no separate icon/text.
    const card = game.image
      ? `
      <article class="card card--image-only ${isPlayable ? "" : "card--disabled"}">
        ${badge}
        <img class="card-image" src="${game.image}" alt="${game.title}" loading="lazy">
      </article>
    `
      : `
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
