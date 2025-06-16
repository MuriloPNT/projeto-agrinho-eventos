document.addEventListener('DOMContentLoaded', () => {
    // Definindo as cidades, suas comunidades e eventos
    const citiesData = {
        "Laranjeiras do Sul": {
            communities: ["Guarani", "Xagu", "Centro", "Passo Liso", "Campo do Bugre", "Alto do São João", "Rio Grande"], // Comunidades atualizadas
            events: [
                {
                    title: 'Feira de Artesanato Local',
                    date: '15/07/2025', time: '10:00 - 18:00', location: 'Praça Central',
                    city: 'Laranjeiras do Sul', community: 'Guarani',
                    description: 'Venha prestigiar os artesãos locais e encontrar produtos incríveis!',
                    entryFee: 'Gratuito', foodPrice: 'A partir de R$ 5,00 (lanches e doces)',
                    drinkPrice: 'A partir de R$ 3,00 (água, refrigerante)', dressCode: 'Livre'
                },
                {
                    title: 'Festival de Música e Cultura',
                    date: '22/07/2025', time: '19:00 - 23:00', location: 'Clube Xagu',
                    city: 'Laranjeiras do Sul', community: 'Xagu',
                    description: 'Noite de talentos musicais e apresentações culturais da comunidade.',
                    entryFee: 'R$ 20,00 (antecipado), R$ 30,00 (na hora)',
                    foodPrice: 'Diversas barracas com pratos de R$ 15,00 a R$ 40,00',
                    drinkPrice: 'Cerveja a R$ 8,00, refrigerante a R$ 5,00', dressCode: 'Casual'
                },
                {
                    title: 'Oficina de Culinária Saudável',
                    date: '20/07/2025', time: '14:00 - 16:00', location: 'Salão da Igreja',
                    city: 'Laranjeiras do Sul', community: 'Guarani',
                    description: 'Aprenda a preparar pratos deliciosos e nutritivos.',
                    entryFee: 'R$ 35,00 (inclui material e degustação)', foodPrice: 'Degustação incluída na oficina',
                    drinkPrice: 'Água e sucos naturais incluídos', dressCode: 'Casual'
                },
                {
                    title: 'Exposição de Arte Local',
                    date: '01/09/2025', time: '09:00 - 17:00', location: 'Galeria Municipal',
                    city: 'Laranjeiras do Sul', community: 'Centro',
                    description: 'Mostra de obras de artistas da região, valorizando a cultura local.',
                    entryFee: 'Gratuito', foodPrice: 'Não há venda de alimentos',
                    drinkPrice: 'Água disponível', dressCode: 'Livre'
                },
                {
                    title: 'Roda de Conversa sobre Sustentabilidade',
                    date: '05/09/2025', time: '18:00 - 20:00', location: 'Salão Comunitário',
                    city: 'Laranjeiras do Sul', community: 'Passo Liso',
                    description: 'Debate sobre práticas sustentáveis e ecologia para a comunidade.',
                    entryFee: 'Gratuito', foodPrice: 'Nenhum',
                    drinkPrice: 'Café e chá cortesia', dressCode: 'Casual'
                },
                {
                    title: 'Campeonato de Truco Amador',
                    date: '10/09/2025', time: '14:00 - 22:00', location: 'Bar do Zé',
                    city: 'Laranjeiras do Sul', community: 'Campo do Bugre',
                    description: 'Inscrições abertas para o torneio de truco da comunidade.',
                    entryFee: 'R$ 15,00 por dupla', foodPrice: 'Porções e lanches a partir de R$ 10,00',
                    drinkPrice: 'Cerveja e refrigerante com preços locais', dressCode: 'Livre'
                },
                {
                    title: 'Bingo Beneficente',
                    date: '18/09/2025', time: '19:00 - 22:00', location: 'Capela Alto do São João',
                    city: 'Laranjeiras do Sul', community: 'Alto do São João',
                    description: 'Noite de bingo para arrecadar fundos para melhorias na comunidade.',
                    entryFee: 'Cartelas a R$ 5,00', foodPrice: 'Pipoque, doces e salgados',
                    drinkPrice: 'Refrigerante e água', dressCode: 'Livre'
                },
                {
                    title: 'Apresentação Teatral "O Gato de Botas"',
                    date: '25/09/2025', time: '15:00 - 16:30', location: 'Teatro Municipal',
                    city: 'Laranjeiras do Sul', community: 'Centro',
                    description: 'Espetáculo infantil para toda a família.',
                    entryFee: 'R$ 10,00 (inteira), R$ 5,00 (meia)', foodPrice: 'Pipoca e refrigerante na bomboniere',
                    drinkPrice: 'Água, sucos', dressCode: 'Livre'
                }
            ]
        },
        "Guaraniaçu": {
            communities: ["Rio da Prata", "Concórdia", "Vila Nova", "Guajuvira", "Taquara"], // Comunidades atualizadas
            events: [
                {
                    title: 'Mutirão de Limpeza do Rio',
                    date: '05/08/2025', time: '08:00 - 12:00', location: 'Margens do Rio da Prata',
                    city: 'Guaraniaçu', community: 'Rio da Prata',
                    description: 'Colabore com a preservação do nosso rio. Traga sua garrafa de água!',
                    entryFee: 'Gratuito (necessário inscrição prévia)', foodPrice: 'Café da manhã comunitário oferecido',
                    drinkPrice: 'Água potável disponível', dressCode: 'Roupas leves e confortáveis, luvas e chapéu'
                },
                {
                    title: 'Festa Julina da Concórdia',
                    date: '29/06/2025', time: '17:00 - 23:00', location: 'Centro Comunitário',
                    city: 'Guaraniaçu', community: 'Concórdia',
                    description: 'Comidas típicas, quadrilha, e muita diversão para toda a família!',
                    entryFee: 'R$ 10,00 (para adultos, crianças até 12 anos não pagam)',
                    foodPrice: 'Pratos típicos como canjica, pamonha, espetinhos (preços variam de R$ 8,00 a R$ 25,00)',
                    drinkPrice: 'Quentão a R$ 12,00, refrigerante a R$ 6,00', dressCode: 'Caipira (opcional, mas incentivado!)'
                },
                {
                    title: 'Palestra sobre Empreendedorismo',
                    date: '12/08/2025', time: '19:30 - 21:00', location: 'Auditório Municipal',
                    city: 'Guaraniaçu', community: 'Rio da Prata',
                    description: 'Dicas e insights para quem quer começar seu próprio negócio.',
                    entryFee: 'Gratuito', foodPrice: 'Não haverá venda de alimentos',
                    drinkPrice: 'Água e café cortesia', dressCode: 'Esporte Fino'
                },
                {
                    title: 'Noite do Caldo Beneficente',
                    date: '20/08/2025', time: '19:00 - 22:00', location: 'Salão da Capela',
                    city: 'Guaraniaçu', community: 'Guajuvira',
                    description: 'Saboreie deliciosos caldos e ajude a comunidade.',
                    entryFee: 'R$ 25,00 (caldo à vontade)', foodPrice: 'Caldo incluído, venda de doces',
                    drinkPrice: 'Refrigerante e água', dressCode: 'Livre'
                },
                {
                    title: 'Torneio de Vôlei de Areia',
                    date: '25/08/2025', time: '09:00 - 17:00', location: 'Quadras da Taquara',
                    city: 'Guaraniaçu', community: 'Taquara',
                    description: 'Venha participar ou torcer no torneio de vôlei!',
                    entryFee: 'Gratuito para espectadores (inscrição por dupla: R$ 30,00)', foodPrice: 'Lanchonete no local',
                    drinkPrice: 'Bebidas diversas', dressCode: 'Roupas esportivas'
                },
                {
                    title: 'Sessão de Cinema ao Ar Livre',
                    date: '10/09/2025', time: '19:00 - 21:00', location: 'Praça da Vila Nova',
                    city: 'Guaraniaçu', community: 'Vila Nova',
                    description: 'Filme para toda a família sob as estrelas.',
                    entryFee: 'Gratuito', foodPrice: 'Venda de pipoca e refrigerante',
                    drinkPrice: 'Água', dressCode: 'Livre, traga sua canga/cadeira'
                }
            ]
        },
        "Nova Laranjeiras": {
            communities: ["Rio Bananas", "Centro", "Guaraí", "Buriti", "Pereira"], // Comunidades atualizadas
            events: [
                {
                    title: 'Torneio de Futebol Amador',
                    date: '10/08/2025', time: '09:00 - 17:00', location: 'Campo do Rio Bananas',
                    city: 'Nova Laranjeiras', community: 'Rio Bananas',
                    description: 'Inscrições abertas para o torneio. Venha torcer pelo seu time!',
                    entryFee: 'Gratuito para espectadores (inscrição para times: R$ 100,00 por equipe)',
                    foodPrice: 'Venda de sanduíches, salgados (R$ 5,00 - R$ 15,00)',
                    drinkPrice: 'Cerveja a R$ 7,00, água/refrigerante a R$ 4,00', dressCode: 'Roupa esportiva'
                },
                {
                    title: 'Festa da Primavera',
                    date: '10/09/2025', time: '15:00 - 21:00', location: 'Praça Central de Guaraí',
                    city: 'Nova Laranjeiras', community: 'Guaraí',
                    description: 'Celebração da primavera com flores, músicas e brincadeiras.',
                    entryFee: 'Gratuito', foodPrice: 'Barracas com doces e lanches',
                    drinkPrice: 'Refrigerantes e sucos', dressCode: 'Leve e florido'
                },
                {
                    title: 'Dia de Campo Agrícola',
                    date: '15/09/2025', time: '08:00 - 17:00', location: 'Propriedade Modelo',
                    city: 'Nova Laranjeiras', community: 'Buriti',
                    description: 'Apresentação de novas técnicas e tecnologias agrícolas para produtores rurais.',
                    entryFee: 'Gratuito (necessário agendamento)', foodPrice: 'Almoço rural a R$ 30,00 (opcional)',
                    drinkPrice: 'Água e café', dressCode: 'Casual, adequado para campo'
                },
                {
                    title: 'Recital de Poesias',
                    date: '05/10/2025', time: '19:00 - 21:00', location: 'Biblioteca Municipal',
                    city: 'Nova Laranjeiras', community: 'Centro',
                    description: 'Noite de declamação e apreciação da poesia local e nacional.',
                    entryFee: 'Gratuito', foodPrice: 'Nenhum',
                    drinkPrice: 'Café e água cortesia', dressCode: 'Elegante'
                }
            ]
        },
        "Palmital": {
            communities: ["Colônia Gramados", "Porto Alegre", "Sede", "Paiquere", "Divisor"], // Comunidades atualizadas
            events: [
                {
                    title: 'Festa do Milho',
                    date: '25/07/2025', time: '16:00 - 22:00', location: 'Praça Principal',
                    city: 'Palmital', community: 'Colônia Gramados',
                    description: 'Celebração da colheita do milho com pratos típicos e shows.',
                    entryFee: 'Gratuito', foodPrice: 'Vários pratos à base de milho a partir de R$ 10,00',
                    drinkPrice: 'Bebidas diversas a partir de R$ 5,00', dressCode: 'Casual'
                },
                {
                    title: 'Feira Livre e Troca de Livros',
                    date: '02/09/2025', time: '09:00 - 14:00', location: 'Feira Municipal',
                    city: 'Palmital', community: 'Sede',
                    description: 'Edição especial da feira com espaço para troca e doação de livros.',
                    entryFee: 'Gratuito', foodPrice: 'Barracas da feira',
                    drinkPrice: 'Barracas da feira', dressCode: 'Livre'
                },
                {
                    title: 'Jantar da Colônia Italiana',
                    date: '15/09/2025', time: '20:00 - 23:00', location: 'Salão Comunitário',
                    city: 'Palmital', community: 'Paiquere',
                    description: 'Noite de massas e vinhos típicos da culinária italiana.',
                    entryFee: 'R$ 45,00 por pessoa', foodPrice: 'Jantar incluído',
                    drinkPrice: 'Vinhos e refrigerantes à parte', dressCode: 'Elegante'
                }
            ]
        },
        "Quedas do Iguaçu": {
            communities: ["Cidade Alta", "Centro", "Estrela", "Poço Grande", "Monte Belo"], // Comunidades atualizadas
            events: [
                {
                    title: 'Caminhada Ecológica',
                    date: '03/08/2025', time: '07:30 - 12:00', location: 'Parque Municipal',
                    city: 'Quedas do Iguaçu', community: 'Cidade Alta',
                    description: 'Explore as belezas naturais da região em uma caminhada guiada.',
                    entryFee: 'Gratuito (inscrições limitadas)', foodPrice: 'Lanches leves distribuídos ao final',
                    drinkPrice: 'Água disponível', dressCode: 'Roupas e calçados confortáveis para caminhada'
                },
                {
                    title: 'Jantar Dançante',
                    date: '20/09/2025', time: '20:00 - 02:00', location: 'Clube Estrela',
                    city: 'Quedas do Iguaçu', community: 'Estrela',
                    description: 'Noite de boa música, comida e dança para casais e amigos.',
                    entryFee: 'R$ 80,00 por pessoa (jantar incluído)', foodPrice: 'Jantar completo incluído',
                    drinkPrice: 'Bebidas à parte', dressCode: 'Social ou Esporte Fino'
                },
                {
                    title: 'Feira de Produtos Orgânicos',
                    date: '10/10/2025', time: '08:00 - 13:00', location: 'Praça Central',
                    city: 'Quedas do Iguaçu', community: 'Centro',
                    description: 'Produtores locais vendendo frutas, verduras e outros produtos orgânicos.',
                    entryFee: 'Gratuito', foodPrice: 'Barracas com alimentos saudáveis',
                    drinkPrice: 'Sucos naturais', dressCode: 'Livre'
                },
                {
                    title: 'Dia do Voluntariado',
                    date: '15/10/2025', time: '09:00 - 16:00', location: 'Escola Monte Belo',
                    city: 'Quedas do Iguaçu', community: 'Monte Belo',
                    description: 'Ação comunitária de limpeza e pequenos reparos na escola local.',
                    entryFee: 'Gratuito (voluntários)', foodPrice: 'Lanche coletivo oferecido',
                    drinkPrice: 'Água', dressCode: 'Roupas confortáveis para trabalho'
                }
            ]
        }
    };

    const eventListContainer = document.getElementById('event-list');
    const cityNav = document.getElementById('city-nav');
    const communityNav = document.getElementById('community-nav');
    const noEventsMessage = document.querySelector('.no-events-message'); // Já existe

    // Elementos do Modal (sem alterações aqui)
    const modal = document.getElementById('event-details-modal');
    const closeButton = document.querySelector('.close-button');
    const modalTitle = document.getElementById('modal-title');
    const modalCity = document.getElementById('modal-city');
    const modalCommunity = document.getElementById('modal-community');
    const modalDate = document.getElementById('modal-date');
    const modalTime = document.getElementById('modal-time');
    const modalLocation = document.getElementById('modal-location');
    const modalDescription = document.getElementById('modal-description');
    const modalEntryFee = document.getElementById('modal-entry-fee');
    const modalFoodPrice = document.getElementById('modal-food-price');
    const modalDrinkPrice = document.getElementById('modal-drink-price');
    const modalDressCode = document.getElementById('modal-dress-code');

    let selectedCity = null;
    let selectedCommunity = null;

    // ... (renderCities, renderCommunities, selectCity, selectCommunity - Sem alterações) ...

    // Função para renderizar as cidades na navbar
    function renderCities() {
        cityNav.innerHTML = '';
        const allCitiesItem = document.createElement('li');
        allCitiesItem.classList.add('nav-item');
        allCitiesItem.textContent = 'Todas as Cidades';
        allCitiesItem.dataset.city = 'Todos';
        allCitiesItem.addEventListener('click', function() {
            selectCity('Todos');
        });
        cityNav.appendChild(allCitiesItem);

        for (const city in citiesData) {
            const cityItem = document.createElement('li');
            cityItem.classList.add('nav-item');
            cityItem.textContent = city;
            cityItem.dataset.city = city;
            cityItem.addEventListener('click', function() {
                selectCity(city);
            });
            cityNav.appendChild(cityItem);
        }
    }

    // Função para renderizar as comunidades com base na cidade selecionada
    function renderCommunities(city) {
        communityNav.innerHTML = ''; // Limpa comunidades anteriores

        if (city && city !== 'Todos') {
            const communities = citiesData[city].communities;
            const allCommunitiesItem = document.createElement('li');
            allCommunitiesItem.classList.add('nav-item');
            allCommunitiesItem.textContent = 'Todas as Comunidades';
            allCommunitiesItem.dataset.community = 'Todos';
            allCommunitiesItem.addEventListener('click', function() {
                selectCommunity('Todos');
            });
            communityNav.appendChild(allCommunitiesItem);

            communities.forEach(community => {
                const communityItem = document.createElement('li');
                communityItem.classList.add('nav-item');
                communityItem.textContent = community;
                communityItem.dataset.community = community;
                communityItem.addEventListener('click', function() {
                    selectCommunity(community);
                });
                communityNav.appendChild(communityItem);
            });
            communityNav.style.display = 'flex'; // Mostra a navbar de comunidades
        } else {
            communityNav.style.display = 'none'; // Esconde a navbar de comunidades
            selectedCommunity = null; // Reseta a comunidade selecionada
        }
    }

    // Função para selecionar uma cidade
    function selectCity(city) {
        selectedCity = city;
        selectedCommunity = null; // Reseta a comunidade ao mudar de cidade

        // Remove 'active' de todas as cidades e adiciona à selecionada
        document.querySelectorAll('#city-nav .nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.city === city) {
                item.classList.add('active');
            }
        });

        // Renderiza as comunidades da nova cidade
        renderCommunities(city);
        // Reseta o estado ativo das comunidades
        document.querySelectorAll('#community-nav .nav-item').forEach(item => item.classList.remove('active'));

        displayEvents(); // Atualiza a exibição de eventos
    }

    // Função para selecionar uma comunidade
    function selectCommunity(community) {
        selectedCommunity = community;

        // Remove 'active' de todas as comunidades e adiciona à selecionada
        document.querySelectorAll('#community-nav .nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.community === community) {
                item.classList.add('active');
            }
        });

        displayEvents(); // Atualiza a exibição de eventos
    }


    // --- FUNÇÃO PRINCIPAL ALTERADA AQUI ---
    function displayEvents() {
        eventListContainer.innerHTML = ''; // Limpa os eventos existentes
        let filteredEvents = [];

        if (selectedCity === null) { // Estado inicial: nenhuma cidade selecionada
            noEventsMessage.textContent = "Selecione uma cidade para ver os eventos.";
            noEventsMessage.style.display = 'block';
            return; // Sai da função
        }

        if (selectedCity === 'Todos') {
            // Se todas as cidades forem selecionadas, pegue todos os eventos de todas as cidades
            Object.values(citiesData).forEach(cityInfo => {
                filteredEvents = filteredEvents.concat(cityInfo.events);
            });
            // Não filtramos por comunidade se "Todas as Cidades" estiverem selecionadas
            noEventsMessage.textContent = "Nenhum evento encontrado para todas as cidades.";
        } else if (selectedCity && citiesData[selectedCity]) {
            // Se uma cidade específica for selecionada
            let cityEvents = citiesData[selectedCity].events;

            if (selectedCommunity === null) { // Cidade selecionada, mas nenhuma comunidade (ex: primeira carga de comunidade)
                noEventsMessage.textContent = `Selecione uma comunidade em ${selectedCity} ou "Todas as Comunidades" para ver os eventos.`;
                noEventsMessage.style.display = 'block';
                return; // Sai da função
            }

            if (selectedCommunity === 'Todos') {
                filteredEvents = cityEvents;
                noEventsMessage.textContent = `Nenhum evento encontrado para todas as comunidades em ${selectedCity}.`;
            } else {
                // E se uma comunidade específica for selecionada dentro dessa cidade
                filteredEvents = cityEvents.filter(event => event.community === selectedCommunity);
                noEventsMessage.textContent = `Não há eventos no momento para a comunidade "${selectedCommunity}" em ${selectedCity}.`;
            }
        }

        if (filteredEvents.length === 0) {
            noEventsMessage.style.display = 'block'; // Mostra a mensagem específica
        } else {
            noEventsMessage.style.display = 'none'; // Esconde a mensagem
            filteredEvents.forEach(event => {
                const eventCard = document.createElement('div');
                eventCard.classList.add('event-card');
                eventCard.innerHTML = `
                    <h2>${event.title}</h2>
                    <p class="city-name"><strong>Cidade:</strong> ${event.city}</p>
                    <p class="community"><strong>Comunidade:</strong> ${event.community}</p>
                    <p><strong>Data:</strong> ${event.date}</p>
                    <p><strong>Hora:</strong> ${event.time}</p>
                    <p><strong>Local:</strong> ${event.location}</p>
                    <p>${event.description}</p>
                `;
                eventCard.addEventListener('click', () => openModal(event));
                eventListContainer.appendChild(eventCard);
            });
        }
    }

    // ... (openModal, closeModal, e event listeners do modal - Sem alterações) ...
    function openModal(event) {
        modalTitle.textContent = event.title;
        modalCity.textContent = event.city;
        modalCommunity.textContent = event.community;
        modalDate.textContent = event.date;
        modalTime.textContent = event.time;
        modalLocation.textContent = event.location;
        modalDescription.textContent = event.description;
        modalEntryFee.textContent = event.entryFee;
        modalFoodPrice.textContent = event.foodPrice;
        modalDrinkPrice.textContent = event.drinkPrice;
        modalDressCode.textContent = event.dressCode;

        modal.style.display = 'flex'; // Exibe o modal
    }

    function closeModal() {
        modal.style.display = 'none'; // Esconde o modal
    }

    // Event listeners para o modal
    closeButton.addEventListener('click', closeModal);

    // Fechar o modal clicando fora do conteúdo
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

    // Inicialização: Renderiza as cidades e exibe uma mensagem inicial
    renderCities();
    communityNav.style.display = 'none'; // Esconde a navbar de comunidades no início
    // A mensagem inicial será definida pela função displayEvents() agora
    displayEvents(); // Chama para definir a mensagem inicial "Selecione uma cidade..."
});