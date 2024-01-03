let items =[20,13,12,14,16,18]
function selectionsort(data){
let minID;
for(let i=0;i < data.length;i++){
    minId=i;
    for (let j=i+1;j <data.length;j++){
        if(data[j]<data[minID]){
            minID=j;

        }
    }
    let temp=data[minID];
    data[minID]=data[i];
    data[i]=temp;

            
    }
}


 selectionsort(items)
console.log(items) 