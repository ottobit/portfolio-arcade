import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const source=fs.readFileSync(new URL('../games/f1-racer/steering.js',import.meta.url),'utf8');
const {shapeSteering,smoothSteering,steeringYaw}=await import('data:text/javascript,'+encodeURIComponent(source));
test('dead zone, symmetric shaping and clamped lock',()=>{assert.equal(shapeSteering(.02),0);assert.equal(shapeSteering(3),1);assert.equal(shapeSteering(-3),-1);assert.equal(shapeSteering(.3),-shapeSteering(-.3));assert(shapeSteering(.3)<.3);});
test('smoothing is invariant between 30, 60 and 120 Hz',()=>{const run=fps=>{let n=0;for(let i=0;i<fps;i++)n=smoothSteering(n,1,1/fps);return n;};assert(Math.abs(run(30)-run(120))<1e-10);});
test('release returns to center; direction reversal does not snap',()=>{assert(Math.abs(smoothSteering(1,0,.5))<.002);const n=smoothSteering(1,-1,1/60);assert(n<1&&n>0);});
test('stationary car cannot pivot; reverse reverses yaw; fast steering reduced',()=>{assert.equal(Math.abs(steeringYaw(1,0,2,1)),0);assert.equal(steeringYaw(1,20,2,1),-steeringYaw(1,-20,2,1));assert(Math.abs(steeringYaw(1,84,2,1))<Math.abs(steeringYaw(1,20,2,1))*.4);});
