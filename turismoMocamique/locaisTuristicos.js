// Dados de locais turísticos por província
const locaisTuristicos = {

    "Maputo": [
        {
            nome: "Praia da Costa do Sol",
            descricao: "Uma das praias mais populares de Maputo, conhecida por suas vistas deslumbrantes do pôr do sol.",
            link: "https://www.tripadvisor.com.br/Attraction_Review-g293819-d15612718-Reviews-Praia_da_Costa_do_Sol-Maputo_Maputo_Province.html"
        },
        {
            nome: "Museu de História Natural",
            descricao: "Museu que exibe a flora e fauna de Moçambique, além de uma coleção de artefatos culturais.",
            link: "https://www.tripadvisor.com.br/Attraction_Review-g293819-d1632416-Reviews-Museu_De_Historia_Natural_de_Maputo-Maputo_Maputo_Province.html"
        },
        {
            nome: "Jardim Tunduru",
            descricao: "Um belo jardim botânico com uma variedade de plantas tropicais.",
            link: "https://www.tripadvisor.com.br/Attraction_Review-g293819-d13170152-Reviews-Tunduru_Botanical_Gardens-Maputo_Maputo_Province.html"
        }
    ],
    "Gaza": [
        {
            nome: "Parque Nacional do Limpopo",
            descricao: "Uma vasta área protegida com uma rica diversidade de vida selvagem.",
            link: "https://parquelimpopo.gov.mz/pt/"
        },
        {
            nome: "Praia do Xai-Xai",
            descricao: "Praia famosa pela sua lagoa de águas cristalinas, ideal para nadar e pescar.",
            link: "https://xaixai-mozambique.com/praia-de-xa-xai/"
        },
        {
            nome: "Lagoa Bilene",
            descricao: "Um destino popular para atividades aquáticas e turismo de lazer.",
            link: "https://manualdoturismo.com/praia-de-bilene-a-joia-da-provincia-de-gaza/"
        }
    ],
    "Inhambane": [
        {
            nome: "Praia do Tofo",
            descricao: "Destino de mergulho de classe mundial, famoso por avistar tubarões-baleia.",
            link: "https://www.tripadvisor.com.br/Attraction_Review-g1794229-d7709110-Reviews-Praia_do_Tofo-Tofo_Inhambane_Province.html"
        },
        {
            nome: "Ilha de Inhambane",
            descricao: "Conhecida pela sua história rica e belas praias.",
            link: "https://example.com/ilha-inhambane"
        },
        {
            nome: "Praia da Barra",
            descricao: "Uma praia tranquila, ideal para relaxar e aproveitar o sol.",
            link: "https://example.com/praia-barra"
        }
    ],
    "Sofala": [
        {
            nome: "Beira",
            descricao: "A segunda maior cidade de Moçambique, com uma importante localização portuária.",
            link: "https://example.com/beira"
        },
        {
            nome: "Reserva Nacional de Gorongosa",
            descricao: "Um dos parques mais biodiversos do mundo, oferecendo safáris e paisagens espetaculares.",
            link: "https://example.com/gorongosa"
        }
    ],
    "Manica": [
        {
            nome: "Chimoio",
            descricao: "Capital da província de Manica, com uma rica herança cultural.",
            link: "https://example.com/chimoio"
        },
        {
            nome: "Cascatas de Vanduzi",
            descricao: "Belas quedas d'água cercadas pela natureza exuberante.",
            link: "https://example.com/cascatas-vanduzi"
        },
        {
            nome: "Cabeça do Velho",
            descricao: "Formação rochosa natural em forma de rosto humano, famosa em Manica.",
            link: "https://example.com/cabeca-do-velho"
        }
    ],
    "Zambezia": [
        {
            nome: "Ilha de Moçambique",
            descricao: "Uma ilha histórica com arquitetura colonial e praias paradisíacas.",
            link: "https://example.com/ilha-de-mocambique"
        },
        {
            nome: "Cataratas de Mua",
            descricao: "Quedas d'água impressionantes que oferecem vistas panorâmicas e trilhas de caminhada.",
            link: "https://example.com/cataratas-mua"
        }
    ],
    "Tete": [
        {
            nome: "Lago Cahora Bassa",
            descricao: "Uma das maiores represas da África, conhecida por suas paisagens deslumbrantes e vida aquática.",
            link: "https://example.com/cahora-bassa"
        },
        {
            nome: "Cidade de Tete",
            descricao: "Uma cidade histórica e importante centro econômico na região.",
            link: "https://example.com/tete"
        }
    ],
    "Nampula": [
        {
            nome: "Ilha de Moçambique",
            descricao: "Um Patrimônio Mundial da UNESCO, famosa por sua rica história e cultura.",
            link: "https://example.com/ilha-mocambique"
        },
        {
            nome: "Catedral de Nampula",
            descricao: "Uma imponente catedral católica situada no coração de Nampula.",
            link: "https://example.com/catedral-nampula"
        },
        {
            nome: "Museu Nacional de Etnologia",
            descricao: "Um museu dedicado à cultura e etnografia dos povos moçambicanos.",
            link: "https://example.com/museu-etnologia"
        }
    ],
    "Cabo Delgado": [
        {
            nome: "Ilha do Ibo",
            descricao: "Uma das ilhas do arquipélago das Quirimbas, com uma rica herança cultural e histórica.",
            link: "https://example.com/ilha-do-ibo"
        },
        {
            nome: "Praias de Pemba",
            descricao: "Belas praias de areia branca com águas cristalinas, perfeitas para mergulho.",
            link: "https://example.com/praias-pemba"
        },
        {
            nome: "Parque Nacional das Quirimbas",
            descricao: "Uma reserva natural que inclui várias ilhas, rica em biodiversidade marinha.",
            link: "https://example.com/quirimbas"
        }
    ],
    "Niassa": [
        {
            nome: "Lago Niassa",
            descricao: "O terceiro maior lago da África, compartilhado entre Moçambique, Tanzânia e Malawi, com águas cristalinas e rica vida aquática.",
            link: "https://example.com/lago-niassa"
        },
        {
            nome: "Reserva do Niassa",
            descricao: "Uma vasta área de conservação com uma rica vida selvagem, incluindo elefantes e leões.",
            link: "https://example.com/reserva-niassa"
        }
    ]
};
