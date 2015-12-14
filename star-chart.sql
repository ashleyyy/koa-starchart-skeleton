-- final project  star-chart  database
--
-- Editted by Stephanie Beaton (stefanybeaton@gmail.com)


CREATE TABLE "users" (
    -- make the "id" column a primary key; this also creates
    -- a UNIQUE constraint and a b+-tree index on the column
    -- the sequence is automatically assigned the name users_id_seq
  "id" SERIAL PRIMARY KEY,
  "username" text NOT NULL,
  "password" text,
  "email" text
);

INSERT INTO USERS (USERNAME,PWD,EMAIL) VALUES ('Stephanie', '12345', 'stefanybeaton@gmail.com');
INSERT INTO USERS (USERNAME,PWD,EMAIL) VALUES ('Ashley', '12345', 'ashleyfisher@gmail.com');
INSERT INTO USERS (USERNAME,PWD,EMAIL) VALUES ('Lakshmi', '12345', 'lakshmikotteda@hotmail.com');
INSERT INTO USERS (USERNAME,PWD,EMAIL) VALUES ('Tanner', '12345', 'tanner@gmail.com');
INSERT INTO USERS (USERNAME,PWD,EMAIL) VALUES ('Brittany', '12345', 'brittanyjsee@gmail.com');

--
-- Name: tasks Type: TABLE Owner: postgres
--

CREATE TABLE "tasks" (
    -- make the "id" column a primary key; this also creates
    -- a UNIQUE constraint and a b+-tree index on the column
    -- the sequence is automatically assigned the name tasks_id_seq
    "id" SERIAL PRIMARY KEY,
  "description" text,
  "due_date" date,
    "recurring" boolean,
    "completed" boolean,
    "priority"  integer,
    "user_id"   integer NOT NULL,
    CONSTRAINT fk1_tasks FOREIGN KEY (user_id)
      REFERENCES users (id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO TASKS (DESCRIPTION,DUE_DATE,RECURRING,COMPLETED,PRIORITY,USER_ID) VALUES ('A non recurring task', now(), false, false, 1, 1);
INSERT INTO TASKS (DESCRIPTION,DUE_DATE,RECURRING,COMPLETED,PRIORITY,USER_ID) VALUES ('A recurring task', now(), true, false, 1, 1);
INSERT INTO TASKS (DESCRIPTION,DUE_DATE,RECURRING,COMPLETED,PRIORITY,USER_ID) VALUES ('A completed non recurring task', now(), false, true, 1, 1);
INSERT INTO TASKS (DESCRIPTION,DUE_DATE,RECURRING,COMPLETED,PRIORITY,USER_ID) VALUES ('A completed recurring task', now(), true, true, 1, 1);


--
-- Name: friends Type: TABLE Owner: postgres
--

CREATE TABLE "friends" (
  "friend_1_id" integer NOT NULL,
    "friend_2_id" integer NOT NULL,
    CONSTRAINT fk1_friends FOREIGN KEY (friend_1_id)
      REFERENCES users (id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE,
   CONSTRAINT fk2_friends FOREIGN KEY (friend_2_id)
      REFERENCES users (id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO FRIENDS (FRIEND_1_ID, FRIEND_2_ID) VALUES (1, 2);

--
-- Name: tasks Type: TABLE Owner: postgres
--

CREATE TABLE "stars" (
    -- make the "id" column a primary key; this also creates
    -- a UNIQUE constraint and a b+-tree index on the column
    -- the sequence is automatically assigned the name stars_id_seq
  "id" SERIAL PRIMARY KEY,
  "x_coord" text,
  "y_coord" text,
    CONSTRAINT fk1_stars FOREIGN KEY (id)
      REFERENCES tasks (id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE
);






VACUUM FULL ANALYZE;
