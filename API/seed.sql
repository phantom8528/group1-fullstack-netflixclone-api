CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS shows (
    id SERIAL PRIMARY KEY,
    show_name VARCHAR(255),
    show_description VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS episodes (
    ep_id SERIAL PRIMARY KEY,
    ep_season INTEGER NOT NULL,
    ep_title VARCHAR(255),
    ep_desc VARCHAR(255) NOT NULL,
    episodes INTEGER NOT NULL,
    show_id INT NOT NULL REFERENCES shows (id) ON DELETE CASCADE
);
