<?php
session_start();
$_POST = json_decode(file_get_contents('php://input'), true);
if(isset($_POST) && !empty($_POST)){
    $username = $_POST['username'];
    $password = $_POST['password'];
    $_SESSION['user'] = $username;
    if($username == 'admin' && $password == 'admin'){
       
        ?>
        {
            "success":true,
            "secret": "This is a secret no one knows but admin"

        }
        <?php 
    }else {
                 
       
        ?>
        {
            "success" : false,
            "message": "Invalid credentials"

        }    
        <?php
        }
    } 
else {
    
    ?>
    {
        "success": false,
        "message": "Only POST access accepted"
    }
    <?php
}

?>
