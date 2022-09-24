import {  ReactNode } from 'react';
import * as C from './styles';
import { Header } from '../Header';
import { SidebarItem } from '../SideBarItem';
import { useForm } from '../../context/FormContext';

type Props = {
    children : ReactNode
}

export const Theme = ({children}: Props) => {
    const { state } = useForm();
    return (
        <C.Container>
            <C.Area>
                <Header />

                <C.Steps>
                    <C.Sidebar>
                        <SidebarItem
                        title="Pessoal"
                        description="Se identifique"
                        icon="profile"
                        path="/"
                        active={state.currentStep === 1}
                        />

                        <SidebarItem
                        title="Profissional"
                        description="Seu nível"
                        icon="book"
                        path="/steptwo" 
                        active={state.currentStep === 2}
                        />

                        <SidebarItem
                        title="Contatos"
                        description="Como te encontrar"
                        icon="mail"
                        path="/stepthree" 
                        active={state.currentStep === 3}
                        />

                        <SidebarItem
                        title="Finalização"
                        description="Resultado dos seus dados"
                        icon="mail"
                        path="/stepfour" 
                        active={state.currentStep === 4}
                        />
                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    );
}