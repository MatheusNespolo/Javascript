// Even The Odds

for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
    else if (i % 2 != 0) {
       continue;
    }
}
