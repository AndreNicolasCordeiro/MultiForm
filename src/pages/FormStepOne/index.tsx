import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../context/FormContext';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';

export const FormStepOne = () => {
    const Navigate = useNavigate();
    const { state, dispatch } = useForm();


    useEffect(() =>{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);

    const handleNextStep = () => {
        if(state.name !== ''){
            Navigate('/steptwo');
        }else{
            alert('Digite o seu nome!');
        }
       
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }

    return (
        <C.Container>
            <Theme>
                <C.Container>
                    <p>Passo 1/3</p>
                    <h1>Vamos começar com o seu nome</h1>
                    <p>preencha o campo abaixo com o seu nome completo</p>

                    <hr></hr>

                    <label>
                        Seu nome completo
                        <input 
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                        />
                    </label>

                    <button onClick={handleNextStep}>Próximo</button>
                </C.Container>
            </Theme>
        </C.Container>
    );
}