CREATE DATABASE tictactoe;

CREATE SCHEMA IF NOT EXISTS user_data;
CREATE SCHEMA IF NOT EXISTS game_data;

DROP TABLE tictactoe.user_data;
DROP TABLE tictactoe.game_data;

CREATE TABLE tictactoe.user_data
(
  id                    SERIAL PRIMARY KEY,
  test                  INT
);

CREATE TABLE tictactoe.game_data
(
  id                    SERIAL PRIMARY KEY,
  test                  INT
);
