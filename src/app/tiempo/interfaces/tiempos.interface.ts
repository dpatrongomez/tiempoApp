export interface Tiempo {
    municipio:          Municipio;
    fecha:              Date;
    stateSky:           StateSky;
    temperatura_actual: string;
    temperaturas:       Temperaturas;
    humedad:            string;
    viento:             string;
    lluvia:             string;
    pronostico:         Pronostico;
    proximos_dias:      ProximosDia[];
}

export interface Municipio {
    COD_GEO:          string;
    CODPROV:          string;
    NOMBRE_PROVINCIA: string;
    NOMBRE:           string;
}

export interface Pronostico {
    hoy:    Hoy;
    manana: Hoy;
}

export interface Hoy {
    "@attributes":      HoyAttributes;
    estado_cielo:       string[];
    precipitacion:      string[];
    prob_precipitacion: string[];
    prob_tormenta:      string[];
    nieve:              string[];
    prob_nieve:         string[];
    temperatura:        string[];
    sens_termica:       string[];
    humedad_relativa:   string[];
    viento:             VientoElement[];
    racha_max:          string[];
}

export interface HoyAttributes {
    fecha: Date;
    orto:  string;
    ocaso: string;
}

export interface VientoElement {
    "@attributes": VientoAttributes;
    direccion:     Direccion;
    velocidad:     string;
}

export interface VientoAttributes {
    periodo: string;
}

export enum Direccion {
    C = "C",
    N = "N",
    Ne = "NE",
    So = "SO",
}

export interface ProximosDia {
    "@attributes":      ProximosDiaAttributes;
    prob_precipitacion: string[] | string;
    cota_nieve_prov:    CotaNieveProvElement[] | PurpleCotaNieveProv | string;
    estado_cielo:       string[] | string;
    viento:             VientoElement[] | PurpleViento;
    racha_max:          Array<CotaNieveProvElement | string> | PurpleCotaNieveProv;
    temperatura:        HumedadRelativa;
    sens_termica:       HumedadRelativa;
    humedad_relativa:   HumedadRelativa;
    uv_max?:            string;
}

export interface ProximosDiaAttributes {
    fecha: Date;
}

export interface CotaNieveProvElement {
    "@attributes": VientoAttributes;
}

export interface PurpleCotaNieveProv {
}

export interface HumedadRelativa {
    maxima: string;
    minima: string;
    dato?:  string[];
}

export interface PurpleViento {
    direccion: Direccion;
    velocidad: string;
}

export interface StateSky {
    description: string;
    id:          string;
}

export interface Temperaturas {
    max: string;
    min: string;
}
