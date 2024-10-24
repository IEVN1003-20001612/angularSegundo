import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Empleado {
  matricula: string;
  nombre: string;
  correo: string;
  edad: number;
  horasTrabajadas: number;
}

interface EmpleadoConCalculos extends Empleado {
  horasXPagar: number; 
  horasExtras: number;  
  subtotal: number; 
}

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})
export default class EmpleadosComponent {
  empleados: EmpleadoConCalculos[] = []; 
  nuevoEmpleado: Empleado = {
    matricula: '',
    nombre: '',
    correo: '',
    edad: 0,
    horasTrabajadas: 0,
  };
  horasPago = 70; 
  horasExtrasPago = 140; 
  totalAPagar: number = 0; 

  registrarEmpleado() {
    if (this.nuevoEmpleado.matricula && this.nuevoEmpleado.nombre && this.nuevoEmpleado.correo) {
      const { matricula, nombre, correo, edad, horasTrabajadas } = this.nuevoEmpleado;
      const empleadoGuardado: Empleado = { matricula, nombre, correo, edad, horasTrabajadas };

      const registrosGuardados = localStorage.getItem('empleados');
      const empleadosActuales: Empleado[] = registrosGuardados ? JSON.parse(registrosGuardados) : [];

      const posicion = empleadosActuales.findIndex(e => e.matricula === matricula);
      if (posicion !== -1) {
        empleadosActuales[posicion] = empleadoGuardado; 
      } else {
        empleadosActuales.push(empleadoGuardado); 
      }

      localStorage.setItem('empleados', JSON.stringify(empleadosActuales));

      this.nuevoEmpleado = {
        matricula: '',
        nombre: '',
        correo: '',
        edad: 0,
        horasTrabajadas: 0,
      };
    }
  }

  mostrarRegistros() {
    const registrosGuardados = localStorage.getItem('empleados');
    if (registrosGuardados) {
      this.empleados = JSON.parse(registrosGuardados).map((empleado: Empleado) => {
        const horasNormales = empleado.horasTrabajadas <= 40 ? empleado.horasTrabajadas : 40; 
        const horasExtras = empleado.horasTrabajadas > 40 ? empleado.horasTrabajadas - 40 : 0; 
        
        return {
          ...empleado,
          horasXPagar: horasNormales * this.horasPago,
          horasExtras: horasExtras * this.horasExtrasPago,
          subtotal: (horasNormales * this.horasPago) + (horasExtras * this.horasExtrasPago),
        } as EmpleadoConCalculos; 
      });

      this.totalAPagar = this.calcularTotal(); 
    }
  }
  modificarEmpleado(matricula: string) {
    const empleado = this.empleados.find(e => e.matricula === matricula);
    if (empleado) {
      this.nuevoEmpleado = { ...empleado };
    }
  }
  eliminarEmpleado(matricula: string) {
    this.empleados = this.empleados.filter(e => e.matricula !== matricula);
    localStorage.setItem('empleados', JSON.stringify(this.empleados)); 
    this.totalAPagar = this.calcularTotal(); 
  }
  calcularTotal(): number {
    return this.empleados.reduce((total, empleado) => total + (empleado.horasXPagar || 0) + (empleado.horasExtras || 0), 0);
  }
}
