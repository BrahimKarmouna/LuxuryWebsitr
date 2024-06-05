<?php
//Data Source Name : => Driver:mysql + Serveur d'hébérgement: host=localhost
//=>Nom de la base de données: dbname=test_db
$dsn = "mysql:host=localhost;dbname=website";

//Nom de l'utilisateur pour se connecter au serveur mysql:
$user = "root";
//Mot de passe:
$pass = "";
try {
  $db = new PDO($dsn, $user, $pass);

} catch (PDOException $e) {
//die :affiche le message et quitte le script PHP actuel.
   die('Erreur : ' . $e->getMessage());
}
?>