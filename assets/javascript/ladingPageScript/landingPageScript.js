const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

function createHeader() {
    let headerDiv = document.createElement("div");
    headerDiv.id = "header";
    let logoHeaderDiv = document.createElement("div");
    logoHeaderDiv.id = "logoHeader";
    let imgLogoHeader = document.createElement("img");
    imgLogoHeader.src = "assets/images/logo-celebrate-now.png";
    let linksHeaderDiv = document.createElement("div");
    linksHeaderDiv.id = "links";
    let firstLinkHeader = document.createElement("a");
    firstLinkHeader.textContent = "Quem somos nós?"
    let secondLinkHeader = document.createElement("a");
    secondLinkHeader.textContent = "O que oferecemos?"
    let thirdLinkHeader = document.createElement("a");
    thirdLinkHeader.textContent = "Nosso diferencial";
    let buttonLoginHeaderDiv = document.createElement("div");
    buttonLoginHeaderDiv.id = "buttonEnter";
    let linkButtonLoginHeader = document.createElement("a");
    linkButtonLoginHeader.href = "login.html";
    let buttonLoginHeader = document.createElement("button");
    buttonLoginHeader.textContent = "Entrar";
    buttonLoginHeader.id = "linkLogin";

    logoHeaderDiv.appendChild(imgLogoHeader);
    headerDiv.appendChild(logoHeaderDiv);
    linksHeaderDiv.appendChild(firstLinkHeader);
    linksHeaderDiv.appendChild(secondLinkHeader);
    linksHeaderDiv.appendChild(thirdLinkHeader);
    headerDiv.appendChild(linksHeaderDiv);
    linkButtonLoginHeader.appendChild(buttonLoginHeader);
    buttonLoginHeaderDiv.appendChild(linkButtonLoginHeader);
    headerDiv.appendChild(buttonLoginHeaderDiv);
    header.appendChild(headerDiv);
}

