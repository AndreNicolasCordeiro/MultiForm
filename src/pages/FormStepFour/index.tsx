import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../context/FormContext';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';
import { FinalItemsComponents } from '../../components/FinalItemsComponents';

export const FormStepFour = () => {
    const Navigate = useNavigate();
    const { state, dispatch } = useForm();


    useEffect(() =>{
        if(state.name === '') {
            Navigate('/');
        }else{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 4
        });
    }
    }, []);

    const handlePrevStep = () => {
            Navigate('/stepthree');
       
    }

    return (
        <C.Container>
            <Theme>
                <C.Container>
                    <p>Finalização</p>
                    <h1>Obrigado {state.name}, Cadastro realizado com sucesso!</h1>
                    <p>Verifique periodicamente a sua caixa de email e spam que iremos entrar em contato assim que possivel.</p>

                    <hr></hr>
                    <FinalItemsComponents
                        currentStep={state.currentStep}
                        name={state.name}
                        level={state.level}
                        email={state.email}
                        github={state.github}
                        />
                        

                    <button onClick={handlePrevStep}>Anterior</button>
                </C.Container>
            </Theme>
        </C.Container>
    );
}