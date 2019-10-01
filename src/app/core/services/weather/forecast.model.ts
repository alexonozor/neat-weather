
export interface ForecastModel {
  cod: number;
  message: number;
  cnt: number;
  list: [
    {
      dt: number;
      main: {
        temp: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
      };
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        }
      ];
      clouds: {
        all: number
      };
      wind: {
        speed: number;
        deg: number;
      };
      snow: {};
      sys: {
        pod: string
      };
      dt_txt: Date;
    }
  ];
  city: {
    id: number;
    name: number;
    coord: {
      lat: number;
      lon: number;
    };
    country: number;
  };
}
