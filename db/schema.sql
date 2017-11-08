DROP DATABASE IF EXISTS all_alcohol_db;

CREATE DATABASE all_alcohol_db;

USE all_alcohol_db;

-- How do we delieniate on different labels i.e. "Johnnie Walker Red", "Johnny Walker Black"?
-- Done thorugh label needs logic to check if there are other preexisting types of that liquor, but not that label

-- Popularity implemented as local rating system as final goal.
-- Also, possibly could be seeded from major liquor suppliers, like Midwest Liquor Distributors

CREATE TABLE liquors(
    liquor_id INTEGER(10) AUTO_INCREMENT,
    liquor_name VARCHAR(255) NOT NULL,
    liquor_picture VARCHAR(255) NULL,
    -- spirits: what type of liquor it is i.e. "whiskey", "vodka"
    spirits VARCHAR(255) NOT NULL,
    -- aging: "12 year" Scotch
    aging INTEGER(4) NULL, 
    label VARCHAR(255) NULL,
    country VARCHAR(255) NULL,
    city_of_origin VARCHAR(255) NULL,
    proof INTEGER(3) DEFAULT NULL,

    -- popularity INTEGER(3) NULL,
    -- average_cost DECIMAL(10,2)
    -- Is there an api out there?
    -- Otherwise. Build algo...

    PRIMARY KEY (liquor_id)
);

CREATE TABLE mixedDrinks(
    mixed_id INTEGER(10) AUTO_INCREMENT,
    mixed_name VARCHAR(255) NOT NULL,
    mixed_picture VARCHAR(255) NULL,
    country VARCHAR(255) NULL,
    city_of_origin VARCHAR(255) NULL, 
    -- proof is determined through algorithm that finds average proof among added mixed drinks
    -- Next step would be to incorporate non-alocholic ingredients and their proof impact
    proof INTEGER(3) DEFAULT NULL,

    -- popularity INTEGER(3) NULL,
    -- Survey businesses to get price points
    -- Possible to webscrape for this information using a testing bot against some thing like urbanspoon?

    PRIMARY KEY (mixed_id)
);

-- Relational Db to contain ids and foreign keys for liquor, mixed drinks, and food
-- Also contains a percent column that determines parts i.e. 2 parts gin 1 part tonic = 66% gin 33% tonic
-- Ratio table
CREATE TABLE ratio_table(
    relation_id INTEGER(10) AUTO_INCREMENT,
    fk_liquor_id INT NULL,
    fk_mixed_id INT NULL,

    FOREIGN KEY (fk_liquor_id) REFERENCES liquors(liquor_id),
    FOREIGN KEY (fk_mixed_id) REFERENCES mixed_drinks(mixed_id),
    PRIMARY KEY (relation_id)
);  


-- CREATE TABLE wine(
--     year INTEGER(4),
-- );

-- CREATE TABLE beer(

-- );

-- exists to match food suggestions to arrays
-- add foreign key to ratio table
-- CREATE TABLE food(

-- );
