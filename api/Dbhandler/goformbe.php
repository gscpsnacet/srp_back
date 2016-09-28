<?php

include_once $_SERVER['DOCUMENT_ROOT'].'/srp_back/config.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/srp_back/tableconfig.php';
$serverlocation="uploads/carouselimg/";
$table_name=Govtform_table;
$db_name=DB_NAME;
$response=array();

$postdata = json_decode(file_get_contents("php://input"));

$option=$postdata->option;



$conn=mysqli_connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
if(!$conn){
	$response["status"]="error";
	$response["message"]="error in connection";
}else{

	switch ($option) {
		case 'list':		
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
				$values["gfid"]=$row["gfid"];
				$values["uid"]=$row['uid'];
				$values["gftitle"]=$row["gftitle"];
				$values["gfdesc"]=$row["gfdesc"];
                $data[]=$values;
			}
			$response["records"]=$data;
		}
	}

	case'list_all':
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
				$values["gfid"]=$row["gfid"];
				$values["gftitle"]=$row["gftitle"];
				$values["gfdesc"]=$row["gfdesc"];
                $data[]=$values;
			}
			$response["records"]=$data;
		}
	}
	break;

		case 'post':
		//$uid=$postdata->uid;
		$gftitle=$postdata->gftitle;
		$gfdesc=$postdata->gfdesc;
		$query="insert into $db_name.$table_name (gftitle,gfdesc) values('$gftitle','$gfdesc')" ;
		$result=mysqli_query($conn,$query);
		if(!$result){
		$response["status"]="error";
		$response["message"]="error in inserting data $db_name $table_name";
	}else{
		$response["status"]="success";
		$response["message"]="data is inserted";
		}
			break;
		case 'delete':
			# code...
		$pid=$postdata->pid;
		$purl=$postdata->purl;
		$url=$serverlocation.$purl;
		if (file_exists($url)) {
        unlink($url);
    	}
		$query="DELETE FROM $db_name.$table_name WHERE $table_name.`pid` = $pid";
		$result=mysqli_query($conn,$query);
		if(!$result){
			$response["status"]="error";
			$response["message"]="Error in deleting Carousel ";
		}else{
			$response["status"]="success";
			$response["message"]="Carousel deleted";
			$query="SET  @num := 1;UPDATE `$table_name` SET `pid` = @num := (@num+1);";
			$result=mysqli_query($conn,$query);
			if(!$result){
				$response["message"].=" table not ordered";
			}else{
				$response["message"].="table ordered";
			}
			
		}
			break;
		
		default:
			# code...
			$response["status"]="error";
			$response["message"]="data transmission error";
			break;
	}
}
echo json_encode($response);

?>