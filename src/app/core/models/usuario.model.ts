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
    nombre:String,
    apellido:String,
    descripcion_terapia: String,
    imagen_perfil: Blob,
    email:String,
    terapia:String
}