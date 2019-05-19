const config = {
    host: 'mydb.tamk.fi',
    user: 'c7nhieno',
    password: 'Storm5oul9900',
    database: 'dbc7nhieno1'
};

module.exports = { config };

/*
mysql --host mydb.tamk.fi --user c7nhieno -p --database dbc7nhieno1
CREATE TABLE matches(
    id int AUTO_INCREMENT PRIMARY KEY,
    homeTeam VARCHAR(255),
    visitorTeam VARCHAR(255),
    result VARCHAR(255),
    victory VARCHAR(255)
);
INSERT INTO matches(teams, result, victory)
VALUES("RKC-PIPO", "3-1", 1);

INSERT INTO matches(teams, result, victory)
VALUES("LaKo-RKC", "2-2", NULL);
INSERT INTO RKCUSERS(username, password)
VALUES("Antti", "vito");
INSERT INTO RKCUSERS(username, password)
VALUES("Niko", "kapteeni");
INSERT INTO RKCUSERS(username, password)
VALUES("Jyrki", "maskotti");
*/