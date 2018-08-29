BEGIN;

    DROP TABLE
    IF EXISTS users, boards, bdays
    CASCADE;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    passw VARCHAR(100) NOT NULL
);

INSERT INTO users
    (user_name, passw)
VALUES
    ('Armand', 'password12'),
    ('Simon', 'password12'),
    ('Eve', 'password12'),
    ('LikeMike', 'password12');

CREATE TABLE boards
(
    id SERIAL PRIMARY KEY,
    board_name VARCHAR(100),
    user_id INTEGER REFERENCES users(id)
);

INSERT INTO boards
    (board_name, user_id)
VALUES
    ('sgcGO122', 1),
    ('a590bd', 2),
    ('lkx89sdd', 3),
    ('b42sdwe', 4);

CREATE TABLE bdays
(
    id SERIAL PRIMARY KEY,
    board_id INTEGER REFERENCES boards(id),
    name VARCHAR(100),
    dob DATE,
    starsign VARCHAR(100),
    horoscope TEXT
);

INSERT INTO bdays
    (board_id, name, dob, starsign, horoscope)
VALUES
    (1, 'Simon Dupree', '1987-04-14', 'aries', 'some text bla bla bla'),
    (1, 'Test Dupree', '1987-04-29', 'aries', 'some more text bla bla bla'),
    (3, 'Bernd Dupree', '1947-11-11', 'scorpion', 'more text blablalbla');

COMMIT;