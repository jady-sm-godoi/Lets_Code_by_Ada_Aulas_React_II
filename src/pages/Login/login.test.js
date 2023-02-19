import { fireEvent, render, screen } from "@testing-library/react";
import { Login } from "./login";

describe("Página de Login", () => {
  it("should rende a logo in svg", () => {
    render(<Login />);
    // screen.debug();
  });
  it("should rende an input with placeholder: usuário", () => {
    render(<Login />);
    const inputUsuario = screen.getByPlaceholderText("usuário");

    expect(inputUsuario).toBeTruthy();
    fireEvent.change(inputUsuario, { target: { value: "jadygodoi" } });
    screen.debug();
  });
  it("should rende an input with placeholder: Senha", () => {
    render(<Login />);
    const inputPassword = screen.getByPlaceholderText("Senha");
    expect(inputPassword).toBeTruthy();
  });
  it("should render a ticket, without crashing", () => {
    render(<Login />);
    expect(screen.getByText("Salvar informações de login")).toBeTruthy();
  });
  it("should render a button to login, without crashing", () => {
    render(<Login />);
    const buttonSubmit = screen.getByText("Entrar");

    expect(buttonSubmit).toBeTruthy();

    fireEvent.click(buttonSubmit);
    expect(screen.queryByText("usuário não encontrado!")).toBeTruthy();
  });
  it("should render a link, without crashing", () => {
    render(<Login />);
    expect(screen.getByText("Não está cadastrado?")).toBeTruthy();
  });
});
