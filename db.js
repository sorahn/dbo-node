var mysql       = require('mysql'),
    connection  = mysql.createConnection({
      host     : 'destiny.bungie.org',
      user     : 'destinypublic',
      password : 'what was wrong with tiger?',
      database : 'destiny',
    });

exports.query = function (sql, callback) {
  return connection.query(sql, callback);
}
