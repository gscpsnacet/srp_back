<?php

include_once $_SERVER['DOCUMENT_ROOT'].'/srp_back/config.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/srp_back/tableconfig.php';
$serverlocation="uploads/carouselimg/";
$table_name=Feed_table;
$db_name=DB_NAME;
$response=array();






$conn=mysqli_connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
if(!$conn){
	$response["status"]="error";
	$response["message"]="error in connection";
}else{

	
		$query="select * from $db_name.$table_name";
		$result=mysqli_query($conn,$query);
	if(!$result){
		$response["status"]="error";
		$response["message"]="error in fetching data";
	}else{
		$response["status"]="success";
		$response["message"]="data is fetched";
		$data=array();
		if(mysqli_num_rows($result)>0){
			while ($row=mysqli_fetch_assoc($result)) {
				$values=array();
				$values["fid"]=$row["fid"];
				$values["uid"]=$row['uid'];
				$values["ftitle"]=$row["ftitle"];
				$values["fdesc"]=$row["fdesc"];
                $data[]=$values;
			}
			$response["records"]=$data;
		}
	}
}

	
echo json_encode($response);

?>