// faq.js

import FAQScreen from "../src/screens/FAQScreen";


export default FAQScreen; 

export async function getStaticProps() {
    console.log('Em modo DEV, sempre roda! A cada acesso')
    console.log('Roda SOMENTE em build time')
    const FAQ_API_URL = 'https://gist.githubusercontent.com/NervyShield/77a1724c16287ef90daaa37b4a990cd3/raw/794ca7f2737f2fd1fc0aadc5f550bc3e6538b0f6/db.json';
    const faq = await fetch(FAQ_API_URL)
        .then((respostaDoServidor) => {
            return respostaDoServidor.json();
        })
        .then((resposta) => {
            return resposta;
        });

    return {
      props: {
          qualquercoisa: 'que eu passar aqui',
          faq,
      },
    };
}  