CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname TEXT, 
    lastname TEXT, 
    username TEXT, 
    password TEXT,
    is_logged_in INTEGER
);
INSERT or IGNORE INTO songtable(id, firstname, lastname, username, password, is_logged_in) VALUES (1, 'System', 'Administrator', 'sysadmin', 'admin', 0);