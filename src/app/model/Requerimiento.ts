import { Time } from "@angular/common";

export interface Requerimiento {
    idRequerimiento: number | null;
    tipoRequerimiento: string;
    tipoReserva: string;
    materia: string;
    estado: string;
    comentarioEncargado: string;
    legajoEncargado: string | null;
    legajoDocente: string | null;
    hdmi: boolean;
    proyector: boolean;
    zapatilla: boolean;
    vga: boolean;
    mouse: boolean;
    idLaboratorio: number | null;
    descripcion: string;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    horaInicio: Time | null;
    horaFin: Time | null;
    docente: string;
}