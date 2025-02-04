<html>
<body>

<form action="exercice.php" method="post">
 <p>Votre nom : <input type="text" name="input" /></p>
 <p><input type="submit" value="OK" name="submit-button"></p>
</form>

    <?php 

$Gfirstname = $_GET["first_name"];
$Pfirstname = $_POST["input"]; 

    if (isset($_POST["input"])) {
        $Pfirstname = $_POST["input"];
        echo "Hello $Pfirstname via POST";
    } elseif ($Gfirstname){
        echo "Hello $Gfirstname via GET";
    }else{
        echo 'Hello anonyme';
    }
    ?>


</body>
</html>