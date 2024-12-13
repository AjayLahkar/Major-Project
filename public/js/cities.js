// document.addEventListener('DOMContentLoaded', () => {
//     const cityInput = document.getElementById('cityInput');
//     const cityList = document.getElementById('cityList');

//     const cities = [
//         'New York',
//         'Los Angeles',
//         'Chicago',
//         'Houston',
//         'Phoenix',
//         'Philadelphia',
//         'San Antonio',
//         'San Diego',
//         'Dallas',
//         'San Jose'
//     ];

//     function filterCities() {
//         const query = cityInput.value.toLowerCase();
//         const filteredCities = cities.filter(city => city.toLowerCase().includes(query));

//         cityList.innerHTML = filteredCities.map(city => <li>${city}</li>).join('');
//     }

//     cityInput.addEventListener('input', filterCities);
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const cityInput = document.getElementById('cityInput');
//     const cityList = document.getElementById('cityList');


//     const cityData = [
//         { city: 'New York', places: ['Central Park', 'Statue of Liberty', 'Times Square'] },
//         { city: 'Los Angeles', places: ['Hollywood Sign', 'Venice Beach', 'Universal Studios'] },
//         { city: 'Chicago', places: ['Millennium Park', 'Navy Pier', 'Art Institute of Chicago'] },
//         { city: 'Houston', places: ['Space Center Houston', 'Museum District', 'Hermann Park'] },
//         { city: 'Phoenix', places: ['Desert Botanical Garden', 'Phoenix Zoo', 'South Mountain Park'] },

//     ];
// });


// function filterCities() {
//     const query = cityInput.value.toLowerCase();
//     const filteredCities = cityData.filter(({ city }) => city.toLowerCase().includes(query));

//     cityList.innerHTML = filteredCities.map(({ city, places }) => {
//         return (<li>
//                     <strong>${city}</strong><br>
//                     Places: ${places.join(', ')}
//                 </li>);
//     }).join('');
// }
