<?php
define("SERVERNAME", "localhost");
define ("USERNAME", "root");
define ("PASSWORD","");

class Connection
{
    public static function Open(){
        try {
            $conn = new PDO("mysql:host=".SERVERNAME.";dbname=db-facul", USERNAME, PASSWORD);
            // set the PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        }
        catch(PDOException $e)
        {
            //echo "Conexão falhou: " . $e->getMessage();
            throw new Exception($e->getMessage());
        }
    }



}