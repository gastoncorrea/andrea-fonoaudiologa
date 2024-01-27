import { DayOfWeek } from "./class/dayOfWeek";

    export interface Usuario{
    nombre: String,
    apellido: String,
    dni: number,
    fecha_nac: Date,
    email: String,
    telefono: number,
    obra_social: String
}

export interface Terapeuta{
    id_terapeuta:number
    nombre:string,
    apellido:string,
    descripcion_terapia: string,
    imagen_perfil: Blob,
    email:string,
    terapia:string
}

export interface Disponibilidad{
    id_disponibilidad:number;
    dia: DayOfWeek;
    hora_inicio: String;
    hora_fin:String;
    terapeuta:any;
}

export interface Turno{
    id_turno:number;
    fecha: Date;
    dia:string;
    hora_inicio:Date;
    tiempo_consulta:Date;
    usuario:any;
    terapeuta:any;
}

export interface Therapy{
    id: number;
    linkImagen: string;
    nombre: string;
    descripcion: string;
}
