import * as fs from 'fs';

// 1- Veriyi oluşturmak

fs.writeFile('example.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if (err) console.log(err);
    console.log('Veri oluşturuldu.');
});

//------------------------

// 2- Veriyi okumak

fs.readFile('example.json', 'utf8', (err,data) => {
    if (err) console.log(err);
    console.log(data);
});

//------------------------

// 3- Veriyi güncellemek

fs.appendFile('example.json', '\nits a data to update', 'utf8', (err) => {
    if (err) console.log(err);
    console.log('Veri güncellendi.');
});

//------------------------

// 4- Veriyi silmek

fs.unlink('example.json', (err)=> {
    if (err) console.log(err);
    console.log('Veri silindi.')
});

//------------------------

