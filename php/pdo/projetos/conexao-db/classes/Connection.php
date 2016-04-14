<?php
define("SERVERNAME", "localhost");
define ("DATABASE_NAME","db-facul");
define ("USERNAME", "root");
define ("PASSWORD","");

class Connection
{
    public static function Open(){
        try {
            $conn = new PDO("mysql:host=".SERVERNAME.";dbname=".DATABASE_NAME, USERNAME, PASSWORD);
            // set the PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        }
        catch(PDOException $e)
        {
            throw new Exception($e->getMessage());
        }
    }
}