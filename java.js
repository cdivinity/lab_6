const searchButton = document.getElementById('search-button');
const locationSelect = document.getElementById('location');

searchButton.addEventListener('click', () => {
    const selectedLocation = locationSelect.value;
    if (selectedLocation === 'New York, NY') {
        fetch('https://api.sunrisesunset.io/json?lat=40.71427&lng=-74.00597')
            .then(response => response.json())
            .then(data => {
                document.getElementById('sunrise-today').textContent = data.results.sunrise;
                document.getElementById('sunset-today').textContent = data.results.sunset;
                                document.getElementById('dawn-today').textContent = data.results.dawn;
            
              document.getElementById('dusk-today').textContent = data.results.dusk;
              document.getElementById('day-length-today').textContent = data.results.day_length;
           
                        document.getElementById('solar-noon-today').textContent = data.results.solar_noon;
             document.getElementById('timezone-today').textContent = data.results.timezone;

            })
            
            .catch(error => {
                console.error('Error fetching sunrise/sunset data:', error);
            });
    }
    
    if (selectedLocation === 'Los Angeles, CA') {
        fetch('https://api.sunrisesunset.io/json?lat=34.05223&lng=-118.24368')
            .then(response => response.json())
            .then(data => {
                document.getElementById('sunrise-today').textContent = data.results.sunrise;
                document.getElementById('sunset-today').textContent = data.results.sunset;
                                document.getElementById('dawn-today').textContent = data.results.dawn;
            
              document.getElementById('dusk-today').textContent = data.results.dusk;
              document.getElementById('day-length-today').textContent = data.results.day_length;
           
                        document.getElementById('solar-noon-today').textContent = data.results.solar_noon;
             document.getElementById('timezone-today').textContent = data.results.timezone;

            })

            .catch(error => {
                console.error('Error fetching sunrise/sunset data:', error);
            });
    }
        if (selectedLocation === 'Chicago, IL') {
        fetch('https://api.sunrisesunset.io/json?lat=41.85003&lng=-87.65005')
            .then(response => response.json())
            .then(data => {
                document.getElementById('sunrise-today').textContent = data.results.sunrise;
                document.getElementById('sunset-today').textContent = data.results.sunset;
                                document.getElementById('dawn-today').textContent = data.results.dawn;
            
              document.getElementById('dusk-today').textContent = data.results.dusk;
              document.getElementById('day-length-today').textContent = data.results.day_length;
           
                        document.getElementById('solar-noon-today').textContent = data.results.solar_noon;
             document.getElementById('timezone-today').textContent = data.results.timezone;

            })

            .catch(error => {
                console.error('Error fetching sunrise/sunset data:', error);
            });
    }
    
    if (selectedLocation === 'Houston, TX') {
        fetch('https://api.sunrisesunset.io/json?lat=29.76328&lng=-95.36327')
            .then(response => response.json())
            .then(data => {
                document.getElementById('sunrise-today').textContent = data.results.sunrise;
                document.getElementById('sunset-today').textContent = data.results.sunset;
                                document.getElementById('dawn-today').textContent = data.results.dawn;
            
              document.getElementById('dusk-today').textContent = data.results.dusk;
              document.getElementById('day-length-today').textContent = data.results.day_length;
           
                        document.getElementById('solar-noon-today').textContent = data.results.solar_noon;
             document.getElementById('timezone-today').textContent = data.results.timezone;

            })

            .catch(error => {
                console.error('Error fetching sunrise/sunset data:', error);
            });
    }
    
    if (selectedLocation === 'Philadelphia, PA') {
        fetch('https://api.sunrisesunset.io/json?lat=39.95233&lng=-75.16379')
            .then(response => response.json())
            .then(data => {
                document.getElementById('sunrise-today').textContent = data.results.sunrise;
                document.getElementById('sunset-today').textContent = data.results.sunset;
                                document.getElementById('dawn-today').textContent = data.results.dawn;
            
              document.getElementById('dusk-today').textContent = data.results.dusk;
              document.getElementById('day-length-today').textContent = data.results.day_length;
           
                        document.getElementById('solar-noon-today').textContent = data.results.solar_noon;
             document.getElementById('timezone-today').textContent = data.results.timezone;

            })

            .catch(error => {
                console.error('Error fetching sunrise/sunset data:', error);
            });
    }
        if (selectedLocation === 'Phoenix, AZ') {
        fetch('https://api.sunrisesunset.io/json?lat=33.44838&lng=-112.07404')
            .then(response => response.json())
            .then(data => {
                document.getElementById('sunrise-today').textContent = data.results.sunrise;
                document.getElementById('sunset-today').textContent = data.results.sunset;
                                document.getElementById('dawn-today').textContent = data.results.dawn;
            
              document.getElementById('dusk-today').textContent = data.results.dusk;
              document.getElementById('day-length-today').textContent = data.results.day_length;
           
                        document.getElementById('solar-noon-today').textContent = data.results.solar_noon;
             document.getElementById('timezone-today').textContent = data.results.timezone;

            })

            .catch(error => {
                console.error('Error fetching sunrise/sunset data:', error);
            });
    }
        
        if (selectedLocation === 'San Antonio, TX') {
        fetch('https://api.sunrisesunset.io/json?lat=29.42412&lng=-98.49363')
            .then(response => response.json())
            .then(data => {
                document.getElementById('sunrise-today').textContent = data.results.sunrise;
                document.getElementById('sunset-today').textContent = data.results.sunset;
                                document.getElementById('dawn-today').textContent = data.results.dawn;
            
              document.getElementById('dusk-today').textContent = data.results.dusk;
              document.getElementById('day-length-today').textContent = data.results.day_length;
           
                        document.getElementById('solar-noon-today').textContent = data.results.solar_noon;
             document.getElementById('timezone-today').textContent = data.results.timezone;

            })

            .catch(error => {
                console.error('Error fetching sunrise/sunset data:', error);
            });
    }
            if (selectedLocation === 'San Diego, CA') {
        fetch('https://api.sunrisesunset.io/json?lat=32.71571&lng=-117.16472')
            .then(response => response.json())
            .then(data => {
                document.getElementById('sunrise-today').textContent = data.results.sunrise;
                document.getElementById('sunset-today').textContent = data.results.sunset;
                                document.getElementById('dawn-today').textContent = data.results.dawn;
            
              document.getElementById('dusk-today').textContent = data.results.dusk;
              document.getElementById('day-length-today').textContent = data.results.day_length;
           
                        document.getElementById('solar-noon-today').textContent = data.results.solar_noon;
             document.getElementById('timezone-today').textContent = data.results.timezone;

            })

            .catch(error => {
                console.error('Error fetching sunrise/sunset data:', error);
            });
    }
                if (selectedLocation === 'Dallas, TX') {
        fetch('https://api.sunrisesunset.io/json?lat=32.78306&lng=-96.80667')
            .then(response => response.json())
            .then(data => {
                document.getElementById('sunrise-today').textContent = data.results.sunrise;
                document.getElementById('sunset-today').textContent = data.results.sunset;
                                document.getElementById('dawn-today').textContent = data.results.dawn;
            
              document.getElementById('dusk-today').textContent = data.results.dusk;
              document.getElementById('day-length-today').textContent = data.results.day_length;
           
                        document.getElementById('solar-noon-today').textContent = data.results.solar_noon;
             document.getElementById('timezone-today').textContent = data.results.timezone;

            })

            .catch(error => {
                console.error('Error fetching sunrise/sunset data:', error);
            });
    }
                    if (selectedLocation === 'San Jose, CA') {
        fetch('https://api.sunrisesunset.io/json?lat=37.33939&lng=-121.89496')
            .then(response => response.json())
            .then(data => {
                document.getElementById('sunrise-today').textContent = data.results.sunrise;
                document.getElementById('sunset-today').textContent = data.results.sunset;
                                document.getElementById('dawn-today').textContent = data.results.dawn;
            
              document.getElementById('dusk-today').textContent = data.results.dusk;
              document.getElementById('day-length-today').textContent = data.results.day_length;
           
                        document.getElementById('solar-noon-today').textContent = data.results.solar_noon;
             document.getElementById('timezone-today').textContent = data.results.timezone;

            })

            .catch(error => {
                console.error('Error fetching sunrise/sunset data:', error);
            });
    }





    
//tomaroow

            if (selectedLocation === 'New York, NY') {
                fetch('https://api.sunrisesunset.io/json?lat=40.71427&lng=-74.00597&date=tomorrow')
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById('sunrise-tomorrow').textContent = data.results.sunrise;
                        document.getElementById('sunset-tomorrow').textContent = data.results.sunset;
                        document.getElementById('dawn-tomorrow').textContent = data.results.dawn;
                        document.getElementById('dusk-tomorrow').textContent = data.results.dusk;
                        document.getElementById('day-length-tomorrow').textContent = data.results.day_length;
                        document.getElementById('solar-noon-tomorrow').textContent = data.results.solar_noon;
                        document.getElementById('timezone-tomorrow').textContent = data.results.timezone;
                    })
                    .catch(error => {
                        console.error('Error fetching sunrise/sunset data:', error);
                    });
            }

            if (selectedLocation === 'Los Angeles, CA') {
                fetch('https://api.sunrisesunset.io/json?lat=34.05223&lng=-118.24368&date=tomorrow')
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById('sunrise-tomorrow').textContent = data.results.sunrise;
                        document.getElementById('sunset-tomorrow').textContent = data.results.sunset;
                        document.getElementById('dawn-tomorrow').textContent = data.results.dawn;
                        document.getElementById('dusk-tomorrow').textContent = data.results.dusk;
                        document.getElementById('day-length-tomorrow').textContent = data.results.day_length;
                        document.getElementById('solar-noon-tomorrow').textContent = data.results.solar_noon;
                        document.getElementById('timezone-tomorrow').textContent = data.results.timezone;
                    })
                    .catch(error => {
                        console.error('Error fetching sunrise/sunset data:', error);
                    });
            }
            if (selectedLocation === 'Chicago, IL') {
                fetch('https://api.sunrisesunset.io/json?lat=41.85003&lng=-87.65005https://api.sunrisesunset.io/json?lat=41.85003&lng=-87.65005&date=tomorrow')
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById('sunrise-tomorrow').textContent = data.results.sunrise;
                        document.getElementById('sunset-tomorrow').textContent = data.results.sunset;
                        document.getElementById('dawn-tomorrow').textContent = data.results.dawn;
                        document.getElementById('dusk-tomorrow').textContent = data.results.dusk;
                        document.getElementById('day-length-tomorrow').textContent = data.results.day_length;
                        document.getElementById('solar-noon-tomorrow').textContent = data.results.solar_noon;
                        document.getElementById('timezone-tomorrow').textContent = data.results.timezone;
                    })
                    .catch(error => {
                        console.error('Error fetching sunrise/sunset data:', error);
                    });
            }

            if (selectedLocation === 'Houston, TX') {
                fetch('https://api.sunrisesunset.io/json?lat=29.76328&lng=-95.36327&date=tomorrow')
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById('sunrise-tomorrow').textContent = data.results.sunrise;
                        document.getElementById('sunset-tomorrow').textContent = data.results.sunset;
                        document.getElementById('dawn-tomorrow').textContent = data.results.dawn;
                        document.getElementById('dusk-tomorrow').textContent = data.results.dusk;
                        document.getElementById('day-length-tomorrow').textContent = data.results.day_length;
                        document.getElementById('solar-noon-tomorrow').textContent = data.results.solar_noon;
                        document.getElementById('timezone-tomorrow').textContent = data.results.timezone;
                    })
                    .catch(error => {
                        console.error('Error fetching sunrise/sunset data:', error);
                    });
            }

            if (selectedLocation === 'Philadelphia, PA') {
                fetch('https://api.sunrisesunset.io/json?lat=39.95233&lng=-75.16379&date=tomorrow')
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById('sunrise-tomorrow').textContent = data.results.sunrise;
                        document.getElementById('sunset-tomorrow').textContent = data.results.sunset;
                        document.getElementById('dawn-tomorrow').textContent = data.results.dawn;
                        document.getElementById('dusk-tomorrow').textContent = data.results.dusk;
                        document.getElementById('day-length-tomorrow').textContent = data.results.day_length;
                        document.getElementById('solar-noon-tomorrow').textContent = data.results.solar_noon;
                        document.getElementById('timezone-tomorrow').textContent = data.results.timezone;
                    })
                    .catch(error => {
                        console.error('Error fetching sunrise/sunset data:', error);
                    });
            }
            if (selectedLocation === 'Phoenix, AZ') {
                fetch('https://api.sunrisesunset.io/json?lat=33.44838&lng=-112.07404&date=tomorrow')
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById('sunrise-tomorrow').textContent = data.results.sunrise;
                        document.getElementById('sunset-tomorrow').textContent = data.results.sunset;
                        document.getElementById('dawn-tomorrow').textContent = data.results.dawn;
                        document.getElementById('dusk-tomorrow').textContent = data.results.dusk;
                        document.getElementById('day-length-tomorrow').textContent = data.results.day_length;
                        document.getElementById('solar-noon-tomorrow').textContent = data.results.solar_noon;
                        document.getElementById('timezone-tomorrow').textContent = data.results.timezone;
                    })
                    .catch(error => {
                        console.error('Error fetching sunrise/sunset data:', error);
                    });
            }

            if (selectedLocation === 'San Antonio, TX') {
                fetch('https://api.sunrisesunset.io/json?lat=29.42412&lng=-98.49363&date=tomorrow')
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById('sunrise-tomorrow').textContent = data.results.sunrise;
                        document.getElementById('sunset-tomorrow').textContent = data.results.sunset;
                        document.getElementById('dawn-tomorrow').textContent = data.results.dawn;
                        document.getElementById('dusk-tomorrow').textContent = data.results.dusk;
                        document.getElementById('day-length-tomorrow').textContent = data.results.day_length;
                        document.getElementById('solar-noon-tomorrow').textContent = data.results.solar_noon;
                        document.getElementById('timezone-tomorrow').textContent = data.results.timezone;
                    })
                    .catch(error => {
                        console.error('Error fetching sunrise/sunset data:', error);
                    });
            }
            if (selectedLocation === 'San Diego, CA') {
                fetch('https://api.sunrisesunset.io/json?lat=32.71571&lng=-117.16472 &date=tomorrow')
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById('sunrise-tomorrow').textContent = data.results.sunrise;
                        document.getElementById('sunset-tomorrow').textContent = data.results.sunset;
                        document.getElementById('dawn-tomorrow').textContent = data.results.dawn;
                        document.getElementById('dusk-tomorrow').textContent = data.results.dusk;
                        document.getElementById('day-length-tomorrow').textContent = data.results.day_length;
                        document.getElementById('solar-noon-tomorrow').textContent = data.results.solar_noon;
                        document.getElementById('timezone-tomorrow').textContent = data.results.timezone;
                    })
                    .catch(error => {
                        console.error('Error fetching sunrise/sunset data:', error);
                    });
            }
            if (selectedLocation === 'Dallas, TX') {
                fetch('https://api.sunrisesunset.io/json?lat=32.78306&lng=-96.80667&date=tomorrow')
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById('sunrise-tomorrow').textContent = data.results.sunrise;
                        document.getElementById('sunset-tomorrow').textContent = data.results.sunset;
                        document.getElementById('dawn-tomorrow').textContent = data.results.dawn;
                        document.getElementById('dusk-tomorrow').textContent = data.results.dusk;
                        document.getElementById('day-length-tomorrow').textContent = data.results.day_length;
                        document.getElementById('solar-noon-tomorrow').textContent = data.results.solar_noon;
                        document.getElementById('timezone-tomorrow').textContent = data.results.timezone;
                    })
                    .catch(error => {
                        console.error('Error fetching sunrise/sunset data:', error);
                    });
            }
            if (selectedLocation === 'San Jose, CA') {
                fetch('https://api.sunrisesunset.io/json?lat=37.33939&lng=-121.89496&date=tomorrow')
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById('sunrise-tomorrow').textContent = data.results.sunrise;
                        document.getElementById('sunset-tomorrow').textContent = data.results.sunset;
                        document.getElementById('dawn-tomorrow').textContent = data.results.dawn;
                        document.getElementById('dusk-tomorrow').textContent = data.results.dusk;
                        document.getElementById('day-length-tomorrow').textContent = data.results.day_length;
                        document.getElementById('solar-noon-tomorrow').textContent = data.results.solar_noon;
                        document.getElementById('timezone-tomorrow').textContent = data.results.timezone;
                    })
                    .catch(error => {
                        console.error('Error fetching sunrise/sunset data:', error);
                    });
            }
        });
    