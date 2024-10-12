import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-zodiaco-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './zodiaco.component.html',
})
export class ZodiacoComponent implements OnInit {
  zodiacImage?: string;
  showResult = false;
  personalData: any;
  personalForm!: FormGroup;

  signosChinos: { [key: string]: { image: string, years: number[] } } = {
    'Dragón': {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSogNYB8mGbuTP-6qZGXCDEBbZ_NNQWzMcHQ&s',
      years: [1904, 1916, 1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024]
    },
    'Buey': {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0SIEXr6hZ3s_e3F-OhUvC5hMkIy6GbJQSvA&s',
      years: [1901, 1913, 1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021]
    },
    'Tigre': {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPVP7-sA4JGhFs5vK-n-zI6p63yxGDhT70MKrNW_p9PX2S2vbcnlYoqxegWFrni4ffNc&usqp=CAU',
      years: [1902, 1914, 1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022]
    },
    'Conejo': {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQt_ovIBaldMzXB4DcRKzqeT6yHpdCI5rEQ&s',
      years: [1903, 1915, 1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023]
    },
    'Rata': {
      image: 'https://www.clinicanido.es/wp-content/uploads/2017/06/P1020209-1.jpg',
      years: [1900, 1912, 1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020]
    },
    'Serpiente': {
      image: 'https://i.blogs.es/4e0ec8/rango-03/450_1000.jpg',
      years: [1905, 1917, 1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025]
    },
    'Caballo': {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtYhKjsLtD7lNsFA3ZmY-ojt2j9gSmRbi5QQ&s',
      years: [1906, 1918, 1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026]
    },
    'Cabra': {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCFv4fCV0yH5GselxezIHmREMQ5bU448VwKA&s',
      years: [1907, 1919, 1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027]
    },
    'Mono': {
      image: 'https://www.minutoar.com.ar/u/fotografias/m/2023/9/20/f768x1-203063_203190_102.jpg',
      years: [1908, 1920, 1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016]
    },
    'Gallo': {
      image: 'https://pbs.twimg.com/media/F5dFvwhXYAICmos.jpg',
      years: [1909, 1921, 1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017]
    },
    'Perro': {
      image: 'https://definicion.de/wp-content/uploads/2013/03/perro-1.jpg',
      years: [1910, 1922, 1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018]
    },
    'Cerdo': {
      image: 'https://i0.blogs.es/576cff/cerdo0133e1/450_1000.webp',
      years: [1911, 1923, 1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019]
    }
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.personalForm = this.fb.group({
      nombre: ['', Validators.required],
      apaterno: ['', Validators.required],
      amaterno: ['', Validators.required],
      dia: ['', [Validators.required, Validators.min(1), Validators.max(31)]],
      mes: ['', [Validators.required, Validators.min(1), Validators.max(12)]],
      anio: ['', [Validators.required, Validators.min(1900)]],
      sexo: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.personalForm.valid) {
      this.processForm();
    }
  }

  processForm(): void {
    const { nombre, apaterno, amaterno, dia, mes, anio } = this.personalForm.value;
    const edad = this.calculateAge(anio, mes, dia);
    const signo = this.calculateZodiacSign(anio, mes, dia);
    this.personalData = { nombre, apaterno, amaterno, edad, signo };
    this.zodiacImage = this.signosChinos[signo].image;
    this.showResult = true;
  }

  calculateAge(anio: number, mes: number, dia: number): number {
    const fechaNacimiento = new Date(anio, mes - 1, dia);
    const fechaActual = new Date();

    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    if (
      fechaActual.getMonth() < fechaNacimiento.getMonth() ||
      (fechaActual.getMonth() === fechaNacimiento.getMonth() && fechaActual.getDate() < fechaNacimiento.getDate())
    ) {
      edad--;
    }

    return edad;
  }

  calculateZodiacSign(anio: number, mes: number, dia: number): string {
    
    const anioNuevo1979 = new Date(1979, 1, 16); 
    const anioNuevo2000 = new Date(2000, 1, 5); 
    const fechaNacimiento = new Date(anio, mes - 1, dia);

    
    for (const signo in this.signosChinos) {
      if (this.signosChinos[signo].years.includes(anio)) {
        return signo;
      }
    }

    return 'Desconocido'; 
  }
}
