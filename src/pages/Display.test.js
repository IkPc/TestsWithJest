import { ThemeProvider } from "../components/ThemeContext"
import { render, screen, fireEvent } from "@testing-library/react"
import Display from "./Display.jsx"

//teste display
test('exibe o tema inicial corretamente', () => {
    render(
        <ThemeProvider>
            <Display/>
        </ThemeProvider>
    );

    //default
    expect(screen.getByText(/tema atual: dark/i)).toBeInTheDocument();
});

//teste click
test('alterna o tema ao clicar no botão', () => {
    render(
        <ThemeProvider>
            <Display/>
        </ThemeProvider>
    );
    //tema default dark
    expect(screen.getByText(/tema atual: dark/i)).toBeInTheDocument();

    //simular click para alterar para light
    fireEvent.click(screen.getByTitle(/alternar tema/i));
    expect(screen.getByText(/tema atual: light/i)).toBeInTheDocument();

    //simular click para alterar para dark
    fireEvent.click(screen.getByTitle(/alternar tema/i));
    expect(screen.getByText(/tema atual: dark/i)).toBeInTheDocument();
});