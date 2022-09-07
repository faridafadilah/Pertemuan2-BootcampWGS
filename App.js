const fs = require('fs'); // Core module filesystem
const readline = require('readline'); // Core module readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Cek Folder Data
if(!fs.existsSync('./data')) {
  fs.mkdirSync('data');
}

// Cek FIle contact.json
if(!fs.existsSync('./data/contact.json')) {
  fs.writeFileSync('./data/contact.json', '[]', 'utf-8');
}

// Membuat Pertanyaan
rl.question('Nama Lengkap: ', (nama) => {
  rl.question('No Hp: ', (nohp) => {
    rl.question('Email: ', (email) => {
      const contact = {nama, nohp, email}; // Menampung  data ke dalam object 
      const file = fs.readFileSync('./data/contact.json', contact); // Membaca file
      const contacts = JSON.parse(file); // Mengubah data ke JSON
      contacts.push(contact); // Push data
        
      // Tulis data ke file dan ubah ke string
      fs.writeFileSync('./data/contact.json', JSON.stringify(contacts, null, 2));
      console.log('Terima Kasih!');

      //close program
      rl.close();
    });
  });  
});