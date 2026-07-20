export interface EndpointProvincias {
    origin?:         Origen;
    origen?:         Origen;
    title:           string;
    provincias:      Provincia[];
    breadcrumb?:     Breadcrumb[];
    metadescripcion?: string;
    keywords?:       string;
}

export interface Breadcrumb {
    name:  string;
    url:   null;
    title: string;
}

export interface Origen {
    productor: string;
    web: string;
    language: string;
    copyright: string;
    nota_legal: string;
    descripcion: string;
}

export interface Provincia {
    CODPROV:                   string;
    NOMBRE_PROVINCIA:          string;
    CODAUTON:                  string;
    COMUNIDAD_CIUDAD_AUTONOMA: string;
    CAPITAL_PROVINCIA:         string;
}
