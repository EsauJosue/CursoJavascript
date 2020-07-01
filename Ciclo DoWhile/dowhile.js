'use strict'

var year = 2000;

do{
    console.log(year);
    year ++;
    if (year == 2020) {
        console.log('Año actual');
        break;
    }
}while(year<=2300);