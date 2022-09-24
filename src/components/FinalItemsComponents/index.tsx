import * as C from './styles';

type Props = {
    currentStep : number;
    name : string;
    level : 0 | 1;
    email : string;
    github : string;
}

export const FinalItemsComponents = ({currentStep, name, level, email, github}: Props) => {
    return (
        <C.Container>
            <C.Items><p>Nome:</p> {name}</C.Items>
            <C.Items><p>Nível:</p> {level === 1 ? 'Sou Programador' : 'Sou Iniciante'}</C.Items>
            <C.Items><p>Email:</p> {email}</C.Items>
            <C.Items><p>GitHub:</p> {github}</C.Items>
            
            
            
            
        </C.Container>
    );
}