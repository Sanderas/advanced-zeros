module.exports = function getZerosCount(number, base) {
    // your implementation
    var B=[];
    function Eratosthenes(n) {
        var i, P;
        for (P=2; P<=n; P++) B[P]=true;
        P=2;
        while (P*P<=n)
        {
            i=P*P;
            if (B[P])
                while (i<=n)
                {
                    B[i]=false;
                    i=i+P;
                }
            P=P+1;
        }
    }

    Eratosthenes(base); //with using this function we need to separate the base on simple multipliers

    var arr=[];
    var res=base;
    while (res!=1) {
        for (var i=2; i<=res; i++) {
            while (res%i==0 && B[i]) {
                arr.push(i);      //the array of simple multipliers
                res/=i;
            }
        }
    }

    var arr_res=[];                     //we need to group multipliers in this array
    for (var i=0; i<arr.length; i++) {
        var compare=arr[i];
        var num=0;
        while (arr[i]==compare && i<arr.length) {
            num+=1;
            i+=1;
        }
        arr_res.push([arr[i-1], num]);
        i-=1;
        num=1;
    }

    var num_zeros=0;

    var max=arr_res.length-1;
    for (var i=arr_res.length-1; i>-1; i--) {
        max= (arr_res[i][0]*arr_res[i][1]>arr_res[max][0]*arr_res[max][1] && (arr_res[i][0]*arr_res[i][1])%(arr_res[max][0]*arr_res[max][1])==0) ? i : max;
    }           //define step of going throw number

    for (var i=arr_res[max][0]; i<=number; i+=arr_res[max][0]) {
        num_zeros++;
        var j=i;
        j/=arr_res[max][0];
        while (j%arr_res[max][0]==0) {
            j/=arr_res[max][0];
            num_zeros++;                      //calculate the numbers
        }
    }

    num_zeros=Math.floor(num_zeros/arr_res[max][1]);  //define the number including separation multiplier (decrising of repeating number)

    return num_zeros;
}