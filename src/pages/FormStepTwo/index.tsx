import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../context/FormContext';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

export const FormStepTwo = () => {
    const Navigate = useNavigate();
    const { state, dispatch } = useForm();


    useEffect(() =>{
        if(state.name === '') {
            Navigate('/');
        }else{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        });
    }
    }, []);

    const handleNextStep = () => {
        if(state.name !== ''){
            Navigate('/stepthree');
        }else{
            alert('Digite o seu nome!');
        }
    }

    const handlePrevStep = () => {
        Navigate('/');
    }


    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }
    return (
        <C.Container>
            <Theme>
                <C.Container>
                    <p>Passo 2/3</p>
                    <h1>{state.name}, Infome qual é o seu nível em programação</h1>
                    <p>Escolha a opção com o seu nível em programação</p>

                    <hr></hr>
                    
                    <SelectOption
                        title="Sou Iniciante"
                        description="Comecei a estudar programação há menos de 2 anos"
                        icon="🥳"
                        selected={state.level === 0}
                        onClick={()=>setLevel(0)}
                    />
                    <SelectOption
                        title="Sou Programador"
                        description="Já estudo programação há mais de 2 anos"
                        icon="🧑‍💻"
                        selected={state.level === 1}
                        onClick={()=>setLevel(1)}
                    />
                    
                    <button onClick={handlePrevStep}>Anterior</button>
                    <button onClick={handleNextStep}>Próximo</button>
                    
                </C.Container>
            </Theme>
        </C.Container>
    );
}