function createMain() {
    let firstFrameDiv = document.createElement("div");
    firstFrameDiv.id = "first-frame";
    let imagesFirstFrameDiv = document.createElement("div");
    imagesFirstFrameDiv.id = "imgDiv";
    let firstImageFirstFrameDiv = document.createElement("img");
    firstImageFirstFrameDiv.src = "./assets/images/ring.svg";
    firstImageFirstFrameDiv.id = "ring";
    let secondImageFirstFrameDiv = document.createElement("img");
    secondImageFirstFrameDiv.src = "./assets/images/LogoLateral.png";
    secondImageFirstFrameDiv.id = "logo";
    let titleDivFirstFrameDiv = document.createElement("div");
    titleDivFirstFrameDiv.id = "titleDiv";
    let titleFirstFrameDiv = document.createElement("h1");
    titleFirstFrameDiv.textContent = "Organize eventos com a simplicidade que você merece.";
    let descriptionDivFirstFrameDiv = document.createElement("div");
    descriptionDivFirstFrameDiv.id = "descriptionDiv";
    let textDescription = document.createElement("p");
    textDescription.textContent = "CelebrateNow: planeje com precisão, encante com paixão – o aliado perfeito para cerimonialistas de casamento.";
    let buttonStartNowFirstFrameDiv = document.createElement("div");
    let linkButtonStartNow = document.createElement("a");
    linkButtonStartNow.href = "signIn.html";
    let buttonStartNow = document.createElement("button");
    buttonStartNow.textContent = "Comece agora";
    let secondFrameDiv = document.createElement("div");
    secondFrameDiv.id = "second-frame";
    let servicesDiv = document.createElement("div");
    servicesDiv.id = "service"
    let firstServiceDiv = document.createElement("div");
    firstServiceDiv.id = "schedule";
    firstServiceDiv.className = "hidden";
    let imgFirstService = document.createElement("img");
    imgFirstService.src = "assets/images/agenda.svg";
    let firstServiceTxtDiv = document.createElement("div");
    firstServiceTxtDiv.className = "service-txt";
    let firstServiceTxtTitle = document.createElement("h2");
    firstServiceTxtTitle.textContent = "Agenda"
    let firstServiceText = document.createElement("p");
    firstServiceText.textContent = "Organize sua agenda com facilidade, garantindo que cada detalhe do evento esteja no lugar certo, na hora certa.";
    let secondServiceDiv = document.createElement("div");
    secondServiceDiv.id = "checklist";
    secondServiceDiv.className = "hidden";
    let imgSecondService = document.createElement("img");
    imgSecondService.src = "assets/images/comercio-eletronico.svg";
    let secondServiceTxtDiv = document.createElement("div");
    secondServiceTxtDiv.className = "service-txt";
    let secondServiceTxtTitle = document.createElement("h2");
    secondServiceTxtTitle.textContent = "Checklist";
    let secondServiceText = document.createElement("p");
    secondServiceText.textContent = "Acompanhe cada passo do planejamento com um checklist personalizado, para que nada seja esquecido.";
    let thirdServiceDiv = document.createElement("div");
    thirdServiceDiv.id = "budget";
    thirdServiceDiv.className = "hidden";
    let imgThirdService = document.createElement("img");
    imgThirdService.src = "assets/images/pagamento-em-dinheiro.svg";
    let thirdServiceTxtDiv = document.createElement("div");
    thirdServiceTxtDiv.className = "service-txt";
    let thirdServiceTxtTitle = document.createElement("h2");
    thirdServiceTxtTitle.textContent = "Orçamentos";
    let thirdServiceText = document.createElement("p");
    thirdServiceText.textContent = "Controle seus orçamentos de forma simples e transparente, ajudando a garantir que cada evento seja realizado dentro do planejado.";
    let fourthServiceDiv = document.createElement("div");
    fourthServiceDiv.id = "communication";
    fourthServiceDiv.className = "hidden";
    let imgFourthService = document.createElement("img");
    imgFourthService.src = "assets/images/comunicacao.svg";
    let fourthServiceTxtDiv = document.createElement("div");
    fourthServiceTxtDiv.className = "service-txt";
    let fourthServiceTxtTitle = document.createElement("h2");
    fourthServiceTxtTitle.textContent = "Comunicação com clientes";
    let fourthServiceText = document.createElement("p");
    fourthServiceText.textContent = "Mantenha uma comunicação clara e eficaz com seus clientes, garantindo que suas expectativas sejam sempre atendidas.";
    let fifthServiceDiv = document.createElement("div");
    fifthServiceDiv.id = "suppliers";
    fifthServiceDiv.className = "hidden";
    let imgFifthService = document.createElement("img");
    imgFifthService.src = "assets/images/entregador.svg";
    let fifthServiceTxtDiv = document.createElement("div");
    fifthServiceTxtDiv.className = "service-txt";
    let fifthServiceTxtTitle = document.createElement("h2");
    fifthServiceTxtTitle.textContent = "Controle de Fornecedores";
    let fifthServiceText = document.createElement("p");
    fifthServiceText.textContent = "Gerencie seus fornecedores de forma eficiente, mantendo todos os contatos e detalhes essenciais ao alcance de um clique.";
    let sliderDiv = document.createElement("div");
    sliderDiv.className = "slider";
    let thirdFrame = document.createElement("div");
    thirdFrame.id = "third-frame";
    thirdFrame.className = "slide-track";
    let firstSlideDiv = document.createElement("div");
    firstSlideDiv.className = "feedback slide";
    let imageFirstSlide = document.createElement("img");
    imageFirstSlide.src = "assets/images/pexels-pixabay-413885.jpg"; //1
    let sizeTextFirstDiv = document.createElement("div");
    sizeTextFirstDiv.className = "tamanhoFrase";
    let textFirstDiv = document.createElement("p");
    textFirstDiv.textContent = "Uma ferramenta incrível! Simples, eficiente e perfeita!";
    let secondSlideDiv = document.createElement("div");
    secondSlideDiv.className = "feedback slide";
    let imageSecondSlide = document.createElement("img");
    imageSecondSlide.src = "assets/images/pexels-pixabay-206593.jpg"; //2
    let sizeTextSecondDiv = document.createElement("div");
    sizeTextSecondDiv.className = "tamanhoFrase";
    let textSecondDiv = document.createElement("p");
    textSecondDiv.textContent = "A organização e eficiencia de vocês poupou meu tempo.";
    let thirdSlideDiv = document.createElement("div");
    thirdSlideDiv.className = "feedback slide";
    let imageThirdSlide = document.createElement("img");
    imageThirdSlide.src = "assets/images/pexels-darina-belonogova-7959603.jpg"; //3
    let sizeTextThirdDiv = document.createElement("div");
    sizeTextThirdDiv.className = "tamanhoFrase";
    let textThirdDiv = document.createElement("p");
    textThirdDiv.textContent = "Nunca foi tão fácil casar!";
    let fourthSlideDiv = document.createElement("div");
    fourthSlideDiv.className = "feedback slide";
    let imageFourthSlide = document.createElement("img");
    imageFourthSlide.src = "assets/images/pexels-olly-3779770.jpg";  //4
    let sizeTextFourthDiv = document.createElement("div");
    sizeTextFourthDiv.className = "tamanhoFrase";
    let textFourthDiv = document.createElement("p");
    textFourthDiv.textContent = "Meu casamento foi pelo Celebrate now e tudo foi perfeito!";
    let fifthSlideDiv = document.createElement("div");
    fifthSlideDiv.className = "feedback slide";
    let imageFifthSlide = document.createElement("img");
    imageFifthSlide.src = "assets/images/pexels-olly-837358.jpg";  //5
    let sizeTextFifthDiv = document.createElement("div");
    sizeTextFifthDiv.className = "tamanhoFrase";
    let textFifthDiv = document.createElement("p");
    textFifthDiv.textContent = "Nunca me senti tão tranquilo com um produto.";
    let sixthSlideDiv = document.createElement("div");
    sixthSlideDiv.className = "feedback slide";
    let imageSixthSlide = document.createElement("img");
    imageSixthSlide.src = "assets/images/pexels-pixabay-39866.jpg"; //6
    let sizeTextSixthDiv = document.createElement("div");
    sizeTextSixthDiv.className = "tamanhoFrase";
    let textSixthDiv = document.createElement("p");
    textSixthDiv.textContent = "esse site tornou meu dia dez vezes melhor!";
    let seventhSlideDiv = document.createElement("div");
    seventhSlideDiv.className = "feedback slide";
    let imageSeventhSlide = document.createElement("img");
    imageSeventhSlide.src = "assets/images/pexels-olly-845457.jpg"; //7
    let sizeTextSeventhDiv = document.createElement("div");
    sizeTextSeventhDiv.className = "tamanhoFrase";
    let textSeventhDiv = document.createElement("p");
    textSeventhDiv.textContent = "inovador e bem trabalhado, parabens.";
    let eighthSlideDiv = document.createElement("div");
    eighthSlideDiv.className = "feedback slide";
    let imageEighthSlide = document.createElement("img");
    imageEighthSlide.src = "assets/images/pexels-hasibullah-zhowandai-248954-819530.jpg";  //8
    let sizeTextEighthDiv = document.createElement("div");
    sizeTextEighthDiv.className = "tamanhoFrase";
    let textEighthDiv = document.createElement("p");
    textEighthDiv.textContent = "Não tenho palavras para o quanto amei este produto.";
    let ninthSlideDiv = document.createElement("div");
    ninthSlideDiv.className = "feedback slide";
    let imageNinthSlide = document.createElement("img");
    imageNinthSlide.src = "assets/images/caraTranquilo.jpg"; //9
    let sizeTextNinthDiv = document.createElement("div");
    sizeTextNinthDiv.className = "tamanhoFrase";
    let textNinthDiv = document.createElement("p");
    textNinthDiv.textContent = "Uma ferramenta incrível! Simples, eficiente e perfeita!";
    let firstSlideDivCopy = document.createElement("div");
    firstSlideDivCopy.className = "feedback slide";
    let imageFirstSlideCopy = document.createElement("img");
    imageFirstSlideCopy.src = "assets/images/pexels-pixabay-413885.jpg"; //10
    let sizeTextFirstDivCopy = document.createElement("div");
    sizeTextFirstDivCopy.className = "tamanhoFrase";
    let textFirstDivCopy = document.createElement("p");
    textFirstDivCopy.textContent = "Uma ferramenta incrível! Simples, eficiente e perfeita!";
    let secondSlideDivCopy = document.createElement("div");
    secondSlideDivCopy.className = "feedback slide";
    let imageSecondSlideCopy = document.createElement("img");
    imageSecondSlideCopy.src = "assets/images/pexels-pixabay-206593.jpg"; //11
    let sizeTextSecondDivCopy = document.createElement("div");
    sizeTextSecondDivCopy.className = "tamanhoFrase";
    let textSecondDivCopy = document.createElement("p");
    textSecondDivCopy.textContent = "A organização e eficiencia de vocês poupou meu tempo.";
    let thirdSlideDivCopy = document.createElement("div");
    thirdSlideDivCopy.className = "feedback slide";
    let imageThirdSlideCopy = document.createElement("img");
    imageThirdSlideCopy.src = "assets/images/pexels-darina-belonogova-7959603.jpg"; //12
    let sizeTextThirdDivCopy = document.createElement("div");
    sizeTextThirdDivCopy.className = "tamanhoFrase";
    let textThirdDivCopy = document.createElement("p");
    textThirdDivCopy.textContent = "Nunca foi tão fácil casar!";
    let fourthSlideDivCopy = document.createElement("div");
    fourthSlideDivCopy.className = "feedback slide";
    let imageFourthSlideCopy = document.createElement("img");
    imageFourthSlideCopy.src = "assets/images/pexels-olly-3779770.jpg"; //13
    let sizeTextFourthDivCopy = document.createElement("div");
    sizeTextFourthDivCopy.className = "tamanhoFrase";
    let textFourthDivCopy = document.createElement("p");
    textFourthDivCopy.textContent = "Meu casamento foi pelo Celebrate now e tudo foi perfeito!";
    let fifthSlideDivCopy = document.createElement("div");
    fifthSlideDivCopy.className = "feedback slide";
    let imageFifthSlideCopy = document.createElement("img");
    imageFifthSlideCopy.src = "assets/images/pexels-olly-837358.jpg"; //14
    let sizeTextFifthDivCopy = document.createElement("div");
    sizeTextFifthDivCopy.className = "tamanhoFrase";
    let textFifthDivCopy = document.createElement("p");
    textFifthDivCopy.textContent = "Nunca me senti tão tranquilo com um produto.";
    let sixthSlideDivCopy = document.createElement("div");
    sixthSlideDivCopy.className = "feedback slide";
    let imageSixthSlideCopy = document.createElement("img");
    imageSixthSlideCopy.src = "assets/images/pexels-pixabay-39866.jpg"; //15
    let sizeTextSixthDivCopy = document.createElement("div");
    sizeTextSixthDivCopy.className = "tamanhoFrase";
    let textSixthDivCopy = document.createElement("p");
    textSixthDivCopy.textContent = "esse site tornou meu dia dez vezes melhor!";
    let seventhSlideDivCopy = document.createElement("div");
    seventhSlideDivCopy.className = "feedback slide";
    let imageSeventhSlideCopy = document.createElement("img");
    imageSeventhSlideCopy.src = "assets/images/pexels-olly-845457.jpg"; //16
    let sizeTextSeventhDivCopy = document.createElement("div");
    sizeTextSeventhDivCopy.className = "tamanhoFrase";
    let textSeventhDivCopy = document.createElement("p");
    textSeventhDivCopy.textContent = "inovador e bem trabalhado, parabens.";
    let eighthSlideDivCopy = document.createElement("div");
    eighthSlideDivCopy.className = "feedback slide";
    let imageEighthSlideCopy = document.createElement("img");
    imageEighthSlideCopy.src = "assets/images/pexels-hasibullah-zhowandai-248954-819530.jpg"; //17
    let sizeTextEighthDivCopy = document.createElement("div");
    sizeTextEighthDivCopy.className = "tamanhoFrase";
    let textEighthDivCopy = document.createElement("p");
    textEighthDivCopy.textContent = "Não tenho palavras para o quanto amei este produto.";
    let ninthSlideDivCopy = document.createElement("div");
    ninthSlideDivCopy.className = "feedback slide";
    let imageNinthSlideCopy = document.createElement("img");
    imageNinthSlideCopy.src = "assets/images/caraTranquilo.jpg"; //18
    let sizeTextNinthDivCopy = document.createElement("div");
    sizeTextNinthDivCopy.className = "tamanhoFrase";
    let textNinthDivCopy = document.createElement("p");
    textNinthDivCopy.textContent = "Uma ferramenta incrível! Simples, eficiente e perfeita!";
    let fourthFrameDiv = document.createElement("div");
    fourthFrameDiv.id = "fourth-frame";
    let leftSectionDiv = document.createElement("div");
    leftSectionDiv.id = "left-section";
    let firstTextLeftSection = document.createElement("h2");
    firstTextLeftSection.textContent = "Menos complexidade, mais resultados: o simples que transforma a organização de eventos.";
    let secondTextLeftSection = document.createElement("p");
    secondTextLeftSection.textContent = "Celebrate Now é um sistema de gestão de casamentos desenvolvido por alunos do Senai Alagoas  para organizar informações e deixar sua cerimonia mais fácil e organizada.";
    let imageLeftSection = document.createElement("img");
    imageLeftSection.src = "assets/images/pexels-casamento.svg";
    let rightSectionDiv = document.createElement("div");
    rightSectionDiv.id = "right-section";
    let firstTextRightSection = document.createElement("p");
    firstTextRightSection.innerHTML = "Já imaginou uma forma fácil de" + '<br />' + "organizar sua cerimonia por itens e serviços?";
    let secondTextRightSection = document.createElement("p");
    secondTextRightSection.innerHTML = "Uma forma de visualização em um calendario com" + '<br />' + "as datas mais importantes e a possibilidade de <br>criar uma lista de tarefas?";
    let imagesRightSectionDiv = document.createElement("div");
    let firstImageRightSection = document.createElement("img");
    firstImageRightSection.src = "assets/images/img-right-1.svg";
    let secondImageRightSection = document.createElement("img");
    secondImageRightSection.src = "assets/images/img-right-2.svg";
    let thirdImageRightSection = document.createElement("img");
    thirdImageRightSection.src = "assets/images/img-right-3.svg";
    let thirdTextRightSection = document.createElement("p");
    thirdTextRightSection.innerHTML = "Com alguns cliques e informações," + '<br />' + "podemos fácilitar sua vida.";
    let linkButtonRightSection = document.createElement("a");
    linkButtonRightSection.href = "signIn.html";
    let buttonRightSection = document.createElement("button");
    buttonRightSection.textContent = "Inscreva-se";

    imagesFirstFrameDiv.appendChild(firstImageFirstFrameDiv);
    imagesFirstFrameDiv.appendChild(secondImageFirstFrameDiv);
    firstFrameDiv.appendChild(imagesFirstFrameDiv);
    titleDivFirstFrameDiv.appendChild(titleFirstFrameDiv);
    firstFrameDiv.appendChild(titleDivFirstFrameDiv);
    descriptionDivFirstFrameDiv.appendChild(textDescription);
    firstFrameDiv.appendChild(descriptionDivFirstFrameDiv);
    linkButtonStartNow.appendChild(buttonStartNow);
    buttonStartNowFirstFrameDiv.appendChild(linkButtonStartNow);
    firstFrameDiv.appendChild(buttonStartNowFirstFrameDiv);
    firstServiceTxtDiv.appendChild(firstServiceTxtTitle);
    firstServiceTxtDiv.appendChild(firstServiceText);
    firstServiceDiv.appendChild(imgFirstService);
    firstServiceDiv.appendChild(firstServiceTxtDiv);
    secondServiceTxtDiv.appendChild(secondServiceTxtTitle);
    secondServiceTxtDiv.appendChild(secondServiceText);
    secondServiceDiv.appendChild(imgSecondService);
    secondServiceDiv.appendChild(secondServiceTxtDiv);
    thirdServiceTxtDiv.appendChild(thirdServiceTxtTitle);
    thirdServiceTxtDiv.appendChild(thirdServiceText);
    thirdServiceDiv.appendChild(imgThirdService);
    thirdServiceDiv.appendChild(thirdServiceTxtDiv);
    fourthServiceTxtDiv.appendChild(fourthServiceTxtTitle);
    fourthServiceTxtDiv.appendChild(fourthServiceText);
    fourthServiceDiv.appendChild(imgFourthService);
    fourthServiceDiv.appendChild(fourthServiceTxtDiv);
    fifthServiceTxtDiv.appendChild(fifthServiceTxtTitle);
    fifthServiceTxtDiv.appendChild(fifthServiceText);
    fifthServiceDiv.appendChild(imgFifthService);
    fifthServiceDiv.appendChild(fifthServiceTxtDiv);
    servicesDiv.appendChild(firstServiceDiv);
    servicesDiv.appendChild(secondServiceDiv);
    servicesDiv.appendChild(thirdServiceDiv);
    servicesDiv.appendChild(fourthServiceDiv);
    servicesDiv.appendChild(fifthServiceDiv);
    secondFrameDiv.appendChild(servicesDiv);
    sizeTextFirstDiv.appendChild(textFirstDiv);
    firstSlideDiv.appendChild(imageFirstSlide);
    firstSlideDiv.appendChild(sizeTextFirstDiv);
    sizeTextSecondDiv.appendChild(textSecondDiv);
    secondSlideDiv.appendChild(imageSecondSlide);
    secondSlideDiv.appendChild(sizeTextSecondDiv);
    sizeTextThirdDiv.appendChild(textThirdDiv);
    thirdSlideDiv.appendChild(imageThirdSlide);
    thirdSlideDiv.appendChild(sizeTextThirdDiv);
    sizeTextFourthDiv.appendChild(textFourthDiv);
    fourthSlideDiv.appendChild(imageFourthSlide);
    fourthSlideDiv.appendChild(sizeTextFourthDiv);
    sizeTextFifthDiv.appendChild(textFifthDiv);
    fifthSlideDiv.appendChild(imageFifthSlide);
    fifthSlideDiv.appendChild(sizeTextFifthDiv);
    sizeTextSixthDiv.appendChild(textSixthDiv);
    sixthSlideDiv.appendChild(imageSixthSlide);
    sixthSlideDiv.appendChild(sizeTextSixthDiv);
    sizeTextSeventhDiv.appendChild(textSeventhDiv);
    seventhSlideDiv.appendChild(imageSeventhSlide);
    seventhSlideDiv.appendChild(sizeTextSeventhDiv);
    sizeTextEighthDiv.appendChild(textEighthDiv);
    eighthSlideDiv.appendChild(imageEighthSlide);
    eighthSlideDiv.appendChild(sizeTextEighthDiv);
    sizeTextNinthDiv.appendChild(textNinthDiv);
    ninthSlideDiv.appendChild(imageNinthSlide);
    ninthSlideDiv.appendChild(sizeTextNinthDiv);
    sizeTextFirstDivCopy.appendChild(textFirstDivCopy); 
    firstSlideDivCopy.appendChild(imageFirstSlideCopy);
    firstSlideDivCopy.appendChild(sizeTextFirstDivCopy);
    sizeTextSecondDivCopy.appendChild(textSecondDivCopy);
    secondSlideDivCopy.appendChild(imageSecondSlideCopy);
    secondSlideDivCopy.appendChild(sizeTextSecondDivCopy);
    sizeTextThirdDivCopy.appendChild(textThirdDivCopy);
    thirdSlideDivCopy.appendChild(imageThirdSlideCopy);
    thirdSlideDivCopy.appendChild(sizeTextThirdDivCopy);
    sizeTextFourthDivCopy.appendChild(textFourthDivCopy);
    fourthSlideDivCopy.appendChild(imageFourthSlideCopy);
    fourthSlideDivCopy.appendChild(sizeTextFourthDivCopy);
    sizeTextFifthDivCopy.appendChild(textFifthDivCopy);
    fifthSlideDivCopy.appendChild(imageFifthSlideCopy);
    fifthSlideDivCopy.appendChild(sizeTextFifthDivCopy);
    sizeTextSixthDivCopy.appendChild(textSixthDivCopy);
    sixthSlideDivCopy.appendChild(imageSixthSlideCopy);
    sixthSlideDivCopy.appendChild(sizeTextSixthDivCopy);
    sizeTextSeventhDivCopy.appendChild(textSeventhDivCopy);
    seventhSlideDivCopy.appendChild(imageSeventhSlideCopy);
    seventhSlideDivCopy.appendChild(sizeTextSeventhDivCopy);
    sizeTextEighthDivCopy.appendChild(textEighthDivCopy);
    eighthSlideDivCopy.appendChild(imageEighthSlideCopy);
    eighthSlideDivCopy.appendChild(sizeTextEighthDivCopy);
    sizeTextNinthDivCopy.appendChild(textNinthDivCopy);
    ninthSlideDivCopy.appendChild(imageNinthSlideCopy);
    ninthSlideDivCopy.appendChild(sizeTextNinthDivCopy);
    thirdFrame.appendChild(firstSlideDiv); 1
    thirdFrame.appendChild(secondSlideDiv); 2
    thirdFrame.appendChild(thirdSlideDiv); 3
    thirdFrame.appendChild(fourthSlideDiv); 4
    thirdFrame.appendChild(fifthSlideDiv); 5
    thirdFrame.appendChild(sixthSlideDiv); 6
    thirdFrame.appendChild(seventhSlideDiv); 7
    thirdFrame.appendChild(eighthSlideDiv); 8
    thirdFrame.appendChild(ninthSlideDiv); 9
    thirdFrame.appendChild(firstSlideDivCopy); 1
    thirdFrame.appendChild(secondSlideDivCopy); 2
    thirdFrame.appendChild(thirdSlideDivCopy); 3
    thirdFrame.appendChild(fourthSlideDivCopy); 4
    thirdFrame.appendChild(fifthSlideDivCopy); 5
    thirdFrame.appendChild(sixthSlideDivCopy); 6
    thirdFrame.appendChild(seventhSlideDivCopy); 7
    thirdFrame.appendChild(eighthSlideDivCopy); 8
    thirdFrame.appendChild(ninthSlideDivCopy); 9
    sliderDiv.appendChild(thirdFrame);
    leftSectionDiv.appendChild(firstTextLeftSection);
    leftSectionDiv.appendChild(secondTextLeftSection);
    leftSectionDiv.appendChild(imageLeftSection);
    imagesRightSectionDiv.appendChild(firstImageRightSection);
    imagesRightSectionDiv.appendChild(secondImageRightSection);
    imagesRightSectionDiv.appendChild(thirdImageRightSection);
    linkButtonRightSection.appendChild(buttonRightSection);
    rightSectionDiv.appendChild(firstTextRightSection);
    rightSectionDiv.appendChild(secondTextRightSection);
    rightSectionDiv.appendChild(imagesRightSectionDiv);
    rightSectionDiv.appendChild(thirdTextRightSection);
    rightSectionDiv.appendChild(linkButtonRightSection);
    fourthFrameDiv.appendChild(leftSectionDiv);
    fourthFrameDiv.appendChild(rightSectionDiv);
    main.appendChild(firstFrameDiv);
    main.appendChild(secondFrameDiv);
    main.appendChild(sliderDiv);
    main.appendChild(fourthFrameDiv);

    const myObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                firstServiceDiv.classList.add('show')
                secondServiceDiv.classList.add('show')
                thirdServiceDiv.classList.add('show')
                fourthServiceDiv.classList.add('show')
                fifthServiceDiv.classList.add('show')
            } else {
                firstServiceDiv.classList.remove('show')
                secondServiceDiv.classList.remove('show')
                thirdServiceDiv.classList.remove('show')
                fourthServiceDiv.classList.remove('show')
                fifthServiceDiv.classList.remove('show')
            }
        })
    });
    myObserver.observe(fourthServiceDiv);
    myObserver.observe(fifthServiceDiv);
}

