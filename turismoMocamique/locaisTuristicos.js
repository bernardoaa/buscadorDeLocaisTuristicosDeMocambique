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
            link: "https://www.visitmozambique.gov.mz/onde-ir/provincias/inhambane/"
        },
        {
            nome: "Praia da Barra",
            descricao: "Uma praia tranquila, ideal para relaxar e aproveitar o sol.",
            link: "https://www.tripadvisor.com.br/Attraction_Review-g3652237-d480471-Reviews-Barra_Beach-Inhambane_Province.html"
        }
    ],
    "Sofala": [
        {
            nome: "Beira",
            descricao: "A segunda maior cidade de Moçambique, com uma importante localização portuária.",
            link: "https://www.diarioeconomico.co.mz/2022/07/23/lifestyle/cidade-da-beira-onde-ir-e-o-que-fazer/"
        },
        {
            nome: "Reserva Nacional de Gorongosa",
            descricao: "Um dos parques mais biodiversos do mundo, oferecendo safáris e paisagens espetaculares.",
            link: "https://www.visitmozambique.gov.mz/onde-ir/parques-e-reservas/parque-nacional-de-gorongosa/"
        }
    ],
    "Manica": [
        {
            nome: "Chimoio",
            descricao: "Capital da província de Manica, com uma rica herança cultural.",
            link: "https://www.tripadvisor.com.br/Tourism-g641706-Chimoio_Manica_Province-Vacations.html"
        },
        {
            nome: "Cascatas de Vanduzi",
            descricao: "Belas quedas d'água cercadas pela natureza exuberante.",
            link: "https://pt.wikipedia.org/wiki/Vanduzi_(distrito)"
        },
        {
            nome: "Cabeça do Velho",
            descricao: "Formação rochosa natural em forma de rosto humano, famosa em Manica.",
            link: "https://www.visitmozambique.gov.mz/manica/"
        }
    ],
    "Zambezia": [
        {
            nome: "Monte Namuli",
            descricao: "A montanha mais alta da Zambézia, um paraíso para os amantes de caminhadas e alpinismo.",
            link: "https://www.tripadvisor.com.br/Attraction_Review-g7710305-d7203886-Reviews-Mount_Namuli-Gurue_Zambezia_Province.html"
        },
        {
            nome: "Praia de Zalala",
            descricao: "Uma bela praia com vastas areias brancas, um destino turístico popular.",
            link: "https://www.tripadvisor.com.br/Attraction_Review-g1137963-d3172283-Reviews-Zalala_Beach-Quelimane_Zambezia_Province.html"
        }
    ],
    "Tete": [
        {
            nome: "Lago Cahora Bassa",
            descricao: "Uma das maiores represas da África, conhecida por suas paisagens deslumbrantes e vida aquática.",
            link: "https://www.tripadvisor.com.br/Attraction_Review-g3652246-d479158-Reviews-Lago_de_Cahora_Bassa-Tete_Province.html"
        },
        {
            nome: "Cidade de Tete",
            descricao: "Uma cidade histórica e importante centro econômico na região.",
            link: "https://www.tripadvisor.com.br/Tourism-g677702-Tete_Tete_Province-Vacations.html"
        }
    ],
    "Nampula": [
        {
            nome: "Ilha de Moçambique",
            descricao: "Um Patrimônio Mundial da UNESCO, famosa por sua rica história e cultura.",
            link: "https://www.visitmozambique.gov.mz/onde-ir/ilhas/ilha-de-mocambique/"
        },
        {
            nome: "Catedral de Nampula",
            descricao: "Uma imponente catedral católica situada no coração de Nampula.",
            link: "https://www.tripadvisor.com.br/Attraction_Review-g1602169-d2645613-Reviews-Catedral_de_Nossa_Senhora_da_Fatima-Nampula_Nampula_Province.html"
        },
        {
            nome: "Museu Nacional de Etnologia",
            descricao: "Um museu dedicado à cultura e etnografia dos povos moçambicanos.",
            link: "https://www.tripadvisor.com.br/Attraction_Review-g1602169-d2645670-Reviews-Mozambique_National_Ethnographic_Museum-Nampula_Nampula_Province.html"
        }
    ],
    "Cabo Delgado": [
        {
            nome: "Ilha do Ibo",
            descricao: "Uma das ilhas do arquipélago das Quirimbas, com uma rica herança cultural e histórica.",
            link: "https://www.visitmozambique.gov.mz/onde-ir/ilhas/ilha-do-ibo-2/"
        },
        {
            nome: "Praias de Pemba",
            descricao: "Belas praias de areia branca com águas cristalinas, perfeitas para mergulho.",
            link: "https://www.tripadvisor.com.br/Tourism-g298356-Pemba_Cabo_Delgado_Province-Vacations.html"
        },
        {
            nome: "Parque Nacional das Quirimbas",
            descricao: "Uma reserva natural que inclui várias ilhas, rica em biodiversidade marinha.",
            link: "https://www.visitmozambique.gov.mz/onde-ir/parques-e-reservas/parque-nacional-das-quirimbas/"
        }
    ],
    "Niassa": [
        {
            nome: "Lago Niassa",
            descricao: "O terceiro maior lago da África, compartilhado entre Moçambique, Tanzânia e Malawi, com águas cristalinas e rica vida aquática.",
            link: "https://www.dw.com/pt-002/lago-niassa-j%C3%B3ia-ambiental-e-fonte-de-sustento-para-as-popula%C3%A7%C3%B5es/g-68900716"
        },
        {
            nome: "Reserva do Niassa",
            descricao: "Uma vasta área de conservação com uma rica vida selvagem, incluindo elefantes e leões.",
            link: "https://www.anac.gov.mz/parques/niassa/"
        }
    ]
};
