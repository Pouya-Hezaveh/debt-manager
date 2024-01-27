const pg = require('pg');
const {pg_config, admin_acc} = require('./pg.config');

// This query initializes the database for this web application.
const dbInitialization = `

ALTER TABLE IF EXISTS public."USER" DROP CONSTRAINT IF EXISTS None;

ALTER TABLE IF EXISTS public."PAYMENT" DROP CONSTRAINT IF EXISTS None;

ALTER TABLE IF EXISTS public."PAYMENT" DROP CONSTRAINT IF EXISTS None;

ALTER TABLE IF EXISTS public."BILL" DROP CONSTRAINT IF EXISTS None;

ALTER TABLE IF EXISTS public."BILLING_RECORD" DROP CONSTRAINT IF EXISTS None;

ALTER TABLE IF EXISTS public."BILLING_RECORD" DROP CONSTRAINT IF EXISTS None;



DROP TABLE IF EXISTS public."USER";

CREATE TABLE IF NOT EXISTS public."USER"
(
    id character(20) COLLATE pg_catalog."default" NOT NULL,
    password character(30) COLLATE pg_catalog."default" NOT NULL,
    name character(30) COLLATE pg_catalog."default",
    type character(10) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "USER_pkey" PRIMARY KEY (id)
);

DROP TABLE IF EXISTS public."ACCOUNT_TYPE";

CREATE TABLE IF NOT EXISTS public."ACCOUNT_TYPE"
(
    type character(10) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT accounttype_pkey PRIMARY KEY (type)
);

DROP TABLE IF EXISTS public."PAYMENT";

CREATE TABLE IF NOT EXISTS public."PAYMENT"
(
    id uuid NOT NULL,
    user_id character(20) NOT NULL,
    date_id uuid NOT NULL,
    value integer DEFAULT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS public."DATE";

CREATE TABLE IF NOT EXISTS public."DATE"
(
    id uuid NOT NULL,
    year integer NOT NULL,
    month integer NOT NULL,
    day integer NOT NULL,
    hour integer NOT NULL,
    second integer NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS public."BILL";

CREATE TABLE IF NOT EXISTS public."BILL"
(
    id uuid NOT NULL,
    date_id uuid NOT NULL,
    value integer NOT NULL,
    description character(500),
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS public."BILLING_RECORD";

CREATE TABLE IF NOT EXISTS public."BILLING_RECORD"
(
    user_id character(20) COLLATE pg_catalog."default" NOT NULL,
    bill_id uuid NOT NULL
);

ALTER TABLE IF EXISTS public."USER"
    ADD FOREIGN KEY (type)
    REFERENCES public."ACCOUNT_TYPE" (type) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."PAYMENT"
    ADD FOREIGN KEY (user_id)
    REFERENCES public."USER" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."PAYMENT"
    ADD FOREIGN KEY (date_id)
    REFERENCES public."DATE" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."BILL"
    ADD FOREIGN KEY (date_id)
    REFERENCES public."DATE" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."BILLING_RECORD"
    ADD FOREIGN KEY (user_id)
    REFERENCES public."USER" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."BILLING_RECORD"
    ADD FOREIGN KEY (bill_id)
    REFERENCES public."BILL" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

INSERT INTO "ACCOUNT_TYPE" VALUES (
    'ADMIN'
);
INSERT INTO "ACCOUNT_TYPE" VALUES (
    'CLIENT'
);

INSERT INTO "USER" VALUES (
    '${admin_acc.id}', '${admin_acc.password}', '${admin_acc.name}', '${admin_acc.type}'
);

END;
`

//==============================================================================
async function initializeDatabase() {
    const client = new pg.Client(pg_config);

    await client.connect();

    res = await client.query(dbInitialization);

    console.log(await res.rows);

    client.end();
}

initializeDatabase()
