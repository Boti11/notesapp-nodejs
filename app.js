var fs = require('fs')
var path = require('path')
var fct = process.argv[2]
var title = process.argv[3]
var body = process.argv[4]



var obj = {
   table: []
};

obj.table.push({title: 'react', body:'learnreact'});

var json = JSON.stringify(obj);

fs.writeFileSync('./notes.json', json);



if (fct == "add"){
fs.readFile('./notes.json',function callback(err, data){
    if (err){
        return err;
    } else {
    obj = JSON.parse(data); //now it an object
    obj.table.push('{title: '+title.toString()+', body: '+body.toString()+' }'); //add some data
    json = JSON.stringify(obj); //convert it back to json
    fs.writeFileSync('./notes.json', json); // write it back 
}})
}	

if (fct == "list"){
	fs.readFile('./notes.json',function callback(err, data){
    if (err){
        return err;
    } else {
    obj = JSON.parse(data)
    console.log(obj)
}})}
