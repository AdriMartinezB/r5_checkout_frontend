import React from 'react';
import '../assets/styles/components/pasoapaso.scss';

class Pasoapaso extends React.Component {
  render() {

    {
      /*const form = document.querySelector('.form-register');
    const progressOptions = document.querySelectorAll('.progressbar__option');

    form.addEventListener('click', (e) => {
      const element = e.target;
      const isButtonNext = element.classList.contains('step__button--next');
      if (isButtonNext) {
        const currentStep = document.getElementById(`step-${element.dataset.step}`);
        const jumpStep = document.getElementById(`step-${element.dataset.to_step}`);
        currentStep.addEventListener('animationend', function callback() {
          currentStep.classList.remove('active');
          jumpStep.classList.add('active');
          if (isButtonNext) {
            currentStep.classList.add('to-left');
            progressOptions[element.dataset.to_step - 1].classList.add('active');
          } else {
            jumpStep.classList.remove('to-left');
            progressOptions[element.dataset.step - 1].classList.remove('active');
          }
          currentStep.removeEventListener('animationend', callback);
        });
        currentStep.classList.add('inactive');
        jumpStep.classList.remove('inactive');
      }
    });*/
    }

    return (
      <div className='root'>
        <form action='' className='form-register'>
          <div className='form-register__header'>
            <ul className='progressbar'>
              <li className='progressbar__option active'>Cesta</li>
              <li className='progressbar__option'>Pago</li>
              <li className='progressbar__option'>Listo</li>
            </ul>
          </div>
          <div className='form-register__body'>
            <div className='step active' id='step-1'>
              <div className='step__body'>
                <p>componente cesta</p>
              </div>
              <div className='step__footer'>
                <button type='button' className='step__button step__button--next' data-to_step='2' data-step='1'>Comprar</button>
              </div>
            </div>
            <div className='step' id='step-2'>
              <div className='step__body'>
                <p>componente pago</p>
              </div>
              <div className='step__footer'>
                <button type='button' className='step__button step__button--next' data-to_step='3' data-step='2'>Pagar</button>
              </div>
            </div>
            <div className='step' id='step-3'>
              <div className='step__body'>
                <p>componente listo</p>
              </div>
              <div className='step__footer'>
                <button type='submit' className='step__button'>volver al inicio</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  };
};

export default Pasoapaso;