function createFooter() {
    
    let footerAllContent = document.createElement("div");
    footerAllContent.className = "footer";
    let footerTop = document.createElement("div");
    footerTop.className = "footer_top";
    let footerContent = document.createElement("div");
    footerContent.className = "footer_content";
    let firstFooterColumnDiv = document.createElement("div");
    firstFooterColumnDiv.className = "footer_column_1";
    let imageFirstFooterColumn = document.createElement("img");
    imageFirstFooterColumn.src = "assets/images/logo-celebrate-now.png";
    let listFirstFooterColumn = document.createElement("ul");
    listFirstFooterColumn.className = "footer_social_medias";
    let firstItemListFooterFirstColumn = document.createElement("li");
    let secondItemListFooterFirstColumn = document.createElement("li");
    let firstLinkItemList = document.createElement("a");
    let secondLinkItemList = document.createElement("a");
    let firstIconBootstrap = document.createElement("i");
    firstIconBootstrap.className = "bi bi-youtube";
    let secondIconBootstrap = document.createElement("i");
    secondIconBootstrap.className = "bi bi-github";
    let secondFooterColumnDiv = document.createElement("div");
    secondFooterColumnDiv.className = "footer_column_2";
    let listFooterAbout = document.createElement("ul");
    listFooterAbout.className = "footer_about"
    let titleItemsListAbout = document.createElement("li");
    let titleListAbout = document.createElement("h4");
    titleListAbout.innerHTML = "Sobre";
    let firstItemListAbout = document.createElement("li");
    let firstLinkListAbout = document.createElement("a");
    firstLinkListAbout.innerHTML = "Quem somos nós";
    let secondItemListAbout = document.createElement("li");
    let secondLinkListAbout = document.createElement("a");
    secondLinkListAbout.innerHTML = "O que oferecemos";
    let thirdItemListAbout = document.createElement("li");
    let thirdLinkListAbout = document.createElement("a");
    thirdLinkListAbout.innerHTML = "Nosso diferencial";
    let listFooterContact = document.createElement("ul");
    listFooterContact.className = "footer_contact";
    let titleItemsListContact = document.createElement("li");
    let titleListContact = document.createElement("h4");
    titleListContact.innerHTML = "Links";
    let firstItemListContact = document.createElement("li");
    let firstLinkListContact = document.createElement("a");
    firstLinkListContact.innerHTML = "Home";
    let secondItemListContact = document.createElement("li");
    let secondLinkListContact = document.createElement("a");
    secondLinkListContact.innerHTML = "Repositório Github";
    let listFooterResources = document.createElement("ul");
    listFooterResources.className = "footer_resources";
    let titleItemsListResources = document.createElement("li");
    let titleListResources = document.createElement("h4");
    titleListResources.innerHTML = "Conta";
    let firstItemListResources = document.createElement("li");
    let firstLinkListResources = document.createElement("a");
    firstLinkListResources.innerHTML = "Crie a sua conta";
    let secondItemListResources = document.createElement("li");
    let secondLinkListResources = document.createElement("a");
    secondLinkListResources.innerHTML = "Faça login";
    let extraInformationsDiv = document.createElement("div");
    extraInformationsDiv.className = "footer_column_3";
    let extraInformationsTitle = document.createElement("h4");
    extraInformationsTitle.innerHTML = "Informações Adicionais";
    let ExtraInformationsText = document.createElement("p");
    ExtraInformationsText.innerHTML = "Desenhado e desenvolvido com todo o carinho do mundo pela equipe Celebrate Now, com a ajuda de nosso instrutor.";
    let footerBottomDiv = document.createElement("div");
    footerBottomDiv.className = "footer_bottom";
    let footerBottomContent = document.createElement("div");
    footerBottomContent.className = "footer_content";
    let textFooterBottomContent = document.createElement("p");
    textFooterBottomContent.innerHTML = "Celebrate Now - Todos os Direitos Reservados ";

    firstLinkItemList.appendChild(firstIconBootstrap);
    secondLinkItemList.appendChild(secondIconBootstrap);
    firstItemListFooterFirstColumn.appendChild(firstLinkItemList);
    secondItemListFooterFirstColumn.appendChild(secondLinkItemList);
    listFirstFooterColumn.appendChild(firstItemListFooterFirstColumn);
    listFirstFooterColumn.appendChild(secondItemListFooterFirstColumn);
    firstFooterColumnDiv.appendChild(imageFirstFooterColumn);
    firstFooterColumnDiv.appendChild(listFirstFooterColumn);
    footerContent.appendChild(firstFooterColumnDiv);
    titleItemsListAbout.appendChild(titleListAbout);
    firstItemListAbout.appendChild(firstLinkListAbout);
    secondItemListAbout.appendChild(secondLinkListAbout);
    thirdItemListAbout.appendChild(thirdLinkListAbout)
    listFooterAbout.appendChild(titleItemsListAbout);
    listFooterAbout.appendChild(firstItemListAbout);
    listFooterAbout.appendChild(thirdItemListAbout);
    secondFooterColumnDiv.appendChild(listFooterAbout)
    titleItemsListContact.appendChild(titleListContact);
    firstItemListContact.appendChild(firstLinkListContact);
    secondItemListContact.appendChild(secondLinkListContact);
    listFooterContact.appendChild(titleItemsListContact);
    listFooterContact.appendChild(firstItemListContact);
    listFooterContact.appendChild(secondItemListContact);
    secondFooterColumnDiv.appendChild(listFooterContact);
    titleItemsListResources.appendChild(titleListResources);
    firstItemListResources.appendChild(firstLinkListResources);
    secondItemListResources.appendChild(secondLinkListResources);
    listFooterResources.appendChild(titleItemsListResources);
    listFooterResources.appendChild(firstItemListResources);
    listFooterResources.appendChild(secondItemListResources);
    secondFooterColumnDiv.appendChild(listFooterResources);
    extraInformationsDiv.appendChild(extraInformationsTitle);
    extraInformationsDiv.appendChild(ExtraInformationsText);
    secondFooterColumnDiv.appendChild(extraInformationsDiv);
    footerContent.appendChild(secondFooterColumnDiv);
    footerTop.appendChild(footerContent);
    footerBottomContent.appendChild(textFooterBottomContent);
    footerBottomDiv.appendChild(footerBottomContent);
    footerAllContent.appendChild(footerTop);
    footerAllContent.appendChild(footerBottomDiv);
    footer.appendChild(footerAllContent);
}

window.onload = () => {
    createHeader();
    createMain();
    createFooter();
};