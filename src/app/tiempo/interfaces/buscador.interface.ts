export interface MunicipioBuscador {
    CODIGOINE:                string;
    ID_REL:                   string;
    COD_GEO:                  string;
    CODPROV:                  string;
    NOMBRE_PROVINCIA:         NombreProvincia;
    NOMBRE:                   string;
    POBLACION_MUNI:           number;
    SUPERFICIE:               number;
    PERIMETRO:                number;
    CODIGOINE_CAPITAL:        string;
    NOMBRE_CAPITAL:           string;
    POBLACION_CAPITAL:        string;
    HOJA_MTN25:               string;
    LONGITUD_ETRS89_REGCAN95: number;
    LATITUD_ETRS89_REGCAN95:  number;
    ORIGEN_COORD:             OrigenCoord;
    ALTITUD:                  number;
    ORIGEN_ALTITUD:           OrigenAltitud;
    DISCREPANTE_INE:          number;
}

export enum NombreProvincia {
    ACoruña = "A Coruña",
    AlacantAlicante = "Alacant/Alicante",
    Albacete = "Albacete",
    Almería = "Almería",
    ArabaÁlava = "Araba/Álava",
    Asturias = "Asturias",
    Badajoz = "Badajoz",
    Barcelona = "Barcelona",
    Bizkaia = "Bizkaia",
    Burgos = "Burgos",
    Cantabria = "Cantabria",
    CastellóCastellón = "Castelló/Castellón",
    Ceuta = "Ceuta",
    CiudadReal = "Ciudad Real",
    Cuenca = "Cuenca",
    Cáceres = "Cáceres",
    Cádiz = "Cádiz",
    Córdoba = "Córdoba",
    Gipuzkoa = "Gipuzkoa",
    Girona = "Girona",
    Granada = "Granada",
    Guadalajara = "Guadalajara",
    Huelva = "Huelva",
    Huesca = "Huesca",
    IllesBalears = "Illes Balears",
    Jaén = "Jaén",
    LaRioja = "La Rioja",
    LasPalmas = "Las Palmas",
    León = "León",
    Lleida = "Lleida",
    Lugo = "Lugo",
    Madrid = "Madrid",
    Melilla = "Melilla",
    Murcia = "Murcia",
    Málaga = "Málaga",
    Navarra = "Navarra",
    Ourense = "Ourense",
    Palencia = "Palencia",
    Pontevedra = "Pontevedra",
    Salamanca = "Salamanca",
    SantaCruzDeTenerife = "Santa Cruz de Tenerife",
    Segovia = "Segovia",
    Sevilla = "Sevilla",
    Soria = "Soria",
    Tarragona = "Tarragona",
    Teruel = "Teruel",
    Toledo = "Toledo",
    Valladolid = "Valladolid",
    ValènciaValencia = "València/Valencia",
    Zamora = "Zamora",
    Zaragoza = "Zaragoza",
    Ávila = "Ávila",
}

export enum OrigenAltitud {
    Mapa = "Mapa",
    Mdt5 = "MDT5",
}

export enum OrigenCoord {
    Iberpix = "IBERPIX",
    Mapa = "Mapa",
}
