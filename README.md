# Marketplace with Node and DB using sequelize

This project uses Node, JS and pug to optimize the components and create a sustainable UI


## Creating the DB

If you want to run the repo, first you must create the schema. Then you must add two tables. I leave you over here the exported sql queries to create the two tables.

```
--
-- Table structure for table `viajes`
--

DROP TABLE IF EXISTS `viajes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `viajes` (
  `id` bigint NOT NULL,
  `title` varchar(60) DEFAULT NULL,
  `price` varchar(10) DEFAULT NULL,
  `date_init` varchar(10) DEFAULT NULL,
  `date_final` varchar(10) DEFAULT NULL,
  `image` varchar(15) DEFAULT NULL,
  `description` text,
  `available` int DEFAULT NULL,
  `slug` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
```

```
--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `email` varchar(45) NOT NULL,
  `review` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

```

## Connecting to the DB
Once you created the schema and the two tables, just connect to the db in the file /config/db,js. Put your passw and make the reference to the schema name

```
const db = new Sequelize("your-schema-name", "your-db-user", "your-db-passw", {
    host: "127.0.0.1",
    port: "your-port",
    dialect: "mysql",
    define: {
```

## Running the application in dev mode

You can run your application in dev mode that enables live coding using:

```
npm run dev
```