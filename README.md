# ottobit arcade

Mini-giochi browser di ottobit, separati dal [portfolio principale](https://github.com/ottobit/portfolio) per non appesantirlo man mano che nascono nuovi giochi.

Pubblicato su GitHub Pages: https://ottobit.github.io/portfolio-arcade/

## Struttura

```
index.html          landing page dell'arcade (lista giochi)
assets/css/         stili condivisi
assets/js/          script condivisi (games.js = registro dei giochi)
games/<slug>/       un gioco per cartella, ognuno con il proprio index.html
llm-wiki/           memoria di progetto mantenuta con pattern LLM Wiki
```

Nessun build step: HTML/CSS/JS serviti così come sono.

## Memoria di progetto

La conoscenza durevole del progetto vive in [`llm-wiki/`](llm-wiki/README.md):
fonti sintetizzate, pagine wiki e istruzioni per gli agenti. La storia di F1
Racer (primo gioco a "laurearsi" da questo banco di prova) resta in
[`llm-wiki/wiki/f1-racer/`](llm-wiki/wiki/f1-racer/); il suo handoff tecnico
vive ora in [`ottobit/f1-racer`](https://github.com/ottobit/f1-racer).

## Aggiungere un gioco

1. Crea `games/<slug>/index.html` (e gli asset che ti servono nella stessa cartella).
2. Aggiungi una entry in `assets/js/games.js` con `status: "playable"` quando è giocabile.

## Giochi

Banco di prova per giochi non ancora abbastanza maturi per un repository proprio. Un gioco "si laurea" (repo dedicato, sito Pages proprio, card nella sezione Playground del portfolio principale) quando lo è — vedi la decisione [`llm-wiki/wiki/f1-racer/decisions.md`](llm-wiki/wiki/f1-racer/decisions.md#repository-architecture-171) per il caso F1 Racer, il primo a farlo.

Nessun gioco attualmente in vetrina qui.