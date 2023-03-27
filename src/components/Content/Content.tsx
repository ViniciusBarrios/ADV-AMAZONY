import { Montserrat } from "@next/font/google";

import Comments from "./components/Comments";
import Header from "./components/Header";
import Picture from "./components/Picture";
import { Container, Wrapper, Text, Title } from "./styles";

const montserrat = Montserrat({ subsets: ["latin"] });

type ContentProps = {
  city: string;
};

export default ({ city }: ContentProps) => (
  <Container>
    <Header />

    <Wrapper>
      <Picture
        image="/assets/imgs/laboratório.jpg"
        description="Laboratório Europeu especializado em combate a rugas, no centro de pesquisas Amazony. (Foto: Reprodução/Murilo Serra G1)"
      />

      <Text css={{ marginTop: "30px" }} className={montserrat.className}>
        Estima-se que mais de 4 bilhões de pessoas em todo o mundo são afetadas
        por rugas e linhas de expressão, sendo que mais de 3 bilhões são
        mulheres. No Brasil, cerca de 70% das mulheres têm alguma queixa
        relacionada à pele, seja por conta das rugas ou por não conseguirem
        recuperar a aparência jovem e saudável da pele após os 30 anos. Além
        disso, muitas mulheres sofrem com problemas como manchas, celulite,
        foliculite e alergias cutâneas (bolinhas de alergia).
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Existem diversas opções de tratamentos no mercado brasileiro que
        prometem solucionar o problema de rugas e linhas de expressão, como
        aplicações de acupuntura facial, patches anti rugas, peeling químico,
        preenchimento e terapia celular. No entanto, muitos desses tratamentos
        não possuem comprovação científica suficiente para garantir sua
        eficácia, também é possível encontrar alguns suplementos, cápsulas e
        cremes não biodisponíveis (não são facilmente absorvidos e utilizados
        pelo corpo humano).
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Recentemente, um estudo internacional promissor se destacou no cenário
        de tratamento para a pele. Entretanto, até 2023, o tratamento ainda não
        havia sido disponibilizado ao público brasileiro.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Esse tratamento recém desenvolvido a base de Óleo de Rosa Mosqueta
        tradicionalmente conhecida por suas propriedades cicatrizantes,
        clareadoras e fitoterápicas extraída da semente da planta rosa canina
        vem apresentando resultados surpreendentes com base em testes
        laboratoriais, também testado em 340 pacientes durante 3 meses que se
        mostrou uma eficácia de 99% estimulando a criação de novas células do
        zero e rejuvenescendo a pele.
      </Text>

      <Picture
        image="/assets/imgs/before-after1.png"
        description="Tratamento com a Rosa Mosqueta, resultado após 3 meses de tratamento. (Foto: Reprodução Amazony/Murilo Serra G1)"
        marginTop="30px"
      />

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Estudos feitos em laboratórios Europeus, comprovam que o Tratamento com
        Rosa Mosqueta pode ser feito em qualquer época do ano, por não alterar a
        epiderme. “O efeito do tratamento é surpreendente. E, a partir de 90
        dias, consegue-se perceber o efeito da suavização das rugas e linhas de
        expressão.” - Diz especialista
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        A Rosa Mosqueta contém um poderoso componente capaz de inativar uma
        proteína que promove o envelhecimento que seria uma das responsáveis
        pelas rugas na pele, estimulando a produção de novas células do zero,
        deixando a pele jovem, uniforme e sem manchas. Comprovou-se que combate
        rugas sem nenhum efeito colateral. Com garantias e comprovações
        científicas, também tendo sua eficácia comprovada pela FDA (Ministério
        da Saúde Norte Americano) dez de 2019.
      </Text>

      <Picture
        image="/assets/imgs/fda.jpg"
        description="Centro de pesquisas do FDA, agência federal do departamento de saúde e serviços humanos dos Estados Unidos. (Foto: Reprodução/Murilo Serra G1)"
        marginTop="30px"
      />

      <Title css={{ marginTop: "30px" }} className={montserrat.className}>
        Sobre o Óleo da Rosa Mosqueta
      </Title>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        A Rosa Mosqueta, ajuda a manter a sustentação e a hidratação da pele,
        evitando a flacidez, as linhas e sinais de expressão, preenchendo e
        mantendo a pele hidratada, viva e revitalizada. Por ser um componente
        natural, essa substância é totalmente absorvida pelas camadas da pele.
      </Text>

      <Picture
        image="/assets/imgs/rosa-mosqueta.jpg"
        description="Óleo da Rosa Mosqueta. (Foto: Reprodução/Murilo Serra G1)"
        marginTop="30px"
      />

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        O Óleo extraído da fruta da Rosa Mosqueta inclui componentes vitais,
        como vitamina A, C, E, complexo B e minerais como ferro, cálcio,
        manganês, selênio, fósforo, magnésio, silício, enxofre e zinco. Além
        disso, contém compostos orgânicos como pectina, licopeno, beta-caroteno
        e luteína essenciais para o corpo.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        O Óleo da Rosa Mosqueta é usado para promover a saúde da pele. A
        vitamina C promove a produção de colágeno e reduz a aparência de linhas
        finas e rugas. A vitamina A aumenta o teor de umidade da pele.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        O Óleo também ajuda a neutralizar os danos UV causados ​​pelo sol. Os
        antioxidantes ajudam a promover o tom e a textura uniforme da pele e
        também tratam a pigmentação (manchas na pele). Este óleo possui ácidos
        graxos essenciais que previnem cicatrizes e promovem a regeneração da
        pele. O óleo de Rosa Mosqueta consegue regenerar novas células da pele e
        também é útil no tratamento de queimaduras, acne e cicatrizes. Ela
        reidrata a pele e mantém a umidade.
      </Text>

      <Title css={{ marginTop: "30px" }} className={montserrat.className}>
        Qual produto contém a Rosa Mosqueta?
      </Title>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Quando começamos a escrever sobre essa matéria procuramos empresas
        realmente sérias e com excelência de qualidade e manipulação do ativo do
        Óleo da Rosa Mosqueta, por ser um ativo difícil de ser manipulado e
        encontrado no Brasil, por ser necessário importá-lo da Europa ou
        investir em maquinários com tecnologia Europeia para a extração do Óleo
        da Rosa Mosqueta.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Fomos até a empresa chamada Amazony (Empresa Europeia), foi quem pediu a
        autorização da Agência Nacional de Vigilância Sanitária (Anvisa) para
        importação e comercialização do Óleo da Rosa Mosqueta no final de 2022,
        porém apenas em fevereiro de 2023 receberam a resposta de autorização de
        importação e comercialização, número de registro: 25351.105771/2023-38.
      </Text>

      <Picture
        image="/assets/imgs/consulta.png"
        description="Rosa Amazônica a base de Rosa Mosqueta consulta sobre registro 25351.105771/2023-38. (Dados: Laboratório Brasil LTDA/SP em parceria com Anvisa)"
        marginTop="30px"
      />

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Amazony é uma empresa que está no mercado de cosméticos da Europa há
        anos sendo referência para as mulheres que querem ter uma aparência mais
        jovem.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Em 26 de fevereiro de 2023 a Amazony criou no mercado brasileiro o
        primeiro sérum que contém como principal ativo a Rosa Mosqueta em sua
        composição, chamada Rosa Amazônica.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Segundo a médica da Amazony, o produto é direcionado ao público
        feminino. “Nós inclusive damos às mulheres uma garantia de 90 dias pela
        confiança que temos no produto Rosa Amazônica, resultado garantido ou
        dinheiro de volta.” - Afirma ela.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Quando perguntada sobre o uso do produto por homens, ela respondeu: “Não
        é que o produto não tenha eficácia em homens. Ele tem. Nós temos
        histórias de sucesso de homens que utilizaram. Quando lançamos a
        patente, nós fizemos testes em homens e mulheres. O resultado foi muito
        maior nas mulheres. Todavia, certamente o envelhecimento dos homens era
        algo genético, diferentemente das mulheres que era falta de vitaminas,
        que normalmente ocorre após os 30, 40 anos.”
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Segundo o fabricante, o produto já é conhecido por disponibilizar
        garantia de 90 dias na Europa e nos Estados Unidos. Com a chegada ao
        mercado brasileiro, o Brasil será incluído na lista de países
        beneficiados. Com isso, ao adquirir três potes ou mais, para iniciar o
        tratamento por 90 dias, o fabricante se propõe a reembolsar o cliente,
        caso não veja eficácia no combate a Rugas, Linhas de Expressão ou Bigode
        Chinês, num período de 90 dias desde o início do tratamento.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        “Assim nossos clientes têm risco zero, para conhecer e experimentar
        nosso produto. Essa é a prova máxima da confiança que temos em nossa
        fórmula exclusiva” - Afirma o fabricante.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Em entrevista com a Dra. Daphné Thioly-Bensoussan (Médica da Amazony)
        diz: “Estávamos em busca de novos mercados e percebemos que o Brasil é
        um dos únicos países em que os produtos para tratamento da pele são
        praticamente iguais, com a variações mínimas da mesma fórmula. Uma
        fórmula que não tem eficácia alguma.”
      </Text>

      <Picture
        image="/assets/imgs/médica.jpg"
        description="Médica Dermatologista Daphné Thioly-Bensoussan. (Foto: Anti Age Magazine)"
        marginTop="30px"
      />

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        “É até absurdo saber que a legislação no Brasil permite a
        comercialização de produtos sem que eles precisem comprovar a sua
        eficácia.” admite a médica. “Quando uma cliente procura por um produto,
        ela necessita ter garantias de que aquilo que ela investiu o seu
        dinheiro vai realmente funcionar, ainda mais quando se trata de uma
        parte do corpo importantíssima para sua autoestima, como seu rosto.” -
        ressalta
      </Text>

      <Title css={{ marginTop: "30px" }} className={montserrat.className}>
        Resultados Surpreendentes
      </Title>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Lúcia Hoffmann 56 anos, conta que foi chamada no início de novembro pela
        equipe Rosa Amazônica para fazer um teste sem custos por 150 dias. Ela
        relatou que o resultado foi muito maior do que poderia imaginar: “De uns
        anos pra cá o meu rosto começou a envelhecer muito. O maior impacto foi
        causado pelo stress excessivo por conta da pandemia, quando eu e minha
        família ficamos desempregados por um tempo. E eu já não sabia o que
        fazer, pois havia tentado todo tipo de tratamento e produto. Mas nada
        funcionava, até que minha história chamou atenção da equipe do Rosa
        Amazônica, e eu fui convidada para fazer um Desafio por 150 dias. E tudo
        mudou. Eu acho que o grande diferencial do Rosa Amazônica é a sua
        fórmula, eu pesquisei bastante e não encontrei nenhuma fórmula realmente
        eficaz nos produtos daqui.”
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Lúcia conseguiu acabar com as rugas e começou a aparentar 10 anos mais
        nova, e ainda brinca que suas amigas sempre perguntam o segredo do seu
        rosto, e Lúcia sempre fala. “Segredinho das blogueiras, e eu importei da
        Europa… Tava me sentindo feia com as rugas, tive que dar um jeito, eu
        gosto do meu rosto jovial, e em 5 meses ele rejuvenesceu 10 anos” Ela
        enfatiza: “É um produto com uma tecnologia fantástica. Nunca vai faltar
        na minha casa. Agora mais por precaução.”.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Ela não foi a única brasileira convidada para fazer testes com o produto
        antes do início das vendas no Brasil. No Site Oficial da Amazony existem
        imagens de outros 5 mulheres, de 33 até 68 anos, que mostram a
        transformação depois de um 3 a 5 meses de uso da Rosa Amazônica.
      </Text>

      <Picture
        image="/assets/imgs/before-after2.png"
        description="Lúcia Hoffmann 56 anos de Cascavel (PR), depois de 3 meses de tratamento. (Foto: Facebook)"
        marginTop="30px"
      />

      <Title css={{ marginTop: "30px" }} className={montserrat.className}>
        Fórmula Rosa Amazônica e seus benefícios
      </Title>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        A Fórmula Rosa Amazônica contém 8 poderosos ingredientes para a pele, o
        ingrediente base da fórmula Rosa Amazônica é a Rosa Mosqueta.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        <strong>Rosa Mosqueta:</strong> Como já falamos todos os benefícios da
        Rosa Mosqueta para pele.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        <strong>Ácido Hialurônico:</strong> O Ácido Hialurônico é uma substância
        natural produzida pelo nosso corpo, famoso por manter a hidratação e
        firmeza da pele. Mas, à medida que envelhecemos, essa produção diminui,
        reduzindo também a hidratação e elasticidade da pele.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        <strong>Colágeno Verisol:</strong> O colágeno é muito importante para
        manter as células firmes e unidas, sendo não só importante para a pele,
        mas também para outros tecidos; como para a integridade dos músculos,
        dos ligamentos, dos tendões e das articulações. Além disso hidrata o
        cabelo e estimula o crescimento de novos fios.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        <strong>Queratina Hidrolisada:</strong> Fortalece e regenera a pele, e
        restaura o brilho, conferindo uma pele mais lisa e limpa.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        <strong>Biotina:</strong> Combate as rugas e fortalece a pele. Além
        disso, também atua nas marcas de expressão, cabelo e unhas,
        fortalecendo-as.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        <strong>Retinol:</strong> Estimula a renovação celular e a síntese de
        colágeno no rosto.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        <strong>Metilsulfonilmetano:</strong> Favorece a nutrição da pele e atua
        combatendo as rugas.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        <strong>Niacina:</strong> Nutre as camadas de proteção da pele (derme e
        epiderme) e previne as rugas e marcas de expressão.
      </Text>

      <Title css={{ marginTop: "30px" }} className={montserrat.className}>
        Existem contraindicações ou efeitos colaterais?
      </Title>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Segundo o fabricante, o sérum Rosa Amazônica é um produto que passou
        pelos mais rigorosos testes de qualidade e não apresenta contraindicação
        ou efeito colateral. Isso significa que mesmo pessoas portadoras de
        doenças crônicas podem usar o produto. Mas é aconselhável a grávidas e
        mulheres amamentando que consultem o médico antes do início do
        tratamento.
      </Text>

      <Title css={{ marginTop: "30px" }} className={montserrat.className}>
        Qual a forma correta de uso?
      </Title>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Para resultados satisfatórios, é recomendado aplicar 3 gotas do produto
        1x ao dia na pele do rosto após sair do banho, ou antes de dormir. Cada
        dose tem quantidade suficiente para garantir um intenso efeito do
        produto nas camadas da pele por 18 até 24 horas.
      </Text>

      <Title css={{ marginTop: "30px" }} className={montserrat.className}>
        Onde comprar?
      </Title>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        No Brasil, assim como na Europa e Estados Unidos pós-pandemia, o Rosa
        Amazônica trabalhará apenas com o sistema de vendas online, onde o
        cliente poderá adquirir pelo site oficial e receber no conforto da sua
        casa. <strong>CUIDADO:</strong> A marca Amazony não vende pelo Mercado
        Livre, OLX, ou outros sites. Certifique-se estar comprando o produto
        ORIGINAL, por isso, sempre adquira do{" "}
        <a href={process.env.NEXT_PUBLIC_SALE_PAGE_URL}>Site Oficial.</a>
      </Text>

      <Title css={{ marginTop: "30px" }} className={montserrat.className}>
        Oportunidade Especial Para Nossos Leitores
      </Title>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        Durante a produção dessa reportagem, o fabricante entrou em contato com
        nossa produção e ofereceu um desconto especial de até 70% e a condição
        de parcelamento em até 12x no cartão de crédito para nossos leitores
        interessados em experimentar o Rosa Amazônica.
      </Text>

      <Text css={{ marginTop: "20px" }} className={montserrat.className}>
        <strong>Atenção:</strong> O desconto é válido apenas enquanto durarem os
        estoques, sendo aplicado automaticamente ao clicar na imagem abaixo.
      </Text>

      <a href={process.env.NEXT_PUBLIC_SALE_PAGE_URL}>
        <Picture
          image="/assets/imgs/produto.png"
          marginTop="30px"
          description="Últimas 14 unidades com desconto de até 70% e a condição de parcelamento em até 12x no cartão de crédito"
        />
      </a>
    </Wrapper>

    <Comments />
  </Container>
);
