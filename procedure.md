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
8. **Approvazione utente** — per default, dopo sviluppo, test e test di release, lasciare la PR aperta. Il merge avviene solo quando l'utente approva esplicitamente dicendo **`Concludi`**.
9. **Merge** — dopo `Concludi`, effettuare il merge della PR. Il commit risultante su `master` deve provenire dalla PR.
10. **Prossima issue** — solo dopo la conclusione della precedente si passa al task successivo.

### Modalità auto-conclusione

Se **prima dello sviluppo** utente e assistente concordano esplicitamente un piano e stabiliscono che quel piano è in **modalità auto-conclusione**, non è necessario attendere `Concludi` per ogni PR prevista dal piano. In quel caso, completati sviluppo, test e release test, la PR può essere mergiata automaticamente secondo il piano concordato.

In assenza di un accordo preventivo esplicito sulla modalità auto-conclusione, vale sempre la regola standard: **PR aperta fino a `Concludi`**.

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
