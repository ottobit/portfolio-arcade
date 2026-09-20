import test from 'node:test';
import assert from 'node:assert/strict';
import { DRIVERS } from '../games/f1-racer/championship.js';

const requestedNames = [
  'Rocker Pino',
  'Clopy',
  'Vivian Wendy',
  'Dani Muscle',
  'Alice AaA',
  'Peppy Bau',
  'Cookie',
  'May',
  'Lola',
];

test('custom AI driver names are assigned once while preserving the player', () => {
  assert.equal(DRIVERS.length, 10);
  assert.equal(DRIVERS[0].id, 'player');
  assert.equal(DRIVERS[0].name, 'Tu (Fenice)');
  const aiNames = DRIVERS.slice(1).map((d) => d.name.replace(/ \(.+\)$/, ''));
  assert.deepEqual(new Set(aiNames), new Set(requestedNames));
  assert.equal(aiNames.length, new Set(aiNames).size);
});
