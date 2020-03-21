var db = require('../models/cptModel');

exports.getAllDataType = (req, res, next) => {
  let sql = `SELECT * FROM complaint_data_type`;
  let data = [];
  db.query(sql, data, (err, query) => {
    db.end();
    if (err) {
      console.log(err);
      console.log(sql);
      res.json(err);
    } else {
      console.log(sql + ' \ncomplete\n' + query);
      res.json(query);
    }
  });
};

exports.getAllDataTypeTransaction = (req, res, next) => {
  let sql;
  let data;
  let result = [];
  db.beginTransaction(err => {
    if (err) {
      throw err;
    }
    sql = `SELECT * FROM complaint_data_type`;
    data = [];
    db.query(sql, data, (error, query) => {
      if (error) {
        return db.rollback(function() {
          throw error;
        });
      }
      result[0] = query;
      let sql = `SELECT * FROM complaint_teach`;
      data = [];
      db.query(sql, data, (error, query) => {
        if (error) {
          return db.rollback(function() {
            throw error;
          });
        }
        result[1] = query;
        db.commit(err => {
          if (err) {
            return db.rollback(function() {
              throw err;
            });
          }
          console.log('success!');
          res.json(result);
        }); // end commit
      }); // end transaction 2 query
    }); // end transaction 1 query
  }); // end begin Transaction
};
