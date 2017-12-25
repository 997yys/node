module.exports=function(att){
	var arr=[];
	for(var i=0;i<att.length;i++){
		if(arr.indexOf(att[i])==-1){
			arr.push(att[i]);
		}
	}
	return arr;
}