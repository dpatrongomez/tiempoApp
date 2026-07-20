import { MunicipioBuscador } from './buscador.interface';

export interface EndpointMunicipios {
    origin?:         Origen;
    origen?:         Origen;
    title:           string;
    provincia:       string;
    codprov:         string;
    metadescripcion?: string;
    keywords?:        string;
    municipios:      Municipio[];
}


export interface Municipio extends MunicipioBuscador {}

export interface Origen {
    productor: string;
    web: string;
    language: string;
    copyright: string;
    nota_legal: string;
    descripcion: string;
}
