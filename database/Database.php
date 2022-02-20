<?php
const CONNECTION = 'local'; //change this if it is not local machine
class Database extends mysqli
{
    function __construct($dbname = '', $port = '', $socket = '')
    {
        $username = 'root';
        if(CONNECTION==='local')
        {
            $host='localhost';
            $passwd = 'root';
        }
        else
        {
            $host='192.168.1.3';
            $passwd = 'root';
        }
        if($dbname === '')
            $dbname = 'table';
        if($port==='')
            $port = ini_get("mysqli.default_port");
        if($socket==='')
            $socket = ini_get("mysqli.default_socket");
        parent::__construct($host, $username, $passwd, $dbname, $port, $socket);
    }
}