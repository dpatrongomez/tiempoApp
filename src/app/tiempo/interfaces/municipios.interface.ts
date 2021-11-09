export interface EndpointMunicipios {
    title:           string;
    provincia:       string;
    codprov:         string;
    metadescripcion: string;
    keywords:        string;
    municipios:      Municipio[];
}



export interface Municipio {
    CODIGOINE:                string;
    ID_REL:                   string;
    COD_GEO:                  string;
    CODPROV:                  string;
    NOMBRE_PROVINCIA:         string;
    NOMBRE:                   string;
    POBLACION_MUNI:           number;
    SUPERFICIE:               number;
    PERIMETRO:                number;
    CODIGOINE_CAPITAL:        string;
    NOMBRE_CAPITAL:           string;
    POBLACION_CAPITAL:        string;
}