console.log("외부 파일입니다.")

document.write("화면에 출력")

var num = 11;
num = num+1;
document.write(num);

console.log("안녕하세요")


function random(num){
    return Math.floor(Math.random() * num)
}

// console.log(random(255))


function randombg(){
    const randomBg = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')'
    console.log("색상 = "+randomBg)
    document.body.style.backgroundColor = randomBg
}
randombg()


