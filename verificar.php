<?php
try {
	$pdo = new PDO("mysql:dbname=projeto_notificacao;host=localhost", "root", "root");
} catch(PDOException $e) {
	echo "ERRO: ".$e->getMessage();
	exit;
}
//notificacao do usuario 1 que anda não foram lidas
$sql = "SELECT * FROM notificacoes WHERE id_user = '1' AND lido = '0'";
$sql = $pdo->query($sql);

$array = array('qt'=>0);

if($sql->rowCount() > 0) {

	$array['qt'] = $sql->rowCount();

}

echo json_encode($array);
exit;