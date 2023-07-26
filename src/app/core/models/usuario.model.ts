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