# Development Procedure

Procedura operativa obbligatoria per ogni modifica al repository.

## Classificazione

Ogni issue deve avere almeno una label che descriva il tipo di lavoro:

- `bug` — correzione di un comportamento errato o regressione.
- `documentation` — documentazione, inclusa la wiki tecnica.
- `enhancement` — nuova funzionalità, miglioramento o comportamento aggiunto.

Se un task ricade in più categorie, possono essere applicate più label.

## Flusso obbligatorio

1. **Issue** — creare o identificare una issue e applicare la label corretta.
2. **Branch** — creare un branch dedicato partendo da `master` aggiornato.
3. **Sviluppo** — implementare esclusivamente sul branch.
4. **Test** — eseguire i controlli pertinenti prima del commit/PR. Per F1 Racer includere almeno parsing/import dei moduli, inizializzazione, rendering quando verificabile, assenza di errori runtime e smoke test del flusso modificato.
5. **Commit / Push** — commit sul branch dedicato. **Mai commit o push diretti su `master`.**
6. **Pull Request** — aprire una PR verso `master`, collegata alla issue e con descrizione di modifica e test.
7. **Test di release** — verificare regressioni e criteri della release checklist. Un controllo non eseguibile con gli strumenti disponibili deve essere dichiarato **non testato**, mai considerato passato.
8. **Merge** — effettuare il merge solo dopo i controlli previsti. Il commit risultante su `master` deve provenire dalla PR.
9. **Prossima issue** — solo dopo la conclusione della precedente si passa al task successivo.

## Regole di test

- Un diff review non sostituisce un test runtime.
- Un test sorgente non dimostra che UI, rendering o interazioni browser funzionino realmente.
- I bug già incontrati devono diventare casi di regressione nella checklist quando applicabile.
- Su modifiche mobile/touch, includere test delle gesture e delle interazioni simultanee rilevanti.
- Se il repository non dispone dell'ambiente necessario per un test, indicare esplicitamente il limite nella PR.

## F1 Racer

Per le modifiche in `games/f1-racer/`, mantenere aggiornati quando necessario:

- `games/f1-racer/F1-RACER-WIKI.md` per architettura e comportamento.
- `games/f1-racer/RELEASE-CHECKLIST.md` per nuovi casi di regressione e release gate.
