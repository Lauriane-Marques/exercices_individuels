<html>
<body>

<form action="exercice.php" method="post">
 <p>Votre nom : <input type="text" name="input" /></p>
 <p><input type="submit" value="OK" name="submit-button"></p>
</form>

    <?php 
session_start();

    
    if(isset($_GET["first_name"])){
        $first_name = $_GET['first_name'];
    }elseif (isset($_POST["input"])) {
        $first_name = $_POST["input"];
        $_SESSION["first_name"] = $_POST["input"];
    } elseif (isset($_SESSION["first_name"])){
        $first_name = $_SESSION["first_name"];
    }else{
        $first_name = "anonyme";
    }

    if(isset($_POST['reset'])) {
        unset($_SESSION['first_name']);  
    }

        echo "variable de section : " .$_SESSION["first_name"] . '<br>';
        echo "Bonjour " . $first_name;

    ?>

<form method="post">
        <input type="submit" name="reset"
                value="Reset"/>    
</form>

</body>
</html>