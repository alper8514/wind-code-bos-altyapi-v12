const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const { prefix } = require('../ayarlar.json')

module.exports = client => {
  var articles = [
"Wind Code - Boş Altyapı v12"
  ];
  
  setInterval(function() {
    var oynuyor = articles[Math.floor(Math.random() * (articles.length))];
    client.user.setActivity(oynuyor);
}, 10000); // Sayıyı (süreyi) değiştirebilirsiniz: 1000 = 1 saniye.
  
  client.user.setStatus("online");
  // online = Çevrimiçi
  // idle = Boşta
  // dnd = Rahatsız Etmeyin
};