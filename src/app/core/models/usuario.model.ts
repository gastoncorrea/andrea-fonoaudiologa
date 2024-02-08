import { DayOfWeek } from "./class/dayOfWeek";

    export interface User{
    id_usuario:number,
    nombre: string,
    apellido: string,
    nombre_usuario: string,
    email: string,
    password: string,
    id_tipoUsuario:number
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

export interface Auth{
    id:number;
    email: string;
    codigo:number;
    rol:Rol[];
}

export interface Rol{
    id:number;
    nombreRol:String;
    usuario:User[];
    autorizaciones: Auth[];
}
