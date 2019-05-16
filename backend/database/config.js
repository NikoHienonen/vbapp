const config = {
    host: 'mydb.tamk.fi',
    user: 'c7nhieno',
    password: 'Storm5oul9900',
    database: 'dbc7nhieno1'
};

module.exports = { config };

/*
CREATE TABLE matches(
    matchid int AUTO_INCREMENT PRIMARY KEY,
    teams VARCHAR(255),
    result VARCHAR(255),
    victory BIT
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