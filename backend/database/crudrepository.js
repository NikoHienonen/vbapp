/* eslint-disable quotes */
const mysql = require('mysql');
const { config } = require('./config');

class CrudRepository {
    constructor() {
        this.connection = mysql.createConnection(config);
        this.connection.connect();
    }
    //Login
    login(user ,callback) {
        console.log(user); // WHERE username='${user.username}'
        const queryString = `SELECT * FROM RKCUSERS;`
        console.log(queryString);
        this.connection.query('SELECT * FROM RKCUSERS', (error, result) => {
            if(error) throw error;
            if(result.length === 0 || error) {
                callback('404');
            } else {
                if(user.password === result[0].password) {
                    callback('200')
                } else {
                    callback('403');
                }
            }
        });
    }
    /*
    // Gets all users
    getUsers(callback) {
        this.connection.query('SELECT * FROM Users;', (error, results) => {
            if (error) throw error;
            callback(results);
        });
    }
    addUser(user, callback) {
        myPlaintextPassword = user.password;
        bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
            if(err) throw err;
            const queryString = `INSERT INTO Users(userType, name, email, password)
            VALUES('user', '${user.username}', '${user.email}', '${hash}');`;
            console.log(queryString);
            this.connection.query(queryString, (error, result) => {
                if(error) throw error;
                callback(result);
            });
            // Store hash in your password DB.
        });
    }
    deleteUser(id, callback) {
        const queryString = `DELETE FROM Users WHERE ID = ${id}`;
        this.connection.query(queryString, (error, result) => {
            if(error) throw error;
            callback(result);
        });
    }
    getUser(user, callback) {
        const queryString = `SELECT * FROM Users WHERE name = '${user.username}';`;
        this.connection.query(queryString, (error, result) => {
            if(result.length === 0 || error) {
                callback('404');
            } else {
                this.comparePassword(user.password, result[0].password, (res) => {
                    console.log(res);
                    if(!res) {
                        callback('403');
                    } else {
                        const returnUser = {
                            username: result[0].name
                            , userType: result[0].userType
                        };
                        callback(returnUser);
                    }
                });
            } 
        });
    }
    comparePassword(userPassword, hashPassword, callback) {
        bcrypt.compare(userPassword, hashPassword).then(res => {
            callback(res);
        });
    }
    // Gets all products.
    getProducts(callback) {
        this.connection.query('SELECT * FROM products;', (error, results) => {
            if (error) throw error;
            callback(results);
        });
    }*/
}

module.exports = new CrudRepository();
