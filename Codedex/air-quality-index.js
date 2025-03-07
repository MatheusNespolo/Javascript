// Air Quality Index

const aqi = 21

if (aqi > 0 && aqi <=50) {
    console.log('Boa');
} else if (aqi <= 100) {
    console.log('Moderada');
} else if (aqi <= 150) {
    console.log('Ruim');
} else if (aqi <= 200) {
    console.log('Muito Ruim');
} else if (aqi <= 300) {
    console.log('Danoso à Saúde');
}