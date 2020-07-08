import a from './index.js'
import path from 'path'
globalThis.console.log(a)
globalThis.console.log(path.basename('/foo/bar/baz/asdf/quux.html'))
import events from 'events'
const emitter = new events.EventEmitter()
emitter.on('sayHi', function(someone){
    console.log("我是", someone)
})
emitter.on('sayHi', function(someone){
    console.log("我就是", someone)
})
emitter.emit('sayHi', 'jerry')
globalThis.console.log(a)
