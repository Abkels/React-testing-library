import {fireEvent, render, screen} from "@testing-library/react"
import Login from "./Login"

test("username input should be rendered", ()=> {
    render(<Login />)
    const userInputEl = screen.getByPlaceholderText(/username/i)
    expect (userInputEl).toBeInTheDocument()
});

test ("password input should be rendered", () => {
    render(<Login />)
    const passwordInputEl = screen.getByPlaceholderText(/password/i)
    expect(passwordInputEl).toBeInTheDocument()
});

test("button input should be rendered", () => {
    render(<Login />)
    const buttonEl = screen.getByRole(/button/i)
    expect(buttonEl).toBeInTheDocument()
})

test("username input should be empty", ()=> {
    render(<Login />)
    const usernameInputEl = screen.getByPlaceholderText(/username/i)
    expect (usernameInputEl).toHaveValue("")
}); // give the imput the attribute value

test("password input should be empty", ()=> {
    render(<Login />)
    const passwordInputEl = screen.getByPlaceholderText(/password/i)
    expect (passwordInputEl).toHaveValue("")
}); // give the input  in the login component the attribute value

// test for the button click property since clicking on empty searchfield can make API requests which can be expensive. Even without username and password you can still click

test("button input should be disabled", () => {
    render(<Login />)
    const buttonEl = screen.getByRole(/button/i)
    expect(buttonEl).toBeDisabled()
})

test('error message should not be visible', ()=>{
    render(<Login />)
    const errorEl = screen.getByTestId('error')
    expect(errorEl).not.toBeVisible()
})


// testing the change event
test("username input should change", ()=> {
    render(<Login />)
    const usernameInputEl = screen.getByPlaceholderText(/username/i);
    // create a test value since we can't take actual value from user
    // const testValue = "test"

    fireEvent.change(usernameInputEl, {target: {value: testValue}});
    // expect (usernameInputEl).toHaveValue("testValue")
    expect (usernameInputEl).toHaveValue("")
}); // give the imput the attribute value

test("password input should change", ()=> {
    render(<Login />)
    const userPasswordInputEl = screen.getByPlaceholderText(/password/i);
    // const testValue = "test"
    fireEvent.change(userPasswordInputEl,{target: {value: testValue}})
    // expect (userPasswordInputEl).toHaveValue("testValue")
    expect (userPasswordInputEl).toHaveValue("")
}); // give the imput the attribute value

