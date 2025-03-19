//dados dos filmes com imagens armazenadas localmente na pasta 'imagens'
const filmes={
    acao:[
        {
            titulo:'Mad max',
            diretor:'George Miller',
            elenco:'Tom Hady, Charlize Theron, Nicholas Hoult',
            sinopse:"Em um futuro pos apocaliptico Max se junta a furosa em uma missao para escapar de um tirano que controla o deserto",
            imagem:'./imagens/MadMax.jpeg'
        },{ 
            titulo:'Indiana Jones e a Ultima Cruzada',
            diretor:'Steven Spielberg',
            elenco:'Harrison Ford, Sean Connery, Alison Doody',
            sinopse:"O professor Henry Jones, pai de Indiana Jones, é sequestrado pelos nazistas, e o arqueólogo entra em uma missão perigosa para salvá-lo e também proteger o Santo Graal.",
            imagem:'./imagens/IndianaJonesUltimaCruzada.jpeg'
        },{
            titulo:'Star Wars: Episódio IV  Uma Nova Esperança',
            diretor:'George Lucas',
            elenco:'Mark Hamill, Harrison Ford, Carrie Fisher...',
            sinopse:"A princesa Leia é mantida refém pelas forças imperiais comandadas por Darth Vader. Luke Skywalker e o capitão Han Solo precisam libertá-la e restaurar a liberdade e a justiça na galáxia.",
            imagem:'./imagens/StarWarsIV.jpg'
        },{
            titulo:'Jogos Famintos',
            diretor:'Jason Friedberg, Aaron Seltzer',
            elenco:'Maiara Walsh, Cody Christian, Brant Daugherty',
            sinopse:"A corajosa e habilidosa Kantmiss Evershot se oferece para participar dos Jogos Famintos, em que ela e o filho do padeiro Peter Malarkey lutam pelas suas vidas e ainda podem ganhar alguns presentes inesperados.",
            imagem:'./imagens/starvinggames.jpg'
        }   
    ],
    terror:[
        {
            titulo:'Tubarão da Terra',
            diretor:'Cheng Si-Yu',
            elenco:'Liqun Luo, Zhenzhao Lin, Xi Mei-Li',
            sinopse:"Um grupo científico tenta modificar geneticamente um tubarão e cria uma máquina de matar destrutiva, que nem eles conseguem controlar.",
            imagem:'./imagens/LandShark.jpeg'
        },
        {
            titulo:`Five Night's at Freddy - O pesadelo sem Fim`,
            diretor:'Emma Tammi',
            elenco:'Josh Hutcherson, Mathew Lillard, Elizabeth Lail, MatPat, Piper Rubio',
            sinopse:"No Freddy Fazbear's Pizza, robôs animados fazem a festa das crianças durante o dia. Mas, quando chega a noite, eles se transformam em assassinos psicopatas.",
            imagem:'./imagens/fnaf.jpg'
        },
        {
            titulo:`Willy's Wonderland`,
            diretor:'Kevin Lewis',
            elenco:'Nicolas Cage, Caylee Cowan, Christian Del Grosso',
            sinopse:"Quando seu carro quebra, um homem solitário concorda em limpar um parque de diversões em troca do conserto. Logo ele se encontra em meio a uma guerra contra animatrônicos.",
            imagem:'./imagens/willyswonderland.jpeg'
        },
        {
            titulo:'Corra',
            diretor:'Jordan Peele',
            elenco:'Daniel Kaluuya, Allison Willians, Caleb Landry Jones',
            sinopse:"Chris é um jovem fotógrafo negro que está prestes a conhecer os pais de Rose, sua namorada caucasiana. Na luxuosa propriedade dos pais dela, Chris percebe que a família esconde algo muito perturbador.",
            imagem:'./imagens/corra.jpg'
        }
    ],
    musical:[
        {
            titulo:'High School Musical',
            diretor:'Kenny Ortega',
            elenco:'Zac Efron, Vanessa Hudgens, Ashley Tisdale',
            sinopse:"Estudantes conspiram contra uma estrela do basquete e uma tímida novata, para evitar que eles cantem em uma produção musical.",
            imagem:'./imagens/High_School_Musical.jpeg'
        },
        {
            titulo:'Camp Rock',
            diretor:'Matthew Diamond',
            elenco:'Demi Lovato, Joe Jonas, Nick Jonas, Kevin Jonas',
            sinopse:"Uma adolescente quer desesperadamente passar o verão em um acampamento de rock, mas a única maneira pela qual pode entrar é trabalhando na cozinha. Quando um astro pop adolescente ouve seu canto, ele sai para encontrar qual garota é dona da voz.",
            imagem:'./imagens/CampRock.jpeg'
        },
        {
            titulo:'Tick, Tick... Boom',
            diretor:'Lin-Manuel Miranda',
            elenco:'Andrew Garfield, Alexandra Shipp, Vanessa Hudgens',
            sinopse:"Prestes a completar 30 anos, um compositor promissor lida com o amor, a amizade e a pressão para criar algo incrível antes que o tempo acabe",
            imagem:'./imagens/ticktickboom.jpeg'
        },
        {
            titulo:'Musica',
            diretor:'Rudy Mancuso',
            elenco:'Rudy Mancusp, Camila Mendes, Francesca Reale',
            sinopse:"Um aspirante a artista com sinestesia lida com um futuro incerto e as pressões do amor, da família e de sua cultura brasileira em Newark, Nova Jersey.",
            imagem:'./imagens/musica.jpg'
        }
    ]
}

//Função para criar os filmes e exibi-los no HTML 

function exibirFilmes(){
    //Obter os conteineres de cada categoria 
    const acaoConteiner=document.getElementById('acao')
    const musicalConteiner=document.getElementById('musical')
    const terrorConteiner=document.getElementById('terror')

    //funcao para exivir filmets e exibi-los no HTML

    function exibirCategoria(filmes,container){
        filmes.forEach(filme => {
            const divFilme = document.createElement("div");
            divFilme.classList.add("filme");
 
            divFilme.innerHTML = `
                <img src="${filme.imagem}" alt="${filme.titulo}">
                <h3>${filme.titulo}</h3>
                <p><strong>Diretor:</strong> ${filme.diretor}</p>
                <p><strong>Elenco:</strong> ${filme.elenco}</p>
                <p><strong>Sinopse:</strong> ${filme.sinopse}</p>
            `;

            container.appendChild(divFilme);
        });
        
        /*filmes.forEach(filme => {
            const divFilme=document.createElement("div")
            divFilme.classList.add("filme")
            divFilme.innerHTML=`
            <img src="${filme.imagem}" alt="${filme.titulo}">
            <h3>${filme.titulo}</h3>
            <p><strong>Director:</strong> ${filme.diretor}</p>
            <p><strong>Elenco:</strong> ${filme.elenco}</p>
            <p><strong>Sinopse:</strong> ${filme.sinopse}</p>
            `;
            container.appendChild(divFilme)
        });*/
    }
    //exibir filmes para cada categoria
    exibirCategoria(filmes.acao,acaoConteiner)
    exibirCategoria(filmes.musical,musicalConteiner)
    exibirCategoria(filmes.terror,terrorConteiner)
}

//Chamar a função para exibir os filmes

exibirFilmes()