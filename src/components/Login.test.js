import {render, screen} from "@testing-library/react"
import Login from "./Login"

test("username input should be rendered", ()=> {
    render(<Login />)
    const userInputEl = screen.getByPlaceholderText(/username/i)
    expect (userInputEl).toBeInTheDocument()
});

test ("password input should be rendered", () => {
    render(<Login />)
    const passwordInputEl = screen.getByPlaceholder(/password/i)
    expect(passwordInputEl).toBeInTheDocument()
})

test("button input should be rendered", () => {
    render(<Login />)
    const buttonEl = screen.getByRole(/button/i)
    expect(buttonEl).toBeInTheDocument()
})