import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../context/FormContext';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';

export const FormStepThree = () => {
    const Navigate = useNavigate();
    const { state, dispatch } = useForm();


    useEffect(() =>{
        if(state.name === '') {
            Navigate('/');
        }else{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        });
    }
    }, []);

    const handlePrevStep = () => {
            Navigate('/steptwo');
       
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }
    const handleGitHubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGitHub,
            payload: e.target.value
        });
    }

    const handleNextStep = () => {
        if(state.email !== '' && state.github !== '') {
            //console.log(state);
            Navigate('/stepfour');
        }else{
            alert('Preencha os seus dados!');
        }
        
    }

    return (
        <C.Container>
            <Theme>
                <C.Container>
                    <p>Passo 3/3</p>
                    <h1>Legal {state.name}, onde poderemos te encontrar?</h1>
                    <p>preencha os campos abaixos com os seus dados</p>

                    <hr></hr>

                    <label>
                        Qual o seu E-mail?
                        <input 
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                        />
                    </label>

                    <label>
                        Qual o seu GitHub?
                        <input 
                        type="url"
                        value={state.github}
                        onChange={handleGitHubChange}
                        />
                    </label>

                    <button onClick={handlePrevStep}>Anterior</button>
                    <button onClick={handleNextStep}>Finalizar Cadastro!</button>
                </C.Container>
            </Theme>
        </C.Container>
    );
}