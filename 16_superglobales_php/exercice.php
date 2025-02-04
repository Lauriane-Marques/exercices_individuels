<html>
<body>

<h1>Bonjour 
    <?php 

$firstname = $_GET["first_name"]; 

    if ($firstname) {
        echo $firstname;
    } else{
        echo 'anonyme';
    }
    
    ?>

</body>
</html>