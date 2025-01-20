const accountId=12220//cannot be changed
let accEmail="123"
var accPass="1234"
accCity="London"
console.table ([accountId,accEmail,accPass,accCity]) // 12220 '123' '1234' London;
accEmail="1"
accPass="1"
accCity="Paris"
let temp;//undefined for temporary
console.table([accountId,accEmail,accPass,accCity,temp]) // 12220 '1' '1' Paris;
