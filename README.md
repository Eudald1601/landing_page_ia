# TasklessAI — landing

Landing de TasklessAI (consultoria d'IA a Lleida) amb Next.js 16. És un *scrollytelling*: seccions que es
queden fixades mentre fas scroll i s'animen segons quant n'has recorregut. Només tema fosc. En català (`/`) i
castellà (`/es`).

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # comprova tipus i genera la versió de producció
```

## Seccions

1. **Inici**: esfera de partícules; el text puja i «La teva setmana» s'apropa i les tasques s'automatitzen.
2. **Situacions**: carril horitzontal amb els tres problemes.
3. **Serveis**: escenari fixat amb una escena per servei. Cada escena té una demo i notes que entren pels costats;
   les pestanyes salten d'una a l'altra.
4. **Prova-ho**: l'assistent puja des de baix i la conversa s'escriu a mesura que fas scroll.
5. **Procés**: els quatre passos s'obren en ventall.
6. **Qui sóc**, **adequació** i **contacte**: contingut estàtic.

## On és cada cosa

- `src/content/copy.ts`: **tots els textos**, en català i castellà amb la mateixa estructura.
- `src/components/Landing.tsx`: estructura de la pàgina i posició dels punts d'interès de cada servei
  (`x`/`y` en fraccions de la demo).
- `src/components/Demos.tsx`: les demos fetes amb HTML i CSS (fan el paper de captures de producte). Fan servir
  unitats de contenidor (`cqw`), així escalen com una imatge.
- `src/components/useScrollScenes.ts`: motor de scroll. Cada `[data-pin]` rep `--p` (0 → 1); les escenes reben
  `--e`/`--x` i les notes `--c`. Tot el moviment es fa al CSS amb aquestes variables.
- `src/components/Orb.tsx`: l'esfera de partícules (canvas, sense recursos externs).
- `src/app/globals.css`: disseny, responsive i moviment reduït (amb `prefers-reduced-motion` tot es mostra estàtic).
