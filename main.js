var arr=[2,1,4,3];
for(i=0;i<arr.length;i++) {
	for(j=i+1;j<arr.length;j++)
	{
		if(arr[i]>arr[j])
		{
           c=arr[i];
		   arr[i]=arr[j];
		   arr[j]=c;           		   
		}
	}
}
console.log("ascending order");
console.log(arr);


var arr=[2,1,4,3];
for(i=0;i<arr.length;i++) {
	for(j=i+1;j<arr.length;j++)
	{
		if(arr[i]<arr[j])
		{
           c=arr[i];
		   arr[i]=arr[j];
		    arr[j]=c;
                      		   
		}
	}
}
console.log("descending order")
console.log(arr);