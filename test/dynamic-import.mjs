import { addHook } from '../index.mjs'
import { strictEqual } from 'assert'

addHook((name, exports) => {
  if (name.match(/something\.m?js/)) {
    exports.foo += 15
  }
})

;(async () => {
  const { foo: fooMjs } = await import('./fixtures/something.mjs')
  const { foo: fooJs } = await import('./fixtures/something.js')

  strictEqual(fooMjs, 57)
  strictEqual(fooJs, 57)
})()