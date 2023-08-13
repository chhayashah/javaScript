const mynum=[1,2,3,4]
const mytotal=mynum.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and crrval: ${currval}`)
    return acc+ currval
}, 0)

console.log(mytotal)

const total= mynum.reduce((acc,currval) => acc+currval ,0)
console.log(total)