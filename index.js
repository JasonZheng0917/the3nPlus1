function range() {
    let num1 = document.getElementById('input1').value
    let num2 = document.getElementById('input2').value
    let arr =[]
    let temp=0
    for(let i = Number(num1);i <= Number(num2);i++){
        arr.push(i);
    }
    console.log(arr)
    for(let ii=0;ii<arr.length;ii++) {
        let counter=1
        while (arr[ii]!==1){
            if(arr[ii]%2==0) {
                arr[ii] = arr[ii]/2
            }
            else {
                arr[ii]=arr[ii]*3+1
            }
            counter ++
        }
        temp=Math.max(temp,counter)
    }
    document.getElementById('in1').innerHTML=num1
    document.getElementById('in2').innerHTML=num2
    document.getElementById('result').innerHTML='max cycle length:'+temp
}

// 考慮以下的演算法：
// 1.         輸入 n
// 2.         印出 n
// 3.         如果 n = 1 結束
// 4.         如果 n 是奇數 那麼 n=3*n+1
// 5.         否則 n=n/2
// 6.         GOTO 2

// 例如輸入 22, 得到的數列： 22 11 34 17 52 26 13 40 20 10 5 16 8 4 2 1 

// 據推測此演算法對任何整數而言會終止 (當列印出 1 的時候)。雖然此演算法很簡單，但以上的推測是否真實卻無法知道。然而對所有的n ( 0 < n < 1,000,000 )來說，以上的推測已經被驗證是正確的。 

// 給一個輸入 n ,透過以上的演算法我們可以得到一個數列（1作為結尾）。此數列的長度稱為n的cycle-length。上面提到的例子, 22 的 cycle length為 16. 

// 問題來了：對任2個整數i，j我們想要知道介於i，j（包含i，j）之間的數所產生的數列中最大的 cycle length 是多少。