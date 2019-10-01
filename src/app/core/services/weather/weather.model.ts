export interface WeatherModel {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: number;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: number;
    sunrise: number;
    sunset: number
  };
  id: number;
  name: string;
  cod: number;

}
