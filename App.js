const fs = require('fs'); // Core module filesystem
const readline = require('readline'); // Core module readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Cek Folder Data
const dirPath = './data';
if(!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Cek FIle contact.json
const filePath = './data/contact.json';
if(!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, '[]', 'utf-8');
}

// Membuat Pertanyaan
rl.question('Nama Lengkap: ', (nama) => {
  rl.question('No Hp: ', (nohp) => {
    rl.question('Email: ', (email) => {
      const contact = {nama, nohp, email}; // Menampung  data ke dalam object 
      const file = fs.readFileSync(filePath, contact); // Membaca file
      const contacts = JSON.parse(file); // Mengubah data ke JSON
      contacts.push(contact); // Push data
        
      // Tulis data ke file dan ubah ke string
      fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));
      console.log('Terima Kasih!');

      //close program
      rl.close();
    });
  });  
});