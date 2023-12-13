/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})
document.addEventListener("DOMContentLoaded", function() {

    //INICIO - PRIMEIRA QUESTÃO
    var q1_sim = document.getElementById('q1_sim');
    var q1_nao = document.getElementById('q1_nao');
    var feedback_1 = document.getElementById('feedback_1');
  
    //Se for selecionado sim
    q1_sim.addEventListener('change', function() {
      //Verifica se a opção sim foi selecionada e personaliza o botão e texto em verde
      if (q1_sim.checked) 
        {
        // Mostra o feedback
        feedback_1.style.display = 'block';
        var texto = document.createTextNode('Julgar alguém injustamente por coisas como sua aparência ou crenças.');
        var texto_verde = document.createElement('span');
        texto_verde.style.color = 'green';
        texto_verde.appendChild(texto);
        feedback_1.innerHTML = '';
        feedback_1.appendChild(texto_verde);

        //Mostra a próxima questão
        var questao_2 = document.getElementById('questao_2');
        questao_2.style.display = '';
        } 
      else 
       {
        feedback_1.style.display = 'none';        
       }
    });

    //Se for selecionado não personaliza o botão e texto em vermelho
    q1_nao.addEventListener('change', function() {
    if (q1_nao.checked) 
        {
        feedback_1.style.display = 'block';
        var texto = document.createTextNode('O preconceito é quando alguém julga ou trata outra pessoa de maneira injusta apenas por causa de coisas como a cor da pele, religião, gênero, ou qualquer outra característica pessoal.');
        var texto_vermelho = document.createElement('span');
        texto_vermelho.style.color = 'red';
        texto_vermelho.appendChild(texto);
        feedback_1.innerHTML = '';
        feedback_1.appendChild(texto_vermelho);

        questao_2.style.display = 'none';
        } 
    else 
        {
        feedback_1.style.display = 'none';
        }
    });
    // FIM - PRIMEIRA QUESTÃO


    //INICIO - SEGUNDA QUESTÃO
    var q2_sim = document.getElementById('q2_sim');
    var q2_nao = document.getElementById('q2_nao');
    var feedback_2 = document.getElementById('feedback_2');
  
    //Se for selecionado sim
    q2_sim.addEventListener('change', function() {
      //Verifica se a opção sim foi selecionada e personaliza o botão e texto em verde
      if (q2_sim.checked) 
        {
        //Mostra o feedback
        feedback_2.style.display = 'block';
        var texto = document.createTextNode('Preconceito baseado na cor da pele.');
        var texto_verde = document.createElement('span');
        texto_verde.style.color = 'green';
        texto_verde.appendChild(texto);
        feedback_2.innerHTML = '';
        feedback_2.appendChild(texto_verde);

        //Mostra a proxima questão
        var questao_3 = document.getElementById('questao_3');
        questao_3.style.display = '';
        } 
      else 
       {
        feedback_1.style.display = 'none';        
       }
    });

    //Se for selecionado não personaliza o botão e texto em vermelho
    q2_nao.addEventListener('change', function() {
    if (q2_nao.checked) 
        {
        feedback_2.style.display = 'block';
        var texto = document.createTextNode('O racismo é um tipo de preconceito que acontece quando alguém é tratado de forma injusta por causa da sua raça ou cor da pele.');
        var texto_vermelho = document.createElement('span');
        texto_vermelho.style.color = 'red';
        texto_vermelho.appendChild(texto);
        feedback_2.innerHTML = '';
        feedback_2.appendChild(texto_vermelho);

        questao_3.style.display = 'none';
        } 
    else 
        {
        feedback_2.style.display = 'none';
        }
    });
    //FIM - SEGUNDA QUESTÃO

    
      //INICIO - TERCEIRA QUESTÃO
    var q3_sim = document.getElementById('q3_sim');
    var q3_nao = document.getElementById('q3_nao');
    var feedback_3 = document.getElementById('feedback_3');
  
    //Se for selecionado sim
    q3_sim.addEventListener('change', function() {
      //Verifica se a opção sim foi selecionada e personaliza o botão e texto em verde
      if (q3_sim.checked) 
        {
        // Mostra o feedback
        feedback_3.style.display = 'block';
        var texto = document.createTextNode('Tratar alguém de forma injusta por quem são.');
        var texto_verde = document.createElement('span');
        texto_verde.style.color = 'green';
        texto_verde.appendChild(texto);
        feedback_3.innerHTML = '';
        feedback_3.appendChild(texto_verde);

        //Mostra a próxima questão
        var questao_4 = document.getElementById('questao_4');
        questao_4.style.display = '';
        } 
      else 
       {
        feedback_3.style.display = 'none';        
       }
    });

    //Se for selecionado não personaliza o botão e texto em vermelho
    q3_nao.addEventListener('change', function() {
    if (q3_nao.checked) 
        {
        feedback_3.style.display = 'block';
        var texto = document.createTextNode('A discriminação ocorre quando alguém é tratado de maneira injusta ou desigual por causa de características pessoais, como raça, gênero, ou religião.');
        var texto_vermelho = document.createElement('span');
        texto_vermelho.style.color = 'red';
        texto_vermelho.appendChild(texto);
        feedback_3.innerHTML = '';
        feedback_3.appendChild(texto_vermelho);

        questao_4.style.display = 'none';
        } 
    else 
        {
        feedback_3.style.display = 'none';
        }
    });
    // FIM - TERCEIRA QUESTÃO

          //INICIO - QUARTA QUESTÃO
          var q4_sim = document.getElementById('q4_sim');
          var q4_nao = document.getElementById('q4_nao');
          var feedback_4 = document.getElementById('feedback_4');
        
          //Se for selecionado sim
          q4_sim.addEventListener('change', function() {
            //Verifica se a opção sim foi selecionada e personaliza o botão e texto em verde
            if (q4_sim.checked) 
              {
              // Mostra o feedback
              feedback_4.style.display = 'block';
              var texto = document.createTextNode('Alguns dirão: tenho até amigos negros. Outras falarão: convivo com gays, eles são muito divertidos. Um terceiro: meu avô fala demais, mas adoro os velhinhos. E todos juram que não são preconceituosos. A estrutura social do mundo é preconceituosa.');
              var texto_verde = document.createElement('span');
              texto_verde.style.color = 'green';
              texto_verde.appendChild(texto);
              feedback_4.innerHTML = '';
              feedback_4.appendChild(texto_verde);
      
              //Mostra a próxima questão
              var questao_5 = document.getElementById('questao_5');
              questao_5.style.display = '';
              } 
            else 
             {
              feedback_4.style.display = 'none';        
             }
          });
      
          //Se for selecionado não personaliza o botão e texto em vermelho
          q4_nao.addEventListener('change', function() {
          if (q4_nao.checked) 
              {
              feedback_4.style.display = 'block';
              var texto = document.createTextNode('As pessoas nascem com preconceito ou se tornam preconceituosas? As pessoas não nascem preconceituosas. Os preconceitos não são naturais. Os preconceitos são culturais. As pessoas se tornam preconceituosas.');
              var texto_vermelho = document.createElement('span');
              texto_vermelho.style.color = 'red';
              texto_vermelho.appendChild(texto);
              feedback_4.innerHTML = '';
              feedback_4.appendChild(texto_vermelho);
      
              questao_5.style.display = 'none';
              } 
          else 
              {
              feedback_4.style.display = 'none';
              }
          });
          // FIM - QUARTA QUESTÃO

                  //INICIO - QUINTA QUESTÃO
                  var q5_sim = document.getElementById('q5_sim');
                  var q5_nao = document.getElementById('q5_nao');
                  var feedback_5 = document.getElementById('feedback_5');
                
                  //Se for selecionado sim
                  q5_sim.addEventListener('change', function() {
                    //Verifica se a opção sim foi selecionada e personaliza o botão e texto em verde
                    if (q5_sim.checked) 
                      {
                      // Mostra o feedback
                      feedback_5.style.display = 'block';
                      var texto = document.createTextNode('O termo preconceito designa uma atitude prévia que assumimos diante de uma pessoa (ou de um grupo social), antes de interagirmos com ela ou de conhecê-la, uma atitude que, embora individual, reflete as ideias que circulam na sociedade e na cultura em que vivemos.');
                      var texto_verde = document.createElement('span');
                      texto_verde.style.color = 'green';
                      texto_verde.appendChild(texto);
                      feedback_5.innerHTML = '';
                      feedback_5.appendChild(texto_verde);
              
                      //Mostra a próxima questão
                      var questao_6 = document.getElementById('questao_6');
                      questao_6.style.display = '';
                      } 
                    else 
                     {
                      feedback_5.style.display = 'none';        
                     }
                  });
              
                  //Se for selecionado não personaliza o botão e texto em vermelho
                  q5_nao.addEventListener('change', function() {
                  if (q5_nao.checked) 
                      {
                      feedback_5.style.display = 'block';
                      var texto = document.createTextNode('Você poderá aprender agora! Preconceito é um conceito formado antes de conhecer. Nas relações sociais, ele pode levar à discriminação e causar efeitos devastadores do ponto de vista social.');
                      var texto_vermelho = document.createElement('span');
                      texto_vermelho.style.color = 'red';
                      texto_vermelho.appendChild(texto);
                      feedback_5.innerHTML = '';
                      feedback_5.appendChild(texto_vermelho);
              
                      questao_6.style.display = 'none';
                      } 
                  else 
                      {
                      feedback_5.style.display = 'none';
                      }
                  });
                  // FIM - QUINTA QUESTÃO
  });
  